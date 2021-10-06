function getData(e) {
    let searchRes = document.getElementById('searchResults'); // we grab the section id.
    let match = e.value.match(/^[a-zA-Z ]*/); // regex to match all lowercase and uppercase letters and spaces.
    let match2 = e.value.match(/\s*/); // regex to only match the spaces from the input.
    if (match2[0] === e.value) { // if input value consists entirely of spaces, set the section content to empty.
        searchRes.innerHTML = '';
        return;
    }
    if (match[0] === e.value) { // if the input value totally matches the return of regex, only then we execute the fetch.
        fetch('/fruitSearch', { // post request to /fruitSearch route.
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fruitExample: e.value // what we pass in the request body is fruitExample with the value of the input.
                })
            })
            .then(res => res.json())
            .then(data => {
                let result = data.foundValues;
                searchRes.innerHTML = ''; // Each request we set the results to empty first..
                if (result.length < 1) {
                    searchRes.innerHTML = '<p>No results found!</p>'; // If we receive empty array from the server, we send this message.
                    return;
                }
                result.forEach((el, index) => {
                    if (index > 0) {
                        searchRes.innerHTML += '<hr>' // If there is more than 1 element in returned array, only then we add horizontal rules.
                    }
                    searchRes.innerHTML += `<p>${el.name}</p>` // We keep concatenating new paragraphs to the section.
                })
            });

        return;
    }
    searchRes.innerHTML = ''; // In case we put some numbers or other characters, we reset the section to empty.
}
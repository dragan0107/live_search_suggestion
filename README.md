# live_search_suggestion
Live database search functionality. Built with Node.JS (express.js) and MongoDB (mongoose).
This is one of the more important functionalities on any website or web app.

The way it basically works is that on every key release, we send a fetch post request, to the '/fruitSearch' route, and send the values back.
We use regex to make sure only a desired query value will be sent, and queried in the database.

Screenshots:

![Screenshot_5](https://user-images.githubusercontent.com/73792907/136117033-4f7f63e2-1f16-4647-9846-0c9f29edd98b.png)
![Screenshot_6](https://user-images.githubusercontent.com/73792907/136117034-7e3eebac-2462-4cbb-91ac-d5e0152db50e.png)
![Screenshot_7](https://user-images.githubusercontent.com/73792907/136117035-916d28ae-0557-4d9e-bae3-986fe50353ba.png)


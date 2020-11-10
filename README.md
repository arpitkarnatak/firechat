## Firechat
A react and firebase chat application. I have used firebase for storing the messages. The messages are given their respective style of either sent or received messages, which is determined by the initial prompt for username. 

Try out the app here 
https://firechat-34c5e.web.app/

## Use the App (and build your own chat rooms)

1. Clone the repository.
2. Create a firebase app from firebase website. Enable firebase hosting and firestore.
3. In firestore, create a new collection with the name "Messages". In that collection, create a document with 2 fields, "Message" and "Name"
4. Copy your firebase configuration and paste it in firebase.js file.
5. Fire up the live server and see the application in action.

## For Deployment

I'm presuming you've already created a firebase project and app, and are done with the development part. In that case, follow the steps below:

1. Install firebase and firebase dev tools. Use 'npm install firebase' and 'npm install -g firebase-tools'
2. Go to terminal, 'firebase init' and select Firebase Hosting.
3. Use build folder as public directory when prompted.
4. Create a build folder with 'npm run build'
5. Now your app is ready to be deployed. Use 'firebase deploy' and your app is online.

## SNAPSHOTS

![](https://github.com/arpitkarnatak/firechat/blob/main/st1.PNG)
![](https://github.com/arpitkarnatak/firechat/blob/main/st3.PNG)

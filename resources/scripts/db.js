const firebaseConfig = {
  apiKey: "AIzaSyAvdjLOQS1CM6RI9YhMrgKIZRFn6ydm9lQ",
  authDomain: "wb-chatroom.firebaseapp.com",
  databaseURL: "http:://wb-chatroom.firebaseio.com",
  projectId: "wb-chatroom",
  storageBucket: "wb-chatroom.appspot.com",
  messagingSenderId: "884223301447",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

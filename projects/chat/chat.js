// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyN7LIqoSLW5M1f_K9vQlFuSilp2CfpYk",
  authDomain: "chat-room-15f2d.firebaseapp.com",
  databaseURL: "https://chat-room-15f2d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-room-15f2d",
  storageBucket: "chat-room-15f2d.appspot.com",
  messagingSenderId: "1098368563630",
  appId: "1:1098368563630:web:f4d3c8195ab3508dbbf03f"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

var sendBtn = document.querySelector('button');

var nameText = sessionStorage.getItem("userName");

var msgText = document.querySelector('input');
var chatRoom = document.getElementById('chat-room');

sendBtn.onclick = sendAct;

// Get data from firebase when starting page
firebase.database().ref('chat').child('message').on('child_added',function (snapshot) {
    // console.log(snapshot.val());
    var nameVal = snapshot.val().name;
    var msgVal = snapshot.val().msg;
    var timeVal = snapshot.val().time;

    var chatBox = document.createElement('div');
    var chatName = document.createElement('h4');
    var chatMsg = document.createElement('p');
    var chatDate = document.createElement('p');

    chatName.innerHTML = nameVal;
    chatMsg.innerHTML = msgVal;
    chatDate.innerHTML = timeVal;

    chatName.classList.add('chat-name');
    chatDate.classList.add('chat-date');

    chatBox.append(chatName);
    chatBox.append(chatMsg);
    chatBox.append(chatDate);

    if (nameVal == nameText) {
        chatBox.style.alignSelf = 'flex-end';
        chatBox.style.backgroundColor = 'yellow';
    }

    chatBox.setAttribute("id","chat-box");

    chatRoom.append(chatBox);
    chatRoom.scrollTo(0,chatRoom.scrollHeight);

})

function sendAct () {
    //Push data and store in database

    if (msgText.value) {

        var now = new Date();

        var timeStamp = now.toDateString() + String("    ") + now.toTimeString().substr(0,8);

        timeStamp = timeStamp.substr(4,23);

        firebase.database().ref('chat').child('message').push({
            name: nameText,
            msg: msgText.value,
            time: timeStamp
        })
    }

    nameText = "";
    msgText.value = "";
}


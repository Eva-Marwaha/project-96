//YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyAhMjCeSUWIVS3O8huPxubDf0sOMchukDo",
    authDomain: "kwitter95-9cec8.firebaseapp.com",
    databaseURL: "https://kwitter95-9cec8-default-rtdb.firebaseio.com",
    projectId: "kwitter95-9cec8",
    storageBucket: "kwitter95-9cec8.appspot.com",
    messagingSenderId: "222841177939",
    appId: "1:222841177939:web:9bf7b2a1d1d14feeb6c3a6"
  };
  
  
  firebase.initializeApp(firebaseConfig);


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "" ;
}

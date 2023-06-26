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


function addRoom()
{
 room_name = document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
 });

 localStorage.setItem("room_name", room_name);

 window.location = "kwitter_room.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div> <hr>";
    document.getElementById("output").innerHTML += row;
    });});}
getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

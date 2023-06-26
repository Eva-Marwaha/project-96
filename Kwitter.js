function addUser() {

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyCX7Wy4bQGRvhUEZuMFlMQRa5mmLHx5ARY",
    authDomain: "project-94-2ccb0.firebaseapp.com",
    projectId: "project-94-2ccb0",
    storageBucket: "project-94-2ccb0.appspot.com",
    messagingSenderId: "796468412472",
    appId: "1:796468412472:web:189c49931d5f860f4266cd"
  };
  
  
  varinitializeApp(firebaseConfig);
// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyBA2X6hv_PWk06sSzpotTJwaxRx0yzU_qU",
    authDomain: "project-100-1804c.firebaseapp.com",
    databaseURL: "https://project-100-1804c-default-rtdb.firebaseio.com",
    projectId: "project-100-1804c",
    storageBucket: "project-100-1804c.appspot.com",
    messagingSenderId: "186466275958",
    appId: "1:186466275958:web:2f63bba5ddc5802980c557"
  };


  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
       window.location  = "index.html"
  }




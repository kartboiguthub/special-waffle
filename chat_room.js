
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

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - "+ Room_names);
   row = "<div class=' room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)"
   //End code
   });});}
getData();


function addRoom() {

   room_name = document.getElementById("room_name").value;
 
   firebase.database().ref("/").child(room_name).update({
     
   })
 
   localStorage.setItem("room_name", room_name);
 
     window.location = "chatroom_page.html";
 }

 function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
     window.location  = "index.html"
}
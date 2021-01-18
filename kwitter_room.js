user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + "  " + user_name + "!";

    var firebaseConfig = {
    apiKey: "AIzaSyDls4U25ebfGQhcboGNFr7tcPZ7Zawxook",
    authDomain: "lets-chat-8a48c.firebaseapp.com",
    databaseURL: "https://lets-chat-8a48c-default-rtdb.firebaseio.com",
    projectId: "lets-chat-8a48c",
    storageBucket: "lets-chat-8a48c.appspot.com",
    messagingSenderId: "158856554998",
    appId: "1:158856554998:web:7f84a58c1c23c89a4ebfd7"
    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot){
    childKey  = childSnapshot.key;
    Room_names = childKey;
    //Start code
    console.log("Room Names - ".concat( Room_names));
    row = "<div class='room_name' id ='Room_names' onclick ='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
    document.getElementById("output").innerHTML = row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function addroom(){
 room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
       purpose: "Adding Room Names"
 });
 localStorage.setItem("room_name" , room_name);
 window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
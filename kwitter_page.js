user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

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

  function getData(){ 
    firebase.database().ref("/"+room_name).on('value', function(snapshot){ 
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot){ 
    childKey  = childSnapshot.key; 
    childData = childSnapshot.val(); 
    if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          likes:0
    });

    document.getElementById("msg").value = "";
}
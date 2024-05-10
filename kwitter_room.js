
var firebaseConfig = {
      apiKey: "AIzaSyDSzGOkWVg00aFg8_jKxaXdqgTDGhjUFaU",
      authDomain: "kwitter-29ce5.firebaseapp.com",
      databaseURL: "https://kwitter-29ce5-default-rtdb.firebaseio.com",
      projectId: "kwitter-29ce5",
      storageBucket: "kwitter-29ce5.appspot.com",
      messagingSenderId: "1016655972844",
      appId: "1:1016655972844:web:bbbc63abb0f7d9163658c9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML = "welcome "+user_name+"!"

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("Room_name", room_name);
window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name'  id="+ Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
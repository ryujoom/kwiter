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
function addUser(){
    username = document.getElementById("user_name").value
    firebase.database().ref("/").child(username).update({
        purpose:"addUser"
    })
    
}
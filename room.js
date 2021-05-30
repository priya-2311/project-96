var firebaseConfig = {
    apiKey: "AIzaSyB3XBprSXzZ83xEcjikX8jaRK56mDRu0G4",
    authDomain: "chat-app-24bb2.firebaseapp.com",
    databaseURL: "https://chat-app-24bb2-default-rtdb.firebaseio.com",
    projectId: "chat-app-24bb2",
    storageBucket: "chat-app-24bb2.appspot.com",
    messagingSenderId: "643048088848",
    appId: "1:643048088848:web:b82fc4689228b018b1b195",
    measurementId: "G-HR3HQ5770Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
   var user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "shivaani.html";
  }
  
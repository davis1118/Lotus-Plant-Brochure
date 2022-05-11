const firebaseConfig = {
  apiKey: "AIzaSyA0hgQFKEbCj-JSRwUNx89btnCCfn_VIKI",
  authDomain: "login-e45a0.firebaseapp.com",
  projectId: "login-e45a0",
  databaseURL: "https://login-e45a0-default-rtdb.firebaseio.com/",
  storageBucket: "login-e45a0.appspot.com",
  messagingSenderId: "797317740533",
  appId: "1:797317740533:web:9ef53158de3463cc6312bc"
};
const app = firebase.initializeApp(firebaseConfig); 
const dbRef = firebase.database().ref(); 

const detailsRef = dbRef.child('userdetails'); 
detailsRef.on("child_added", function(snapshot, prevChildKey) { 
  var newPost = snapshot.val(); 
}); 
 
function send(){ 
  var firstname = document.getElementById("firstname").value; 
  var lastname = document.getElementById("lastname").value; 
  var email = document.getElementById("email").value; 
  var feedback = document.getElementById("feedback").value; 
  
  detailsRef.push().set({ 
    firstname: firstname, 
    lastname: lastname, 
    email: email, 
    feedback: feedback,
  }); 
   
} 
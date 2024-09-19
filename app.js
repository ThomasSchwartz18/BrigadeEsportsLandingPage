const firebaseConfig = {
    apiKey: "AIzaSyC5NbfOCEOEpJEEynKWIOrluqvBJ_RwDPk",
    authDomain: "brigade-esports-signup.firebaseapp.com",
    databaseURL: "https://brigade-esports-signup-default-rtdb.firebaseio.com",
    projectId: "brigade-esports-signup",
    storageBucket: "brigade-esports-signup.appspot.com",
    messagingSenderId: "670579913971",
    appId: "1:670579913971:web:13a878b7d63f31fa0d3386"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
  
    saveMessages(name, emailid);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      FaceItName: name,
      Email: emailid,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
var header = new Vue({
  el: "#header",
  data: {
    header: "Level Up",
    tagline: "Career Conference",
  }
})

var loginForm = new Vue ({
  el: "#loginForm",
  data:{
    loginErrors:[],
    loginEmail:null,
    loginPassword:null
  },
  methods:{
    checkLoginForm:function(event){
      // if there is an email and password present
      if(this.loginEmail && this.loginPassword){
        alert("Thank you for testing!");
      }
      this.loginErrors = [];
      console.log("hey login")
      // if there is not a password entered
      if(!this.loginPassword) {
        this.loginErrors.push("Password Required.");
      }
      // if there is not an email entered
      if(!this.loginEmail){
        this.loginErrors.push("Email Required.");
      }
      // prevents the page from reloading when submit is clicked
      event.preventDefault();
    }
  }
})


var signupForm = new Vue ({
  el: "#signupForm",
  data:{
    signupErrors:[],
    signupPassword:null,
    signupPasswordConfirmation: null,
    signupEmail:null
  },
  methods:{
    checkSignupForm:function(event){
      this.signupErrors = [];
      console.log("hey signup")
      // if there is not an email entered
      if(!this.signupEmail){
        this.signupErrors.push("Email Required.");
      }
      // if there is not a password entered
      if(!this.signupPassword) {
        this.signupErrors.push("Password Required.");
      }
      // if there is not a password confirmation entered
      if(!this.signupPasswordConfirmation) {
        this.signupErrors.push("Password Confirmation Required.");
      }
      // if the password and password confirmation do not match
      if(this.signupPassword != this.signupPasswordConfirmation){
        this.signupErrors.push("Passwords don't match!");
      }
      // if there is an email and the password and password confimation match, display message
      if(this.signupEmail && this.signupPassword === this.signupPasswordConfirmation){
        alert("Thank you for testing!");
      }
      // prevents the page from reloading when submit is clicked
      event.preventDefault();
    },

  }
})

// showing sign up div and hiding login div
function showSignupForm() {
    // show signup form div
    document.getElementById('signupForm').style.display= "block";
}
function hideLoginForm(){
  // hide the login form div
  document.getElementById('loginForm').style.display= "none";
}

// do both: showing sign up and hiding login
function signupButton(){
  hideLoginForm();
  showSignupForm();
}

//showing login form div and hiding sigh up div
function showLoginForm() {
    // show login form div
    document.getElementById('loginForm').style.display= "block";
}
function hideSignupForm(){
  // hide signup form div
  document.getElementById('signupForm').style.display= "none";
}

// do both: showing login div and hiding sign up div
function loginButton(){
  showLoginForm();
  hideSignupForm();
}

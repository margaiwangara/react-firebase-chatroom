export function errorHandler({ code: status, message }) {
  switch (status) {
    case "auth/email-already-in-use":
      alert("Email already exists");
      break;
    case "auth/invalid-email":
      alert("Please enter a valid email address");
      break;
    case "auth/operation-not-allowed":
      console.log("Email or password auth not enabled in console");
      break;
    case "auth/weak-password":
      alert("Weak password");
      break;
    case "auth/user-not-found":
    case "auth/wrong-password":
      alert("Invalid Email/Password");
      break;
    case "auth/user-disabled":
      alert("User disabled");
      break;
    default:
      break;
  }
}

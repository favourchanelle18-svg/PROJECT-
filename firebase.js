// Replace placeholders with YOUR Firebase Web App keys
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",                 // Replace exactly
  authDomain: "YOUR_PROJECT.firebaseapp.com", // From Firebase console
  projectId: "YOUR_PROJECT_ID_HERE",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

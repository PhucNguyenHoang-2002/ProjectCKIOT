// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQFplhOLifsjV_sjKIbvpjUxJ7ciI8Keg",
  authDomain: "dmcuocdoi-a155f.firebaseapp.com",
  databaseURL: "https://dmcuocdoi-a155f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dmcuocdoi-a155f",
  storageBucket: "dmcuocdoi-a155f.appspot.com",
  messagingSenderId: "1024931304821",
  appId: "1:1024931304821:web:42d98f67dafcdd96ac6f3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };

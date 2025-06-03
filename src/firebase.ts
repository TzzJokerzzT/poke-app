import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyC4kuCMuNWAjZRkjye6V6zDWJOIn3ci9D0",
authDomain: "poke-app-f859d.firebaseapp.com",
projectId: "poke-app-f859d",
storageBucket: "poke-app-f859d.firebasestorage.app",
messagingSenderId: "256468532678",
appId: "1:256468532678:web:370f850be90bc85ceb06c7",
measurementId: "G-0VV9TG3X20",
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
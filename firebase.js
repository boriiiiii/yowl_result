import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBEviaxfv02om8zSFJq4DuLLtjuFUeiX9Y",
    authDomain: "fir-auth-7f25b.firebaseapp.com",
    projectId: "fir-auth-7f25b",
    storageBucket: "fir-auth-7f25b.appspot.com",
    messagingSenderId: "143742118566",
    appId: "1:143742118566:web:f7ac38f6bcd5df6ff5a267"
};

let app;
if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

const auth = getAuth(app);

export { auth };

import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";

// Firebase keys.
const firebaseConfig = {
	apiKey: "AIzaSyDLgLxIhCgREnt_V_q0us9RuZ7Vta4cVbo",
	authDomain: "idx-test-4d154.firebaseapp.com",
	projectId: "idx-test-4d154",
	storageBucket: "idx-test-4d154.appspot.com",
	messagingSenderId: "894158398113",
	appId: "1:894158398113:web:ef20881040ea91a42ac6e0",
	measurementId: "G-794GF730J1"
};

// Initialize Firebase.
const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics = app.name && typeof window !== 'undefined' ? getAnalytics(app) : null
const db: Firestore = getFirestore(app);

export { db };
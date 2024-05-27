// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage,ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBekc8SZdbqEbpgT189CCZ3dO5eRzFgBkY",
  authDomain: "airbnb-d678a.firebaseapp.com",
  projectId: "airbnb-d678a",
  storageBucket: "airbnb-d678a.appspot.com",
  messagingSenderId: "665535440164",
  appId: "1:665535440164:web:ee32c074dfe1d84125ffb1",
  measurementId: "G-V09QKGLX3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file) {
    const storageref = ref(storage, v4())
    await uploadBytes(storageref, file)
    return await getDownloadURL(storageref)
}
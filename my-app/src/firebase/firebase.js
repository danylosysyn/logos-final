import { initializeApp } from "firebase/app"
import {
    getFirestore,
    collection,
    onSnapshot,
    doc
} from "firebase/firestore"
import { getStorage } from "firebase/storage"



const firebaseConfig = {
    apiKey: "AIzaSyA35RdYwz0gaBgdkvWJg5inOL9USXcocEM",
    authDomain: "logos-final.firebaseapp.com",
    projectId: "logos-final",
    storageBucket: "logos-final.appspot.com",
    messagingSenderId: "709852912575",
    appId: "1:709852912575:web:24ce2ccca0cc9c27751f0a"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore()

export default db;

const colRef = collection(db, "user")

// onSnapshot(colRef, (snapshot) => {
//     let myInfo = []
//     snapshot.docs.forEach((doc) => {
//         myInfo.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(myInfo)
// })

export const docRef = doc(db, "user", "0AUUjjMKkiyYjZIgzFtT")

onSnapshot(docRef, (doc) => {
    console.log(doc.data())
    return doc.data()
})

export const storage = getStorage(app)
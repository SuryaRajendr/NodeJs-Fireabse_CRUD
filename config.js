const firebase = require("firebase");
const firebaseConfig = {
apiKey: "AIzaSyB61U9PNo8CR76xj-EPOAJMpfAQDv_VnPE",
authDomain: "xenon-burner-296905.firebaseapp.com",
projectId: "xenon-burner-296905",
storageBucket: "xenon-burner-296905.appspot.com",
messagingSenderId: "85587420337",
appId: "1:85587420337:web:8893521d900ab855f16e90",
measurementId: "G-F143LKXSPX"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
//const User = db.collection("Users");
const student = db.collection("students");

module.exports = student;

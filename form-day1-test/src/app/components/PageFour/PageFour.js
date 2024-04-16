'use client'
import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import PDFGenerator from "../jspdf";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBjm1kKmSxb4tpFDr4xidxNMN7CXSu_MQ",
  authDomain: "test-c02fb.firebaseapp.com",
  projectId: "test-c02fb",
  storageBucket: "test-c02fb.appspot.com",
  messagingSenderId: "1077637809706",
  appId: "1:1077637809706:web:5ce8a075aab3dc24a96553",
  measurementId: "G-KGSNPGDEDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const PageFour = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch data from Firebase
    const database = getDatabase();
    const userDataRef = ref(database, 'formData');
    
    onValue(userDataRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        // console.log("Fetched data:", data);
        const lastDocumentKey = Object.keys(data).pop();
        const lastDocumentData = data[lastDocumentKey];
        setUserData(lastDocumentData);
        console.log("Last document data:", lastDocumentData);
        // setUserData(snapshot.val());
      } else {
        console.log("No data available");
      }
    }, {
      onlyOnce: true // Fetch data only once
    });
  }, []);

  return (
    <div
      className="mw5 bg-white w-100 md:pa2-ns text-black mt5 dib"
      style={{ maxWidth: "30%", maxHeight:'30%' }}
    >
      <img
        src="/tick.jpg"
        className="h3 w3 mx-auto mb-10 flex justify-center items-center" 
        title="success icon"
        alt="tick-icon"
      />
      <div className="center"><h3 className="">Congratulations, </h3></div>
      <p className="text-black mb-10">
        You have completed the onboarding, you can start using our app
      </p>
      {userData && <PDFGenerator data={userData} />}
    </div>
  );
}

export default PageFour;

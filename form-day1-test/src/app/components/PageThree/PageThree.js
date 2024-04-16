import React, { useState } from "react";
import "./PageThree.css";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

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

const PageThree = ({ onButtonClick }) => {
  const [imageURL, setImageURL] = useState("");
  const [previewURL, setPreviewURL] = useState(""); // State to store the preview URL

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a preview URL for the uploaded image
      setPreviewURL(URL.createObjectURL(file));

      // Upload the image to Cloudinary
      uploadImageToCloudinary(file);
    }
  };

  const uploadImageToCloudinary = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "lodrnpjl"); // Replace with your Cloudinary upload preset
  
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dmdhep1qp/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        const imageUrl = data.secure_url;
        setImageURL(imageUrl);
      } else {
        console.error("Failed to upload image. Cloudinary response:", response);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  

  const handleSubmit = () => {
    // Retrieve existing JSON data from local storage
    const existingData = localStorage.getItem("formData");
    let existingFormData = {};
    if (existingData) {
      existingFormData = JSON.parse(existingData);
    }

    // Merge existing data with new form data
    const formData = { imageURL };
    const mergedFormData = { ...existingFormData, ...formData };

    // Push the merged form data to Firebase Realtime Database
    const database = getDatabase();
    const formDataRef = ref(database, 'formData');
    push(formDataRef, mergedFormData);
    
    // Trigger button click handler to navigate to the next page
    onButtonClick("pagefour");
  };

  return (
    <main className="pt5  ">
      <h2>Upload an Image</h2>
      <p style={{ color: "#C0C0C0" }}>
        Choose an image to upload.
      </p>
      {/* Show image preview */}
      {previewURL && (
        <div className="text-center  p-10 flex justify-center items-center">
        <img
          src={previewURL}
          alt="Preview"
          style={{ maxWidth: "200px", height: "200px" }}
          className="mb-4 rounded-md"
        />
      </div>
      )}
      <div className="center ph4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>
      <input
        className="f6 grow br2 mt-10 ph3 pv2 mb2 dib white submitButton"
        style={{
          borderStyle: "none",
          width: "66%",
          backgroundColor: "#664DE5",
        }}
        type="submit"
        value="Create Account"
        onClick={handleSubmit}
        disabled={!imageURL} // Disable button until imageURL is set
      />
    </main>
  );
};

export default PageThree;

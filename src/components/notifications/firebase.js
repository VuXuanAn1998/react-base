// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyD-GkdqFAjDxtu5Mfi6NiuZMWidGeOQjOw",
  authDomain: "pushnotification-adbfd.firebaseapp.com",
  projectId: "pushnotification-adbfd",
  storageBucket: "pushnotification-adbfd.firebasestorage.app",
  messagingSenderId: "86471551806",
  appId: "1:86471551806:web:300bf5f1726dd2c2fe5a6f",
  measurementId: "G-0HJT8ZCRC6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log(permission, "permission nek");
  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BKPfKz565yaTRKRyeXsBApO2zYjHIxqbHb2zhvgKmMhy9iF1le2-b3AXVYxAqLQ1Kt75-D06qOPaflPC_kywy1Q",
    });
    console.log(token, "token nek");
  }
};

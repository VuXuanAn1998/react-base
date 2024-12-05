import { useEffect } from "react";
import "./App.css";
import { generateToken, messaging } from "./components/notifications/firebase";
import { onMessage } from "firebase/messaging";

function App() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js") // Đường dẫn tĩnh từ thư mục public
        .then((registration) => {})
        .catch((error) => {});
    }
    setTimeout(() => {
      onMessage(messaging, (payload) => {});
    }, 1000);
    generateToken();
  }, []);
  return (
    <>
      <div>
        <p className="bg-red-50 h-full ">tailwind working well</p>
      </div>
    </>
  );
}

export default App;

import { Container } from "react-bootstrap";
import "./App.css";
import Hero from "./components/Hero";
import Moduli from "./components/Moduli";
import Navbar from "./components/Navbar";
import ParteConfigurazione from "./components/ParteConfigurazione";
import ParteServer from "./components/ParteServer";
import ParteSicraweb from "./components/ParteSicraweb";
import ParteWebService from "./components/ParteWebService";
import ParteNote from "./components/ParteNote";
import Redazione from "./components/Redazione";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function App() {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCRM-TBwgrdhnnJG8afFyE4DohejB7yMQE",
    authDomain: "maggioli-6abbb.firebaseapp.com",
    projectId: "maggioli-6abbb",
    storageBucket: "maggioli-6abbb.appspot.com",
    messagingSenderId: "408873110118",
    appId: "1:408873110118:web:fa0350e86e42b147f67ba7",
    measurementId: "G-HFCLEYWD18",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return (
    <Container className="App">
      <Navbar />
      <Hero />
      <Moduli />
      <ParteConfigurazione />
      <ParteServer />
      <ParteSicraweb />
      <ParteWebService />
      <ParteNote />
      <Redazione />
    </Container>
  );
}

export default App;

// Filename - App.js
// It contains the Form, its Structure
// and Basic Form Functionalities

import "./App.css";
import { React, useState } from "react";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");



    return (
        <div className="App">
            <h1>Form in React</h1>
            
        </div>
    );
}

export default App;
/*import First from './First.js';
import Second from './Second.js';
import Parent from './Parent.js';
import Page from './pages/Page.js';

function App() {
  return (
    <>
    <Page/>
    <Parent/>
    <Second/>
    <First/>
    </>
  );
}
export default App;*/


/*const fruits = ["Apple", "Banana", "Orange"];
function App(){
  return (
    <div>
      {fruits.map((fruit) => (
        <p key={fruit}>{fruit}</p>
      ))}
    </div>
  );
}
export default App;*/

/*import Task4 from "./templets/task4";
function App() {
  return (
    <div>
      <Task4 />
    </div>
  );
}
export default App;*/

/*import UseStateDemo from "./hooks/useState";

function App() {
  return <UseStateDemo />;
}

export default App;*/

/*import LikeCounter from "./hooks/LikeCounter";

function App() {
  return (
    <div>
      <LikeCounter />
    </div>
  );
}

export default App;*/


/*import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;*/

/*import HomePage from "./pages/HomePage";

function App() {
  return <HomePage />;
}

export default App;*/

/*import Counter from "./Counter";
import { Add, Subtract, Multiply, Divide } from "./Math";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/add" element={<Add />} />
        <Route path="/subtract" element={<Subtract />} />
        <Route path="/multiply" element={<Multiply />} />
        <Route path="/divide" element={<Divide />} />
      </Routes>
    </>
  )
}

export default App*/

/*import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import { Add, Subtract, Multiply, Divide } from "./Math";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/add" element={<Add />} />
        <Route path="/subtract" element={<Subtract />} />
        <Route path="/multiply" element={<Multiply />} />
        <Route path="/divide" element={<Divide />} />
      </Routes>
    </>
  )
}

export default App*/

/*import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Books from "./components/Books";
import Authors from "./components/Authors";
import About from "./components/About";
import NotFound from "./components/NotFound";

import AtomicHabits from "./components/BookPages/AtomicHabits";
import TheAlchemist from "./components/BookPages/TheAlchemist";
import RichDadPoorDad from "./components/BookPages/RichDadPoorDad";
import Ikigai from "./components/BookPages/Ikigai";
import WingsOfFire from "./components/BookPages/WingsOfFire";
import HarryPotter from "./components/BookPages/HarryPotter";

import JamesClear from "./components/AuthorPages/JamesClear";
import PauloCoelho from "./components/AuthorPages/PauloCoelho";
import RobertKiyosaki from "./components/AuthorPages/RobertKiyosaki";
import HectorGarcia from "./components/AuthorPages/HectorGarcia";
import APJAbdulKalam from "./components/AuthorPages/APJAbdulKalam";
import JkRowling from "./components/AuthorPages/JkRowling";

function App() {
  
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/books" element={<Books />} />

                <Route path="/books/atomic-habits" element={<AtomicHabits />} />
                <Route path="/books/the-alchemist" element={<TheAlchemist />} />
                <Route path="/books/rich-dad-poor-dad" element={<RichDadPoorDad />} />
                <Route path="/books/ikigai" element={<Ikigai />} />
                <Route path="/books/wings-of-fire" element={<WingsOfFire />} />
                <Route path="/books/harry-potter" element={<HarryPotter />} />

                <Route path="/authors" element={<Authors />} />

                <Route path="/authors/james-clear" element={<JamesClear />} />
                <Route path="/authors/paulo-coelho" element={<PauloCoelho />} />
                <Route path="/authors/robert-kiyosaki" element={<RobertKiyosaki />} />
                <Route path="/authors/hector-garcia" element={<HectorGarcia />} />
                <Route path="/authors/apj-abdul-kalam" element={<APJAbdulKalam />} />
                <Route path="/authors/jk-rowling" element={<JkRowling />} />

                <Route path="/about" element={<About />} />

                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;*/


import { useState } from "react";
import "./App.css";

function App() {
  // States
  const [message, setMessage] = useState("");
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Light/Dark Mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Add or Update Note
  const handleSubmit = () => {
    if (message.trim() === "") return;

    if (editIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = message;
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      setNotes([...notes, message]);
    }

    setMessage("");
  };

  // Delete Note
  const handleDelete = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);

    if (editIndex === index) {
      setEditIndex(null);
      setMessage("");
    }
  };

  // Edit Note
  const handleEdit = (index) => {
    setMessage(notes[index]);
    setEditIndex(index);
  };

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <h1>📝 Notes App</h1>

      <button className="theme-btn" onClick={toggleTheme}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editIndex !== null ? "Update Note" : "Add Note"}
      </button>

      <div className="notes">
        {notes.length === 0 ? (
          <p>No Notes Available</p>
        ) : (
          notes.map((note, index) => (
            <div className="card" key={index}>
              <p>{note}</p>

              <div className="buttons">
                <button
                  className="edit"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>

                <button
                  className="delete"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
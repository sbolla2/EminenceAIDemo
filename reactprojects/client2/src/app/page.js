"use client";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const App = () => {
  const [topic, setTopic] = useState("")
  const [keyword, setKeyword] = useState("")
  const [submitState, setSubmit] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:5000/question')
      .then(response => {
        setData(response.data);
        console.log(response.data);
        console.log(typeof(data));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSubmit = (e) => {
      e.preventDefault();

      Axios.post('http://localhost:5000/insert', {
          topicName: topic,
          keywordName: keyword
      })
      setSubmit(true)
  }
  return (
    <div className="App">
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Eminence AI QGEN</h3>
            <div className="form-group mt-3">
              <label>Topic</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter topic"
                onChange={(e) => {setTopic(e.target.value)}}
              />
            </div>
            <div className="form-group mt-3">
              <label>Keyword</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter keyword"
                onChange={(e) => {setKeyword(e.target.value)}}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {submitState && <div>
      {data.map(item => (
        <div key={item._id}>{item.question}</div>
      ))}
    </div>}
    </div>
  )
};
export default App;
/*
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
  
export default function App() {
  return (
    <div className="container mx-auto ml-5" style={{ display: 'block', 
                  width: 700,
                  gap: "2rem",
                  padding: 30 }}>
      <h4>Eminence AI QGen Feature</h4>
      <div style={{ display: 'flex', 
                  width: 700,
                  gap: "2rem",
                  padding: 30 }}>
        <Dropdown>
          <Dropdown.Toggle variant="primary">
            Topic
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">
              Biochemistry
            </Dropdown.Item>
            <Dropdown.Item href="#">
              Endocrinology
            </Dropdown.Item>
            <Dropdown.Item href="#">
              Immune System
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="success">
            Keywords
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">
              Keyword1
            </Dropdown.Item>
            <Dropdown.Item href="#">
              Keyword2
            </Dropdown.Item>
            <Dropdown.Item href="#">
              Keyword3
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';

export default function App() {
  const [name, setName] = useState("")
  const [role, setRole] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault();

      console.log(name);

      Axios.post('http://localhost:5000/insert', {
          fullName: name,
          companyRole: role
      })
  }

  return (
    <div className="App">
      <header className="App-header"> 
        <div className="logIn-form">
            <form onSubmit={handleSubmit}>
                <p>First Name</p>

                <input
                  className = "Name" 
                  type="text"
                  placeholder="First name ..."
                  onChange={(e) => {setName(e.target.value)}}
                />

                <p> Company Role</p>

                <input 
                  className = "Role"
                  type="text"
                  placeholder = "Role...." 
                  onChange={(e) => {setRole(e.target.value)}}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
      </header>
    </div>
  );
}
*/
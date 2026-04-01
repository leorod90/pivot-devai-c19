import React from 'react';
import { useState } from 'react'

// JSX

// Header Component
function Header () {
  const websiteName = "Cool Profiles";
  
  return (
    <header>
      <h1>{websiteName}</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
    )
}

// Footer Component
function Footer () {
  return (<p>Leo 2026</p>)
}

// Body Component
function Body () {
  const myName = "Leo";
  const myAge = 48;
  const hobbie = "video games";
  const yearsOf = 10;
  
  return (
    <div>
      <h2>{myName}</h2>
      <p>my age is {myAge}</p>
      <h3>About Me</h3>
<p>Love to play {hobbie} and I have been doing it for {yearsOf} years</p>    </div>
    )
}

// Component
function App () {
  // start code

  // HTML goes inside the return
  return (
    <div className="blue">
      <Header />
      <Body />
      <Footer />
    </div>
    )
  // end code
}

// ADD THIS AT THE END
export default App
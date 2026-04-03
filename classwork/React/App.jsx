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


// APRIL 2
import ProfileCard from "./ProfileCard.js"
// import and export
// properties (props)
// map (arrays)

const PEOPLE = [
    {
        name: "Jasmine",
        age:"22",
        image: "https://i.pinimg.com/736x/29/12/d1/2912d1ba7094c8a9ee48455e3be1b002.jpg"
    },
    {
        name: "Kenny",
        age:"32",
        image: "https://i.pinimg.com/originals/fc/85/34/fc853485911f3e4c7a3696d6c5fd1683.jpg"
    },
    {
        name: "Amy",
        age:"34",
        image: "https://t3.ftcdn.net/jpg/07/40/25/72/360_F_740257259_cxXHihu50QQXIaQoM4jwVvCaFjOVCuox.jpg"
    },
    {
        name: "Jule",
        age:"18",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGgF6YPiOlHvSbWA_bpZZjl-KS-rNWKIj2g&s"
    }
]

export default function App() {
    return (
        <div>
            { PEOPLE.map((person, index) => (
                <ProfileCard
                  key={index}
                  name={person.name}
                  age={person.age}
                  image={person.image}
                />
      )) }
        </div>  
  )
}

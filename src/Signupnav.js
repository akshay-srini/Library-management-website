import React, { useState, useEffect } from "react"
// import { BookLoader } from "react-awesome-loaders";
// import Signupnav from "./Signupnav.js"
import LoginForm from "./Login.js";
import SignupForm from "./Signup.js";
import Searchcard from "./Searchpage/Searchcard.js"
import Searchapp from "./Searchpage/Searchapp.js"
import Searchitem from "./Searchpage/Searchitem.js"
import { Routes, Route } from 'react-router-dom';
import Agriculture from "./Subjects/Agriculture.js"
import Architecture from "./Subjects/Architecture.js"
import History from "./Subjects/History.js"
import Fantasy from "./Subjects/Fantasy.js"
import ArtificialIntelligence from "./Subjects/ArtificialIntelligence.js"
import Narrative from "./Subjects/Narrative.js"
import Romance from "./Subjects/Romance.js"
import Thriller from "./Subjects/Thriller.js"
import Science from "./Subjects/Science.js"
import Biography from "./Subjects/Biography.js"
import Mathematics_and_statistics from "./Subjects/Mathematics_and_Statistics.js"
import Earth_and_space from "./Subjects/Earth_and_space.js"
import { UserAuthContextProvider } from "./UserAuthContest.js";
import App from "./App.js";




function Signupnav() {
  return (
    <div className="container" id="Signupnav">
      <>
        <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/Home" element={<App />} />
            <Route path="/Signupnav" element={<Signupnav />} />
            <Route path="/Login" element={<LoginForm />} />
            <Route path="/Signup" element={<SignupForm />} />
            <Route path="/Searchapp" element={<Searchapp />} />
            <Route path="/Searchitem" element={<Searchitem />} />
            <Route path="/SearchCard" element={<Searchcard />} />
            <Route path="/Agriculture" element={<Agriculture />} />
            <Route path="/Architecture" element={<Architecture />} />
            <Route path="/History" element={<History />} />
            <Route path="/Fantasy" element={<Fantasy />} />
            <Route path="/ArtificialIntelligence" element={<ArtificialIntelligence />} />
            <Route path="/Narrative" element={<Narrative />} />
            <Route path="/Romance" element={<Romance />} />
            <Route path="/Thriller" element={<Thriller />} />
            <Route path="/Science" element={<Science />} />
            <Route path="/Biography" element={<Biography />} />
            <Route path="/Mathematics_and_statistics" element={<Mathematics_and_statistics />} />
            <Route path="/Earth_and_space" element={<Earth_and_space />} />

          </Routes>
        </UserAuthContextProvider>
      </>
    </div>
  )
}

export default Signupnav;

import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./WebPages/Home";
import CreatePost from "./WebPages/CreatePost(Home)";
import CreatePostCrime from "./WebPages/CreatePost(CrimeWars)";
import CreatePostGang from "./WebPages/CreatePost(GangNews)";
import CreatePostGeo from "./WebPages/CreatePost(GeoNews)";
import CreatePostMissing from "./WebPages/CreatePost(MissingCases)";
import CreatePostSports from "./WebPages/CreatePost(SportsNews)";
import CreatePostTravel from "./WebPages/CreatePost(TravelInTraffic)";
import Login from "./WebPages/Login";
import CrimeWars from "./WebPages/CrimeWars";
import GangNews from "./WebPages/GangNews";
import GeographicalNews from "./WebPages/GeographicalNews";
import MissingCases from "./WebPages/MissingCases";
import SportsNews from "./WebPages/SportsNews";
import TravelInTraffic from "./WebPages/TravelInTraffic";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/crimewars"> Crime Wars </Link>
        <Link to="/gangnews"> Gang News </Link>
        <Link to="/geonews"> Geo News </Link>
        <Link to="/missingcases"> Missing Cases</Link>
        <Link to="/sportsnews"> Sports News </Link>
        <Link to="/travelintraffic"> Travel In Traffic </Link>
        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/addpost_Home"> Create Latest </Link>
            <div className="logOut">
              <button onClick={signUserOut}>Log Out</button>
            </div>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/addpost_Home" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/addpost_Crime" element={<CreatePostCrime isAuth={isAuth} />} />
        <Route path="/addpost_Gang" element={<CreatePostGang isAuth={isAuth} />} />
        <Route path="/addpost_Geo" element={<CreatePostGeo isAuth={isAuth} />} />
        <Route path="/addpost_Missing" element={<CreatePostMissing isAuth={isAuth} />} />
        <Route path="/addpost_Sports" element={<CreatePostSports isAuth={isAuth} />} />
        <Route path="/addpost_Travel" element={<CreatePostTravel isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/crimewars" element={<CrimeWars />} />
        <Route path="/gangnews" element={<GangNews />} />
        <Route path="/geonews" element={<GeographicalNews />} />
        <Route path="/missingcases" element={<MissingCases />} />
        <Route path="/sportsnews" element={<SportsNews />} />
        <Route path="/travelintraffic" element={<TravelInTraffic />} />
      </Routes>
    </Router>
  );
}

export default App;

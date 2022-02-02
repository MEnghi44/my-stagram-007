import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Random from "./pages/Random";
import Navbar from "./component/Navbar";
import Profilepages from "./pages/Profilepages";
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]);

  const getPhotosRandom = async () => {
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      headers: {
        Authorization: "Client-ID gAeAApizpxl5RSOJF3qn5_3Ue5B-KtCG70BLz1Kc1xA",
      },
      params: {
        count: 12,
        orientation: "squarish",
      },
    });
    setPhotos(response.data);
  };

  const getPhotosSearch = async (search) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID gAeAApizpxl5RSOJF3qn5_3Ue5B-KtCG70BLz1Kc1xA",
      },
      params: {
        orientation: "squarish",
        query: search,
      },
    });
    setPhotos(response.data.results);
  };

  const getProfile = async (username) => {
    console.log(username);
    const response = await axios.get(
      `https://api.unsplash.com/users/${username}/photos`,
      {
        headers: {
          Authorization:
            "Client-ID gAeAApizpxl5RSOJF3qn5_3Ue5B-KtCG70BLz1Kc1xA",
        },
      }
    );
    setPhotos(response.data);
    console.log(response.data);
  };

  return (
    <Router>
      <Navbar getPhotosSearch={getPhotosSearch} />
      <div className="container  mx-auto">
        <Routes>
          <Route
            path="/"
            element={<Random handledOnLoad={getPhotosRandom} photos={photos} />}
          />
          <Route
            path="/Profile/:username"
            element={
              <Profilepages getProfile={getProfile} photos={photos} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

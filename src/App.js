import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Albums from "./components/Album/main.albums";
import Homepage from "./components/Homepage/main.homepage";
import MainLayouts from "./components/Layouts/main.layouts";
import Posts from "./components/Post/main.posts";

const App = () => {
  return (
    <>
      <Router>
        <MainLayouts>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="albums" element={<Albums />} />
            <Route path="posts" element={<Posts />} />
            <Route
              path="*"
              element={
                <h1 className="text-center text-danger">404 NOT FOUND</h1>
              }
            />
          </Routes>
        </MainLayouts>
      </Router>
    </>
  );
};

export default App;

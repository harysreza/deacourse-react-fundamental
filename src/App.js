import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/404/main.404";
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayouts>
      </Router>
    </>
  );
};

export default App;

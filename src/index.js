import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio";
import Musics from "./pages/FileManager/Musics/Musics";
import Content from "./pages/FileManager/Components/Content";
import Documents from "./pages/FileManager/Documents/Documents";
import Videos from "./pages/FileManager/Videos/Videos";
import ChangeColor from "./pages/Setting/ChangeColor/ChangeColor";
import BackgroundImage from "./pages/Setting/BackgroundImage/BackgroundImage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/filemanager" element={<App />}>
        <Route path="/filemanager/musics" element={<Musics />}>
          <Route
            path="rock"
            element={<Content type={"music"} field={"rock"} />}
          />
          <Route
            path="rap"
            element={<Content type={"music"} field={"rap"} />}
          />
          <Route
            path="r&b"
            element={<Content type={"music"} field={"r&b"} />}
          />
          <Route
            path="iranian"
            element={<Content type={"music"} field={"iranian"} />}
          />
        </Route>
        <Route path="/filemanager/documents" element={<Documents />} />
        <Route path="/filemanager/videos" element={<Videos />} />
      </Route>
      <Route path="/setting" element={<App />}>
        <Route path="color" element={<ChangeColor />} />
        <Route path="image" element={<BackgroundImage />} />
      </Route>
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  </Router>
);

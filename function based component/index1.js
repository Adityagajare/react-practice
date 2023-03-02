import React from "react";
import { createRoot } from "react-dom/client";
import Nav from "./Nav";
import Footer from "./Footer";
import Movie from './Movie';
import Header from "./header";
import Recent from "./Recent";

createRoot(document.getElementById("root")).render(<Nav/>)
createRoot(document.getElementById("root")).render(<Footer/>)
createRoot(document.getElementById("root")).render(<Movie/>)
createRoot(document.getElementById("root")).render(<Header/>)
createRoot(document.getElementById('root')).render(<Recent/>)


import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Pricing from "../pages/pricing";
import Userresearch from "../pages/user_research";
import WebDevelopment from "../pages/web_development";


export default function Routing(){

    return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/webdevelopment" element={<WebDevelopment/>} />
        <Route path="/userresearch" element={<Userresearch/>} />
    </Routes>
    </BrowserRouter>
    )
}
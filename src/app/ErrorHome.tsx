'use client'
import "./globals.css";

import Cards from "../components/Cards";
import IconToggle from "../components/iconToggle";
import DynamicBackground from "../components/DynamicBackground";


export default function ErrorHome() {
    return (
        <div className="homeClient">
            <DynamicBackground />
            <p className="paragraphCard">Dati non presenti</p>
        </div>
    )
}
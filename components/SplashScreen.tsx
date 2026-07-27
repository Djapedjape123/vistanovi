"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen() {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
        const hideTimer = setTimeout(() => setLoading(false), 2500);
        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    if (!loading) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            <img
                src="https://res.cloudinary.com/duomot4hp/image/upload/v1785149684/ChatGPT_Image_27._%D1%98%D1%83%D0%BB_2026._13_03_26_z5djuf.png"
                alt="Logo"
               
                loading="eager"
                className="w-full h-full object-contain  sm:p-12 md:p-16"
            />
        </div>
    );
}
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="sticky top-0 z-50 px-6  text-white bg-white/70 backdrop-blur-md">
            <div className="flex items-center justify-between">


                <Link href="/"><div className="flex justify-center items-center">
                    <Image
                        src={'/biko.png'}

                        loading="eager"
                        alt="logo"
                        width={60}
                        height={60}
                    >

                    </Image>
                    <h3 className="text-md text-red-500 font-bold ">Biko <br /> Book</h3>
                </div></Link>


                <div className="hidden md:flex gap-8 text-black">
                    <Link href="/">Home</Link>
                    <Link href="/allBooks">All Books</Link>
                    <Link href="/profile">Profile</Link>
                </div>


                <div className="hidden md:block">
                    <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
                        Sign In
                    </button>
                </div>


                <div className="md:hidden text-black">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                </div>
            </div>


            {menuOpen && (
                <div className="mt-4 flex flex-col text-black gap-4 md:hidden">
                    <Link href="/">Home</Link>
                    <Link href="/books">All Books</Link>
                    <Link href="/profile">Profile</Link>
                    <button className="bg-blue-500 px-4 py-2 rounded text-white">
                        Sign In
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
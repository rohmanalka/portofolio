import { useState, useEffect } from "react"
import GradientText from "../assets/GradientText";

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="navbar py-7 flex items-center justify-between">
            <div className="logo">
                <h1 className="text-3xl font-bold text-black p-1 md:bg-transparent 
                    md:text-white">
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class"
                    >
                        PortoKautsar
                    </GradientText>
                </h1>
            </div>
            <ul className={`menu flex items-center sm:gap-10 gap-3 md:static fixed top-0 left-0 w-full justify-center
                md:w-auto md:justify-start md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl
                md:bg-transparent transition-all md:transition-none z-40 ${
                    active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
                <li>
                    <a href="#beranda" className="sm:text-lg text-[13px] font-medium cursor-target">Beranda</a>
                </li>
                <li>
                    <a href="#tentang" className="sm:text-lg text-[13px] font-medium cursor-target">Tentang</a>
                </li>
                <li>
                    <a href="#proyek" className="sm:text-lg text-[13px] font-medium cursor-target">Proyek</a>
                </li>
                <li>
                    <a href="#sertif" className="sm:text-lg text-[13px] font-medium cursor-target">Sertifikat</a>
                </li>
                <li>
                    <a href="#kontak" className="sm:text-lg text-[13px] font-medium cursor-target">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
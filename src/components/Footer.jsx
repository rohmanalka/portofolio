const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">PortoKautsar</h1>
        <div className="flex gap-7">
            <a href="#beranda" className="cursor-target">Beranda</a>
            <a href="#tentang" className="cursor-target">Tentang</a>
            <a href="#proyek" className="cursor-target">Proyek</a>
            <a href="#sertif" className="cursor-target">Sertifikat</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="https://github.com/rohmanalka" target="_blank">
                <i className="ri-github-fill ri-2x cursor-target"></i>
            </a>
            <a href="https://www.instagram.com/rohmanalka_/" target="_blank">
                <i className="ri-instagram-fill ri-2x cursor-target"></i>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-rohman-al-kautsar-b5b52322a" target="_blank">
                <i className="ri-linkedin-fill ri-2x cursor-target"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer
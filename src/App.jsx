function App() {

  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src="assets/profile.png" alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <p>
              Tiada yang lebih indah dari rencana tuhan
            </p>
          </div>
          <h1 className="text-3xl/tight font-bold mb-6">
            Hi, Saya Muhammad Rohman Al Kautsar
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya Mahasiswa Politeknik Negeri Malang, jurusan Sistem Informasi Bisnis dengan fokus pada pengembangan software.
            Saya memiliki minat besar dalam perkembangan dunia teknologi untuk menciptakan solusi digital yang bermanfaat dan efisien.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="https://drive.google.com/file/d/1dZlG-jD20vZJRlRqNTkZnZf_FKuQ4V1R/view?usp=sharing" target="_blank" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
              <i className="ri-download-2-line ri-lg pr-2"></i>
              Download CV
            </a>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
              Lihat Proyek
              <i className="ri-arrow-down-line ri-lg pl-2"></i>
            </a>
          </div>
        </div>
        <div className="w-[400px] h-[500px] md:ml-auto">
            <img src='assets/profile.png' alt="Hero Image" className="w-[500px] md:ml-auto" loading="lazy" />
        </div>
      </div>
      {/* Hero Section */}
    </>
  )
}

export default App

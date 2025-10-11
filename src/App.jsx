import { listTools, listProyek, listSertif } from "./data"

function App() {

  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src="assets/profile.jpg" alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
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

      {/* About Section */}
        <div className="tentang mt-32 py-10" id="tentang">
          <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
            <img src="assets/profile.jpg" alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
            <p className="text-base/loose mb-10">
              Saya merupakan lulusan SMK Telkom Malang jurusan Teknik Komputer dan Jaringan dengan 
              peminatan Cyber Security. Selama masa studi, saya memperoleh pengalaman magang di VEDC 
              Malang sebagai IT Support, dengan keterlibatan pada pengembangan proyek IoT, Metaverse, 
              serta konfigurasi jaringan.
            </p>
            <div className="flex items-center justify-between">
              <img src="assets/profile.jpg" alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
              <div className="flex items-center gap-6">
                <div>
                  <h1 className="text-4xl mb-1">
                    4 <span className="text-violet-500">+</span>
                  </h1>
                  <p>Proyek Selesai</p>
                </div>
                <div>
                  <h1 className="text-4xl mb-1">
                    1 <span className="text-violet-500">+</span>
                  </h1>
                  <p>Tahun Pengalaman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Section */}
    </>
  )
}

export default App

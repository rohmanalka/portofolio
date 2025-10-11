import { useState, useEffect } from "react"
import LightRays from "./assets/LightRays"
import ShinyText from "./assets/ShinyText"
import TextType from "./assets/TextType"
import ProfileCard from './assets/ProfileCard'
import { listTools, listProyek, listSertif } from "./data"
import TargetCursor from "./assets/TargetCursor"

function App() {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    handleResize() // cek saat mount
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
    <div className="relative min-h-screen">
      {isDesktop && (
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor={true}
        />
      )}
      <div className="fixed inset-0 -z-10">
        <LightRays 
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div className="relative z-10">
      {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src="assets/profile.jpg" alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <p>
              <ShinyText
                text="Tiada yang lebih indah dari rencana Tuhan 😎" 
                disabled={false} 
                speed={3} 
                className='custom-class' 
              />
            </p>
          </div>
          <h1 className="text-3xl/tight font-bold mb-6">
            <TextType
              text={["Hi, Saya Muhammad Rohman Al Kautsar", "Ayo Cari Tau Tentang Saya"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya Mahasiswa Politeknik Negeri Malang, jurusan Sistem Informasi Bisnis dengan fokus pada pengembangan software.
            Saya memiliki minat besar dalam perkembangan dunia teknologi untuk menciptakan solusi digital yang bermanfaat dan efisien.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="https://drive.google.com/file/d/1dZlG-jD20vZJRlRqNTkZnZf_FKuQ4V1R/view?usp=sharing" target="_blank" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 cursor-target">
              <i className="ri-download-2-line ri-lg pr-2"></i>
              Download CV
            </a>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 cursor-target">
              Lihat Proyek
              <i className="ri-arrow-down-line ri-lg pl-2"></i>
            </a>
          </div>
        </div>
        <div className="w-[400px] h-[500px] md:ml-auto">
            {/* <img src='assets/profile.png' alt="Hero Image" className="w-[500px] md:ml-auto" loading="lazy" /> */}
            <ProfileCard 
              name="M Rohman Al K"
              title="Software Engineer"
              handle="rohmanalka_"
              status="Student"
              contactText="Contact Me"
              avatarUrl="/assets/profile.png"
              iconUrl="/assets/codeIcon.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => window.open("https://wa.me/6287856432962?text=Halo%20saya%20tertarik%20dengan%20portofolio%20Anda!", "_blank")}
            />
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

          <div className="tools mt-32">
            <h1 className="text-4xl/snug font-bold mb-4" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">Tools yang dipakai</h1>
            <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
              Berikut beberapa tools yang biasa saya pakai
            </p>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {listTools.map(tool => (
                <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md 
                hover:bg-zinc-800 group cursor-target" key={tool.id} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
                <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.keterangan}</p>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
        {/* About Section */}

        {/* Proyek Section */}
        <div className="proyek mt-32 py-10" id="proyek">
          <h1 className="text-center text-4xl font-bold mb-2" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
          <p className="text-base/loose text-center opacity-50" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            Berikut beberapa proyek yang telah saya buat
          </p>
          <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map(proyek => (
              <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
                <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
                <div>
                  <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a href={proyek.link} className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 cursor-target">Dokumentasi</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Proyek Section */}

        {/* Serti Section */}
        <div className="sertif mt-32 py-10" id="sertif">
          <h1 className="text-center text-4xl font-bold mb-2" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">Sertifikat</h1>
          <p className="text-base/loose text-center opacity-50" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            Berikut beberapa sertifikat yang saya dapat
          </p>
          <div className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {listSertif.map((sertif) => (
              <div
                key={sertif.id}
                className="break-inside-avoid mb-4 bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 cursor-target"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay={sertif.dad}
                data-aos-once="true"
              >
                <img
                  src={sertif.gambar}
                  alt={sertif.nama}
                  className="w-full object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h1 className="text-lg font-bold mb-2">{sertif.nama}</h1>
                  <p className="text-sm opacity-70 mb-4">{sertif.desk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Serti Section */}

        {/* Contact Section */}
        <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
          <h1 className="text-4xl mb-2 font-bold text-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
          <p className="text-base/loose text-center mb-10 opacity-50" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari Terhubung dengan Saya</p>
          <form action="https://formsubmit.co/rohmanalka06@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Nama Lengkap</label>
                <input type="text" name="nama" placeholder="Masukkan Nama..." className="border border-zinc-500 p-2 rounded-md" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input type="email" name="email" placeholder="Masukkan Email..." className="border border-zinc-500 p-2 rounded-md" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="font-semibold">Pesan</label>
                <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600 cursor-target">Kirim Pesan</button>
              </div>
            </div>
          </form>
        </div>
        {/* Contact Section */}
      </div>
    </div>
    </>
  )
}

export default App

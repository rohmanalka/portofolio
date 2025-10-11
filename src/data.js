import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/php.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/laravel.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/flutter.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Library",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "PHP",
    ket: "Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Laravel",
    ket: "Framework",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Flutter",
    ket: "Framework",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
// import Proyek3 from "/assets/proyek/proyek3.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Sistem Informasi Akreditasi",
    desk: "Sistem berbasis Laravel untuk mengelola dan memvalidasi data akreditasi program studi D-IV Sistem Informasi Bisnis (SIB), termasuk manajemen dokumen PPEPP (Penetapan, Pelaksanaan, Evaluasi, Pengendalian, Peningkatan) serta proses validasi dari kajur dan direktur.",
    tools: ["Laravel", "Bootstrap", "MySQL"],
    dad: "200",
    link: "https://github.com/rohmanalka/PBL_AKREDITASI"
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Sistem Informasi Bebas Tanggungan",
    desk: "Sistem berbasis Laravel untuk memantau dan memverifikasi status bebas tanggungan mahasiswa (perpustakaan, administrasi, dan lainnya) sebagai syarat kelulusan.",
    tools: ["Laravel", "Bootstrap", "MySQL"],
    dad: "300",
    link: "https://github.com/rohmanalka/PBLTanggungan"
  },
  // {
  //   id: 3,
  //   gambar: Proyek3,
  //   nama: "Sistem Informasi Classroom",
  //   desk: "Sistem berbasis Laravel untuk mempermudah proses pembelajaran antara dosen dan mahasiswa dengan menyediakan fitur manajemen kelas, distribusi tugas, pengumpulan tugas secara daring, serta pemantauan aktivitas akademik",
  //   tools: ["Laravel", "Bootstrap", "MySQL"],
  //   dad: "400",
  //   link: "https://github.com/rohmanalka/PWLUTS_Classroom"
  // }
];

import Sertif1 from "/assets/sertif/sertif1.jpg";
import Sertif2 from "/assets/sertif/sertif2.jpg";
import Sertif3 from "/assets/sertif/sertif3.jpg";
import Sertif4 from "/assets/sertif/sertif4.jpg";
import Sertif5 from "/assets/sertif/sertif5.jpg";
import Sertif6 from "/assets/sertif/sertif6.jpg";
import Sertif7 from "/assets/sertif/sertif7.jpg";
import Sertif8 from "/assets/sertif/sertif8.jpg";
import Sertif9 from "/assets/sertif/sertif9.jpg";
import Sertif10 from "/assets/sertif/sertif10.jpg";

export const listSertif = [
  {
    id: 1,
    gambar: Sertif1,
    nama: "UKL Jaringan",
    desk: "Sertifikat Uji Kompetensi Level Teknik Komputer Jaringan dengan proyek Rancang Bangun Jaringan WAN Berbasis Kabel & Nirkabel dengan Layanan Server dan VoIP",
    dad: "200",
  },
  {
    id: 2,
    gambar: Sertif2,
    nama: "UKK Jaringan",
    desk: "Sertifikat Uji Kompetensi Keahlian Teknik Komputer Jaringan dengan Expertise Cyber Security bersama PT. BEON Intermedia (jagoanhosting.com)",
    dad: "300",
  },
  {
    id: 3,
    gambar: Sertif3,
    nama: "CyberOps Associate",
    desk: "Sertifikat Cisco Networking Academy CyberOps Associate course",
    dad: "400",
  },
  {
    id: 4,
    gambar: Sertif4,
    nama: "Microsoft Technology Associate",
    desk: "Sertifikat Microsoft Technology Associate Security Fundamentals",
    dad: "500",
  },
  {
    id: 5,
    gambar: Sertif5,
    nama: "Certiport",
    desk: "Sertifikat Certiport IT Specialist Networking",
    dad: "600",
  },
  {
    id: 6,
    gambar: Sertif6,
    nama: "RevoU",
    desk: "Sertifikat RevoU Software Engineering Fundamental Course",
    dad: "700",
  },
  {
    id: 7,
    gambar: Sertif7,
    nama: "SAP / Asean Foundation",
    desk: "Sertifikat Asean Data Science Explorers SAP Analytics Cloud and SAP Build Apps",
    dad: "800",
  },
  {
    id: 8,
    gambar: Sertif8,
    nama: "Komdigi VSGA",
    desk: "Sertifikat Digitalent Vocational School Graduate Academy Associate Data Scientist",
    dad: "900",
  },
  {
    id: 9,
    gambar: Sertif9,
    nama: "BNSP",
    desk: "Sertifikat BNSP Associate Data Scientist",
    dad: "1000",
  },
  {
    id: 10,
    gambar: Sertif10,
    nama: "Internship",
    desk: "Sertifikat Praktik Kerja Lapangan",
    dad: "1100",
  },
];
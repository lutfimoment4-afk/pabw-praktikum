// ==========================================
// LEMBAR B: Data Profil dan Variabel (const & let)
// ==========================================
const namaLengkap = "Muhammad Lutfi Fazlullah";
const peranPengguna = "Mahasiswa Informatika — NIM: 25523031";
const daftarKeahlian = ["HTML", "CSS", "JavaScript"];
let jumlahProyek = 3;

const profil = {
  nama: namaLengkap,
  peran: peranPengguna,
  keahlian: daftarKeahlian,
};

// Menggunakan Template Literal (Lembar B.2)
const kalimatPerkenalan = `Nama saya ${profil.nama}, seorang ${profil.peran} dengan ${profil.keahlian.length} keahlian utama.`;
console.log(kalimatPerkenalan);


// ==========================================
// LEMBAR C: Dua Fungsi Murni (Pure Functions)
// ==========================================

// 1. Fungsi murni untuk menyusun kalimat perkenalan dari satu object (Lembar C.1)
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Fungsi murni (arrow function) untuk merapikan daftar keahlian menjadi satu baris teks (Lembar C.1)
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));


// ==========================================
// LEMBAR D: Struktur Data & Array Methods
// ==========================================

// Data buku sesuai tampilan web Rak Buku Lutfi
const daftarBuku = [
  { judul: "maaf tuhan, aku hampir menyerah", penulis: "alfialghazi", tahun: 2020, status: "Selesai" },
  { judul: "makan mie ayam sebelum mati", penulis: "eka kurniawan", tahun: 2016, status: "Selesai" },
  { judul: "laut bercerita", penulis: "leila s. chudori", tahun: 2020, status: "Sedang Dibaca" }
];

const daftarProyek = [
  { judul: "Rak Buku Lutfi", tahun: 2026, selesai: true },
  { judul: "Katalog Produk Web", tahun: 2026, selesai: false }
];

// Yang harus tercetak di Console (Lembar D.3)
console.table(profil.keahlian);
console.table(daftarBuku);

// Filter buku yang statusnya Selesai
const bukuSelesai = daftarBuku.filter((buku) => buku.status === "Selesai");
console.table(bukuSelesai);

// Find mencari satu buku berdasarkan penulis
const bukuDicari = daftarBuku.find((buku) => buku.penulis === "eka kurniawan");
console.log(bukuDicari);

// Map mengubah array proyek menjadi array judul saja
const katalogMap = daftarProyek.map((proyek) => proyek.judul);
console.table(katalogMap);
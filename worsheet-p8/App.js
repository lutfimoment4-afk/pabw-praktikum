// ==========================================
// LEMBAR B: Data Profil dan Variabel (const & let)
// ==========================================
const namaPemilik = "Muhammad Lutfi Fazlullah";
const peranPemilik = "Mahasiswa Informatika";
let statusAktif = "Menjelajahi koleksi buku";

const profilRak = {
  nama: namaPemilik,
  peran: peranPemilik,
  kategoriFavorit: ["Pemrograman Java", "Algoritma", "Struktur Data", "Web Development"]
};

// Menggunakan Template Literal
const infoRingkas = `Rak buku milik ${profilRak.nama} (${profilRak.peran}) memiliki ${profilRak.kategoriFavorit.length} kategori utama.`;
console.log(infoRingkas);


// ==========================================
// LEMBAR C: Dua Fungsi Murni (Pure Functions)
// ==========================================

// 1. Fungsi murni untuk menyusun kalimat perkenalan pemilik rak
function buatPerkenalanRak({ nama, peran }) {
  return `Pemilik Rak: ${nama} — Status: ${peran}`;
}

// 2. Fungsi murni (arrow function) untuk merapikan daftar kategori keahlian/buku
const formatKategoriBuku = (daftarKategori) => daftarKategori.join(" · ");

// Menguji fungsi di Console
console.log(buatPerkenalanRak(profilRak));
console.log("Kategori:", formatKategoriBuku(profilRak.kategoriFavorit));


// ==========================================
// LEMBAR D: Struktur Data (Array of Objects) & Array Methods
// ==========================================
const daftarBuku = [
  { id: 1, judul: "Pemrograman Berorientasi Objek Java", penulis: "Budi Raharjo", tahun: 2024, selesaiBaca: true },
  { id: 2, judul: "Algoritma dan Struktur Data dalam Java", penulis: "Rinaldi Munir", tahun: 2023, selesaiBaca: true },
  { id: 3, judul: "Desain Web Modern & WCAG", penulis: "Andi Prasetyo", tahun: 2025, selesaiBaca: false },
  { id: 4, judul: "Jaringan Komputer dan Cisco Packet Tracer", penulis: "Dian Sastrowardoyo", tahun: 2026, selesaiBaca: false }
];

// Menampilkan seluruh daftar buku sebagai tabel di Console
console.log("--- TABEL SELURUH BUKU ---");
console.table(daftarBuku);

// 1. Menggunakan FILTER: Menyaring buku yang sudah selesai dibaca
const bukuSelesai = daftarBuku.filter((buku) => buku.selesaiBaca);
console.log("--- BUKU YANG SUDAH SELESAI DIBACA ---");
console.table(bukuSelesai);

// 2. Menggunakan FIND: Mencari satu buku spesifik berdasarkan judul
const bukuDicari = daftarBuku.find((buku) => buku.judul.includes("Java"));
console.log("--- HASIL PENCARIAN (FIND) ---");
console.log(bukuDicari);

// 3. Menggunakan MAP: Membuat array baru berisi judul buku saja (tanpa mengubah data asli)
const judulBukuSaja = daftarBuku.map((buku) => buku.judul);
console.log("--- DAFTAR JUDUL BUKU (MAP) ---");
console.table(judulBukuSaja);
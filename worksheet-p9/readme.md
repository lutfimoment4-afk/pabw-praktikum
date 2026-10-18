# Worksheet P-9: Rak Buku Lutfi

## Deskripsi Proyek

Rak Buku Lutfi adalah proyek website sederhana untuk menampilkan dan mengelola koleksi buku pribadi. Proyek ini dibuat untuk mempraktikkan penggunaan JavaScript, pengolahan data, fungsi murni, array methods, dan manipulasi DOM.

Website ini menampilkan informasi profil mahasiswa serta daftar buku yang berisi judul, penulis, tahun terbit, status membaca, dan gambar sampul buku.

## Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- Live Server

## Fitur

- Menampilkan profil mahasiswa.
- Menampilkan daftar keahlian.
- Menampilkan koleksi buku.
- Memfilter buku berdasarkan status membaca.
- Mencari buku berdasarkan data penulis.
- Mengolah data buku menggunakan `filter()`, `find()`, dan `map()`.
- Menampilkan data dan hasil pengolahan melalui Console.
- Menggunakan fungsi murni (*pure functions*) dan template literal.

## Struktur Folder

```text
worksheet-p9/
├── profil.html
├── base.css
├── komponen.css
├── layout.css
├── tema.css
├── token.css
├── readme.md
└── js/
    ├── app.js
    └── dom.js
```

*Catatan: Sesuaikan struktur ini dengan susunan file proyek yang sebenarnya.*

## Cara Menjalankan Proyek

1. Buka folder `worksheet-p9` di Visual Studio Code.
2. Pastikan semua file HTML, CSS, dan JavaScript tersedia.
3. Jalankan `profil.html` menggunakan ekstensi Live Server.
4. Buka website melalui browser.
5. Tekan `F12`, kemudian pilih tab Console untuk melihat hasil pengolahan data JavaScript.

## Implementasi JavaScript

### 1. Variabel dan Objek

Menggunakan `const` dan `let` untuk menyimpan data profil, daftar keahlian, dan jumlah proyek. Data profil dikelompokkan dalam objek JavaScript.

### 2. Template Literal

Menggunakan template literal untuk menyusun kalimat perkenalan berdasarkan data profil.

### 3. Fungsi Murni

Menggunakan fungsi `buatPerkenalan()` untuk menyusun informasi profil dan `formatKeahlian()` untuk menggabungkan daftar keahlian menjadi satu baris teks.

### 4. Array Methods

- `filter()` untuk mendapatkan buku yang berstatus selesai.
- `find()` untuk mencari satu buku berdasarkan nama penulis.
- `map()` untuk menghasilkan daftar judul buku.

### 5. Console

Menggunakan `console.log()` dan `console.table()` untuk memeriksa serta menampilkan hasil pengolahan data.

## Identitas Mahasiswa

**Nama:** Muhammad Lutfi Fazlullah  
**Program Studi:** Informatika  
**NIM:** 25523031

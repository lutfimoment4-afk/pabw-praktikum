# Worksheet P-10: JavaScript Asinkron

## Deskripsi Proyek

Proyek ini dibuat untuk memenuhi tugas Praktikum PABW Pertemuan 10 tentang JavaScript Asinkron, Fetch API, Promise, dan JSON.

Proyek ini merupakan lanjutan dari proyek Rak Buku Lutfi pada pertemuan sebelumnya, dengan penambahan fitur untuk mengambil dan menampilkan data berita dari file JSON lokal.

## Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript
- Fetch API
- Promise dan `async/await`
- JSON
- Visual Studio Code
- Live Server



## Fitur

- Mengambil data secara asinkron menggunakan Fetch API.
- Menggunakan `async/await` untuk menangani proses asinkron.
- Memeriksa respons HTTP menggunakan `response.ok`.
- Membaca data JSON menggunakan `response.json()`.
- Menampilkan data berita secara dinamis pada halaman web.
- Menangani empat kondisi tampilan: loading, success, failure, dan empty.
- Memisahkan logika pengambilan data ke dalam file `js/api.js`.
- Menangani kesalahan menggunakan `try/catch`.

## Sumber Data

Proyek ini menggunakan file `news.json` lokal sebagai sumber data, bukan API publik. Cara ini digunakan untuk mempraktikkan pengambilan, pembacaan, dan penampilan data JSON.

## Cara Menjalankan Proyek

1. Buka folder `worksheet-p10` menggunakan Visual Studio Code.
2. Pastikan file `news.json` berada di folder utama proyek.
3. Pastikan ekstensi Live Server sudah tersedia.
4. Klik kanan file `profil.html`, kemudian pilih **Open with Live Server**.
5. Tekan `F12` untuk membuka Developer Tools di browser.
6. Periksa tab Console dan Network untuk melihat hasil permintaan data.

## Pengujian

Pengujian dilakukan pada beberapa kondisi berikut:

1. **Success:** Data JSON berhasil dimuat dan tiga artikel ditampilkan.
2. **Failure:** Kesalahan alamat file menghasilkan pesan error.
3. **Empty:** Array artikel kosong menampilkan pesan bahwa belum ada berita.
4. **Loading:** Pesan pemuatan ditampilkan selama proses pengambilan data.
5. **Respons HTTP:** Status respons dan nilai `response.ok` diperiksa melalui Console.

Setelah pengujian selesai, alamat file dan data JSON dikembalikan ke kondisi semula.

## Hasil Pembelajaran

Melalui tugas ini, saya mempelajari cara:

- Mengambil data menggunakan Fetch API.
- Menangani Promise dengan `async/await`.
- Membaca dan memeriksa data JSON.
- Menangani kesalahan menggunakan `try/catch`.
- Memperbarui konten halaman menggunakan DOM.
- Menguji berbagai kondisi aplikasi melalui Developer Tools.

## Identitas Mahasiswa

**Nama:** Muhammad Lutfi Fazlullah  
**Program Studi:** Informatika  
**NIM:** 25523031

import { daftarBuku } from "./App.js";

// ==========================================
// A. MEMILIH ELEMEN HTML (DOM SELECTORS)
// ==========================================
const container = document.querySelector("#list");
const emptyMessage = document.querySelector("#empty");
const filterRow = document.querySelector("#filter");
const form = document.querySelector("#book-form");

const titleInput = document.querySelector("#judul-buku");
const authorInput = document.querySelector("#penulis-buku");
const yearInput = document.querySelector("#tahun-terbit");
const statusInput = document.querySelector("#status-baca");

const submitButton = document.querySelector("#submit-button");
const successMessage = document.querySelector("#success-message");

// Pastikan elemen HTML ditemukan
if (
  !container ||
  !emptyMessage ||
  !filterRow ||
  !form ||
  !titleInput ||
  !authorInput ||
  !yearInput ||
  !statusInput ||
  !submitButton ||
  !successMessage
) {
  throw new Error(
    "Elemen HTML tidak ditemukan. Periksa ID pada profil.html."
  );
}

// ==========================================
// B. DATA FIELD UNTUK VALIDASI FORM
// ==========================================
const fields = [
  {
    input: titleInput,
    error: document.querySelector("#judul-error"),
    validate(value) {
      return value.trim()
        ? ""
        : "Judul buku wajib diisi.";
    }
  },
  {
    input: authorInput,
    error: document.querySelector("#penulis-error"),
    validate(value) {
      return value.trim()
        ? ""
        : "Nama penulis wajib diisi.";
    }
  },
  {
    input: yearInput,
    error: document.querySelector("#tahun-error"),
    validate(value) {
      const year = Number(value);

      if (
        value.trim() === "" ||
        !Number.isInteger(year) ||
        year < 1900 ||
        year > 2026
      ) {
        return "Tahun harus antara 1900 dan 2026.";
      }

      return "";
    }
  },
  {
    input: statusInput,
    error: document.querySelector("#status-error"),
    validate(value) {
      const allowedStatuses = [
        "Selesai",
        "Sedang Dibaca",
        "Rencana Dibaca"
      ];

      return allowedStatuses.includes(value)
        ? ""
        : "Silakan pilih status baca.";
    }
  }
];

// ==========================================
// C. MEMBUAT KARTU BUKU
// ==========================================
function buildCard(book) {
  const item = document.createElement("li");
  item.className = "book-card";

  // Membuat gambar sampul
  if (book.sampul) {
    const cover = document.createElement("img");

    cover.className = "book-cover";
    cover.src = book.sampul;
    cover.alt = `Sampul ${book.judul}`;
    cover.loading = "lazy";

    item.append(cover);
  }

  // Membuat informasi buku
  const details = document.createElement("div");
  details.className = "book-details";

  const title = document.createElement("h3");
  title.textContent = book.judul;

  const author = document.createElement("p");
  author.textContent = `Penulis: ${book.penulis}`;

  const year = document.createElement("p");
  year.textContent = `Tahun terbit: ${book.tahun}`;

  const status = document.createElement("p");
  status.textContent = `Status baca: ${book.status}`;

  details.append(title, author, year, status);
  item.append(details);

  return item;
}

// ==========================================
// D. MENAMPILKAN DAFTAR BUKU (RENDER)
// ==========================================
function render(list) {
  // Kosongkan daftar sebelum dirender ulang
  container.replaceChildren();

  // Tampilkan pesan jika tidak ada buku
  emptyMessage.hidden = list.length !== 0;

  if (list.length === 0) {
    return;
  }

  const fragment = document.createDocumentFragment();

  list.forEach((book) => {
    const card = buildCard(book);
    fragment.append(card);
  });

  container.append(fragment);
}

// ==========================================
// E. FILTER BUKU DENGAN EVENT DELEGATION
// ==========================================
function getSelectedStatus() {
  const activeButton = filterRow.querySelector(
    "button.active"
  );

  return activeButton?.dataset.status || "all";
}

function markActiveButton(selectedButton) {
  filterRow.querySelectorAll("button").forEach((button) => {
    const isActive = button === selectedButton;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function applyFilter(status) {
  const filteredBooks = daftarBuku.filter((book) => {
    return status === "all" || book.status === status;
  });

  render(filteredBooks);
}

// Satu listener untuk semua tombol filter
filterRow.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button || !filterRow.contains(button)) {
    return;
  }

  if (!button.hasAttribute("data-status")) {
    return;
  }

  markActiveButton(button);
  applyFilter(button.dataset.status);
});

// ==========================================
// F. VALIDASI FORM
// ==========================================
function validateField(field, showError = true) {
  const message = field.validate(field.input.value);
  const isValid = message === "";

  if (showError && field.error) {
    field.error.textContent = message;
    field.error.hidden = isValid;

    field.input.setAttribute(
      "aria-invalid",
      String(!isValid)
    );
  }

  return isValid;
}

function validateForm(showErrors = true) {
  const results = fields.map((field) =>
    validateField(field, showErrors)
  );

  const isValid = results.every(Boolean);

  submitButton.disabled = !isValid;

  return isValid;
}

// Validasi saat pengguna mengisi setiap field
fields.forEach((field) => {
  field.input.addEventListener("input", () => {
    validateField(field);
    validateForm(false);
    successMessage.hidden = true;
  });

  field.input.addEventListener("change", () => {
    validateField(field);
    validateForm(false);
    successMessage.hidden = true;
  });
});

// ==========================================
// G. MENAMBAHKAN BUKU BARU
// ==========================================
form.addEventListener("submit", (event) => {
  // Mencegah halaman dimuat ulang
  event.preventDefault();

  // Periksa semua input
  if (!validateForm(true)) {
    return;
  }

  // Buat objek buku baru
  const newBook = {
    judul: titleInput.value.trim(),
    penulis: authorInput.value.trim(),
    tahun: Number(yearInput.value),
    status: statusInput.value,
    sampul: ""
  };

  // Tambahkan ke array buku
  daftarBuku.push(newBook);

  // Tampilkan daftar sesuai filter aktif
  applyFilter(getSelectedStatus());

  // Kosongkan form setelah berhasil
  form.reset();

  // Sembunyikan seluruh pesan validasi
  fields.forEach((field) => {
    if (field.error) {
      field.error.textContent = "";
      field.error.hidden = true;
    }

    field.input.removeAttribute("aria-invalid");
  });

  // Nonaktifkan tombol karena form kembali kosong
  submitButton.disabled = true;

  // Tampilkan pesan sukses
  successMessage.textContent =
    "Buku berhasil ditambahkan ke daftar!";

  successMessage.hidden = false;
});

// ==========================================
// H. TAMPILAN AWAL
// ==========================================
const allButton = filterRow.querySelector(
  '[data-status="all"]'
);

if (allButton) {
  markActiveButton(allButton);
}

render(daftarBuku);

// Tombol nonaktif saat form masih kosong.
// Tidak menampilkan pesan error saat halaman dibuka.
validateForm(false);

<div align="center">

# ✨ Jejak Kediri

<img src="https://img.shields.io/badge/Jenius-heritage%20tech-FFB7C5?style=for-the-badge" alt="Jenius heritage tech" />
<img src="https://img.shields.io/badge/stack-Vinext%20%2B%20React%2019-E8D5FF?style=for-the-badge" alt="Stack" />
<img src="https://img.shields.io/badge/node-%3E%3D22.13.0-B8E8FC?style=for-the-badge" alt="Node version" />

**Menyusuri jejak Panjalu hingga Kediri masa kini — museum digital yang ceria, rapi, dan mudah dijelajah.** 🌸

[Quickstart](docs/quickstart.md) · [Folder map](docs/folder-map.md) · [Contributing](CONTRIBUTING.md)

</div>

---

## 💖 Tentang proyek

Jejak Kediri adalah situs edukasi dan wisata budaya: linimasa interaktif, peta situs, galeri arsip, layanan (kuis & panduan), plus **KediriPedia** untuk pengalaman baca mendalam.

Tone visual: hangat, feminin-technological (palet Jenius), tetap akurat secara sejarah.

## 🌸 Fitur utama

- Beranda dengan linimasa, peta, dan galeri foto berlisensi jelas
- Rute `/kediripedia` untuk narasi panjang
- Opsional: identitas pengunjung via ChatGPT Sign-In (lihat [platform notes](docs/platform-vinext.md))
- Skema Drizzle siap untuk D1 bila diperlukan

## 🛠 Instalasi

**Prasyarat:** Node.js `>=22.13.0`

```bash
git clone https://github.com/drnovia/jejakkediri.git
cd jejakkediri
npm install
```

## 🚀 Pemakaian

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Server pengembangan lokal |
| `npm run build` | Verifikasi build Vinext |
| `npm test` | Build + tes HTML tersaji |
| `npm run lint` | ESLint |
| `npm run db:generate` | Generate migrasi Drizzle |

Detail langkah demi langkah: [`docs/quickstart.md`](docs/quickstart.md).

## 📁 Struktur folder

```text
app/          → halaman & komponen UI
public/       → foto & logo (WebP)
tests/        → tes regresi HTML
docs/         → dokumentasi tim
db/           → schema database
```

Peta lengkap: [`docs/folder-map.md`](docs/folder-map.md).

## 🤝 Kontribusi

Kami senang menerima PR kecil yang terfokus. Baca [`CONTRIBUTING.md`](CONTRIBUTING.md) untuk alur branch, tes, dan aturan konten arsip.

## 📜 Lisensi

MIT — lihat [`LICENSE`](LICENSE).

---

<p align="center"><sub>💫 Dibuat dengan cinta untuk Kediri · Jenius brand family</sub></p>

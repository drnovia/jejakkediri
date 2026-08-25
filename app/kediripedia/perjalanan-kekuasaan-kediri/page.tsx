import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perjalanan Kekuasaan Kediri — KediriPedia",
  description: "Membaca perubahan pusat kuasa melalui Panjalu, Jayabaya, dan peralihan menuju Singhasari.",
};

const chapters = [
  ["01", "LATAR BELAKANG", "Kediri tumbuh di antara aliran Brantas, jalur niaga, dan perubahan politik Jawa Timur. Nama Panjalu tidak hadir sebagai satu peristiwa tunggal, melainkan sebagai lapisan ruang dan ingatan yang terus bergeser.", "/photos/prasasti-hantang-commons.webp", "Prasasti Hantang — artefak Museum Nasional Indonesia"],
  ["02", "TOKOH-TOKOH PENTING", "Airlangga, Jayabaya, dan para pemegang kuasa sesudahnya membentuk rangkaian cerita yang tidak pernah benar-benar terputus. Setiap nama membuka cara baru untuk membaca zamannya.", "/photos/candi-singhasari-commons.webp", "Candi Singhasari — visual konteks masa transisi"],
  ["03", "PERISTIWA", "Pembagian Panjalu dan Jenggala, masa kejayaan Jayabaya, hingga Ganter dan peralihan ke Singhasari menunjukkan bahwa sejarah Kediri adalah sejarah tentang perubahan pusat kuasa.", "/photos/tegowangi-relief-commons.webp", "Relief Candi Tegowangi — bahasa visual cerita Panji"],
  ["04", "DAMPAK", "Jejaknya masih terasa pada situs, nama tempat, cerita lisan, dan cara warga memaknai ruang. Masa lalu menjadi lapisan yang hidup di tengah kota dan kabupaten hari ini.", "/photos/jembatan-brawijaya-commons.webp", "Jembatan Brawijaya — Kediri modern"],
];

export default function JourneyArticlePage() {
  return <main className="article-shell">
    <header className="article-nav page-width"><a className="pedia-wordmark" href="/kediripedia"><span>KEDIRI</span><b>PEDIA</b></a><a href="/kediripedia">← KEMBALI KE KEDIRIPEDIA</a></header>
    <article className="article-page page-width">
      <p className="pedia-kicker">PERISTIWA · FEATURED STORY</p>
      <h1>Perjalanan<br /><i>Kekuasaan Kediri</i></h1>
      <p className="article-period">Abad XI–XIII</p>
      <p className="article-intro">Membaca perubahan pusat kuasa melalui Panjalu, Jayabaya, dan peralihan menuju Singhasari.</p>
      <div className="article-line"><span /> <i /> <span /> <i /> <span /> <i /> <span /></div>
      <div className="article-chapters">{chapters.map(([number, heading, copy, image, alt]) => <section key={number} className="article-chapter"><div className="article-chapter-number">{number}</div><div className="article-chapter-content"><p className="pedia-kicker">{heading}</p><p>{copy}</p><figure><img src={image} alt={alt} loading="lazy" /><figcaption>{alt}</figcaption></figure></div></section>)}</div>
      <section className="article-sources"><p className="pedia-kicker">SUMBER & ARSIP</p><h2>Catatan untuk membaca lebih jauh.</h2><p>Artikel ini adalah pengantar editorial. Rujukan visual dan lisensi foto ditautkan pada Kredit Foto di halaman utama Jejak Kediri, dengan artefak dan situs diberi keterangan konteks secara eksplisit.</p><a href="/">KEMBALI KE PERJALANAN SEJARAH →</a></section>
    </article>
  </main>;
}

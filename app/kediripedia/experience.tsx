"use client";

import { useEffect, useMemo, useState } from "react";

type Story = {
  id: string;
  category: string;
  year: string;
  title: string;
  dek: string;
  image: string;
  meta: string;
};

const events = [
  { year: "879 M", title: "Jejak awal Panjalu", note: "Lanskap kekuasaan mulai berjejak di Jawa Timur." },
  { year: "1042 M", title: "Panjalu & Jenggala", note: "Pembagian Airlangga membentuk dua arah sejarah." },
  { year: "1135 M", title: "Jayabaya", note: "Masa keemasan, sastra, dan ingatan yang panjang." },
  { year: "1222 M", title: "Peralihan Singhasari", note: "Ganter mengubah pusat kuasa Jawa Timur." },
  { year: "Abad XIV", title: "Jejaring Majapahit", note: "Candi dan kisah Panji menyusun bahasa visual baru." },
  { year: "Kini", title: "Kediri modern", note: "Kota lama, ruang publik, dan akar yang terus dirawat." },
];

const stories: Story[] = [
  { id: "perjalanan-kekuasaan-kediri", category: "PERISTIWA", year: "Abad XI–XIII", title: "Perjalanan Kekuasaan Kediri", dek: "Membaca perubahan pusat kuasa melalui Panjalu, Jayabaya, dan peralihan menuju Singhasari.", image: "/photos/prasasti-hantang-commons.webp", meta: "15 menit membaca · 5 bab" },
  { id: "jayabaya-masa-kejayaan", category: "TOKOH", year: "1135–1157 M", title: "Jayabaya dan Masa Kejayaan Kediri", dek: "Prasasti, sastra, dan bayang-bayang seorang raja yang terus hidup dalam ingatan Jawa.", image: "/photos/prasasti-hantang-commons.webp", meta: "8 menit membaca · arsip artefak" },
  { id: "ruang-candi-majapahit", category: "TEMPAT", year: "Abad XIV–XV", title: "Ruang Candi di Timur Kediri", dek: "Tegowangi dan Surowono menyimpan kisah Panji dalam batu, relief, dan lanskap desa.", image: "/photos/tegowangi-commons.webp", meta: "10 menit membaca · visual situs" },
  { id: "kota-gula-kediri", category: "SEJARAH", year: "Abad XIX–XX", title: "Kota, Gula, dan Jalur Baru", dek: "Stasiun, menara air, dan jalan kota menjadi arsip perubahan ekonomi Kediri.", image: "/photos/meritjan-water-tower-commons.webp", meta: "7 menit membaca · arsip kolonial" },
  { id: "budaya-selomangleng", category: "BUDAYA", year: "Lintas masa", title: "Selomangleng dan Ruang Ingatan", dek: "Situs, museum, dan tradisi membuat masa lalu tetap hadir di tengah kehidupan warga.", image: "/photos/selomangleng-commons.webp", meta: "6 menit membaca · situs & budaya" },
  { id: "arsip-stasiun-kediri", category: "ARSIP", year: "1882–1900an", title: "Stasiun dalam Arsip Kota", dek: "Satu bangunan, banyak perjalanan: bagaimana rel membentuk ritme baru Kediri.", image: "/photos/stasiun-kediri-commons.webp", meta: "5 menit membaca · arsip visual" },
];

const categories = ["SEMUA", "SEJARAH", "TOKOH", "PERISTIWA", "TEMPAT", "BUDAYA", "ARSIP"];

function EditorialLine({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? "editorial-line compact" : "editorial-line"} aria-hidden="true"><span /><i /><span /><i /><span /><i /><span /></div>;
}

function StoryCard({ story, feature = false }: { story: Story; feature?: boolean }) {
  return <a className={feature ? "pedia-story-card feature" : "pedia-story-card"} href={`/kediripedia/${story.id}`}>
    <div className="pedia-story-image"><img src={story.image} alt={`${story.title} — ${story.meta}`} loading={feature ? "eager" : "lazy"} /><span>{story.category}</span></div>
    <div className="pedia-story-copy"><small>{story.year}</small><h3>{story.title}</h3><p>{story.dek}</p><EditorialLine compact /><strong>BACA CERITA <b>→</b></strong><em>{story.meta}</em></div>
  </a>;
}

export default function KediriPediaExperience() {
  const [activeCategory, setActiveCategory] = useState("SEMUA");
  const [activeEvent, setActiveEvent] = useState(2);
  const filteredStories = useMemo(() => activeCategory === "SEMUA" ? stories : stories.filter((story) => story.category === activeCategory), [activeCategory]);

  useEffect(() => {
    const targets = document.querySelectorAll(".pedia-reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting)), { threshold: 0.12 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return <main className="pedia-shell">
    <header className="pedia-nav">
      <a className="pedia-wordmark" href="/kediripedia" aria-label="KediriPedia home"><span>KEDIRI</span><b>PEDIA</b></a>
      <nav aria-label="Navigasi KediriPedia">{categories.slice(1).map((category) => <a key={category} href={`#${category.toLowerCase()}`}>{category}</a>)}</nav>
      <a className="pedia-return" href="/">KEMBALI KE PERJALANAN <span>↗</span></a>
    </header>

    <section className="pedia-hero">
      <div className="pedia-hero-inner page-width">
        <p className="pedia-kicker">KEDIRI DIGITAL HISTORY · VOLUME 01</p>
        <h1>KEDIRI<span>PEDIA</span></h1>
        <p className="pedia-tagline">Ensiklopedia Digital Sejarah Kediri</p>
        <p className="pedia-hero-dek">Mengenal Kediri melalui cerita, tokoh, tempat, dan peristiwa yang membentuknya.</p>
        <a className="pedia-scroll-cue" href="#featured"><span>↓</span> MULAI MEMBACA</a>
      </div>
      <div className="pedia-hero-image"><img src="/photos/jembatan-lama-kediri-commons.webp" alt="Jembatan Lama Kediri di atas Brantas pada masa kolonial" fetchPriority="high" /></div>
      <div className="pedia-hero-caption">ARSIP KOTA · JEMBATAN LAMA KEDIRI · ±1900</div>
    </section>

    <section id="featured" className="pedia-featured page-width pedia-reveal">
      <div className="pedia-section-label"><span>FEATURED</span><EditorialLine /></div>
      <StoryCard story={stories[0]} feature />
    </section>

    <section className="pedia-lines-section page-width pedia-reveal" id="sejarah">
      <div className="pedia-section-heading"><p className="pedia-kicker">EDITORIAL LINES</p><h2>Satu garis, banyak perubahan.</h2><p>Telusuri simpul waktu yang mengubah cara Kediri tumbuh. Pilih satu titik untuk membuka fragmen ceritanya.</p></div>
      <div className="editorial-events" role="list" aria-label="Garis waktu peristiwa Kediri">
        <div className="editorial-events-line" />
        {events.map((event, index) => <button key={event.year} className={activeEvent === index ? "editorial-event active" : "editorial-event"} onClick={() => setActiveEvent(index)} role="listitem" aria-pressed={activeEvent === index}><span className="editorial-dot" /><small>{event.year}</small><strong>{event.title}</strong></button>)}
      </div>
      <div className="editorial-preview"><span>0{activeEvent + 1}</span><div><p>{events[activeEvent].year}</p><h3>{events[activeEvent].title}</h3><small>{events[activeEvent].note}</small></div><a href={`/kediripedia/${activeEvent === 2 ? "jayabaya-masa-kejayaan" : "perjalanan-kekuasaan-kediri"}`}>EXPLORE THIS STORY →</a></div>
    </section>

    <section id="peristiwa" className="pedia-library page-width pedia-reveal">
      <div className="pedia-section-heading split"><div><p className="pedia-kicker">THE LIBRARY</p><h2>Cerita untuk dibaca pelan-pelan.</h2></div><p>Catatan editorial, arsip foto, dan pengantar sejarah yang membuka jalan menuju sumber lebih dalam.</p></div>
      <div className="pedia-filters" role="tablist" aria-label="Filter cerita">{categories.map((category) => <button key={category} className={activeCategory === category ? "active" : ""} onClick={() => setActiveCategory(category)} role="tab" aria-selected={activeCategory === category}>{category}</button>)}</div>
      <div className="pedia-story-grid">{filteredStories.map((story, index) => <StoryCard key={story.id} story={story} feature={index === 0 && filteredStories.length > 2} />)}</div>
    </section>

    <section id="tokoh" className="pedia-archive-strip pedia-reveal"><div className="page-width"><p className="pedia-kicker">ARSIP & TOKOH</p><div className="pedia-archive-grid"><article><span>01</span><h3>Sri Jayabaya</h3><p>Raja, penyairan zaman, dan pusat dari banyak ingatan tentang Panjalu.</p></article><article><span>02</span><h3>Prasasti Hantang</h3><p>Satu artefak untuk membaca pemerintahan, ruang, dan bahasa kuasa.</p></article><article><span>03</span><h3>Ruang Panji</h3><p>Relief dan candi yang menyimpan cerita melalui tubuh batu.</p></article></div></div></section>

    <footer className="pedia-footer"><div className="page-width"><EditorialLine /><div className="pedia-footer-row"><a className="pedia-wordmark" href="/kediripedia"><span>KEDIRI</span><b>PEDIA</b></a><p>Kediri Digital History<br />Experience → Discover → Read → Return</p><a href="/">KEMBALI KE PERJALANAN SEJARAH <span>↗</span></a></div></div></footer>
  </main>;
}

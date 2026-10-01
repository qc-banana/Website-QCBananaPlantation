const LOGIN_KEY = "qcBananaLoggedIn";
const DATA_KEY = "qcBananaData";
const BIBIT_KEY = "qcBananaBibitDetailed";
const BIBIT_HEADERS_KEY = "qcBananaBibitHeaders";
const SUPABASE_URL = "https://dbhgwqsrybfflymwoclh.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_uLhOuqURk-ahjxOCXNmw9g_q10IG5yJ";

const qcSupabase = window.supabase
  ? window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_PUBLISHABLE_KEY
    )
  : null;

const configs = {
  bibit: {
    title: "Pengamatan Bibit",
    icon: "🌱",
    desc: "Monitoring kualitas dan kondisi bibit pada area plantation.",
    seed: [
      ["30/09/2026", "2026", "PG1", "Blok A01", "Kualitas bibit", "Baik", "Baik"],
      ["29/09/2025", "2025", "PG2", "Nursery", "Keseragaman", "Sesuai standar", "Baik"],
      ["28/09/2024", "2024", "PG1", "Nursery", "Pertumbuhan", "Perlu dicek", "Perlu Monitoring"],
      ["20/08/2023", "2023", "PG3", "Blok C02", "Kondisi bibit", "Baik", "Baik"],
      ["15/07/2022", "2022", "PG4", "Blok D01", "Keseragaman", "Sesuai", "Baik"]
    ]
  },
  agronomi: {
    title: "Agronomi",
    icon: "🌿",
    desc: "Monitoring parameter agronomi dan kondisi tanaman.",
    seed: [
      ["30/09/2026", "2026", "PG1", "Blok A01", "Tinggi tanaman", "Normal", "Baik"],
      ["29/09/2025", "2025", "PG3", "Blok C04", "Kondisi daun", "Normal", "Baik"],
      ["28/09/2024", "2024", "PG2", "Blok B02", "Kelembapan", "Perlu pengecekan", "Perlu Monitoring"],
      ["20/08/2023", "2023", "PG4", "Blok D02", "Jumlah daun", "Normal", "Baik"],
      ["15/07/2022", "2022", "PG1", "Blok A03", "Pertumbuhan", "Sesuai", "Baik"]
    ]
  },
  bud: {
    title: "Bud Injection",
    icon: "💉",
    desc: "Monitoring proses dan hasil pelaksanaan bud injection.",
    seed: [
      ["30/09/2026", "2026", "PG1", "Blok A02", "Ketepatan aplikasi", "Sesuai", "Baik"],
      ["29/09/2025", "2025", "PG4", "Blok D03", "Kondisi bud", "Normal", "Baik"],
      ["28/09/2024", "2024", "PG2", "Blok B05", "Hasil pemeriksaan", "Perlu evaluasi", "Perlu Monitoring"],
      ["20/08/2023", "2023", "PG3", "Blok C01", "Ketepatan posisi", "Sesuai", "Baik"],
      ["15/07/2022", "2022", "PG1", "Blok A04", "Kondisi bud", "Normal", "Baik"]
    ]
  },
  propping: {
    title: "Propping",
    icon: "🌴",
    desc: "Monitoring kegiatan propping dan kondisi tanaman.",
    seed: [
      ["30/09/2026", "2026", "PG2", "Blok B01", "Posisi penyangga", "Sesuai", "Baik"],
      ["29/09/2025", "2025", "PG1", "Blok A05", "Kondisi tanaman", "Normal", "Baik"],
      ["28/09/2024", "2024", "PG4", "Blok D02", "Kekuatan penyangga", "Perlu diperbaiki", "Perlu Monitoring"],
      ["20/08/2023", "2023", "PG3", "Blok C03", "Posisi penyangga", "Sesuai", "Baik"],
      ["15/07/2022", "2022", "PG2", "Blok B06", "Kondisi tanaman", "Normal", "Baik"]
    ]
  },
  buah: {
    title: "Buah 10 MG Shooting",
    icon: "🍌",
    desc: "Monitoring pemeriksaan kualitas buah pada 10 MG Shooting.",
    seed: [
      ["30/09/2026", "2026", "PG1", "Blok A03", "Keseragaman buah", "Sesuai", "Baik"],
      ["29/09/2025", "2025", "PG3", "Blok C02", "Ukuran buah", "Normal", "Baik"],
      ["28/09/2024", "2024", "PG2", "Blok B04", "Kondisi buah", "Perlu pengecekan", "Perlu Monitoring"],
      ["20/08/2023", "2023", "PG4", "Blok D01", "Keseragaman", "Sesuai", "Baik"],
      ["15/07/2022", "2022", "PG1", "Blok A06", "Kondisi buah", "Normal", "Baik"]
    ]
  }
};

const bibitSeed = [
  {id:1,pengamat:"Yasir dan Wahyudi",pg:"PG1",lokasi:"030H2",week:7,bulan:"",tahun:2023,qty:"16.933",ht:"0,06%",bt:"0,00%",mt:"0,00%",virus:"0,10%",mbug:"0,00%",cabut:"0,00%",tidakSegar:"0,31%",patah:"0,04%",h15:"0,00%",h30:"0,00%",sehat:"98,6%",reject:"1,41%",kelas:"K-S",k15:"69%",k20:"14%",k25:"0%",rataTinggi:17,score:86,rasioKurang:"0%",rasioLebih:"100%",girth:6.3,rasio:0.37},
  {id:2,pengamat:"Yasir dan Wahyudi",pg:"PG1",lokasi:"030H4",week:8,bulan:"",tahun:2023,qty:"14.071",ht:"0,21%",bt:"0,00%",mt:"0,00%",virus:"0,04%",mbug:"0,00%",cabut:"0,00%",tidakSegar:"0,21%",patah:"0,00%",h15:"0,00%",h30:"0,00%",sehat:"98,0%",reject:"1,95%",kelas:"S-B",k15:"70%",k20:"23%",k25:"3%",rataTinggi:17,score:81,rasioKurang:"0%",rasioLebih:"100%",girth:6.0,rasio:0.35},
  {id:3,pengamat:"Yasir dan Wahyudi",pg:"PG1",lokasi:"049A1",week:19,bulan:"",tahun:2023,qty:"14.268",ht:"0,25%",bt:"0,00%",mt:"0,00%",virus:"0,01%",mbug:"0,00%",cabut:"0,00%",tidakSegar:"0,12%",patah:"0,06%",h15:"0,00%",h30:"0,00%",sehat:"99,3%",reject:"0,74%",kelas:"B-SB",k15:"1%",k20:"20%",k25:"80%",rataTinggi:25.5,score:100,rasioKurang:"0%",rasioLebih:"100%",girth:7.9,rasio:0.31},
  {id:4,pengamat:"Yasir dan Wahyudi",pg:"PG1",lokasi:"009A1",week:21,bulan:"",tahun:2023,qty:"17.376",ht:"0,18%",bt:"0,00%",mt:"0,00%",virus:"0,00%",mbug:"0,00%",cabut:"0,00%",tidakSegar:"0,14%",patah:"0,05%",h15:"0,00%",h30:"0,00%",sehat:"99,3%",reject:"0,75%",kelas:"B-SB",k15:"3%",k20:"31%",k25:"66%",rataTinggi:24.6,score:98,rasioKurang:"0%",rasioLebih:"100%",girth:7.2,rasio:0.29},
  {id:5,pengamat:"Dinda",pg:"PG2",lokasi:"A01",week:10,bulan:"September",tahun:2026,qty:"15.250",ht:"0,05%",bt:"0,00%",mt:"0,00%",virus:"0,02%",mbug:"0,00%",cabut:"0,00%",tidakSegar:"0,10%",patah:"0,01%",h15:"0,00%",h30:"0,00%",sehat:"99,0%",reject:"1,00%",kelas:"S-B",k15:"20%",k20:"60%",k25:"20%",rataTinggi:21.4,score:91,rasioKurang:"0%",rasioLebih:"100%",girth:6.8,rasio:0.34}
];

function staff() {
  return localStorage.getItem(LOGIN_KEY) === "true";
}

function setStaff(v) {
  v ? localStorage.setItem(LOGIN_KEY, "true") : localStorage.removeItem(LOGIN_KEY);
}

function pageKey() {
  const p = location.pathname.toLowerCase();
  if (p.includes("bibit")) return "bibit";
  if (p.includes("agronomi")) return "agronomi";
  if (p.includes("bud-injection")) return "bud";
  if (p.includes("propping")) return "propping";
  if (p.includes("buah-10mg")) return "buah";
  return null;
}

function data() {
  const k = pageKey();
  if (!k) return [];
  const sk = DATA_KEY + "_" + k;
  try {
    const s = localStorage.getItem(sk);
    if (s) return JSON.parse(s);
  } catch (e) {}
  localStorage.setItem(sk, JSON.stringify(configs[k].seed));
  return [...configs[k].seed];
}

function save(d) {
  const k = pageKey();
  if (k) localStorage.setItem(DATA_KEY + "_" + k, JSON.stringify(d));
}

function objectToBibitValues(d) {
  const v = Array(58).fill("");
  v[0] = d.pengamat ?? ""; v[1] = d.pg ?? ""; v[2] = d.lokasi ?? ""; v[3] = d.week ?? ""; v[4] = d.bulan ?? ""; v[5] = d.tahun ?? ""; v[6] = d.qty ?? "";
  v[7] = d.ht ?? ""; v[8] = d.bt ?? ""; v[9] = d.mt ?? ""; v[10] = d.virus ?? ""; v[11] = d.mbug ?? ""; v[12] = d.cabut ?? ""; v[13] = d.tidakSegar ?? ""; v[14] = d.patah ?? "";
  v[15] = d.h15 ?? ""; v[16] = d.h30 ?? ""; v[17] = d.sehat ?? ""; v[18] = d.reject ?? ""; v[19] = d.kelas ?? ""; v[20] = d.k15 ?? ""; v[21] = d.k20 ?? ""; v[22] = d.k25 ?? "";
  v[23] = d.k15 ?? ""; v[24] = d.k20 ?? ""; v[25] = d.k25 ?? ""; // Sinkronisasi indeks kategori
  v[28] = d.rataTinggi ?? ""; v[29] = d.score ?? ""; v[30] = d.girth ?? ""; v[31] = d.rasioKurang ?? ""; v[32] = d.rasioLebih ?? ""; v[33] = d.rasio ?? "";
  return v;
}

function normalizeBibitRow(r, i) {
  if (r && Array.isArray(r.values)) return r;
  const v = objectToBibitValues(r || {});
  return {
    id: r?.id ?? (Date.now() + i),
    values: v,
    pengamat: v[0], pg: v[1], lokasi: v[2], week: v[3], bulan: v[4], tahun: v[5], qty: v[6],
    ht: v[7], bt: v[8], mt: v[9], virus: v[10], mbug: v[11], cabut: v[12], tidakSegar: v[13], patah: v[14],
    h15: v[15], h30: v[16], sehat: v[17], reject: v[18], kelas: v[19], k15: v[20], k20: v[21], k25: v[22],
    rataTinggi: v[28], score: v[29], girth: v[30], rasioKurang: v[31], rasioLebih: v[32], rasio: v[33]
  };
}

function getBibit() {
  try {
    const s = localStorage.getItem(BIBIT_KEY);
    if (s) return JSON.parse(s).map(normalizeBibitRow);
  } catch (e) {}
  const seed = bibitSeed.map(normalizeBibitRow);
  localStorage.setItem(BIBIT_KEY, JSON.stringify(seed));
  return seed;
}

function saveBibit(d) {
  localStorage.setItem(BIBIT_KEY, JSON.stringify(d.map(normalizeBibitRow)));
}
 function syncBibitToSupabase(rows){
  if(typeof supabaseClient==="undefined"){
    console.warn("Supabase belum terhubung.");
    return false;
  }

  try{
    // Hapus data Bibit lama di database
    const del=await supabaseClient
      .from("bibit_data")
      .delete()
      .neq("id",0);

    if(del.error) throw del.error;

    const headers=getBibitHeaders();

    // Simpan data baru ke database
    const payload=rows.map(r=>({
      row_data:normalizeBibitRow(r),
      headers:headers
    }));

    const chunkSize=500;

    for(let i=0;i<payload.length;i+=chunkSize){
      const chunk=payload.slice(i,i+chunkSize);

      const ins=await supabaseClient
        .from("bibit_data")
        .insert(chunk);

      if(ins.error) throw ins.error;
    }

    console.log("Data Bibit berhasil disimpan ke Supabase.");
    return true;

  }catch(err){
    console.error("Gagal sinkronisasi Supabase:",err);
    alert("Data tersimpan di browser, tetapi belum berhasil dikirim ke database online.");
    return false;
  }
}

/* ==========================================================================
   1. VARIABLES & DESIGN SYSTEM
   ========================================================================== */
:root {
  /* Brand & Color Palette */
  --g9: #123f2a;
  --g8: #185a39;
  --g7: #26744b;
  --g1: #eaf6ef;
  --yellow: #f4d44d;
  --red: #c84646;
  
  /* Text & Surface Colors */
  --text: #183026;
  --muted: #718078;
  --border: #dfe8e2;
  --white: #ffffff;
  --bg-main: #f7faf8;
  
  /* Elevation & Shadows */
  --shadow: 0 12px 30px rgba(18, 63, 42, 0.09);
  --shadow-card: 0 5px 18px rgba(18, 63, 42, 0.04);
  --shadow-modal: 0 25px 70px rgba(0, 0, 0, 0.25);
  
  /* Transitions */
  --transition-fast: 0.25s ease;
  --transition-sidebar: 0.28s ease;
}

/* ==========================================================================
   2. RESET & BASE STYLES
   ========================================================================== */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  background-color: var(--bg-main);
  color: var(--text);
  min-height: 100vh;
  line-height: 1.5;
}

a {
  text-decoration: none;
  color: inherit;
}

button,
input,
select {
  font: inherit;
}

.hidden {
  display: none !important;
}

/* ==========================================================================
   3. LAYOUT & CONTAINER
   ========================================================================== */
.main-content {
  min-height: 100vh;
  width: 100%;
  padding: 0 32px;
}

.footer {
  text-align: center;
  color: #89958f;
  font-size: 11px;
  padding: 30px 0;
}

/* ==========================================================================
   4. NAVIGATION & SIDEBAR
   ========================================================================== */
.sidebar {
  position: fixed;
  inset: 0 auto 0 0;
  width: 290px;
  background: var(--g9);
  color: var(--white);
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform var(--transition-sidebar);
  box-shadow: 12px 0 35px rgba(0, 0, 0, 0.12);
}

.sidebar.show {
  transform: translateX(0);
}

.sidebar-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 900;
  display: none;
}

.sidebar-overlay.show {
  display: block;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px 8px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.brand-icon {
  width: 46px;
  height: 46px;
  border-radius: 13px;
  background: var(--yellow);
  display: grid;
  place-items: center;
  font-size: 27px;
}

.brand strong {
  display: block;
  font-size: 18px;
}

.brand span {
  display: block;
  color: #b9d7c6;
  font-size: 12px;
  margin-top: 3px;
}

.sidebar-nav {
  padding-top: 18px;
  overflow-y: auto;
}

.nav-section-title {
  font-size: 11px;
  color: #8fbaa3;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 20px 12px 8px;
  text-transform: uppercase;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 11px 12px;
  border-radius: 10px;
  color: #d8eadf;
  margin: 3px 0;
  font-size: 14px;
  transition: background var(--transition-fast), color var(--transition-fast);
}

.nav-link:hover,
.nav-link.active {
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
}

.sidebar-bottom {
  margin-top: auto;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.user-status {
  display: flex;
  gap: 9px;
  font-size: 13px;
  color: #d8eadf;
  padding: 10px 8px 13px;
}

/* ==========================================================================
   5. TOPBAR & HEADERS
   ========================================================================== */
.topbar {
  min-height: 82px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid var(--border);
}

.menu-toggle {
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 12px;
  background: var(--g8);
  color: var(--white);
  font-size: 22px;
  cursor: pointer;
}

.topbar-title {
  flex: 1;
}

.eyebrow {
  font-size: 10px;
  letter-spacing: 0.14em;
  font-weight: 800;
  color: var(--g7);
  display: block;
  text-transform: uppercase;
}

.topbar h1 {
  font-size: 20px;
  margin-top: 2px;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 9px;
}

.page-header {
  padding: 30px 0 20px;
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: flex-end;
}

.page-header h2 {
  font-size: 28px;
  margin-top: 5px;
}

.page-header p {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
  max-width: 700px;
  margin-top: 7px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 34px 0 15px;
}

.section-header h2 {
  font-size: 22px;
  margin-top: 3px;
}

.section-header p {
  color: var(--muted);
  font-size: 13px;
}

.page-actions {
  display: flex;
  gap: 9px;
  align-items: center;
  flex-wrap: wrap;
}

/* ==========================================================================
   6. BUTTONS & BADGES
   ========================================================================== */
.btn {
  border: 0;
  border-radius: 10px;
  padding: 10px 14px;
  font-weight: 700;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  cursor: pointer;
  transition: opacity var(--transition-fast);
}

.btn:hover {
  opacity: 0.9;
}

.btn-primary {
  background: var(--g7);
  color: var(--white);
}

.btn-danger {
  background: var(--red);
  color: var(--white);
}

.btn-light {
  background: var(--white);
  color: var(--g8);
}

.btn-full {
  width: 100%;
}

.badge {
  display: inline-block;
  background: rgba(244, 212, 77, 0.16);
  color: #ffe98a;
  padding: 7px 11px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
}

.status-pill {
  padding: 9px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  background: #eef3ef;
  color: #52645a;
}

.status-pill.staff {
  background: var(--g1);
  color: var(--g8);
}

.status {
  display: inline-flex;
  padding: 5px 8px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 800;
}

.status.ok {
  background: #e8f7ed;
  color: #217144;
}

.status.warn {
  background: #fff6d9;
  color: #8b6b00;
}

.status.bad {
  background: #ffe8e8;
  color: #a43a3a;
}

.actions {
  display: flex;
  gap: 6px;
}

.icon-btn {
  border: 0;
  border-radius: 8px;
  padding: 7px 8px;
  font-size: 12px;
  cursor: pointer;
}

.edit-btn {
  background: #e9f4ff;
  color: #25608f;
}

.delete-btn {
  background: #fff0f0;
  color: #a43a43;
}

/* ==========================================================================
   7. HERO, PANELS & CARDS
   ========================================================================== */
.hero {
  margin: 28px 0;
  background: linear-gradient(135deg, var(--g9), var(--g7));
  color: var(--white);
  border-radius: 22px;
  padding: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--shadow);
}

.hero h2 {
  font-size: 32px;
  line-height: 1.15;
  margin: 13px 0 10px;
}

.hero p {
  color: #d5e8dc;
  max-width: 720px;
  line-height: 1.65;
  font-size: 14px;
}

.hero-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.hero-illustration {
  font-size: 115px;
}

.panel {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 22px;
  box-shadow: var(--shadow-card);
}

.panel-header {
  margin-bottom: 16px;
}

.panel-header h2 {
  font-size: 18px;
  margin-top: 4px;
}

/* Quick Control Grid */
.qc-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 13px;
}

.qc-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 17px;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: var(--shadow-card);
}

.qc-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--g1);
  display: grid;
  place-items: center;
  font-size: 23px;
}

.qc-card h3 {
  font-size: 15px;
  margin-bottom: 5px;
}

.qc-card p {
  font-size: 12px;
  line-height: 1.5;
  color: var(--muted);
}

.card-arrow {
  margin-top: auto;
  color: var(--g7);
  font-weight: 900;
}

/* Info Grid & Features */
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin: 22px 0;
}

.access-box {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #f5fbf7;
  border: 1px solid #d9ebdf;
  border-radius: 13px;
  padding: 15px;
}

.access-icon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--white);
  display: grid;
  place-items: center;
}

.access-box strong {
  font-size: 14px;
}

.access-box p {
  font-size: 12px;
  color: var(--muted);
  margin-top: 3px;
}

.feature-list {
  list-style: none;
  display: grid;
  gap: 11px;
  color: #506259;
  font-size: 13px;
}

.latest-year-card {
  margin: 24px 0 18px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  box-shadow: var(--shadow-card);
}

.latest-year-card h2 {
  font-size: 24px;
  margin-top: 4px;
}

.latest-year-card p {
  color: var(--muted);
  font-size: 13px;
  margin-top: 5px;
}

.latest-year-badge {
  background: var(--g1);
  color: var(--g8);
  font-weight: 800;
  padding: 12px 16px;
  border-radius: 12px;
}

/* ==========================================================================
   8. TABLES & FILTERS
   ========================================================================== */
.filter-bar {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: flex-end;
  gap: 12px;
  flex-wrap: wrap;
  box-shadow: var(--shadow-card);
}

.filter-group {
  min-width: 180px;
  flex: 1;
}

.filter-group label {
  display: block;
  font-size: 11px;
  font-weight: 800;
  margin-bottom: 6px;
  color: #52645a;
}

.filter-group select {
  width: 100%;
  border: 1px solid #ccd9d1;
  border-radius: 99px;
  padding: 10px 11px;
  background: var(--white);
  color: var(--text);
  outline: none;
}

.filter-reset {
  background: #eef4ef;
  color: var(--g8);
}

.table-panel {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-card);
}

.table-toolbar {
  padding: 16px;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.table-note {
  font-size: 12px;
  color: var(--muted);
}

.table-wrap {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 760px;
}

.data-table th {
  background: var(--g9);
  color: var(--white);
  text-align: left;
  font-size: 11px;
  padding: 13px 14px;
}

.data-table td {
  padding: 12px 14px;
  border-bottom: 1px solid #edf1ee;
  font-size: 12px;
}

/* Custom Bibit Table */
.bibit-table {
  min-width: 2750px;
}

.bibit-table th,
.bibit-table td {
  text-align: center;
  white-space: nowrap;
}

.bibit-table thead tr:first-child th {
  background: var(--g9);
  text-align: center;
}

.bibit-table thead .subhead th {
  background: #eef4ef;
  color: #385347;
  font-size: 10px;
}

.group-head {
  font-size: 11px !important;
}

.nursery-head {
  background: #eaf2ed !important;
  color: #244f39 !important;
}

.handling-head {
  background: #fff7d8 !important;
  color: #6d5a00 !important;
}

.bibit-note {
  margin-top: 18px;
}

.bibit-note p {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
}

/* ==========================================================================
   9. CHARTS & DASHBOARD COMPONENTS
   ========================================================================== */
.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  margin: 18px 0;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: flex-start;
}

.chart-header h2 {
  font-size: 19px;
  margin-top: 4px;
}

.chart-header p {
  font-size: 12px;
  color: var(--muted);
  margin-top: 4px;
}

.mini-link {
  color: var(--g7);
  font-size: 12px;
  font-weight: 800;
}

.latest-summary {
  display: grid;
  gap: 9px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: #fafcfb;
  font-size: 12px;
}

.summary-row strong {
  color: var(--g8);
}

.bibit-chart-panel {
  margin-bottom: 18px;
}

.chart-filter-info {
  font-size: 11px;
  color: #66766d;
  background: #f1f6f2;
  border: 1px solid var(--border);
  padding: 9px 12px;
  border-radius: 10px;
  white-space: nowrap;
}

.bibit-chart-wrap {
  margin-top: 14px;
  border-top: 1px solid var(--border);
  padding-top: 18px;
}

.bibit-chart-area {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.bibit-single-chart {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px 16px 12px;
}

.bibit-single-chart-title {
  text-align: center;
  font-size: 22px;
  font-weight: 800;
  color: #30483a;
  margin-bottom: 8px;
}

.bibit-chart-plot {
  display: flex;
  height: 300px;
}

.bibit-yaxis {
  width: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 6px 25px 0;
  text-align: right;
  font-size: 10px;
  color: #7a867f;
}

.bibit-plot-area {
  position: relative;
  flex: 1;
  margin-right: 4px;
}

.bibit-gridline {
  position: absolute;
  left: 0;
  right: 0;
  border-top: 1px solid #dfe5e1;
  z-index: 0;
}

.bibit-gridline.g100 { top: 5px; }
.bibit-gridline.g75  { top: 25%; }
.bibit-gridline.g50  { top: 50%; }
.bibit-gridline.g25  { top: 75%; }
.bibit-gridline.g0   { bottom: 25px; }

.bibit-week-groups {
  position: absolute;
  inset: 5px 0 25px;
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  gap: 10px;
  z-index: 1;
}

.bibit-week-group {
  flex: 1;
  max-width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-width: 50px;
}

.bibit-week-bars {
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;
}

.bibit-bar-slot {
  height: 100%;
  flex: 0 1 28px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  min-width: 12px;
}

.bibit-value {
  font-size: 10px;
  font-weight: 700;
  color: #46564d;
  line-height: 1;
  margin-bottom: 3px;
  white-space: nowrap;
}

.bibit-bar {
  width: 100%;
  min-height: 0;
  border-radius: 2px 2px 0 0;
  transition: height var(--transition-fast);
}

.bibit-bar.cat-k, .legend-dot.cat-k { background: #4e8bc6; }
.bibit-bar.cat-s, .legend-dot.cat-s { background: #c94f4f; }
.bibit-bar.cat-b, .legend-dot.cat-b { background: #8db64e; }

.bibit-week-label {
  text-align: center;
  font-size: 11px;
  color: #59685f;
  margin-top: 7px;
}

.bibit-chart-legend {
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
  color: #66766d;
  font-size: 11px;
  margin-top: 8px;
  padding-top: 10px;
  border-top: 1px dashed var(--border);
}

.bibit-chart-legend .legend-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 2px;
  margin-right: 5px;
  vertical-align: -1px;
}

.bibit-chart-empty,
.chart-empty {
  padding: 28px;
  text-align: center;
  color: #7b8981;
  background: var(--bg-main);
  border-radius: 10px;
}

/* ==========================================================================
   10. MODALS & FORMS
   ========================================================================== */
.modal {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: grid;
  place-items: center;
  padding: 18px;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(7, 28, 19, 0.52);
}

.modal-dialog {
  position: relative;
  background: var(--white);
  width: min(520px, 100%);
  border-radius: 18px;
  padding: 25px;
  box-shadow: var(--shadow-modal);
  z-index: 1;
}

.modal-large {
  width: min(900px, 100%);
  max-height: 90vh;
  overflow-y: auto;
}

.modal-close {
  position: absolute;
  right: 14px;
  top: 12px;
  border: 0;
  background: transparent;
  font-size: 26px;
  color: #78837d;
  cursor: pointer;
}

.modal-icon {
  width: 46px;
  height: 46px;
  border-radius: 13px;
  background: var(--g1);
  display: grid;
  place-items: center;
  font-size: 22px;
  margin-bottom: 12px;
}

.modal-dialog h2 {
  font-size: 21px;
}

.modal-dialog > p {
  font-size: 12px;
  color: var(--muted);
  margin: 6px 0 20px;
}

.modal-dialog label {
  display: block;
  font-size: 12px;
  font-weight: 800;
  margin: 12px 0 6px;
}

.modal-dialog input,
.modal-dialog select {
  width: 100%;
  border: 1px solid #ccd9d1;
  border-radius: 9px;
  padding: 10px 11px;
  outline: none;
}

.form-error {
  background: #fff0f0;
  color: #a43a43;
  padding: 9px;
  border-radius: 8px;
  font-size: 12px;
  margin: 12px 0;
}

.demo-credential {
  text-align: center;
  background: #f5f7f5;
  border-radius: 9px;
  padding: 9px;
  margin-top: 12px;
  color: #68756e;
  font-size: 11px;
}

.form-block {
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 15px;
  margin: 12px 0;
}

.form-block h3 {
  font-size: 14px;
  color: var(--g8);
  margin-bottom: 12px;
}

.form-grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.form-grid-4 label {
  display: block;
  font-size: 11px;
  font-weight: 700;
  color: #52645a;
}

.form-grid-4 input,
.form-grid-4 select {
  width: 100%;
  margin-top: 5px;
  padding: 9px;
  border: 1px solid #ccd9d1;
  border-radius: 8px;
}

/* ==========================================================================
   11. MEDIA QUERIES (RESPONSIVE DESIGN)
   ========================================================================== */

/* Large Tablets & Small Laptops */
@media (max-width: 1100px) {
  .qc-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Tablets */
@media (max-width: 800px) {
  .main-content {
    padding: 0 16px;
  }

  .topbar {
    min-height: 72px;
  }

  .topbar-actions .status-pill {
    display: none;
  }

  .hero {
    padding: 25px;
  }

  .hero h2 {
    font-size: 25px;
  }

  .hero-illustration {
    font-size: 75px;
  }

  .section-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 7px;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .qc-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .page-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .latest-year-card {
    align-items: flex-start;
    flex-direction: column;
  }

  .form-grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile Devices (Medium-Small) */
@media (max-width: 600px) {
  .chart-filter-info {
    white-space: normal;
  }

  .bibit-chart-plot {
    height: 260px;
  }

  .bibit-yaxis {
    width: 40px;
    font-size: 9px;
  }

  .bibit-week-groups {
    gap: 3px;
  }

  .bibit-week-bars {
    gap: 2px;
  }

  .bibit-bar-slot {
    flex-basis: 18px;
  }

  .bibit-value {
    font-size: 8px;
  }

  .bibit-week-label {
    font-size: 10px;
  }

  .bibit-single-chart {
    padding: 12px 8px;
  }
}

/* Mobile Devices (Extra Small) */
@media (max-width: 520px) {
  .topbar h1 {
    font-size: 17px;
  }

  .topbar-actions .btn {
    font-size: 11px;
    padding: 9px;
  }

  .hero {
    padding: 20px;
    border-radius: 17px;
  }

  .hero h2 {
    font-size: 23px;
  }

  .hero-illustration {
    display: none;
  }

  .hero-actions {
    flex-direction: column;
  }

  .hero-actions .btn {
    width: 100%;
  }

  .qc-grid {
    grid-template-columns: 1fr;
  }

  .filter-bar {
    align-items: stretch;
  }

  .filter-group {
    min-width: 100%;
  }

  .filter-reset {
    width: 100%;
  }

  .form-grid-4 {
    grid-template-columns: 1fr;
  }

  .dashboard-bars {
    grid-template-columns: 1fr;
    gap: 10px;
    padding-left: 0;
    padding-right: 0;
  }

  .dashboard-bars .bibit-single-chart {
    padding: 12px 6px;
  }

  .dash-bar-fill {
    width: 42px;
  }
}

function getBibitHeaders() {
  try {
    const h = JSON.parse(localStorage.getItem(BIBIT_HEADERS_KEY) || "null");
    if (Array.isArray(h) && h.length) return h;
  } catch (e) {}
  return [
    "Pengamat", "PG", "Lokasi", "Week", "Bulan", "Tahun", "Qty yg Diamati",
    "Reject Nursery - HT", "Reject Nursery - BT", "Reject Nursery - MT", "Reject Nursery - Virus",
    "Reject Nursery - M.Bug", "Reject Nursery - Cabut media/ Media Rusak", "Reject Nursery - Tidak segar", "Reject Nursery - Patah",
    "Reject Sortir - <15", "Reject Sortir - >30", "Total - Sehat", "Total - Reject", "Kelas bibit",
    "K", "S", "B", "Rata2 Tinggi", "% score", "Rasio <0,25", "Rasio >=0,25", "Rata2 Girth", "Rata2 Rasio",
    "Jumlah daun (90%)", "Kualitas Akar (97%)", "..."
  ];
}

function saveBibitHeaders(h) {
  localStorage.setItem(BIBIT_HEADERS_KEY, JSON.stringify(h));
}

function esc(v) {
  return String(v ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[c]));
}

function statusClass(v) {
  v = String(v).toLowerCase();
  return v.includes("baik") ? "ok" : v.includes("monitor") ? "warn" : "bad";
}

function updateUI() {
  const s = staff();
  document.querySelectorAll("#topUserStatus,#sidebarUserStatus").forEach(e => {
    const sp = e.querySelector("span:last-child");
    if (sp) sp.textContent = s ? "Petugas" : "Pengunjung";
    e.classList.toggle("staff", s);
  });
  ["loginBtn", "heroLoginBtn", "sidebarLoginBtn"].forEach(id => document.getElementById(id)?.classList.toggle("hidden", s));
  ["logoutBtn", "sidebarLogoutBtn"].forEach(id => document.getElementById(id)?.classList.toggle("hidden", !s));
  document.querySelectorAll(".staff-only").forEach(e => e.classList.toggle("hidden", !s));
  
  const t = document.getElementById("dashboardStatusTitle");
  const x = document.getElementById("dashboardStatusText");
  const i = document.getElementById("dashboardStatusIcon");
  
  if (t) t.textContent = s ? "Mode Petugas" : "Mode Pengunjung";
  if (x) x.textContent = s ? "Anda dapat menambah, mengedit, menghapus, dan upload data QC." : "Anda dapat melihat dashboard dan seluruh data QC.";
  if (i) i.textContent = s ? "🛠️" : "👤";
}

function openLogin() {
  const m = document.getElementById("loginModal");
  if (m) {
    m.classList.remove("hidden");
    document.getElementById("username")?.focus();
  }
}

function closeLogin() {
  document.getElementById("loginModal")?.classList.add("hidden");
}

function logout() {
  setStaff(false);
  updateUI();
  location.reload();
}

function filteredData() {
  const all = data();
  const year = document.getElementById("yearFilter")?.value || "all";
  const region = document.getElementById("regionFilter")?.value || "all";
  return all.filter(r => (year === "all" || r[1] === year) && (region === "all" || r[2] === region));
}

function renderGeneric() {
  const k = pageKey();
  const body = document.getElementById("dataTableBody");
  if (!k || !body) return;
  
  const d = filteredData();
  const s = staff();
  body.innerHTML = d.length ? d.map(r => {
    const originalIndex = data().indexOf(r);
    return `<tr>
      <td>${esc(r[0])}</td>
      <td>${esc(r[1])}</td>
      <td>${esc(r[2])}</td>
      <td>${esc(r[3])}</td>
      <td>${esc(r[4])}</td>
      <td>${esc(r[5])}</td>
      <td><span class="status ${statusClass(r[6])}">${esc(r[6])}</span></td>
      ${s ? `<td><div class="actions">
        <button class="icon-btn edit-btn" data-edit="${originalIndex}">✏️ Edit</button>
        <button class="icon-btn delete-btn" data-delete="${originalIndex}">🗑️ Hapus</button>
      </div></td>` : ""}
    </tr>`;
  }).join("") : `<tr><td colspan="8" style="text-align:center;padding:28px;color:#7b8981">Tidak ada data untuk filter yang dipilih.</td></tr>`;
  
  document.getElementById("actionHead")?.classList.toggle("hidden", !s);
  const recCount = document.getElementById("recordCount");
  if (recCount) recCount.textContent = d.length;
  
  body.querySelectorAll("[data-edit]").forEach(b => b.onclick = () => editGeneric(Number(b.dataset.edit)));
  body.querySelectorAll("[data-delete]").forEach(b => b.onclick = () => deleteGeneric(Number(b.dataset.delete)));
}

function editGeneric(i) {
  if (!staff()) return openLogin();
  const d = data()[i];
  const m = document.getElementById("dataModal");
  if (!m) return;
  
  document.getElementById("editIndex").value = i;
  document.getElementById("dataTanggal").value = d[0] || "";
  document.getElementById("dataTahun").value = d[1] || "";
  document.getElementById("dataWilayah").value = d[2] || "";
  document.getElementById("dataLokasi").value = d[3] || "";
  document.getElementById("dataParameter").value = d[4] || "";
  document.getElementById("dataHasil").value = d[5] || "";
  document.getElementById("dataStatus").value = d[6] || "Baik";
  
  document.getElementById("dataModalTitle").textContent = "Edit Data QC";
  m.classList.remove("hidden");
}

function deleteGeneric(i) {
  if (!staff()) return openLogin();
  if (!confirm("Hapus data ini?")) return;
  const d = data();
  d.splice(i, 1);
  save(d);
  renderGeneric();
}

function openGenericModal() {
  if (!staff()) return openLogin();
  const m = document.getElementById("dataModal");
  if (!m) return;
  
  document.getElementById("editIndex").value = "";
  document.getElementById("dataTanggal").value = new Date().toLocaleDateString("id-ID");
  document.getElementById("dataTahun").value = new Date().getFullYear();
  document.getElementById("dataWilayah").value = "PG1";
  document.getElementById("dataLokasi").value = "";
  document.getElementById("dataParameter").value = "";
  document.getElementById("dataHasil").value = "";
  document.getElementById("dataStatus").value = "Baik";
  
  document.getElementById("dataModalTitle").textContent = "Tambah Data QC";
  m.classList.remove("hidden");
}

function closeData() {
  document.getElementById("dataModal")?.classList.add("hidden");
}

function importGeneric(file) {
  if (!staff()) return openLogin();
  if (!file) return;
  if (typeof XLSX === "undefined") {
    alert("Fitur Excel membutuhkan koneksi internet untuk memuat pembaca Excel.");
    return;
  }
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const wb = XLSX.read(e.target.result, { type: "array" });
      const ws = wb.Sheets[wb.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "" });
      if (rows.length < 2) {
        alert("File kosong atau hanya berisi header.");
        return;
      }
      const headers = rows[0].map(x => String(x).trim().toLowerCase());
      const find = names => {
        for (const n of names) {
          const idx = headers.indexOf(n.toLowerCase());
          if (idx >= 0) return idx;
        }
        return -1;
      };
      const idx = {
        tanggal: find(["tanggal"]),
        tahun: find(["tahun"]),
        pg: find(["pg", "wilayah / pg", "wilayah"]),
        lokasi: find(["lokasi"]),
        parameter: find(["parameter"]),
        hasil: find(["hasil"]),
        status: find(["status"])
      };
      const imported = rows.slice(1).filter(r => r.some(v => String(v).trim() !== "")).map(r => [
        idx.tanggal >= 0 ? r[idx.tanggal] : "",
        idx.tahun >= 0 ? String(r[idx.tahun]) : "",
        idx.pg >= 0 ? r[idx.pg] : "",
        idx.lokasi >= 0 ? r[idx.lokasi] : "",
        idx.parameter >= 0 ? r[idx.parameter] : "",
        idx.hasil >= 0 ? r[idx.hasil] : "",
        idx.status >= 0 ? r[idx.status] : "Baik"
      ]);
      save([...imported, ...data()]);
      renderGeneric();
      alert(`${imported.length} data berhasil di-upload.`);
    } catch (err) {
      console.error(err);
      alert("File belum bisa dibaca. Cek header Excel/CSV.");
    }
  };
  reader.readAsArrayBuffer(file);
}

function setupGeneric() {
  if (!document.getElementById("dataTableBody")) return;
  renderGeneric();
  document.getElementById("yearFilter")?.addEventListener("change", renderGeneric);
  document.getElementById("regionFilter")?.addEventListener("change", renderGeneric);
  document.getElementById("resetFilters")?.addEventListener("click", () => {
    if (document.getElementById("yearFilter")) document.getElementById("yearFilter").value = "all";
    if (document.getElementById("regionFilter")) document.getElementById("regionFilter").value = "all";
    renderGeneric();
  });
  document.getElementById("addDataBtn")?.addEventListener("click", openGenericModal);
  document.getElementById("uploadExcelBtn")?.addEventListener("click", () => {
    if (!staff()) return openLogin();
    document.getElementById("excelFileInput")?.click();
  });
  document.getElementById("excelFileInput")?.addEventListener("change", e => {
    importGeneric(e.target.files[0]);
    e.target.value = "";
  });
  
  const df = document.getElementById("dataForm");
  if (df) {
    df.onsubmit = e => {
      e.preventDefault();
      if (!staff()) return openLogin();
      const d = data();
      const iv = document.getElementById("editIndex").value;
      const r = [
        document.getElementById("dataTanggal").value,
        document.getElementById("dataTahun").value,
        document.getElementById("dataWilayah").value,
        document.getElementById("dataLokasi").value,
        document.getElementById("dataParameter").value,
        document.getElementById("dataHasil").value,
        document.getElementById("dataStatus").value
      ];
      if (iv === "") d.unshift(r); else d[Number(iv)] = r;
      save(d);
      closeData();
      renderGeneric();
    };
  }
  document.querySelectorAll("[data-close-data]").forEach(e => e.onclick = closeData);
}

function bibitFormValue(id) {
  return document.getElementById(id)?.value ?? "";
}

function clearBibitForm() {
  const ids = ["bPengamat", "bLokasi", "bWeek", "bBulan", "bQty", "bHT", "bBT", "bMT", "bVirus", "bMBug", "bCabut", "bTidakSegar", "bPatah", "bH15", "bH30", "bSehat", "bReject", "bK15", "bK20", "bK25", "bRasioKurang", "bRasioLebih", "bRataTinggi", "bScore", "bGirth", "bRasio"];
  ids.forEach(id => {
    const e = document.getElementById(id);
    if (e) e.value = "";
  });
  if (document.getElementById("bPG")) document.getElementById("bPG").value = "PG1";
  if (document.getElementById("bTahun")) document.getElementById("bTahun").value = new Date().getFullYear();
  if (document.getElementById("bKelas")) document.getElementById("bKelas").value = "K-S";
  if (document.getElementById("bibitEditIndex")) document.getElementById("bibitEditIndex").value = "";
  if (document.getElementById("bibitModalTitle")) document.getElementById("bibitModalTitle").textContent = "Input Manual Pengamatan Bibit";
}

function fillBibitForm(d, i) {
  const map = {
    bPengamat: d.pengamat, bPG: d.pg, bLokasi: d.lokasi, bWeek: d.week, bBulan: d.bulan, bTahun: d.tahun, bQty: d.qty,
    bHT: d.ht, bBT: d.bt, bMT: d.mt, bVirus: d.virus, bMBug: d.mbug, bCabut: d.cabut, bTidakSegar: d.tidakSegar, bPatah: d.patah,
    bH15: d.h15, bH30: d.h30, bSehat: d.sehat, bReject: d.reject, bKelas: d.kelas, bK15: d.k15, bK20: d.k20, bK25: d.k25,
    bRataTinggi: d.rataTinggi, bScore: d.score, bRasioKurang: d.rasioKurang, bRasioLebih: d.rasioLebih, bGirth: d.girth, bRasio: d.rasio
  };
  Object.entries(map).forEach(([id, v]) => {
    const e = document.getElementById(id);
    if (e) e.value = v ?? "";
  });
  if (document.getElementById("bibitEditIndex")) document.getElementById("bibitEditIndex").value = i;
  if (document.getElementById("bibitModalTitle")) document.getElementById("bibitModalTitle").textContent = "Edit Data Pengamatan Bibit";
}

function openBibitModal(i = null) {
  if (!staff()) return openLogin();
  const m = document.getElementById("dataModal");
  if (!m) return;
  if (i === null) clearBibitForm(); else fillBibitForm(getBibit()[i], i);
  m.classList.remove("hidden");
}

function bibitValue(r, i) {
  return r?.values?.[i] ?? "";
}

function renderBibitTableHead() {
  const head = document.getElementById("bibitTableHead");
  if (!head) return;
  const h = getBibitHeaders();
  head.innerHTML = `<tr>${h.map(x => `<th>${esc(x)}</th>`).join("")}<th class="action-col" id="actionHead">Aksi</th></tr>`;
}

function bibitRowsFiltered() {
  const y = document.getElementById("yearFilter")?.value || "all";
  const p = document.getElementById("regionFilter")?.value || "all";
  const all = getBibit();
  return { y, p, all, rows: all.filter(r => (y === "all" || String(bibitValue(r, 5)) === y) && (p === "all" || String(bibitValue(r, 1)) === p)) };
}

function renderBibit() {
  const body = document.getElementById("bibitTableBody");
  if (!body) return;
  renderBibitTableHead();
  const { y, p, all, rows } = bibitRowsFiltered();
  const s = staff();
  
  const recCount = document.getElementById("recordCount");
  if (recCount) recCount.textContent = rows.length;
  
  const headers = getBibitHeaders();
  body.innerHTML = rows.length ? rows.map(r => {
    const idx = all.indexOf(r);
    const cells = r.values.map(v => `<td>${esc(formatBibitCell(v))}</td>`).join("");
    return `<tr>${cells}<td class="action-col">${s ? `<button class="icon-btn edit-btn" onclick="openBibitModal(${idx})">✏️ Edit</button><button class="icon-btn delete-btn" onclick="deleteBibit(${idx})">🗑️ Hapus</button>` : "-"}</td></tr>`;
  }).join("") : `<tr><td colspan="${headers.length + 1}" style="text-align:center;padding:28px;color:#7b8981">Tidak ada data untuk filter yang dipilih.</td></tr>`;
  
  renderBibitChart(rows, y, p);
}

function formatBibitCell(v) {
  if (v === null || v === undefined || v === "") return "";
  if (typeof v === "number" && Math.abs(v) <= 1 && v !== 0) return `${(v * 100).toFixed(2).replace(/\.00$/, '')}%`;
  return v;
}

function percentFromRaw(v) {
  if (v === null || v === undefined || v === "") return null;
  if (typeof v === 'number') return Math.abs(v) <= 1 ? v * 100 : v;
  let s = String(v).trim().replace(/%/g, "").replace(/,/g, ".");
  let n = Number(s);
  if (!Number.isFinite(n)) return null;
  return Math.abs(n) <= 1 ? n * 100 : n;
}

function latestBibitWeeks(rows, targetYear, pgName) {
  const yr = rows.filter(r => String(bibitValue(r, 5)) === String(targetYear) && String(bibitValue(r, 1)) === pgName);
  return [...new Set(yr.map(r => Number(bibitValue(r, 3))).filter(Number.isFinite))].sort((a, b) => b - a).slice(0, 5).sort((a, b) => a - b);
}

function averageifsBibit(rows, pg, week, year, colIndex) {
  const vals = rows.filter(r => String(bibitValue(r, 1)) === String(pg) && Number(bibitValue(r, 3)) === Number(week) && Number(bibitValue(r, 5)) === Number(year))
    .map(r => percentFromRaw(bibitValue(r, colIndex)))
    .filter(v => v !== null);
  return vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : null;
}

function buildBibitChartForPG(rows, pgName, targetYear) {
  const weeks = latestBibitWeeks(rows, targetYear, pgName);
  if (!weeks.length) return `<div class="bibit-single-chart"><div class="bibit-single-chart-title">${esc(pgName)}</div><div class="bibit-chart-empty">Belum ada data untuk 5 Week terbaru.</div></div>`;
  
  const cats = [
    { col: 20, label: "<20 (K)", cls: "cat-k" },
    { col: 21, label: "20 s/d 25 (S)", cls: "cat-s" },
    { col: 22, label: "26 s/d 35 (B)", cls: "cat-b" }
  ];
  
  const bars = weeks.map(w => `<div class="bibit-week-group"><div class="bibit-week-bars">${cats.map(c => {
    const v = averageifsBibit(rows, pgName, w, targetYear, c.col);
    return v === null ? `<div class="bibit-bar-slot"></div>` : `<div class="bibit-bar-slot"><div class="bibit-value">${v.toFixed(1)}%</div><div class="bibit-bar ${c.cls}" style="height:${Math.max(0, Math.min(100, v))}%"></div></div>`;
  }).join("")}</div><div class="bibit-week-label">W${w}</div></div>`).join("");
  
  return `<div class="bibit-single-chart"><div class="bibit-single-chart-title">${esc(pgName)}</div><div class="bibit-chart-plot"><div class="bibit-yaxis"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div><div class="bibit-plot-area"><div class="bibit-gridline g100"></div><div class="bibit-gridline g75"></div><div class="bibit-gridline g50"></div><div class="bibit-gridline g25"></div><div class="bibit-gridline g0"></div><div class="bibit-week-groups">${bars}</div></div></div><div class="bibit-chart-legend"><span><i class="legend-dot cat-k"></i>&lt;20 (K)</span><span><i class="legend-dot cat-s"></i>20 s/d 25 (S)</span><span><i class="legend-dot cat-b"></i>26 s/d 35 (B)</span></div></div>`;
}

function renderBibitChart(rows, year, pg) {
  const area = document.getElementById("bibitChartArea");
  const info = document.getElementById("bibitChartFilterInfo");
  const legend = document.getElementById("bibitChartLegend");
  if (!area) return;
  
  let chartYear = year;
  if (chartYear === "all") {
    const ys = rows.map(r => Number(bibitValue(r, 5))).filter(Number.isFinite);
    chartYear = ys.length ? String(Math.max(...ys)) : "all";
  }
  if (info) info.textContent = `${chartYear === "all" ? "Semua Tahun" : chartYear} • ${pg === "all" ? "Semua PG" : pg} • 5 Week Terbaru`;
  
  const pgs = pg === "all" ? ["PG1", "PG2", "PG3", "PG4"] : [pg];
  const usable = pgs.filter(x => rows.some(r => String(bibitValue(r, 1)) === x && String(bibitValue(r, 5)) === String(chartYear)));
  
  area.innerHTML = usable.length ? usable.map(x => buildBibitChartForPG(rows, x, chartYear)).join("") : `<div class="chart-empty">Belum ada data untuk filter yang dipilih.</div>`;
  if (legend) legend.innerHTML = '<span>📌 Perhitungan mengikuti AVERAGEIFS pada Excel: PG + Week + Tahun.</span><span>📊 Grafik hanya mengambil 5 Week terbaru.</span>';
}

window.openBibitModal = openBibitModal;
window.deleteBibit = function(i) {
  if (!staff()) return openLogin();
  if (!confirm("Hapus data bibit ini?")) return;
  const d = getBibit();
  d.splice(i, 1);
  saveBibit(d);
  renderBibit();
};

function importBibit(file) {
  if (!staff()) return openLogin();
  if (!file) return;
  if (typeof XLSX === "undefined") {
    alert("Fitur Excel membutuhkan koneksi internet untuk memuat pembaca Excel.");
    return;
  }
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const wb = XLSX.read(e.target.result, { type: "array", cellDates: false });
      const sheetName = wb.SheetNames.includes("Rekap per lokasi") ? "Rekap per lokasi" : wb.SheetNames[0];
      if (sheetName !== "Rekap per lokasi") alert(`Sheet "Rekap per lokasi" tidak ditemukan. Website akan membaca sheet pertama: ${sheetName}.`);
      
      const ws = wb.Sheets[sheetName];
      const raw = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "", raw: true });
      if (raw.length < 6) {
        alert("Sheet Rekap per lokasi belum berisi data yang cukup.");
        return;
      }
      
      const maxCols = Math.max(...raw.slice(3).map(r => r.length));
      const headers = [];
      let lastGroup = "";
      for (let c = 3; c < maxCols; c++) {
        const group = String(raw[3]?.[c] ?? "").trim();
        const sub = String(raw[4]?.[c] ?? "").trim();
        if (group) lastGroup = group;
        const label = sub ? (group && group !== sub ? `${lastGroup} - ${sub}` : sub) : (group || `Kolom ${c + 1}`);
        headers.push(label.replace(/\n/g, " ").replace(/\s+/g, " ").trim());
      }
      
      const rows = raw.slice(5).filter(r => r.some(v => String(v ?? "").trim() !== "") && String(r[4] ?? "").trim() !== "").map((r, i) => ({
        id: Date.now() + i,
        values: Array.from({ length: maxCols - 3 }, (_, j) => r[j + 3] ?? "")
      }));
      
      if (!rows.length) {
        alert("Tidak menemukan baris data pada Rekap per lokasi.");
        return;
      }
      saveBibitHeaders(headers);
saveBibit(rows);
renderBibit();
dashboard();

syncBibitToSupabase(rows).then(ok=>{
  if(ok){
    alert(`${rows.length} baris dari sheet Rekap per lokasi berhasil di-upload dan disimpan online.
Grafik Keseragaman dihitung dari kolom X, Y, Z berdasarkan PG + Week + Tahun.`);
  }
});
    } catch (err) {
      console.error(err);
      alert("File belum bisa dibaca. Pastikan file Excel memiliki sheet Rekap per lokasi dan struktur header baris 4-5.");
    }
  };
  reader.readAsArrayBuffer(file);
}

function setupBibit(){
 if(!document.getElementById("bibitTableBody"))return;

 renderBibit();
 loadBibitFromSupabase();
  
  const yf = document.getElementById("yearFilter");
  const rf = document.getElementById("regionFilter");
  if (yf) yf.onchange = renderBibit;
  if (rf) rf.onchange = renderBibit;
  
  const resetBtn = document.getElementById("resetFilters");
  if (resetBtn) resetBtn.onclick = () => {
    if (yf) yf.value = "all";
    if (rf) rf.value = "all";
    renderBibit();
  };
  
  const addBtn = document.getElementById("addDataBtn");
  if (addBtn) addBtn.onclick = () => openBibitModal();
  
  const uploadBtn = document.getElementById("uploadExcelBtn");
  if (uploadBtn) uploadBtn.onclick = () => {
    if (!staff()) return openLogin();
    document.getElementById("excelFileInput")?.click();
  };
  
  const fileInput = document.getElementById("excelFileInput");
  if (fileInput) fileInput.onchange = e => {
    importBibit(e.target.files[0]);
    e.target.value = "";
  };
  
  const f = document.getElementById("bibitForm");
  if (f) {
    f.onsubmit = e => {
      e.preventDefault();
      if (!staff()) return openLogin();
      const d = getBibit();
      const iv = document.getElementById("bibitEditIndex").value;
      const n = normalizeBibitRow({
        id: iv === "" ? Date.now() : d[Number(iv)].id,
        pengamat: bibitFormValue("bPengamat"), pg: bibitFormValue("bPG"), lokasi: bibitFormValue("bLokasi"),
        week: bibitFormValue("bWeek"), bulan: bibitFormValue("bBulan"), tahun: bibitFormValue("bTahun"),
        qty: bibitFormValue("bQty"), ht: bibitFormValue("bHT"), bt: bibitFormValue("bBT"), mt: bibitFormValue("bMT"),
        virus: bibitFormValue("bVirus"), mbug: bibitFormValue("bMBug"), cabut: bibitFormValue("bCabut"),
        tidakSegar: bibitFormValue("bTidakSegar"), patah: bibitFormValue("bPatah"), h15: bibitFormValue("bH15"),
        h30: bibitFormValue("bH30"), sehat: bibitFormValue("bSehat"), reject: bibitFormValue("bReject"),
        kelas: bibitFormValue("bKelas"), k15: bibitFormValue("bK15"), k20: bibitFormValue("bK20"),
        k25: bibitFormValue("bK25"), rataTinggi: bibitFormValue("bRataTinggi"), score: bibitFormValue("bScore"),
        rasioKurang: bibitFormValue("bRasioKurang"), rasioLebih: bibitFormValue("bRasioLebih"),
        girth: bibitFormValue("bGirth"), rasio: bibitFormValue("bRasio")
      });
      if (iv === "") d.unshift(n); else d[Number(iv)] = n;
      saveBibit(d);
      document.getElementById("dataModal")?.classList.add("hidden");
      renderBibit();
      dashboard();
    };
  }
  document.querySelectorAll("[data-close-data]").forEach(e => e.onclick = () => document.getElementById("dataModal")?.classList.add("hidden"));
}

function getAllLatestYears() {
  const years = [];
  ["agronomi", "bud", "propping", "buah"].forEach(k => {
    try {
      const s = localStorage.getItem(DATA_KEY + "_" + k);
      if (s) JSON.parse(s).forEach(r => years.push(Number(r[1]) || 0));
    } catch (e) {}
  });
  getBibit().forEach(r => years.push(Number(bibitValue(r, 5)) || 0));
  return years.filter(Boolean);
}

function latestYear() {
  const y = getAllLatestYears();
  return y.length ? Math.max(...y) : new Date().getFullYear();
}

function dashboard() {
  const lyr = document.getElementById("latestYear");
  if (!lyr) return;
  const y = latestYear();
  lyr.textContent = y;
  
  const lyrBadge = document.getElementById("latestYearBadge");
  if (lyrBadge) lyrBadge.textContent = y;

  const b = getBibit().filter(r => Number(bibitValue(r, 5)) === y);
  const chart = document.getElementById("bibitChart");
  if (chart) {
    if (!b.length) {
      chart.innerHTML = '<div class="chart-empty">Belum ada data Bibit pada tahun terbaru.</div>';
    } else {
      const pgNames = ["PG1", "PG2", "PG3", "PG4"];
      const available = pgNames.filter(pg => b.some(r => String(bibitValue(r, 1)) === pg));
      chart.innerHTML = available.length
        ? available.map(pg => buildBibitChartForPG(b, pg, String(y))).join("")
        : '<div class="chart-empty">Belum ada data keseragaman untuk PG1–PG4 pada tahun terbaru.</div>';
    }
  }

  const inSubFolder = location.pathname.toLowerCase().includes("/pages/");
  const basePrefix = inSubFolder ? "" : "pages/";

  const cats = [
    ["bibit", "🌱", "Pengamatan Bibit", b.length],
    ["agronomi", "🌿", "Agronomi", latestGenericCount("agronomi", y)],
    ["bud-injection", "💉", "Bud Injection", latestGenericCount("bud", y)],
    ["propping", "🌴", "Propping", latestGenericCount("propping", y)],
    ["buah-10mg", "🍌", "Buah 10 MG Shooting", latestGenericCount("buah", y)]
  ];

  const summary = document.getElementById("latestSummary");
  if (summary) {
    summary.innerHTML = cats.map(c => `
      <a class="summary-row" href="${basePrefix}${c[0]}.html">
        <span>${c[1]} ${c[2]}</span>
        <strong>${c[3]} data</strong>
      </a>
    `).join("");
  }
}

function latestGenericCount(k, y) {
  try {
    const s = localStorage.getItem(DATA_KEY + "_" + k);
    if (s) return JSON.parse(s).filter(r => Number(r[1]) === y).length;
  } catch (e) {}
  return 0;
}

function setupAuth() {
  document.querySelectorAll("#loginBtn,#heroLoginBtn,#sidebarLoginBtn").forEach(e => e.onclick = openLogin);
  document.querySelectorAll("#logoutBtn,#sidebarLogoutBtn").forEach(e => e.onclick = logout);
  document.querySelectorAll("[data-close-login]").forEach(e => e.onclick = closeLogin);
  
  const lf = document.getElementById("loginForm");
  if (lf) {
    lf.onsubmit = e => {
      e.preventDefault();
      const u = document.getElementById("username").value.trim();
      const p = document.getElementById("password").value;
      const er = document.getElementById("loginError");
      if (u === "petugas" && p === "qcbanana") {
        setStaff(true);
        closeLogin();
        lf.reset();
        updateUI();
        renderGeneric();
        renderBibit();
        dashboard();
      } else {
        if (er) {
          er.textContent = "Username atau password salah.";
          er.classList.remove("hidden");
        }
      }
    };
  }
}

function setupSidebar() {
  const s = document.getElementById("sidebar");
  const o = document.getElementById("sidebarOverlay");
  const t = document.getElementById("menuToggle");
  if (!s || !o || !t) return;
  
  const close = () => {
    s.classList.remove("show");
    o.classList.remove("show");
  };
  t.onclick = () => {
    s.classList.toggle("show");
    o.classList.toggle("show");
  };
  o.onclick = close;
  document.querySelectorAll(".nav-link").forEach(a => a.onclick = close);
}

document.addEventListener("DOMContentLoaded", () => {
  setupSidebar();
  setupAuth();
  updateUI();
  if (pageKey() === "bibit") setupBibit(); else setupGeneric();
  dashboard();
});

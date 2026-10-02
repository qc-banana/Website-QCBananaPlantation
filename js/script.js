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
async function syncBibitToSupabase(rows){
  if(!qcSupabase){
    console.warn("Supabase belum terhubung.");
    return false;
  }

  try{
    // Hapus data lama
    const del = await qcSupabase
      .from("bibit_data")
      .delete()
      .neq("id", 0);

    if(del.error) throw del.error;

    // Ambil header Excel
    const headers = getBibitHeaders();

    // Simpan row_data sebagai ARRAY values
    const payload = rows.map(r => {
      const normalized = normalizeBibitRow(r);

      return {
        row_data: normalized.values || [],
        headers: headers
      };
    });

    const chunkSize = 500;

    for(let i = 0; i < payload.length; i += chunkSize){
      const chunk = payload.slice(i, i + chunkSize);

      const ins = await qcSupabase
        .from("bibit_data")
        .insert(chunk);

      if(ins.error) throw ins.error;
    }

    console.log("Data Bibit berhasil disimpan ke Supabase.");
    return true;

  }catch(err){
    console.error("Gagal sinkronisasi Supabase:", err);
    alert("Data tersimpan di browser, tetapi belum berhasil dikirim ke database online.");
    return false;
  }
}

async function loadBibitFromSupabase(){
  if(!qcSupabase){
    console.warn("Supabase belum terhubung.");
    return;
  }

  try{
    const res = await qcSupabase
      .from("bibit_data")
      .select("id,row_data,headers")
      .order("id", { ascending: true });

    if(res.error) throw res.error;

    if(!res.data || !res.data.length){
      console.log("Database Supabase masih kosong.");
      return;
    }

    const rows = res.data.map(x => ({
      id: x.id,
      values: Array.isArray(x.row_data)
        ? x.row_data
        : (x.row_data?.values || [])
    }));

    const headers = res.data[0].headers;

    if(Array.isArray(headers) && headers.length){
      saveBibitHeaders(headers);
    }

    saveBibit(rows);

    console.log("Data Bibit berhasil dimuat dari Supabase.");

    renderBibit();
    dashboard();

  }catch(err){
    console.error("Gagal mengambil data dari Supabase:", err);
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
  const ys = rows
    .map(r => Number(bibitValue(r, 5)))
    .filter(v => Number.isFinite(v) && v > 0);

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

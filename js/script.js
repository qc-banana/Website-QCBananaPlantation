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

  if (pageKey() === "bibit") {
    setupBibit();
  } else if (pageKey() === "propping") {
    setupPropping();
  } else {
    setupGeneric();
  }

  dashboard();
});
async function importPropping(file) {
  if (!file) return;

  // Pastikan hanya Petugas yang bisa upload
  if (localStorage.getItem(LOGIN_KEY) !== "true") {
    alert("Silakan login sebagai Petugas terlebih dahulu.");
    return;
  }

  if (!qcSupabase) {
    alert("Supabase belum terhubung.");
    return;
  }

  try {
    console.log("📥 Membaca file Excel Propping:", file.name);

    // Baca file Excel
    const buffer = await file.arrayBuffer();

    const workbook = XLSX.read(buffer, {
      type: "array",
      raw: true,
      cellDates: false
    });

    // Pastikan sheet PROPING tersedia
    const sheetName = workbook.SheetNames.find(
      name => name.trim().toUpperCase() === "PROPING"
    );

    if (!sheetName) {
      alert('Sheet "PROPING" tidak ditemukan di file Excel.');
      return;
    }

    const worksheet = workbook.Sheets[sheetName];

    // Ambil seluruh isi sheet sebagai array
    const allRows = XLSX.utils.sheet_to_json(worksheet, {
      header: 1,
      defval: "",
      raw: true
    });

    console.log("📊 Total baris Excel:", allRows.length);

    /*
      Struktur Excel:
      Baris 1-4 = bagian atas/template
      Baris 5   = header
      Baris 6+  = data

      Jadi kita mulai dari index 5
      karena JavaScript dimulai dari index 0.
    */
    const dataRows = allRows
      .slice(5)
      .filter(row => {
        // Buang baris yang benar-benar kosong
        return Array.isArray(row) &&
          row.some(cell => String(cell ?? "").trim() !== "");
      });

    if (!dataRows.length) {
      alert("Tidak ada data Propping yang ditemukan mulai baris 6.");
      return;
    }

    console.log("✅ Data Propping yang akan diupload:", dataRows.length);
    console.log("Contoh baris:", dataRows[0]);

    // Konfirmasi sebelum mengganti data lama
    const yakin = confirm(
      `Ditemukan ${dataRows.length} baris data Propping.\n\n` +
      `Data Propping lama di website akan diganti dengan data dari file ini.\n\n` +
      `Lanjutkan upload?`
    );

    if (!yakin) return;

    // Hapus data Propping lama
    console.log("🗑️ Menghapus data Propping lama...");

    const { error: deleteError } = await qcSupabase
      .from("propping_data")
      .delete()
      .not("id", "is", null);

    if (deleteError) {
      console.error("❌ Gagal menghapus data lama:", deleteError);
      alert("Gagal menghapus data Propping lama:\n" + deleteError.message);
      return;
    }

    /*
      Upload bertahap supaya tidak terlalu besar
      dalam satu request.
    */
    const chunkSize = 500;

    for (let i = 0; i < dataRows.length; i += chunkSize) {
      const chunk = dataRows.slice(i, i + chunkSize);

      const payload = chunk.map(row => ({
        row_data: row
      }));

      console.log(
        `📤 Upload ${i + 1} - ${Math.min(
          i + chunk.length,
          dataRows.length
        )} dari ${dataRows.length}`
      );

      const { error: insertError } = await qcSupabase
        .from("propping_data")
        .insert(payload);

      if (insertError) {
        console.error("❌ Gagal upload Propping:", insertError);

        alert(
          "Upload Propping gagal pada bagian data ke-" +
          (i + 1) +
          ".\n\n" +
          insertError.message
        );

        return;
      }
    }

    console.log("🎉 Semua data Propping berhasil diupload.");

    alert(
      `✅ Upload Propping berhasil!\n\n` +
      `${dataRows.length} baris data berhasil disimpan ke Supabase.`
    );

    // Refresh halaman supaya tabel + filter mengambil data terbaru
    location.reload();

  } catch (error) {
    console.error("❌ Error importPropping:", error);

    alert(
      "Terjadi kesalahan saat membaca/upload Excel Propping:\n\n" +
      error.message
    );
  }
}
async function setupPropping() {
  console.log("✅ setupPropping aktif");

  const rows = await getProppingFromSupabase();

  console.log("📊 Data Propping dari Supabase:", rows.length);
// ===============================
// UPLOAD EXCEL PROPPING
// ===============================
const uploadBtn = document.getElementById("uploadExcelBtn");
const excelInput = document.getElementById("excelFileInput");

if (uploadBtn && excelInput) {

  uploadBtn.addEventListener("click", () => {

    // Cek login Petugas
    if (localStorage.getItem(LOGIN_KEY) !== "true") {
      alert("Silakan login sebagai Petugas terlebih dahulu.");
      return;
    }

    excelInput.click();
  });

  excelInput.addEventListener("change", async (event) => {

    const file = event.target.files?.[0];

    if (!file) return;

    await importPropping(file);

    // Supaya file yang sama bisa dipilih lagi
    excelInput.value = "";
  });
}
  // Isi filter tabel
  updateProppingWeekFilter(rows);
  updateProppingPGFilter(rows);
  updateProppingWilayahFilter(rows);

  // Tampilkan tabel
  renderPropping(rows);

  // Tampilkan grafik
  renderProppingCharts(rows);

  // =========================
  // FILTER GRAFIK
  // =========================

  const yearFilter = document.getElementById("proppingYearFilter");
  const modeFilter = document.getElementById("proppingModeFilter");
  const resetChart = document.getElementById("proppingChartReset");

  yearFilter?.addEventListener("change", () => {
    renderProppingCharts(rows);
  });

  modeFilter?.addEventListener("change", () => {
    renderProppingCharts(rows);
  });

  resetChart?.addEventListener("click", () => {
    if (yearFilter) yearFilter.value = "all";
    if (modeFilter) modeFilter.value = "all";

    renderProppingCharts(rows);
  });

  // =========================
  // FILTER TABEL
  // =========================

  const weekFilter = document.getElementById("proppingWeekFilter");
  const pgFilter = document.getElementById("proppingPGFilter");
  const wilayahFilter = document.getElementById("proppingWilayahFilter");
  const resetTable = document.getElementById("proppingTableReset");

  [weekFilter, pgFilter, wilayahFilter].forEach(select => {
    select?.addEventListener("change", () => {
      renderPropping(rows);
    });
  });

  resetTable?.addEventListener("click", () => {
    if (weekFilter) weekFilter.value = "all";
    if (pgFilter) pgFilter.value = "all";
    if (wilayahFilter) wilayahFilter.value = "all";

    renderPropping(rows);
  });
}


// =====================================================
// AMBIL DATA PROPPING DARI SUPABASE
// =====================================================

async function getProppingFromSupabase() {
  if (!qcSupabase) {
    console.error("❌ Supabase belum tersedia.");
    return [];
  }

  const allRows = [];
  const pageSize = 1000;
  let from = 0;

  while (true) {
    const { data, error } = await qcSupabase
      .from("propping_data")
      .select("id,row_data")
      .order("id", { ascending: true })
      .range(from, from + pageSize - 1);

    if (error) {
      console.error("❌ Gagal mengambil data Propping:", error);
      return [];
    }

    allRows.push(...(data || []));

    console.log(
      `📥 Mengambil data Propping ${from + 1} - ${from + (data?.length || 0)}`
    );

    if (!data || data.length < pageSize) {
      break;
    }

    from += pageSize;
  }

  console.log(`📊 TOTAL DATA PROPPING DARI SUPABASE: ${allRows.length}`);

  return allRows.map(row => ({
    id: row.id,
    values: Array.isArray(row.row_data)
      ? row.row_data
      : []
  }));
}


// =====================================================
// FILTER WEEK
// Excel I = index 8
// =====================================================

function updateProppingWeekFilter(rows) {

  const select = document.getElementById("proppingWeekFilter");

  if (!select) return;

  const weeks = [...new Set(
    rows
      .map(r => r.values?.[7] ?? "")
      .map(v => String(v).trim())
      .filter(v => v !== "")
  )];

  weeks.sort((a, b) => {

    const na = parseInt(a.replace(/\D/g, ""), 10);
    const nb = parseInt(b.replace(/\D/g, ""), 10);

    if (Number.isFinite(na) && Number.isFinite(nb)) {
      return na - nb;
    }

    return a.localeCompare(b);
  });

  select.innerHTML = `
    <option value="all">Semua Week</option>

    ${weeks.map(week => `
      <option value="${esc(week)}">${esc(week)}</option>
    `).join("")}
  `;
}


// =====================================================
// FILTER PG
// Excel C = index 2
// =====================================================

function updateProppingPGFilter(rows) {

  const select = document.getElementById("proppingPGFilter");

  if (!select) return;

  const pgs = [...new Set(
    rows
      .map(r => r.values?.[1] ?? "")
      .map(v => String(v).trim())
      .filter(v => v !== "")
  )];

  pgs.sort((a, b) => a.localeCompare(b));

  select.innerHTML = `
    <option value="all">Semua PG</option>

    ${pgs.map(pg => `
      <option value="${esc(pg)}">${esc(pg)}</option>
    `).join("")}
  `;
}


// =====================================================
// FILTER WILAYAH
// Excel D = index 3
// =====================================================

function updateProppingWilayahFilter(rows) {

  const select = document.getElementById("proppingWilayahFilter");

  if (!select) return;

  const wilayahs = [...new Set(
    rows
      .map(r => r.values?.[2] ?? "")
      .map(v => String(v).trim())
      .filter(v => v !== "")
  )];

  wilayahs.sort((a, b) => a.localeCompare(b));

  select.innerHTML = `
    <option value="all">Semua Wilayah</option>

    ${wilayahs.map(wilayah => `
      <option value="${esc(wilayah)}">${esc(wilayah)}</option>
    `).join("")}
  `;
}

function formatProppingDate(value) {
  if (value === null || value === undefined || value === "") {
    return "";
  }

  // Kalau Excel mengirim angka serial tanggal
  const num = Number(value);

  if (Number.isFinite(num) && num > 30000 && num < 60000) {
    const date = new Date(Date.UTC(1899, 11, 30) + num * 86400000);

    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
  }

  // Kalau sudah berupa tanggal biasa
  if (value instanceof Date && !isNaN(value.getTime())) {
    const day = String(value.getDate()).padStart(2, "0");
    const month = String(value.getMonth() + 1).padStart(2, "0");
    const year = value.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return String(value);
}

function formatProppingPercent(value) {
  if (value === null || value === undefined || value === "") {
    return "";
  }

  const num = Number(value);

  if (!Number.isFinite(num)) {
    return String(value);
  }

  return `${(num * 100).toFixed(1).replace(/\.0$/, "")}%`;
}

function renderPropping(rows) {
  const tbody = document.getElementById("proppingTableBody");

  if (!tbody) return;

  const weekFilter =
    document.getElementById("proppingWeekFilter")?.value || "all";

  const pgFilter =
    document.getElementById("proppingPGFilter")?.value || "all";

  const wilayahFilter =
    document.getElementById("proppingWilayahFilter")?.value || "all";

  const filtered = rows.filter(row => {
  const v = row.values || [];

  const pg = String(v[1] ?? "").trim();
  const wilayah = String(v[2] ?? "").trim();
  const week = String(v[7] ?? "").trim();

  if (weekFilter !== "all" && week !== weekFilter) {
    return false;
  }

  if (pgFilter !== "all" && pg !== pgFilter) {
    return false;
  }

  if (wilayahFilter !== "all" && wilayah !== wilayahFilter) {
    return false;
  }

  return true;
});

// TAMBAHKAN INI
const recordCount = document.getElementById("proppingRecordCount");

if (recordCount) {
  recordCount.textContent = filtered.length;
}

if (!filtered.length) {
  tbody.innerHTML = `
    <tr>
      <td colspan="22" style="text-align:center;padding:30px;">
        Tidak ada data Propping.
      </td>
    </tr>
  `;
  return;
}
  console.log("🔎 Filter Propping:", {
    weekFilter,
    pgFilter,
    wilayahFilter,
    hasil: filtered.length
  });

  if (!filtered.length) {
    tbody.innerHTML = `
      <tr>
        <td colspan="22" style="text-align:center;padding:30px;">
          Tidak ada data Propping.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(row => {
    const v = row.values || [];

    return `
      <tr>
        <td>${esc(v[0] ?? "")}</td>
        <td>${esc(v[1] ?? "")}</td>
        <td>${esc(v[2] ?? "")}</td>
        <td>${esc(v[3] ?? "")}</td>
        <td>${esc(formatProppingDate(v[4]))}</td>
        <td>${esc(v[5] ?? "")}</td>
        <td>${esc(v[6] ?? "")}</td>
        <td>${esc(v[7] ?? "")}</td>
        <td>${esc(v[8] ?? "")}</td>
        <td>${esc(formatProppingPercent(v[9]))}</td>
        <td>${esc(formatProppingPercent(v[10]))}</td>
        <td>${esc(formatProppingPercent(v[11]))}</td>
        <td>${esc(formatProppingPercent(v[12]))}</td>
        <td>${esc(formatProppingPercent(v[13]))}</td>
        <td>${esc(formatProppingPercent(v[14]))}</td>
        <td>${esc(formatProppingPercent(v[15]))}</td>
        <td>${esc(formatProppingPercent(v[16]))}</td>
        <td>${esc(formatProppingPercent(v[17]))}</td>
        <td>${esc(formatProppingPercent(v[18]))}</td>
        <td>${esc(formatProppingPercent(v[19]))}</td>
        <td>${esc(v[20] ?? "")}</td>
        <td>${esc(v[21] ?? "")}</td>
      </tr>
    `;
  }).join("");
}
function renderProppingCharts(rows) {
  const area = document.getElementById("proppingChartArea");
  if (!area) return;

  const yearFilter =
    document.getElementById("proppingYearFilter")?.value || "all";

  const modeFilter =
    document.getElementById("proppingModeFilter")?.value || "all";

  const info =
    document.getElementById("proppingChartFilterInfo");

  // =====================================================
  // INFO FILTER
  // =====================================================

  if (info) {
    const tahunText =
      yearFilter === "all"
        ? "Semua Tahun"
        : yearFilter;

    const modeText =
      modeFilter === "all"
        ? "Semua"
        : modeFilter === "pg"
          ? "PG"
          : "Wilayah";

    info.textContent = `${tahunText} • ${modeText}`;
  }

  // =====================================================
  // FILTER TAHUN
  // =====================================================

  const data = rows.filter(row => {
    const v = row.values || [];

    // F = Tahun
    const tahun = String(v[5] ?? "").trim();

    if (
      yearFilter !== "all" &&
      tahun !== String(yearFilter)
    ) {
      return false;
    }

    return true;
  });

  if (!data.length) {
    area.innerHTML = `
      <div class="chart-empty">
        Belum ada data untuk ditampilkan.
      </div>
    `;
    return;
  }

  // =====================================================
  // MAPPING EXCEL TERBARU
  //
  // A = Div
  // B = PG
  // C = Wilayah
  // D = Block
  // E = Tanggal
  // F = Tahun
  // G = Bulan
  // H = WK
  // I = Sample
  // J = TerProping
  // =====================================================

  function getPG(row) {
    return String(
      row.values?.[1] ?? ""
    ).trim();
  }

  function getWilayah(row) {
    return String(
      row.values?.[2] ?? ""
    ).trim();
  }

  function getYear(row) {
    return String(
      row.values?.[5] ?? ""
    ).trim();
  }

  function getMonth(row) {
    return String(
      row.values?.[6] ?? ""
    ).trim();
  }

  function getWeek(row) {
    return String(
      row.values?.[7] ?? ""
    ).trim();
  }

  function getTerproping(row) {
    const n = Number(
      row.values?.[9]
    );

    if (!Number.isFinite(n)) {
      return null;
    }

    // Kalau Excel menyimpan 0.95 → 95
    // Kalau Excel menyimpan 95 → tetap 95
    return n <= 1 ? n * 100 : n;
  }

  // =====================================================
  // AVERAGE
  // =====================================================

  function average(values) {
    const valid = values.filter(
      value =>
        Number.isFinite(value)
    );

    if (!valid.length) {
      return null;
    }

    return (
      valid.reduce(
        (sum, value) =>
          sum + value,
        0
      ) / valid.length
    );
  }

  // =====================================================
  // URUTAN BULAN
  // =====================================================

  const monthOrder = {
    jan: 1,
    januari: 1,

    feb: 2,
    februari: 2,

    mar: 3,
    maret: 3,

    apr: 4,
    april: 4,

    may: 5,
    mei: 5,

    jun: 6,
    juni: 6,

    jul: 7,
    juli: 7,

    aug: 8,
    agustus: 8,

    sep: 9,
    september: 9,

    oct: 10,
    okt: 10,
    october: 10,
    oktober: 10,

    nov: 11,
    november: 11,

    dec: 12,
    desember: 12
  };

  function monthNumber(value) {
    const text =
      String(value ?? "")
        .trim()
        .toLowerCase()
        .replace(/[^a-z]/g, "");

    if (monthOrder[text]) {
      return monthOrder[text];
    }

    const num = Number(value);

    if (
      Number.isFinite(num) &&
      num >= 1 &&
      num <= 12
    ) {
      return num;
    }

    return 99;
  }

  function monthLabel(number) {
    const names = [
      "",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Okt",
      "Nov",
      "Des"
    ];

    return names[number] || "";
  }

  // =====================================================
  // 5 BULAN TERAKHIR
  //
  // PENTING:
  // Sekarang bukan hanya berdasarkan nomor bulan.
  // Tapi berdasarkan TAHUN + BULAN.
  //
  // Contoh:
  // 2025-11
  // 2025-12
  // 2026-01
  // 2026-02
  // 2026-03
  // =====================================================

  const monthMap = new Map();

  data.forEach(row => {
    const tahun =
      Number(getYear(row));

    const bulan =
      monthNumber(getMonth(row));

    if (
      !Number.isFinite(tahun) ||
      bulan < 1 ||
      bulan > 12
    ) {
      return;
    }

    const key =
      `${tahun}-${String(bulan).padStart(2, "0")}`;

    if (!monthMap.has(key)) {
      monthMap.set(key, {
        key,
        tahun,
        bulan,
        label: monthLabel(bulan)
      });
    }
  });

  const monthData = [
    ...monthMap.values()
  ]
    .sort((a, b) => {
      if (a.tahun !== b.tahun) {
        return a.tahun - b.tahun;
      }

      return a.bulan - b.bulan;
    })
    .slice(-5);

  // Label untuk grafik
  const months =
    monthData.map(item => {
      // Kalau semua tahun, tampilkan tahun
      // supaya tidak membingungkan.
      if (yearFilter === "all") {
        return `${item.label} ${item.tahun}`;
      }

      return item.label;
    });

  // =====================================================
  // 5 WEEK TERAKHIR
  // =====================================================

  const weekMap = new Map();

  data.forEach(row => {
    const week =
      getWeek(row);

    if (!week) {
      return;
    }

    const numbers =
      week.match(/\d+/g);

    let weekNumber = null;

    if (
      numbers &&
      numbers.length
    ) {
      weekNumber =
        Number(
          numbers[numbers.length - 1]
        );
    }

    const key = week;

    if (!weekMap.has(key)) {
      weekMap.set(key, {
        raw: week,
        number:
          Number.isFinite(weekNumber)
            ? weekNumber
            : 999999
      });
    }
  });

  const weeks = [
    ...weekMap.values()
  ]
    .sort((a, b) => {
      return a.number - b.number;
    })
    .slice(-5)
    .map(item => item.raw);

  // =====================================================
  // DAFTAR PG
  // =====================================================

  const pgs = [
    ...new Set(
      data
        .map(row => getPG(row))
        .filter(Boolean)
    )
  ].sort();

  // =====================================================
  // DAFTAR WILAYAH
  // =====================================================

  const wilayah = [
    ...new Set(
      data
        .map(row => getWilayah(row))
        .filter(Boolean)
    )
  ].sort();

  // =====================================================
  // RUMUS ALL PG BULANAN
  //
  // Equivalent:
  // AVERAGEIFS(TerProping; Bulan; Bulan; Tahun; Tahun)
  // =====================================================

  function averageAllByMonth(index) {
    const target =
      monthData[index];

    if (!target) {
      return null;
    }

    return average(
      data
        .filter(row => {
          const tahun =
            Number(getYear(row));

          const bulan =
            monthNumber(
              getMonth(row)
            );

          return (
            tahun === target.tahun &&
            bulan === target.bulan
          );
        })
        .map(row =>
          getTerproping(row)
        )
    );
  }

  // =====================================================
  // RUMUS PG BULANAN
  // =====================================================

  function averagePGByMonth(
    pg,
    index
  ) {
    const target =
      monthData[index];

    if (!target) {
      return null;
    }

    return average(
      data
        .filter(row => {
          const tahun =
            Number(getYear(row));

          const bulan =
            monthNumber(
              getMonth(row)
            );

          return (
            getPG(row) === pg &&
            tahun === target.tahun &&
            bulan === target.bulan
          );
        })
        .map(row =>
          getTerproping(row)
        )
    );
  }

  // =====================================================
  // RUMUS WILAYAH BULANAN
  // =====================================================

  function averageWilayahByMonth(
    w,
    index
  ) {
    const target =
      monthData[index];

    if (!target) {
      return null;
    }

    return average(
      data
        .filter(row => {
          const tahun =
            Number(getYear(row));

          const bulan =
            monthNumber(
              getMonth(row)
            );

          return (
            getWilayah(row) === w &&
            tahun === target.tahun &&
            bulan === target.bulan
          );
        })
        .map(row =>
          getTerproping(row)
        )
    );
  }

  // =====================================================
  // RUMUS ALL PG WEEKLY
  // =====================================================

  function averageAllByWeek(
    week
  ) {
    return average(
      data
        .filter(row =>
          getWeek(row) === week
        )
        .map(row =>
          getTerproping(row)
        )
    );
  }

  // =====================================================
  // RUMUS PG WEEKLY
  // =====================================================

  function averagePGByWeek(
    pg,
    week
  ) {
    return average(
      data
        .filter(row =>
          getPG(row) === pg &&
          getWeek(row) === week
        )
        .map(row =>
          getTerproping(row)
        )
    );
  }

  // =====================================================
  // RUMUS WILAYAH WEEKLY
  // =====================================================

  function averageWilayahByWeek(
    w,
    week
  ) {
    return average(
      data
        .filter(row =>
          getWilayah(row) === w &&
          getWeek(row) === week
        )
        .map(row =>
          getTerproping(row)
        )
    );
  }

  // =====================================================
  // RESET AREA CHART
  // =====================================================

  area.innerHTML = "";

  // =====================================================
  // BUAT CHART
  // =====================================================

  function addChart(
    title,
    labels,
    datasets
  ) {
    const wrapper =
      document.createElement("div");

    wrapper.style.cssText = `
      width:100%;
      height:400px;
      margin-bottom:35px;
      position:relative;
    `;

    wrapper.innerHTML = `
      <h3 style="
        margin-bottom:10px;
        font-size:18px;
        font-weight:700;
      ">
        ${title}
      </h3>

      <canvas></canvas>
    `;

    area.appendChild(wrapper);

    const canvas =
      wrapper.querySelector(
        "canvas"
      );

    new Chart(canvas, {
      type: "bar",

      data: {
        labels,
        datasets
      },

      options: {
        responsive: true,

        maintainAspectRatio: false,

        interaction: {
          mode: "index",
          intersect: false
        },

        datasets: {
          bar: {
            barPercentage: 0.55,
            categoryPercentage: 0.65
          }
        },

        scales: {
          y: {
            min: 0,
            max: 120,

            ticks: {
              callback:
                value =>
                  `${value}%`
            },

            title: {
              display: true,
              text:
                "Persentase TerProping"
            }
          },

          x: {
            title: {
              display: true,
              text: "Periode"
            }
          }
        },

        plugins: {
          legend: {
            position: "bottom"
          },

          tooltip: {
            callbacks: {
              label:
                context => {
                  const value =
                    context.raw;

                  if (
                    value === null ||
                    value === undefined
                  ) {
                    return `${context.dataset.label}: -`;
                  }

                  return `${context.dataset.label}: ${Number(value).toFixed(1)}%`;
                }
            }
          }
        }
      }
    });
  }

  // =====================================================
  // DATASET PG = BATANG
  // =====================================================

  function makePGDataset(
    pg,
    values
  ) {
    return {
      label: pg,

      data: values,

      type: "bar",

      borderWidth: 1
    };
  }

  // =====================================================
  // ALL PG = GARIS
  // =====================================================

  function makeAllPGDataset(
    values
  ) {
    return {
      label: "ALL PG",

      data: values,

      type: "line",

      fill: false,

      tension: 0.3,

      borderWidth: 3,

      pointRadius: 4,

      pointHoverRadius: 6,

      order: 1
    };
  }

  // =====================================================
  // STD 95% = GARIS
  // =====================================================

  function makeStdDataset(
    length
  ) {
    return {
      label: "Std 95%",

      type: "line",

      data:
        Array(length).fill(95),

      borderWidth: 3,

      borderDash: [
        8,
        5
      ],

      pointRadius: 0,

      pointHoverRadius: 0,

      fill: false,

      order: 0
    };
  }

  // =====================================================
  // 1. PG BULANAN
  // =====================================================

  if (
    modeFilter === "all" ||
    modeFilter === "pg"
  ) {
    const pgDatasets =
      pgs.map(pg =>
        makePGDataset(
          pg,
          months.map(
            (_, index) =>
              averagePGByMonth(
                pg,
                index
              )
          )
        )
      );

    addChart(
      "📊 TerProping PG — Per Bulan",
      months,

      [
        // ALL PG = GARIS
        makeAllPGDataset(
          months.map(
            (_, index) =>
              averageAllByMonth(
                index
              )
          )
        ),

        // PG1, PG2, PG3, PG4 = BATANG
        ...pgDatasets,

        // STD 95% = GARIS
        makeStdDataset(
          months.length
        )
      ]
    );
  }

  // =====================================================
  // 2. PG WEEKLY
  // =====================================================

  if (
    modeFilter === "all" ||
    modeFilter === "pg"
  ) {
    const pgDatasets =
      pgs.map(pg =>
        makePGDataset(
          pg,
          weeks.map(
            week =>
              averagePGByWeek(
                pg,
                week
              )
          )
        )
      );

    addChart(
      "📊 TerProping PG — Per Week",
      weeks,

      [
        // ALL PG = GARIS
        makeAllPGDataset(
          weeks.map(
            week =>
              averageAllByWeek(
                week
              )
          )
        ),

        // PG = BATANG
        ...pgDatasets,

        // STD = GARIS
        makeStdDataset(
          weeks.length
        )
      ]
    );
  }

  // =====================================================
  // 3. WILAYAH BULANAN
  // =====================================================

  if (
    modeFilter === "all" ||
    modeFilter === "wilayah"
  ) {
    const wilayahDatasets =
      wilayah.map(w => ({
        label: w,

        data: months.map(
          (_, index) =>
            averageWilayahByMonth(
              w,
              index
            )
        ),

        type: "bar",

        borderWidth: 1
      }));

    addChart(
      "📊 TerProping Wilayah — Per Bulan",
      months,

      [
        // ALL PG = GARIS
        makeAllPGDataset(
          months.map(
            (_, index) =>
              averageAllByMonth(
                index
              )
          )
        ),

        // WILAYAH = BATANG
        ...wilayahDatasets,

        // STD = GARIS
        makeStdDataset(
          months.length
        )
      ]
    );
  }

  // =====================================================
  // 4. WILAYAH WEEKLY
  // =====================================================

  if (
    modeFilter === "all" ||
    modeFilter === "wilayah"
  ) {
    const wilayahDatasets =
      wilayah.map(w => ({
        label: w,

        data: weeks.map(
          week =>
            averageWilayahByWeek(
              w,
              week
            )
        ),

        type: "bar",

        borderWidth: 1
      }));

    addChart(
      "📊 TerProping Wilayah — Per Week",
      weeks,

      [
        // ALL PG = GARIS
        makeAllPGDataset(
          weeks.map(
            week =>
              averageAllByWeek(
                week
              )
          )
        ),

        // WILAYAH = BATANG
        ...wilayahDatasets,

        // STD = GARIS
        makeStdDataset(
          weeks.length
        )
      ]
    );
  }

  // =====================================================
  // KALAU TIDAK ADA CHART
  // =====================================================

  if (!area.children.length) {
    area.innerHTML = `
      <div class="chart-empty">
        Belum ada data grafik untuk ditampilkan.
      </div>
    `;
  }
}

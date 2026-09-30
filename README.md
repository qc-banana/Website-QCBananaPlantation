# QC Banana — Template v3

Versi ini adalah **template awal v2 yang dipertahankan**, lalu ditambah:
- Filter Tahun dan PG pada semua halaman Data QC.
- Dashboard mengambil **tahun paling terbaru yang tersedia**.
- Dashboard menampilkan ringkasan 5 kategori QC.
- Fokus detail sekarang pada **Pengamatan Bibit**.
- Pengamatan Bibit mengikuti struktur kolom dari file QC yang diberikan:
  Pengamat, PG, Lokasi, Week, Bulan, Tahun, Qty, Reject Nursery, Reject Handling,
  Kelas Bibit, Keseragaman (% Score), Girth, dan Rasio.
- Setiap halaman Data QC punya **Edit, Hapus, Input Manual, dan Upload Excel/CSV** untuk Petugas.
- Pengunjung tidak melihat tombol pengelolaan data.
- Login demo: `petugas` / `qcbanana`.

## Catatan
Data prototype masih tersimpan di localStorage browser, belum database/server.
Import Excel memakai SheetJS CDN sehingga saat import perlu koneksi internet.

- Pengamatan Bibit memiliki grafik Keseragaman model grouped bar seperti rekap Excel: 3 kategori (<20 K, 20 s/d 25 S, 26 s/d 35 B) untuk 5 Week terbaru, mengikuti filter Tahun dan PG.

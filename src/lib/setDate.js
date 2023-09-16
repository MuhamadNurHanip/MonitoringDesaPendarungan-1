export const setDate = (date) => {
  // Buat objek Date dari tanggal awal
  const tanggalObjek = new Date(date);

  // Daftar nama bulan dalam bahasa Inggris
  const namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // Dapatkan hari, bulan, dan tahun dari tanggal
  const tanggal = tanggalObjek.getDate();
  const bulan = namaBulan[tanggalObjek.getMonth()];
  const tahun = tanggalObjek.getFullYear();

  // Gabungkan menjadi tanggal dalam format yang diinginkan
  const tanggalHasil = `${tanggal} ${bulan} ${tahun}`;

  return tanggalHasil;
};

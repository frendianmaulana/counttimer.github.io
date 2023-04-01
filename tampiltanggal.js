const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum&#39;at', 'Sabtu'];

const date = new Date();
const day = date.getDate();
const month = months[date.getMonth()];
const year = date.getFullYear();
const thisDay = days[date.getDay()];

document.write(`<b class="text-primary">Tanggal: ${thisDay}, ${day} ${month} ${year}</b>`);

export function calculateFence(values) {
  const limits = {length:[0.1,1000],height:[0.1,10],width:[1,1000],gap:[0,1000],waste:[0,100]};
  const v = {};
  for (const [key,[min,max]] of Object.entries(limits)) {
    if (values[key] === '' || values[key] == null) throw new RangeError('Lengkapkan semua ukuran.');
    v[key] = Number(values[key]);
    if (!Number.isFinite(v[key]) || v[key] < min || v[key] > max) throw new RangeError('Semak ukuran. Gunakan nilai dalam julat yang dinyatakan pada medan.');
  }
  const base = Math.ceil(v.length * 1000 / (v.width + v.gap));
  const total = Math.ceil(base * (100 + v.waste) / 100);
  return {...v,base,total};
}
export const whatsappURL = message => 'https://wa.me/60189569639?text=' + encodeURIComponent(message);
export function calculatorMessage(r) {
  return `Salam SYAZE Enterprise, saya ingin menyemak anggaran pagar Shera plank.\nPanjang: ${r.length} m\nTinggi bilah: ${r.height} m\nLebar bilah: ${r.width} mm\nJarak: ${r.gap} mm\nLebihan: ${r.waste}%\nAnggaran awal: ${r.base} bilah; dengan lebihan: ${r.total} bilah potong.\nIni anggaran sementara, bukan jumlah papan stok. Mohon semak saiz, susun atur dan sebut harga.`;
}

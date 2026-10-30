/** Complete, human-readable inner pages. UI helpers are supplied by the build. */
export function getPages(ui) {
  const { icon, img, button, faq, related, areas, quoteForm, steps, section } = ui;
  const wa = 'https://wa.me/60189569639';
  const photoNote = '<p class="muted photo-note">Visual ilustrasi. Bukan dokumentasi projek yang telah disiapkan.</p>';
  const fenceNote = '<p class="muted photo-note">Visual olahan berdasarkan gambar rujukan. Sahkan warna, saiz dan susun atur dengan kami.</p>';
  const card = (heading, text, asset) => `<div class="card">${asset?img(asset,heading,'card-photo'):''}<h3>${heading}</h3><p>${text}</p></div>`;
  const iconCard = (heading, text, symbol) => `<div class="card icon-card">${icon(symbol)}<h3>${heading}</h3><p>${text}</p></div>`;
  const serviceCard = (heading, text, asset, href, symbol) => `<article class="card service-photo-card"><h3>${icon(symbol)}${heading}</h3><p>${text}</p>${img(asset, `Ilustrasi ${heading.toLowerCase()}`, 'card-photo')}${button(`Lihat ${heading}`, href)}</article>`;
  const measurementPhoto = (asset, alt, direction = '') => `<figure class="measurement-photo">${img(asset, alt)}${direction ? `<svg class="measurement-overlay" viewBox="0 0 480 320" preserveAspectRatio="none" aria-hidden="true">${direction === 'length' ? '<rect x="103" y="209" width="274" height="42" rx="8" fill="white" fill-opacity=".96"/><path d="M43 191H437m-10-9 10 9-10 9M53 182l-10 9 10 9" stroke="#076b34" stroke-width="4" fill="none"/><text x="240" y="236" text-anchor="middle" fill="#103b28" font-family="sans-serif" font-size="20" font-weight="700">Panjang setiap bentang</text>' : '<rect x="247" y="129" width="184" height="42" rx="8" fill="white" fill-opacity=".96"/><path d="M225 53V273m-9-10 9 10 9-10M216 63l9-10 9 10" stroke="#076b34" stroke-width="4" fill="none"/><text x="339" y="156" text-anchor="middle" fill="#103b28" font-family="sans-serif" font-size="20" font-weight="700">Tinggi bilah</text>'}</svg>` : ''}</figure>`;
  const checklist = items => `<ul class="check-list">${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
  const table = (heads, rows, caption = '') => `<div class="table-scroll"><table class="data-table">${caption ? `<caption>${caption}</caption>` : ''}<thead><tr>${heads.map(h => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr><th scope="row">${row[0]}</th>${row.slice(1).map(v => `<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const contact = (title, service) => section(title, `<p>Kongsi lokasi dan keperluan projek anda untuk perbincangan melalui WhatsApp.</p>${quoteForm(service)}`, 'green-panel');
  const coverage = () => `<div id="kawasan">${section('Kawasan Perkhidmatan', areas())}</div>`;

  const fenceFaq = [
    ['Boleh beli bekalan Shera plank sahaja?', 'Ya. Bekalan sahaja atau bekalan bersama pemasangan untuk pagar dan pintu pagar boleh dibincangkan. Kongsi ukuran, pilihan kemasan dan lokasi projek.'],
    ['Adakah pemasangan pagar disediakan?', 'Kami menerima pertanyaan untuk pemasangan pagar Shera plank. Reka bentuk, rangka, keadaan tapak dan skop pemasangan perlu dibincangkan sebelum sebut harga disahkan.'],
    ['Bagaimana nak anggar bilangan bilah?', 'Anggaran awal bergantung pada panjang pagar, lebar bilah, jarak antara bilah dan lebihan. Kiraan akhir perlu mengambil kira setiap bentang, bukaan, rangka dan potongan.'],
    ['Adakah servis Shera plank ini untuk dinding rumah?', 'Fokus servis Shera plank kami ialah pagar dan pintu pagar. Pertanyaan renovation, loteng dan tiny house mempunyai skop berasingan.']
  ];

  const pages = [];

  pages.push({
    slug: 'pagar-shera-plank',
    title: 'Bekalan & Pemasangan Pagar Shera Plank',
    description: 'Bekalan dan pemasangan pagar Shera plank oleh SYAZE Enterprise di Menglembu. Bincang ukuran, kemasan dan lokasi projek melalui WhatsApp.',
    heading: 'Bekalan & Pemasangan Pagar Shera Plank',
    lead: 'SYAZE Enterprise menyediakan bekalan dan pemasangan Shera plank untuk pagar dan pintu pagar. Kongsi ukuran serta lokasi projek untuk sebut harga.',
    heroImage: 'fence-black',
    body: section('Bekalan sahaja atau bersama pemasangan?', `<p>Pilih cara perbincangan yang sesuai dengan keperluan anda.</p>${table(['Perkara', 'Bekalan Sahaja', 'Bekalan + Pemasangan'], [
      ['Keperluan', 'Anda mengurus pemasangan sendiri atau melalui kontraktor pilihan.', 'Bincangkan bekalan serta kerja pemasangan dengan SYAZE Enterprise.'],
      ['Maklumat awal', 'Ukuran pagar, kuantiti anggaran, kemasan dan lokasi.', 'Ukuran, gambar tapak, keadaan rangka, kemasan dan lokasi.'],
      ['Perbincangan', 'Sahkan pilihan material, kuantiti dan sebut harga bekalan.', 'Sahkan skop bekalan, keperluan tapak, pemasangan dan sebut harga.']
    ])}`)
      + section('Pilih rupa pagar anda', `<div class="grid-2"><figure class="photo-card">${img('fence-black', 'Pagar dan pintu pagar berbilah menegak warna hitam')}<figcaption>Pagar & pintu pagar hitam</figcaption></figure><figure class="photo-card">${img('fence-white', 'Pagar perimeter putih dengan bilah menegak')}<figcaption>Pagar perimeter putih</figcaption></figure></div>${fenceNote}<div class="grid-3">${card('Hitam', 'Rupa gelap dengan garis bilah yang jelas.')}${card('Putih', 'Rupa cerah untuk sempadan kawasan.')}${card('Coklat', 'Tona hangat dengan tekstur pada permukaan bilah.')}</div>${button('Lihat Galeri Pagar', '/galeri-pagar/', true)}`)
      + section('Apa yang perlu dikongsi?', steps([
        ['Panjang pagar', 'Catat panjang setiap bentang pagar dalam meter.'],
        ['Tinggi bilah', 'Nyatakan tinggi pagar atau bilah yang dikehendaki.'],
        ['Gambar tapak', 'Kongsi keadaan pagar, rangka dan kawasan sekeliling.'],
        ['Lokasi projek', 'Beritahu lokasi tepat untuk perbincangan lanjut.']
      ]) + button('Buka Kalkulator Pagar', '/kalkulator-pagar/'))
      + section('Bagaimana proses pertanyaan?', `<div class="split">${img('fence-brown', 'Contoh pintu pagar coklat dengan bilah menegak', 'split-photo')}<div>${steps([
        ['Kongsi maklumat', 'Hantar ukuran, lokasi dan gambar kawasan melalui WhatsApp.'],
        ['Bincang pilihan', 'Semak reka bentuk, kemasan dan keperluan projek bersama kami.'],
        ['Terima sebut harga', 'Minta sebut harga berdasarkan skop yang dibincangkan.'],
        ['Sahkan urusan seterusnya', 'Bincangkan bekalan atau pemasangan selepas skop dipersetujui.']
      ])}</div></div>`)
      + section('Soalan Lazim tentang Pagar Shera Plank', faq(fenceFaq))
      + section('Bacaan Berkaitan', related([
        ['Cara ukur pagar', 'Sediakan ukuran dan gambar sebelum meminta sebut harga.', '/panduan/cara-ukur-pagar/'],
        ['Galeri pagar Shera plank', 'Teroka contoh visual pagar dan pintu pagar.', '/galeri-pagar/']
      ]))
      + coverage()
      + contact('Bincangkan pagar anda', 'Pagar Shera Plank')
  });

  pages.push({
    slug: 'renovation',
    title: 'Renovation Rumah di Menglembu & Perak',
    description: 'Bincangkan renovation rumah dengan SYAZE Enterprise. Kongsi gambar ruang, ukuran anggaran, lokasi dan keutamaan kerja untuk semakan skop.',
    heading: 'Renovation Rumah',
    lead: 'Kami menerima pertanyaan renovation kediaman mengikut keperluan ruang dan skop yang dipersetujui.',
    heroImage: 'renovation',
    body: section('Apa yang anda mahu ubah?', `<div class="grid-3">${card('Ruang sedia ada', 'Beritahu ruang yang ingin diubah dan perkara yang kurang sesuai dengan penggunaan sekarang.','renovation')}${card('Keperluan keluarga', 'Kongsi bagaimana ruang digunakan supaya keutamaan projek dapat difahami.','renovation-dining')}${card('Kemasan pilihan', 'Bawa gambar rujukan warna, suasana atau kemasan untuk dibincangkan.','renovation-finishes')}</div>`)
      + section('Sediakan maklumat sebelum sebut harga', `<div class="split"><div>${checklist([
        '<strong>Gambar ruang:</strong> ambil beberapa sudut yang menunjukkan keadaan semasa.',
        '<strong>Ukuran anggaran:</strong> catat panjang dan lebar ruang jika tersedia.',
        '<strong>Lokasi projek:</strong> kongsi kawasan dan alamat untuk semakan.',
        '<strong>Keutamaan kerja:</strong> nyatakan perubahan yang paling diperlukan.',
        '<strong>Bajet sasaran:</strong> jika ada, kongsikan sebagai rujukan perbincangan.'
      ])}</div><figure class="image-panel">${img('renovation-plan','Pelan ruang dengan pita ukur dan pensel di atas meja')}<figcaption>Visual ilustrasi perancangan ruang.</figcaption></figure></div>`)
      + section('Daripada idea kepada skop kerja', steps([
        ['Kongsi keperluan', 'Beritahu ruang dan perubahan yang anda inginkan.'],
        ['Bincang skop', 'Semak maklumat dan perkara yang perlu dibuat.'],
        ['Semak cadangan', 'Bincangkan pilihan mengikut keadaan ruang.'],
        ['Terima sebut harga', 'Minta sebut harga selepas butiran skop disahkan.']
      ]))
      + section('Soalan tentang Renovation', faq([
        ['Bagaimana sebut harga renovation disediakan?', 'Sebut harga bergantung pada skop kerja, keadaan ruang dan pilihan yang dibincangkan. Kongsi maklumat awal supaya keperluan projek dapat disemak.'],
        ['Boleh saya berkongsi gambar ruang untuk rujukan?', 'Ya. Gambar ruang daripada beberapa sudut boleh dikongsi melalui WhatsApp bersama lokasi dan penerangan perubahan yang diinginkan.'],
        ['Adakah harga renovation tetap?', 'Hubungi kami untuk menyemak pilihan dan sebut harga berdasarkan skop projek anda. Elakkan membuat anggaran akhir hanya berdasarkan keluasan atau gambar rujukan.']
      ]))
      + section('Perkhidmatan Berkaitan', related([
        ['Perlu ruang tambahan? Lihat Loteng', 'Bincangkan kegunaan ruang menegak mengikut kesesuaian tapak.', '/loteng/'],
        ['Pertimbangkan Tiny House', 'Lihat maklumat yang diperlukan sebelum berbincang tentang ruang kecil.', '/tiny-house/']
      ])) + coverage() + contact('Bincang renovation anda sekarang', 'Renovation')
  });

  pages.push({
    slug: 'loteng',
    title: 'Loteng & Ruang Mezzanine',
    description: 'Bincang loteng atau ruang mezzanine dengan SYAZE Enterprise. Sediakan gambar, ukuran dan kegunaan ruang untuk semakan kesesuaian projek.',
    heading: 'Loteng & Ruang Mezzanine',
    lead: 'Bincangkan ruang loteng mengikut kegunaan, keadaan ruang dan kesesuaian tapak.',
    heroImage: 'loft',
    body: section('Sebelum merancang loteng', `<div class="grid-4">${iconCard('Ukuran ruang', 'Catat panjang dan lebar kawasan yang ingin digunakan.', 'ruler')}${iconCard('Ketinggian tersedia', 'Kongsi ukuran tinggi ruang jika diketahui.', 'ruler')}${iconCard('Akses tangga', 'Tunjukkan kawasan akses dan laluan yang tersedia.', 'loft')}${iconCard('Kegunaan ruang', 'Nyatakan sama ada untuk ruang kerja, simpanan atau kegunaan lain.', 'home')}</div><p class="answer-box">Kesesuaian loteng perlu dinilai berdasarkan keadaan ruang dan struktur. Gambar ilustrasi bukan pengesahan bahawa reka bentuk tersebut sesuai untuk setiap rumah.</p>`)
      + section('Ruang tambahan bermula dengan perancangan', `<div class="split">${img('loft', 'Ilustrasi ruang loteng dengan tangga dan pengadang', 'split-photo')}<div><p>Mulakan dengan tujuan penggunaan ruang. Maklumat yang jelas membantu perbincangan tentang susun atur dan perkara yang perlu disemak di tapak.</p>${table(['Maklumat', 'Apa yang perlu dikongsi'], [
        ['Gambar', 'Ruang semasa, siling dan kawasan akses.'],
        ['Ukuran', 'Panjang, lebar dan tinggi ruang jika diketahui.'],
        ['Lokasi', 'Kawasan projek dan maklumat tapak.'],
        ['Kegunaan', 'Tujuan ruang tambahan yang dicadangkan.']
      ])}${photoNote}</div></div>`)
      + section('Aliran Perbincangan', steps([
        ['Kongsi maklumat', 'Hantar gambar, ukuran dan tujuan penggunaan ruang.'],
        ['Semak kesesuaian', 'Bincang perkara yang perlu diperiksa pada ruang dan tapak.'],
        ['Bincang susun atur', 'Kongsi keutamaan dan pilihan untuk ruang tambahan.'],
        ['Sahkan skop & sebut harga', 'Semak butiran projek sebelum meneruskan urusan.']
      ]))
      + section('Soalan Lazim tentang Loteng', faq([
        ['Adakah setiap rumah sesuai untuk loteng?', 'Tidak semestinya. Kesesuaian perlu dinilai berdasarkan ruang, akses dan keadaan struktur. Dapatkan semakan projek sebelum membuat keputusan.'],
        ['Apa maklumat yang perlu dihantar untuk semakan?', 'Kongsi gambar ruang sedia ada, ukuran anggaran jika diketahui, lokasi projek dan cadangan kegunaan loteng.'],
        ['Bagaimana harga ditentukan?', 'Sebut harga bergantung pada penilaian keperluan dan skop yang dipersetujui. Hubungi kami untuk perbincangan projek.']
      ]))
      + section('Perkhidmatan Berkaitan', related([
        ['Renovation', 'Bincangkan perubahan ruang sedia ada.', '/renovation/'],
        ['Tiny House', 'Teroka pilihan perbincangan untuk ruang kecil.', '/tiny-house/']
      ])) + coverage() + contact('Bincang rancangan loteng anda', 'Loteng')
  });

  pages.push({
    slug: 'tiny-house',
    title: 'Tiny House — Perancangan Ruang Kecil',
    description: 'Bincangkan projek tiny house bersama SYAZE Enterprise mengikut kegunaan, lokasi dan keperluan ruang. Hantar maklumat tapak untuk semakan awal.',
    heading: 'Tiny House: Ruang Kecil, Keperluan Anda',
    lead: 'Bincangkan cadangan tiny house berdasarkan kegunaan, lokasi dan keperluan ruang.',
    heroImage: 'tiny',
    body: section('Mulakan dengan keperluan anda', `<div class="grid-3">${iconCard('Kegunaan', 'Beritahu tujuan ruang kecil yang dirancang dan siapa yang akan menggunakannya.', 'tiny')}${iconCard('Keperluan ruang', 'Kongsi ruang utama, fungsi dan keutamaan susun atur.', 'guide')}${iconCard('Lokasi tapak', 'Hantar lokasi serta gambar kawasan untuk perbincangan awal.', 'pin')}</div>`)
      + section('Ilustrasi dalaman & maklumat perbincangan', `<div class="split"><figure class="image-panel">${img('tiny-interior','Ilustrasi ruang dalaman tiny house dengan sofa dan dapur kecil')}<figcaption>Visual ilustrasi ruang kecil.</figcaption></figure><div>${table(['Maklumat', 'Rujukan awal'], [
        ['Gambar tapak', 'Foto kawasan dan keadaan sekeliling daripada beberapa sudut.'],
        ['Lokasi', 'Alamat atau maklumat lokasi projek yang jelas.'],
        ['Susun atur diingini', 'Senarai ruang dan fungsi yang diperlukan.'],
        ['Bajet sasaran', 'Julat bajet jika tersedia untuk rujukan perbincangan.']
      ])}<p class="muted">Cadangan tertakluk kepada semakan tapak dan skop. Visual pada halaman ini ialah ilustrasi.</p></div></div>`)
      + section('Apa yang perlu dibincangkan?', `<div class="grid-3">${iconCard('Tapak','Keadaan, akses dan persekitaran kawasan projek.', 'pin')}${iconCard('Ruang','Susun atur, fungsi ruang dan keperluan dalaman anda.', 'home')}${iconCard('Skop','Jenis kerja, kemasan dan bajet sasaran untuk perbincangan.', 'tools')}</div>`,'illustration-banner')
      + section('Proses Pertanyaan Tiny House', steps([
        ['Hantar pertanyaan', 'Mulakan dengan lokasi dan tujuan projek.'],
        ['Bincang keperluan', 'Kongsi gambar tapak serta keutamaan ruang.'],
        ['Semak cadangan', 'Bincangkan pilihan berdasarkan maklumat tapak.'],
        ['Teruskan jika sesuai', 'Sahkan skop sebelum urusan seterusnya.']
      ]))
      + section('Soalan Lazim tentang Tiny House', faq([
        ['Adakah ada pakej harga tetap?', 'Hubungi kami untuk menyemak pilihan dan sebut harga berdasarkan skop projek anda.'],
        ['Apa maklumat tapak diperlukan?', 'Gambar tapak, lokasi projek, maklumat akses dan senarai keperluan ruang membantu perbincangan awal.'],
        ['Boleh bincang susun atur?', 'Ya. Kongsi idea susun atur dan kegunaan ruang. Pilihan perlu dibincangkan mengikut keperluan serta kesesuaian tapak.']
      ]))
      + section('Perkhidmatan Berkaitan', related([
        ['Renovation', 'Pertimbangkan perubahan kepada ruang yang sudah ada.', '/renovation/'],
        ['Hubungi Kami', 'Kongsi lokasi dan cadangan projek anda.', '/hubungi/']
      ])) + coverage() + contact('Bincang projek tiny house anda', 'Tiny House')
  });

  const galleryItems = [
    ['fence-black', 'hitam', 'Pagar & pintu pagar hitam', 'Bilah menegak hitam dengan rangka pagar.'],
    ['fence-white-brick', 'putih', 'Pagar putih atas tembok bata', 'Susunan bilah putih di atas asas tembok bata.'],
    ['fence-brown', 'coklat', 'Pintu pagar coklat', 'Pintu pagar berbingkai dengan bilah menegak coklat.'],
    ['fence-white', 'putih', 'Pagar perimeter putih', 'Susunan pagar putih sepanjang sempadan kawasan.']
  ];
  pages.push({
    slug: 'galeri-pagar',
    title: 'Galeri Pagar Shera Plank — Hitam, Putih & Coklat',
    description: 'Lihat inspirasi pagar dan pintu pagar Shera plank dalam kemasan hitam, putih serta coklat. Visual olahan untuk rujukan reka bentuk bersama SYAZE Enterprise.',
    heading: 'Galeri Pagar Shera Plank',
    lead: 'Lihat inspirasi pagar dan pintu pagar untuk dibincangkan bersama kami. Visual ini diolah berdasarkan gambar rujukan, bukan dokumentasi projek siap.',
    heroImage: null,
    body: `<section class="section" aria-label="Galeri inspirasi pagar"><figure class="photo-card gallery-feature">${img('fence-white', 'Inspirasi pagar perimeter putih dengan susunan bilah menegak')}<figcaption><h2>Pagar perimeter putih</h2><p>Rujukan rupa pagar sepanjang sempadan kawasan.</p><small>Visual olahan berdasarkan gambar rujukan.</small></figcaption></figure><div class="filter-bar" role="group" aria-label="Tapis warna pagar">${[['all', 'Semua'], ['hitam', 'Hitam'], ['putih', 'Putih'], ['coklat', 'Coklat']].map(([key, label]) => `<button type="button" data-filter="${key}" aria-pressed="${key === 'all'}">${label}</button>`).join('')}</div><p id="gallery-status" class="muted" aria-live="polite">4 contoh visual pagar</p><div class="gallery-grid">${galleryItems.map(([asset, colour, title, text]) => `<figure class="photo-card gallery-item" data-colour="${colour}">${img(asset, title)}<figcaption><h2>${title}</h2><p>${text}</p><small>Visual olahan berdasarkan rujukan.</small></figcaption></figure>`).join('')}</div></section>`
      + section('Tumpuan Reka Bentuk Pintu Pagar Hitam', `<div class="split"><figure class="photo-card">${img('fence-black', 'Rujukan pintu pagar hitam dengan bilah menegak dan rangka logam')}<figcaption>Visual olahan berdasarkan rujukan.</figcaption></figure><div class="card"><h3>Perhatikan sebelum memilih</h3><ul class="feature-list"><li>${icon('fence')}<div><h4>Arah bilah</h4><p>Contoh ini menggunakan bilah menegak untuk pagar dan pintu pagar.</p></div></li><li>${icon('ruler')}<div><h4>Jarak bilah</h4><p>Jarak mempengaruhi rupa dan bilangan bilah yang diperlukan.</p></div></li><li>${icon('tools')}<div><h4>Rangka pagar</h4><p>Kongsi gambar rangka sedia ada untuk perbincangan.</p></div></li><li>${icon('sun')}<div><h4>Warna pilihan</h4><p>Sahkan kemasan dan pilihan sebenar sebelum membuat pesanan.</p></div></li></ul>${button('Bincang Reka Bentuk Ini', wa)}</div></div>`)
      + section('Pilihan Warna Pagar Shera Plank', `<p>Sahkan pilihan warna dan kemasan sebenar bersama kami.</p><div class="grid-3">${[['fence-black', 'Hitam'], ['fence-white-brick', 'Putih'], ['fence-brown', 'Coklat']].map(([asset, colour]) => `<figure class="photo-card">${img(asset, `Rujukan kemasan pagar ${colour.toLowerCase()}`, 'card-photo')}<figcaption><h3>${colour}</h3></figcaption></figure>`).join('')}</div>`)
      + section('Suka salah satu contoh?', `<p>Kongsi rujukan pilihan bersama ukuran dan lokasi projek melalui WhatsApp.</p>${button('Bincang Rujukan Pagar', wa)}<p><a href="tel:+60189569639">018-956 9639</a></p>`, 'green-panel')
      + section('Pautan Berkaitan', related([
        ['Bekalan & pemasangan pagar', 'Fahami pilihan bekalan sahaja atau bersama pemasangan.', '/pagar-shera-plank/'],
        ['Kalkulator pagar', 'Buat anggaran awal bilangan bilah menegak.', '/kalkulator-pagar/'],
        ['Cara ukur pagar', 'Sediakan maklumat ukuran sebelum meminta sebut harga.', '/panduan/cara-ukur-pagar/']
      ]))
      + section('Soalan Lazim tentang Galeri', faq([
        ['Adakah ini gambar projek yang telah siap?', 'Imej ini ialah visual olahan berdasarkan gambar rujukan untuk tujuan inspirasi. Ia tidak dipersembahkan sebagai dokumentasi projek siap.'],
        ['Adakah warna dan ukuran sama seperti dalam gambar?', 'Sahkan pilihan kemasan, saiz dan susun atur sebenar dengan kami. Paparan warna juga boleh berbeza mengikut skrin.'],
        ['Adakah Shera plank ini hanya untuk pagar?', 'Servis Shera plank kami memberi tumpuan kepada pagar dan pintu pagar. Pertanyaan tentang renovation, loteng dan tiny house dikendalikan sebagai servis berasingan.']
      ])) + coverage()
  });

  const numberField = (name, label, value, min, max, step, unit) => `<label class="field" for="calc-${name}"><span>${label}</span><span class="input-unit"><input id="calc-${name}" name="${name}" type="number" inputmode="decimal" value="${value}" min="${min}" max="${max}" step="${step}" required aria-describedby="calculator-assumptions"><span aria-hidden="true">${unit}</span></span></label>`;
  const fenceDiagram = `<svg viewBox="0 0 360 300" role="img" aria-labelledby="fence-diagram-title" class="fence-diagram"><title id="fence-diagram-title">Ilustrasi ukuran panjang pagar, tinggi dan lebar bilah menegak</title><defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" fill="#315547"/></marker></defs><path d="M62 70H330M62 205H330" stroke="#aab9ae" stroke-width="12"/>${Array.from({ length: 12 }, (_, i) => `<rect x="${65 + i * 22}" y="50" width="15" height="175" rx="1" fill="#e4ebe5" stroke="#9aafa0"/>`).join('')}<path d="M65 32H322M36 52V225" stroke="#315547" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/><text x="195" y="20" text-anchor="middle" font-size="15" fill="#17392b">Panjang pagar</text><text x="22" y="145" text-anchor="middle" transform="rotate(-90 22 145)" font-size="15" fill="#17392b">Tinggi bilah</text><text x="195" y="260" text-anchor="middle" font-size="14" fill="#17392b">Lebar bilah + jarak antara bilah</text><text x="195" y="284" text-anchor="middle" font-size="12" fill="#5b6c60">Ilustrasi ukuran, bukan pelan pemasangan</text></svg>`;
  pages.push({
    slug: 'kalkulator-pagar',
    title: 'Kalkulator Pagar Shera Plank — Anggaran Bilah',
    description: 'Kira anggaran bilah pagar Shera plank berdasarkan panjang pagar, lebar bilah, jarak dan lebihan. Anggaran bilah potong, bukan harga atau jumlah papan stok.',
    heading: 'Kalkulator Pagar Shera Plank',
    lead: 'Anggar bilangan bilah menegak berdasarkan panjang pagar, lebar bilah dan jarak antara bilah. Nilai awal di bawah ialah contoh andaian sementara.',
    heroImage: null,
    body: `<section class="section calculator-section" aria-labelledby="calculator-heading"><h2 id="calculator-heading">Kira Anggaran Bilah Pagar</h2><div class="calculator-layout"><form id="fence-calculator" class="card" aria-label="Ukuran anggaran pagar">${numberField('length', 'Panjang pagar (m)', 6, 0.1, 1000, 0.1, 'm')}${numberField('height', 'Tinggi bilah (m)', 1.5, 0.1, 10, 0.1, 'm')}${numberField('width', 'Lebar bilah (mm)', 150, 1, 1000, 1, 'mm')}${numberField('gap', 'Jarak bilah (mm)', 10, 0, 1000, 1, 'mm')}${numberField('waste', 'Lebihan (%)', 10, 0, 100, 1, '%')}<p id="calculator-assumptions" class="muted">Contoh andaian, bukan spesifikasi produk.</p><p id="calc-error" role="alert" class="form-error" hidden></p></form><div class="calculator-diagram">${fenceDiagram}</div><div class="result-panel" aria-live="polite" aria-atomic="true"><h3>Hasil Anggaran</h3><p>Anggaran awal <strong><span id="calc-base">38</span> bilah</strong></p><p>Termasuk lebihan</p><div class="result-number"><output id="calc-total" form="fence-calculator">42</output> <span>bilah</span></div><p>Panjang potongan contoh: <span id="calc-cut-length">1.5 m</span></p><p id="calc-note">Anggaran bilah potong, bukan jumlah papan stok. Sahkan saiz, jarak dan susun atur.</p><button type="button" id="calc-whatsapp" class="button">Hantar Anggaran ke WhatsApp</button></div></div></section>`
      + section('Bagaimana anggaran ini dikira?', `<div class="grid-2"><div class="card"><h3>1. Kira bilah asas</h3><p>Panjang dalam milimeter ÷ (lebar bilah + jarak). Bundarkan hasil ke atas.</p><p class="formula">6,000 ÷ (150 + 10) → 38 bilah</p><h3>2. Tambah lebihan</h3><p>Darab bilah asas dengan faktor lebihan, kemudian bundarkan ke atas.</p><p class="formula">38 × 1.10 → 42 bilah</p></div><aside class="answer-box"><h3>Perkara yang perlu disahkan</h3>${checklist(['Ini anggaran bilah potong, bukan jumlah papan stok atau harga.', 'Tinggi bilah menentukan panjang potongan; ia tidak mengubah bilangan bilah dalam kaedah ringkas ini.', 'Jumlah akhir bergantung pada panjang papan stok, rangka, bukaan, jarak hujung dan susun atur.', 'Setiap bentang atau reka bentuk pintu pagar mungkin memerlukan kiraan berasingan.'])}</aside></div>`)
      + section('Cara ukur pagar anda', `<div class="grid-3 measurement-cards"><article class="card"><h3><span class="step-number">1</span> Ukur setiap bentang</h3>${measurementPhoto('fence-white', 'Ilustrasi panjang satu bentang pagar putih', 'length')}<p>Catat panjang setiap bahagian lurus secara berasingan. Jika pagar mempunyai beberapa bentang, ukur setiap bahagian.</p></article><article class="card"><h3><span class="step-number">2</span> Catat tinggi bilah</h3>${measurementPhoto('fence-white-brick', 'Ilustrasi tinggi bilah pagar putih di atas tembok bata', 'height')}<p>Ukur dari bahagian bawah bilah hingga bahagian atas. Catat tinggi tembok secara berasingan jika ada.</p></article><article class="card"><h3><span class="step-number">3</span> Kongsi gambar</h3>${measurementPhoto('fence-white', 'Ilustrasi keseluruhan pagar dan keadaan kawasan')}<p>Tunjukkan keadaan tapak, rangka dan bukaan yang berkaitan. Sertakan lokasi projek semasa menghubungi kami.</p></article></div><p class="muted">Visual panduan ukuran sahaja. Sahkan ukuran sebenar di tapak.</p>${button('Baca Panduan Ukuran', '/panduan/cara-ukur-pagar/', true)}`)
      + section('Soalan Lazim tentang Kalkulator', faq([
        ['Adakah 42 bilah dalam contoh ini jumlah muktamad?', 'Tidak. Ia anggaran awal berasaskan nilai contoh. Keperluan akhir perlu disahkan mengikut saiz sebenar, panjang papan stok, potongan dan susun atur pagar.'],
        ['Adakah harga termasuk dalam anggaran ini?', 'Tidak. Kalkulator ini menganggar bilangan bilah sahaja. Harga bekalan, rangka dan pemasangan perlu dibincangkan secara berasingan.'],
        ['Bagaimana jika pagar mempunyai beberapa bentang?', 'Ukur setiap bentang dan kongsi butirannya. Pembundaran, bukaan, tiang dan potongan pada setiap bahagian boleh mempengaruhi jumlah akhir.'],
        ['Adakah ia sesuai untuk semua jenis pagar?', 'Kaedah ini ialah anggaran ringkas untuk bilah menegak. Susunan khas, pintu pagar dan gabungan rangka memerlukan perbincangan lanjut.']
      ]))
      + section('Panduan & Pautan Berkaitan', related([
        ['Bekalan dan pemasangan pagar', 'Bincangkan pilihan serta keperluan projek.', '/pagar-shera-plank/'],
        ['Galeri Pagar', 'Lihat contoh rupa pagar dan pintu pagar.', '/galeri-pagar/'],
        ['Renovation', 'Bincangkan perubahan pada ruang kediaman.', '/renovation/'],
        ['Loteng (Mezzanine)', 'Teroka perancangan ruang tambahan.', '/loteng/']
      ]))
      + section('Perlu bantuan menyemak anggaran?', `<p>Kongsi ukuran, gambar pagar dan lokasi projek melalui WhatsApp.</p>${button('Bincang Anggaran Pagar', wa)}`, 'green-panel')
  });

  const quickAnswers = [
    ['Apakah servis SYAZE Enterprise?', 'Kami menyediakan Pagar Shera Plank, Renovation, Loteng dan Tiny House. Kongsi keperluan projek untuk perbincangan skop.'],
    ['Adakah Shera plank untuk dinding rumah?', 'Fokus Shera plank kami ialah pagar dan pintu pagar. Servis renovation, loteng dan tiny house mempunyai skop berasingan.'],
    ['Boleh beli bekalan sahaja?', 'Bekalan sahaja atau bekalan bersama pemasangan pagar boleh dibincangkan. Hantar ukuran, lokasi dan pilihan kemasan.'],
    ['Bagaimana meminta sebut harga?', 'Kongsi lokasi projek, gambar kawasan, ukuran anggaran dan keperluan melalui WhatsApp 018-956 9639.']
  ];
  pages.push({
    slug: 'panduan',
    title: 'Panduan & Soalan Lazim Pagar dan Kediaman',
    description: 'Panduan ukuran pagar dan jawapan tentang bekalan Shera plank, renovation, loteng serta tiny house. Sediakan maklumat sebelum meminta sebut harga.',
    heading: 'Panduan & Soalan Lazim',
    lead: 'Cari panduan ukuran, persediaan projek dan jawapan sebelum meminta sebut harga.',
    heroImage: null,
    body: `<section class="section" aria-label="Cari panduan"><label class="field" for="faq-search"><span>Cari panduan atau soalan</span><input type="search" id="faq-search" placeholder="Contoh: bekalan sahaja, ukuran, loteng" autocomplete="off" aria-describedby="faq-search-status"></label><p id="faq-search-status" class="muted" aria-live="polite"></p><nav class="filter-bar" aria-label="Topik panduan"><a href="#jawapan-ringkas">Jawapan Ringkas</a><a href="#faq-pagar">Pagar Shera Plank</a><a href="#faq-ruang">Renovation, Loteng & Tiny House</a></nav></section>`
      + `<section class="section" data-search-item><div class="split card">${img('fence-white-brick', 'Visual pagar putih atas tembok bata untuk panduan ukuran', 'split-photo')}<div><span class="tag">PANDUAN PAGAR</span><h2>Cara Ukur Pagar Sebelum Minta Sebut Harga</h2><p>Ketahui ukuran dan gambar yang membantu perbincangan bekalan atau pemasangan pagar.</p>${button('Baca Panduan', '/panduan/cara-ukur-pagar/')}</div></div></section>`
      + `<section class="section" id="faq-ruang"><h2>Persediaan Projek Kediaman</h2><div class="grid-3"><article class="card" data-search-item>${img('renovation', 'Ilustrasi ruang kediaman untuk perancangan renovation', 'card-photo')}<span class="tag">RENOVATION</span><h3>Maklumat untuk sebut harga renovation</h3><p>Sediakan gambar ruang, ukuran anggaran dan keutamaan perubahan sebelum berbincang.</p>${button('Lihat Persediaan', '/renovation/')}</article><article class="card" data-search-item>${img('loft', 'Ilustrasi ruang loteng dan akses tangga', 'card-photo')}<span class="tag">LOTENG</span><h3>Apa yang perlu disemak sebelum merancang loteng?</h3><p>Kongsi gambar, ketinggian ruang dan kegunaan yang dirancang untuk semakan awal.</p>${button('Lihat Persediaan', '/loteng/')}</article><article class="card" data-search-item>${img('tiny', 'Ilustrasi tiny house untuk perancangan tapak', 'card-photo')}<span class="tag">TINY HOUSE</span><h3>Persediaan awal projek tiny house</h3><p>Kongsi lokasi tapak, gambar dan fungsi ruang yang diperlukan.</p>${button('Lihat Persediaan', '/tiny-house/')}</article></div></section>`
      + `<section class="section" id="jawapan-ringkas"><h2>Jawapan Ringkas</h2><div class="grid-2">${quickAnswers.map(([q, a], i) => `<div class="answer-box" data-search-item>${icon(['tools', 'home', 'truck', 'guide'][i])}<h3>${q}</h3><p>${a}</p></div>`).join('')}</div></section>`
      + `<section class="section" id="faq-pagar" data-search-item><h2>Soalan tentang Pagar Shera Plank</h2>${faq([
        ['Bagaimana kiraan dalam kalkulator pagar?', 'Kalkulator menganggar bilangan bilah menegak berdasarkan panjang pagar, lebar bilah, jarak dan lebihan. Ia tidak mengira harga. Sahkan ukuran serta susun atur sebelum membuat pesanan.'],
        ['Kawasan mana yang diliputi?', 'Kawasan perkhidmatan yang dinyatakan ialah Penang, Perak, Selangor, Kuantan dan Negeri Sembilan. Kongsi lokasi tepat untuk perbincangan projek.'],
        ['Bolehkah saya pilih warna pagar?', 'Kongsi warna atau gambar rujukan pilihan anda. Sahkan pilihan kemasan sebenar bersama kami sebelum membuat pesanan.'],
        ['Adakah pemasangan disediakan?', 'Pertanyaan bekalan bersama pemasangan pagar boleh dibincangkan. Skop bergantung pada keperluan dan keadaan tapak.']
      ])}</section>`
      + section('Pautan Berkaitan', related([
        ['Kalkulator Pagar', 'Anggar bilangan bilah menggunakan ukuran contoh atau ukuran anda.', '/kalkulator-pagar/'],
        ['Servis Pagar Shera Plank', 'Fahami pilihan bekalan serta pemasangan.', '/pagar-shera-plank/'],
        ['Hubungi Kami', 'Kongsi keperluan projek untuk perbincangan lanjut.', '/hubungi/']
      ]))
      + section('Masih ada soalan?', `<div class="split"><div><p>Hantar pertanyaan bersama lokasi projek, gambar kawasan dan ukuran yang diketahui.</p>${button('WhatsApp 018-956 9639', wa)}</div>${img('whatsapp-phone', 'Ilustrasi telefon untuk menghubungi melalui WhatsApp', 'split-photo')}</div>`, 'green-panel')
  });

  pages.push({
    slug: 'panduan/cara-ukur-pagar',
    type: 'article',
    title: 'Cara Ukur Pagar Sebelum Minta Sebut Harga',
    description: 'Panduan ringkas menyediakan ukuran panjang pagar, tinggi bilah, gambar tapak dan maklumat bukaan sebelum meminta sebut harga pagar Shera plank.',
    heading: 'Cara Ukur Pagar Sebelum Minta Sebut Harga',
    lead: 'Catat panjang setiap bentang, tinggi bilah yang diingini dan lokasi projek. Sertakan gambar pagar atau kawasan tapak untuk perbincangan.',
    heroImage: null,
    body: `<article class="prose guide-article"><p class="muted">Panduan oleh SYAZE Enterprise</p><nav class="card article-toc" aria-label="Dalam panduan ini"><h2>Dalam panduan ini</h2><ol><li><a href="#panjang">Panjang setiap bentang</a></li><li><a href="#tinggi">Tinggi bilah</a></li><li><a href="#bukaan">Rangka dan bukaan</a></li><li><a href="#gambar">Gambar tapak</a></li><li><a href="#contoh">Contoh anggaran</a></li></ol></nav><figure class="photo-card">${img('fence-white', 'Ilustrasi pagar menegak putih di sempadan kawasan')}<figcaption>Visual ilustrasi pagar menegak.</figcaption></figure>
      <section class="section split guide-measurement" id="panjang"><div><h2>1. Ukur panjang setiap bentang</h2><p>Catat panjang setiap bahagian pagar yang lurus secara berasingan dalam meter. Jika pagar mengelilingi kawasan, asingkan bahagian depan, sisi dan belakang supaya panjang setiap bentang mudah dirujuk.</p><p>Labelkan setiap ukuran pada lakaran ringkas. Nyatakan jika ukuran itu anggaran sahaja.</p></div>${measurementPhoto('fence-white', 'Panduan arah ukuran panjang satu bentang pagar', 'length')}</section>
      <section class="section split guide-measurement" id="tinggi"><div><h2>2. Catat tinggi bilah</h2><p>Beritahu tinggi bilah yang dikehendaki. Jika pagar berada di atas tembok, catat tinggi tembok secara berasingan supaya tinggi bilah dan tinggi keseluruhan tidak bercampur.</p><p>Kongsi gambar atau rujukan rupa pagar untuk membantu perbincangan. Ukuran akhir perlu disahkan mengikut tapak dan pilihan material.</p></div>${measurementPhoto('fence-white-brick', 'Panduan arah ukuran tinggi bilah di atas tembok bata', 'height')}</section>
      <section class="section split guide-measurement" id="bukaan"><div><h2>3. Rekod rangka dan bukaan</h2><p>Tandakan lokasi tiang, rangka dan pintu pagar. Catat bukaan yang tidak memerlukan bilah serta keadaan rangka sedia ada jika berkaitan.</p><p>Maklumat ini penting kerana panjang keseluruhan sempadan tidak semestinya sama dengan panjang yang akan diisi bilah.</p></div><figure class="photo-card">${img('fence-black', 'Ilustrasi rangka dan bukaan pintu pagar hitam')}<figcaption>Rujukan rangka serta bukaan pintu pagar.</figcaption></figure></section>
      <section class="section split guide-measurement" id="gambar"><div><h2>4. Ambil gambar tapak</h2><p>Ambil gambar keseluruhan kawasan, kemudian beberapa sudut dekat yang menunjukkan keadaan rangka, tembok, tiang dan bukaan. Sertakan lokasi projek apabila menghantar gambar melalui WhatsApp.</p></div><figure class="photo-card">${img('fence-white', 'Ilustrasi sudut keseluruhan pagar dan kawasan sekeliling')}<figcaption>Sertakan pandangan keseluruhan kawasan.</figcaption></figure></section>
      <section class="section" id="contoh"><h2>Contoh anggaran bilah pagar</h2><p>Angka berikut ialah andaian untuk menerangkan kaedah ringkas. Ia bukan spesifikasi produk atau jumlah pesanan yang disahkan.</p><div class="grid-2">${table(['Perkara', 'Contoh andaian'], [
        ['Panjang pagar', '6 m'], ['Tinggi bilah', '1.5 m'], ['Lebar bilah', '150 mm'], ['Jarak antara bilah', '10 mm'], ['Lebihan', '10%']
      ])}<div class="answer-box"><h3>Hasil contoh</h3><p class="formula">6,000 ÷ (150 + 10) → 38 bilah</p><p class="formula">38 × 1.10 → 42 bilah</p><p>Kedua-dua langkah dibundarkan ke atas. Anggaran bilah potong ini bukan jumlah papan stok.</p></div></div><p>Jumlah akhir bergantung pada panjang stok, potongan, rangka, jarak hujung dan susun atur setiap bentang.</p>${button('Cuba Kalkulator Pagar', '/kalkulator-pagar/')}</section>
      ${section('Senarai untuk dihantar', `<div class="grid-3">${iconCard('Panjang bentang', 'Ukuran setiap bahagian depan, sisi dan belakang.', 'ruler')}${iconCard('Tinggi bilah', 'Tinggi bilah yang diingini; asingkan tinggi tembok.', 'fence')}${iconCard('Gambar tapak', 'Gambar keseluruhan dan beberapa sudut dekat.', 'gallery')}${iconCard('Lokasi projek', 'Alamat atau lokasi kawasan projek anda.', 'pin')}${iconCard('Rupa & kemasan', 'Warna dan gambar rujukan pilihan, jika ada.', 'sun')}</div>`)}
      ${section('Soalan Lazim tentang Ukuran', faq([
        ['Adakah saya perlu ukur sendiri sebelum meminta sebut harga?', 'Ukuran anggaran dan gambar membantu perbincangan awal. Nyatakan jika ukuran belum dapat dipastikan supaya keperluan semakan boleh dibincangkan.'],
        ['Gambar macam mana yang perlu dihantar?', 'Kongsi gambar keseluruhan kawasan dan beberapa sudut dekat yang menunjukkan rangka, tembok, tiang serta bukaan.'],
        ['Adakah contoh 42 bilah sesuai untuk semua pagar?', 'Tidak. Ia contoh berdasarkan andaian tertentu. Kiraan akhir bergantung pada ukuran sebenar, pilihan material dan susun atur.']
      ]))}
      ${section('Teruskan Perancangan Anda', related([
        ['Galeri Pagar Shera Plank', 'Cari rujukan rupa pagar untuk perbincangan.', '/galeri-pagar/'],
        ['Bekalan & Pemasangan', 'Semak pilihan bekalan sahaja atau bersama pemasangan.', '/pagar-shera-plank/']
      ]))}
      ${section('Masih ada soalan tentang ukuran pagar?', `<p>Kongsi gambar dan ukuran yang diketahui untuk perbincangan lanjut.</p>${button('Bincang melalui WhatsApp', wa)}`, 'green-panel')}</article>`
  });

  pages.push({
    slug: 'tentang-kami',
    title: 'Tentang SYAZE Enterprise di Menglembu',
    description: 'Kenali SYAZE Enterprise di Menglembu: Pagar Shera Plank, Renovation, Loteng dan Tiny House. Alamat, WhatsApp dan kawasan perkhidmatan.',
    heading: 'Tentang SYAZE Enterprise',
    lead: 'SYAZE Enterprise menyediakan perkhidmatan Pagar Shera Plank, Renovation, Loteng dan Tiny House.',
    heroImage: 'fence-white',
    body: `<section class="section"><div class="about-mosaic"><div class="brand-panel"><img src="/assets/logo-320.webp" width="320" height="213" alt="SYAZE Enterprise"><p>Pagar Shera Plank · Renovation<br>Loteng · Tiny House</p></div>${img('fence-black','Ilustrasi pagar dan pintu pagar Shera plank hitam')}</div></section>` + section('Fokus Kami', `<p>Bekalan dan pemasangan pagar Shera plank menjadi fokus utama. Kami juga menerima pertanyaan tentang ruang kediaman melalui tiga perkhidmatan berkaitan.</p><div class="split card service-feature">${img('fence-white', 'Ilustrasi pagar perimeter Shera plank putih', 'split-photo')}<div><h3>${icon('fence')}Pagar Shera Plank</h3><p>Bekalan dan pemasangan Shera plank untuk pagar dan pintu pagar. Bincangkan ukuran, kemasan serta keperluan tapak anda.</p>${button('Lihat Pagar Shera Plank', '/pagar-shera-plank/')}</div></div><div class="grid-3">${serviceCard('Renovation', 'Bincangkan perubahan pada ruang kediaman.', 'renovation', '/renovation/', 'renovation')}${serviceCard('Loteng', 'Perancangan ruang tambahan mengikut kesesuaian tapak.', 'loft', '/loteng/', 'loft')}${serviceCard('Tiny House', 'Bincangkan ruang kecil mengikut kegunaan anda.', 'tiny', '/tiny-house/', 'tiny')}</div>`)
      + section('Maklumat Perniagaan', `<div class="split">${table(['Perkara', 'Maklumat'], [
        ['Nama', 'SYAZE Enterprise'],
        ['WhatsApp', '<a href="https://wa.me/60189569639">018-956 9639</a>'],
        ['Perkhidmatan', 'Pagar Shera Plank, Renovation, Loteng dan Tiny House'],
        ['Kawasan', 'Penang, Perak, Selangor, Kuantan dan Negeri Sembilan'],
        ['Alamat', '<address>No 22B, Jalan Toh Puan Rahmah,<br>Kg Kuala Pari Tengah,<br>31450 Menglembu</address>'],
        ['E-mel', '<a href="mailto:shamsulanuar_yahaya@hotmail.com">shamsulanuar_yahaya@hotmail.com</a>']
      ])}<div class="green-panel card"><h3>Hubungi kami sekarang</h3><p>Kongsi keperluan anda untuk memulakan perbincangan projek.</p>${button('Bincang melalui WhatsApp', wa)}<p><a href="tel:+60189569639">018-956 9639</a></p></div></div>`)
      + section('Cara Memulakan Perbincangan', steps([
        ['Kongsi keperluan', 'Beritahu servis, lokasi dan perkara yang ingin dibuat.'],
        ['Bincang skop', 'Kongsi gambar dan ukuran yang diketahui.'],
        ['Minta sebut harga', 'Semak butiran dan pilihan berdasarkan skop projek.']
      ])) + coverage()
      + section('Soalan Lazim', faq([
        ['Apakah fokus utama SYAZE Enterprise?', 'Fokus utama ialah bekalan dan pemasangan pagar Shera plank untuk pagar serta pintu pagar.'],
        ['Ada perkhidmatan lain selain pagar?', 'Ya. Kami juga menerima pertanyaan Renovation, Loteng dan Tiny House.'],
        ['Bagaimana cara menghubungi?', 'WhatsApp 018-956 9639 untuk perbincangan projek. Anda juga boleh menghubungi melalui e-mel yang tertera.'],
        ['Di kawasan mana perkhidmatan dibincangkan?', 'Kawasan yang dinyatakan ialah Penang, Perak, Selangor, Kuantan dan Negeri Sembilan. Kongsi lokasi tepat untuk semakan projek.']
      ]))
      + section('Pautan Berkaitan', related([
        ['Galeri Pagar', 'Lihat visual inspirasi pagar dan pintu pagar.', '/galeri-pagar/'],
        ['Panduan & FAQ', 'Sediakan maklumat sebelum menghubungi kami.', '/panduan/'],
        ['Hubungi Kami', 'Pilih perkhidmatan dan hantar pertanyaan.', '/hubungi/']
      ]))
  });

  pages.push({
    slug: 'hubungi',
    title: 'Hubungi SYAZE Enterprise — Menglembu, Perak',
    description: 'WhatsApp SYAZE Enterprise di 018-956 9639 untuk pagar Shera plank, renovation, loteng dan tiny house. Alamat di Kg Kuala Pari Tengah, Menglembu.',
    heading: 'Hubungi SYAZE Enterprise',
    lead: 'Hubungi kami melalui WhatsApp 018-956 9639. Kongsi lokasi, gambar dan keperluan projek untuk perbincangan.',
    heroImage: null,
    body: `<section class="section"><div class="grid-2"><div><div class="green-panel card"><h2>Hubungi Kami Sekarang</h2><p>Mulakan perbincangan tentang keperluan projek anda.</p>${button('018-956 9639', wa)}<ul class="contact-services"><li><a href="/pagar-shera-plank/"><img src="/assets/fence-white-480.webp" alt="Pagar Shera plank putih" width="100" height="70" loading="lazy">Pagar Shera Plank →</a></li><li><a href="/renovation/"><img src="/assets/renovation-480.webp" alt="Ilustrasi renovation" width="100" height="70" loading="lazy">Renovation →</a></li><li><a href="/loteng/"><img src="/assets/loft-480.webp" alt="Ilustrasi loteng" width="100" height="70" loading="lazy">Loteng →</a></li><li><a href="/tiny-house/"><img src="/assets/tiny-480.webp" alt="Ilustrasi tiny house" width="100" height="70" loading="lazy">Tiny House →</a></li></ul></div><div class="card contact-details"><h2>Alamat & E-mel</h2><address>No 22B, Jalan Toh Puan Rahmah,<br>Kg Kuala Pari Tengah,<br>31450 Menglembu</address><p><a href="mailto:shamsulanuar_yahaya@hotmail.com">shamsulanuar_yahaya@hotmail.com</a></p><p><a href="tel:+60189569639">Telefon: 018-956 9639</a></p></div></div><div class="card"><h2>Hantar Pertanyaan Projek</h2><p>Isi maklumat ringkas untuk menyediakan mesej WhatsApp.</p>${quoteForm('Pagar Shera Plank')}<p class="muted">Gambar projek boleh dikongsi dalam WhatsApp selepas mesej dibuka.</p></div></div></section>`
      + coverage()
      + section('Sediakan sebelum menghubungi', `<div class="grid-3"><div class="card">${img('fence-black', 'Ilustrasi pagar hitam untuk persediaan pertanyaan pagar', 'card-photo')}<h3>Pagar Shera Plank</h3>${checklist(['Panjang setiap bentang pagar.', 'Tinggi bilah yang diinginkan.', 'Gambar kawasan dan rangka.', 'Rujukan rupa pagar, jika ada.'])}</div><div class="card">${img('loft', 'Ilustrasi ruang kediaman dan loteng untuk persediaan pertanyaan', 'card-photo')}<h3>Renovation & Loteng</h3>${checklist(['Ruang yang ingin diubah.', 'Gambar keadaan sedia ada.', 'Tujuan penggunaan ruang.', 'Ukuran yang diketahui.'])}</div><div class="card">${img('tiny', 'Ilustrasi tiny house untuk persediaan pertanyaan tapak', 'card-photo')}<h3>Tiny House</h3>${checklist(['Lokasi projek.', 'Gambar tapak atau kawasan.', 'Kegunaan ruang yang diinginkan.', 'Keperluan asas projek.'])}</div></div>`)
      + section('Apa berlaku selepas pertanyaan?', steps([
        ['Kongsi maklumat', 'Hantar lokasi, gambar dan keperluan projek anda.'],
        ['Bincang skop', 'Semak pilihan dan perkara yang perlu disahkan.'],
        ['Minta sebut harga', 'Bincangkan sebut harga berdasarkan skop projek.']
      ]))
      + section('Soalan Lazim', faq([
        ['Maklumat apa yang perlu saya hantar?', 'Kongsi lokasi, jenis perkhidmatan, gambar kawasan, ukuran anggaran dan ringkasan keperluan projek.'],
        ['Adakah bekalan sahaja tersedia?', 'Bekalan sahaja atau bersama pemasangan pagar Shera plank boleh dibincangkan.'],
        ['Di manakah kawasan perkhidmatan anda?', 'Kawasan yang dinyatakan ialah Penang, Perak, Selangor, Kuantan dan Negeri Sembilan. Kongsi lokasi tepat untuk perbincangan.'],
        ['Bagaimana mendapatkan sebut harga?', 'Hantar maklumat projek melalui WhatsApp 018-956 9639. Keperluan dan skop perlu dibincangkan sebelum sebut harga disahkan.']
      ]))
      + section('Pautan Berkaitan', related([
        ['Kalkulator Pagar', 'Buat anggaran awal bilah menegak.', '/kalkulator-pagar/'],
        ['Panduan Ukuran Pagar', 'Sediakan ukuran dan gambar tapak.', '/panduan/cara-ukur-pagar/'],
        ['Galeri Pagar', 'Cari contoh rupa pagar untuk rujukan.', '/galeri-pagar/']
      ]))
  });

  return pages;
}

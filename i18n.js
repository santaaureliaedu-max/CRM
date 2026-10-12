(function () {
  'use strict';

  const STORAGE_KEY = 'santa-aurelia-language';
  const PAIRS = [
    ['English', 'Inggris'], ['Indonesian', 'Indonesia'], ['Language', 'Bahasa'],
    ['Headmaster — Santa Aurelia', 'Kepala Sekolah — Santa Aurelia'],
    ['Santa Aurelia — Teacher', 'Santa Aurelia — Guru'],
    ['Headmaster console. Owner access only.', 'Konsol kepala sekolah. Khusus pemilik.'],
    ['Headmaster & administration console.', 'Konsol kepala sekolah & administrasi.'],
    ['Headmaster', 'Kepala Sekolah'], ['Administrator', 'Administrator'], ['School CRM', 'CRM Sekolah'],
    ['Sign in', 'Masuk'], ['Sign out', 'Keluar'], ['Email', 'Email'], ['Password', 'Kata sandi'],
    ['Show password', 'Tampilkan kata sandi'], ['Hide password', 'Sembunyikan kata sandi'],
    ['Overview', 'Ringkasan'], ['Enrollment', 'Pendaftaran'], ['Tuition', 'Biaya Sekolah'],
    ['Attendance', 'Kehadiran'], ['Grades', 'Nilai'], ['Incidents', 'Insiden'],
    ['Settings', 'Pengaturan'], ['History', 'Riwayat'], ['Units', 'Unit'],
    ['Expenses', 'Pengeluaran'], ['Finance', 'Keuangan'], ['Financials', 'Keuangan'],
    ['Enrolled students', 'Siswa terdaftar'], ['Tuition collected', 'Biaya sekolah terkumpul'],
    ['Overdue invoices', 'Invoice jatuh tempo'], ['Attendance today', 'Kehadiran hari ini'],
    ['Enrollment by class', 'Pendaftaran per kelas'], ['Overdue tuition', 'Biaya sekolah tertunggak'],
    ['Recent incidents', 'Insiden terbaru'], ['At-risk attendance', 'Kehadiran berisiko'],
    ['Re-enrollment', 'Daftar ulang'], ['Students', 'Siswa'], ['Include archived', 'Sertakan arsip'],
    ['Import CSV', 'Impor CSV'], ['Add student', 'Tambah siswa'], ['Classes', 'Kelas'],
    ['Add class', 'Tambah kelas'], ['Invoices', 'Invoice'], ['Generate Uang Sekolah (preview)', 'Buat Uang Sekolah (pratinjau)'],
    ['Create student invoice', 'Buat invoice siswa'], ['Create Invoice', 'Buat Invoice'],
    ['Student tuition overrides', 'Penyesuaian biaya per siswa'], ['Add override', 'Tambah penyesuaian'],
    ['School terms', 'Tahun ajaran'], ['Add term', 'Tambah tahun ajaran'],
    ['School configuration', 'Konfigurasi sekolah'], ['Save settings', 'Simpan pengaturan'],
    ['Staff accounts', 'Akun staf'], ['Manual data export', 'Ekspor data manual'],
    ['Download data export', 'Unduh ekspor data'], ['Change history', 'Riwayat perubahan'],
    ['Deleted data', 'Data terhapus'], ['School units', 'Unit sekolah'], ['Add unit', 'Tambah unit'],
    ['Add recommended units', 'Tambah unit rekomendasi'], ['Unassigned records', 'Data tanpa unit'],
    ['Add expense', 'Tambah pengeluaran'], ['Record expense', 'Catat pengeluaran'],
    ['Finance summary', 'Ringkasan keuangan'], ['Financial overview', 'Ikhtisar keuangan'],
    ['All Units', 'Semua Unit'], ['All units', 'Semua unit'], ['Unit', 'Unit'], ['From', 'Dari'], ['To', 'Sampai'],
    ['Level / unit', 'Jenjang / unit'], ['Report month', 'Bulan laporan'], ['Previous month', 'Bulan sebelumnya'],
    ['Next month', 'Bulan berikutnya'], ['All time', 'Semua periode'], ['Monthly financial report', 'Laporan keuangan bulanan'],
    ['Ledger month', 'Bulan buku kas'], ['Month on month expense', 'Pengeluaran per bulan'],
    ['Expense ledger', 'Buku kas pengeluaran'], ['Input by', 'Diinput oleh'], ['Unknown', 'Tidak diketahui'],
    ['Unnamed user', 'Pengguna tanpa nama'], ['Paid expenses only. This table shows the last 12 months ending with the selected month.', 'Hanya pengeluaran dibayar. Tabel ini menunjukkan 12 bulan terakhir sampai bulan yang dipilih.'],
    ['Revenue from students', 'Pendapatan dari siswa'], ['Paid expenses', 'Pengeluaran dibayar'],
    ['Estimated cash profit', 'Estimasi laba kas'], ['Outstanding balance', 'Saldo tertunggak'],
    ['Student revenue by fee type', 'Pendapatan siswa per jenis biaya'],
    ['Performance by school unit', 'Kinerja per unit sekolah'], ['Recent expenses', 'Pengeluaran terbaru'],
    ['Revenue', 'Pendapatan'], ['Expense', 'Pengeluaran'], ['Profit', 'Laba'], ['Margin', 'Margin'],
    ['Fee component', 'Komponen biaya'], ['Amount', 'Jumlah'], ['Billed', 'Ditagihkan'],
    ['Collected', 'Terkumpul'], ['Cash basis', 'Basis kas'], ['Unassigned unit', 'Unit belum ditentukan'],
    ['Date', 'Tanggal'], ['Category', 'Kategori'], ['Vendor', 'Pemasok'], ['Description', 'Deskripsi'],
    ['Detail', 'Rincian'], ['Total', 'Total'], ['Today', 'Hari ini'], ['Yesterday', 'Kemarin'],
    ['First day', 'Tanggal 1'], ['General', 'Umum'], ['Saving…', 'Menyimpan…'],
    ['Status', 'Status'], ['Actions', 'Tindakan'], ['Edit', 'Ubah'], ['Delete', 'Hapus'], ['Void', 'Batalkan'],
    ['Draft', 'Draf'], ['Approved', 'Disetujui'], ['Paid', 'Dibayar'], ['Inactive', 'Tidak aktif'], ['Active', 'Aktif'],
    ['Save expense', 'Simpan pengeluaran'], ['Edit expense', 'Ubah pengeluaran'],
    ['Vendor / payee', 'Pemasok / penerima'], ['Reference / document no.', 'Referensi / nomor dokumen'],
    ['Attachment path', 'Lokasi lampiran'], ['What was this for?', 'Untuk keperluan apa?'],
    ['Four quick fields. The expense will appear in its month\'s report.', 'Empat isian singkat. Pengeluaran akan muncul di laporan bulannya.'],
    ['Thousands separators are added automatically, for example 1.250.000.', 'Pemisah ribuan ditambahkan otomatis, misalnya 1.250.000.'],
    ['Saved as a paid expense so it appears immediately in the selected month\'s report.', 'Disimpan sebagai pengeluaran dibayar agar langsung muncul di laporan bulan terpilih.'],
    ['optional', 'opsional'], ['Cancel', 'Batal'], ['Close', 'Tutup'], ['Save', 'Simpan'],
    ['Add tuition schedule', 'Tambah jadwal biaya'], ['Edit tuition schedule', 'Ubah jadwal biaya'],
    ['School unit', 'Unit sekolah'], ['Component', 'Komponen'], ['Frequency', 'Frekuensi'],
    ['Monthly', 'Bulanan'], ['Per term', 'Per semester'], ['Due day', 'Tanggal jatuh tempo'],
    ['Effective start', 'Mulai berlaku'], ['Effective end', 'Akhir berlaku'],
    ['Save schedule', 'Simpan jadwal'], ['Student', 'Siswa'], ['Reason', 'Alasan'],
    ['Save override', 'Simpan penyesuaian'], ['Parent / guardian name', 'Nama orang tua / wali'],
    ['Parent phone', 'Telepon orang tua'], ['Parent email', 'Email orang tua'], ['Student name', 'Nama siswa'],
    ['Date of birth', 'Tanggal lahir'], ['Grade level', 'Jenjang kelas'], ['Save student', 'Simpan siswa'],
    ['Class name', 'Nama kelas'], ['Teacher', 'Guru'], ['Capacity', 'Kapasitas'], ['Save class', 'Simpan kelas'],
    ['Import students from CSV', 'Impor siswa dari CSV'], ['Import', 'Impor'],
    ['Family', 'Keluarga'], ['Due date', 'Jatuh tempo'], ['Save invoice', 'Simpan invoice'],
    ['Choose a student so revenue is linked to the correct school unit.', 'Pilih siswa agar pendapatan terhubung ke unit sekolah yang benar.'],
    ['Choose student', 'Pilih siswa'], ['Manage Invoice', 'Kelola Invoice'], ['Details', 'Rincian'],
    ['Paid amount', 'Terbayar'], ['Balance', 'Sisa'], ['Add component', 'Tambah komponen'], ['Add', 'Tambah'],
    ['Record payment (installment)', 'Catat pembayaran (cicilan)'], ['Record', 'Catat'],
    ['Amount received', 'Jumlah diterima'], ['Invoice voided.', 'Invoice dibatalkan.'],
    ['Log incident', 'Catat insiden'], ['What happened', 'Kejadian'], ['Save incident', 'Simpan insiden'],
    ['Unit code', 'Kode unit'], ['Unit name', 'Nama unit'], ['Type', 'Jenis'], ['Campus', 'Kampus'],
    ['Address', 'Alamat'], ['Contact email', 'Email kontak'], ['Contact phone', 'Telepon kontak'],
    ['Invoice header text', 'Teks kepala invoice'], ['Unit logo', 'Logo unit'], ['Save unit', 'Simpan unit'],
    ['History details', 'Detail riwayat'], ['Teacher sign in', 'Masuk sebagai guru'],
    ['Santa Aurelia attendance', 'Kehadiran Santa Aurelia'], ['Your name', 'Nama Anda'], ['Full name', 'Nama lengkap'],
    ['New here? Create an account', 'Baru di sini? Buat akun'], ['Create account', 'Buat akun'],
    ['Have an account? Sign in', 'Sudah punya akun? Masuk'], ['Resend verification email', 'Kirim ulang email verifikasi'],
    ['Your account is waiting for the headmaster to approve it. Check back once approved.', 'Akun Anda sedang menunggu persetujuan kepala sekolah. Periksa kembali setelah disetujui.'],
    ['Mark all present', 'Tandai semua hadir'], ['Pick a class.', 'Pilih kelas.'], ['No class.', 'Tidak ada kelas.'],
    ['No classes assigned yet.', 'Belum ada kelas yang ditugaskan.'], ['No students enrolled in this class.', 'Belum ada siswa di kelas ini.'],
    ['Score', 'Nilai angka'], ['Grade', 'Nilai'], ['Comment (optional)', 'Komentar (opsional)'],
    ['Present', 'Hadir'], ['Absent', 'Tidak hadir'], ['Late', 'Terlambat'], ['Excused', 'Izin'],
    ['Good morning', 'Selamat pagi'], ['Good afternoon', 'Selamat siang'], ['Good evening', 'Selamat malam'],
    ['No active term', 'Tidak ada tahun ajaran aktif'], ['Loading…', 'Memuat…'], ['No data', 'Tidak ada data'],
    ['Connected ✓ You can sign in.', 'Terhubung ✓ Anda dapat masuk.'],
    ['Checking database connection…', 'Memeriksa koneksi basis data…'],
    ['This account is not an approved Headmaster or administrator.', 'Akun ini bukan akun kepala sekolah atau administrator yang disetujui.'],
    ['Revenue comes only from student invoice payments. Estimated profit is a management cash-basis result (student revenue minus paid expenses), not audited accounting profit. Record payroll and every other cost as an expense for a useful result.', 'Pendapatan hanya berasal dari pembayaran invoice siswa. Estimasi laba adalah hasil pengelolaan berbasis kas (pendapatan siswa dikurangi pengeluaran yang sudah dibayar), bukan laba akuntansi yang diaudit. Catat gaji dan semua biaya lain sebagai pengeluaran agar hasilnya berguna.'],
    ['Record unit spending here. Draft expenses can be deleted; approved or paid expenses must be voided with a reason.', 'Catat pengeluaran unit di sini. Pengeluaran draf dapat dihapus; pengeluaran yang disetujui atau dibayar harus dibatalkan dengan alasan.'],
    ['Record spending by date and school level. New entries are posted as paid expenses and included in the monthly report immediately.', 'Catat pengeluaran berdasarkan tanggal dan jenjang sekolah. Entri baru dibukukan sebagai pengeluaran dibayar dan langsung masuk ke laporan bulanan.'],
    ['Expense saved and included in the monthly report.', 'Pengeluaran tersimpan dan sudah masuk ke laporan bulanan.'],
    ['Expense date cannot be in the future.', 'Tanggal pengeluaran tidak boleh di masa depan.'],
    ['Recommended units follow santaaurelia.com: Daycare, Playgroup/Nursery, Kindergarten K1–K2, Elementary/PKBM Grade 1–6, and Amazing Kids Therapy Centre. You can add or rename units; codes are permanent and never reused.', 'Unit rekomendasi mengikuti santaaurelia.com: Daycare, Playgroup/Nursery, TK K1–K2, SD/PKBM Kelas 1–6, dan Pusat Terapi Amazing Kids. Anda dapat menambah atau mengganti nama unit; kode bersifat permanen dan tidak digunakan ulang.'],
    ['A management cash-basis result, not audited accounting profit.', 'Hasil pengelolaan berbasis kas, bukan laba akuntansi yang diaudit.'],
    ['No expenses recorded for this selection yet. Click "+ Record expense".', 'Belum ada pengeluaran untuk pilihan ini. Klik "+ Catat pengeluaran".'],
    ['Add school units to compare every level.', 'Tambahkan unit sekolah untuk membandingkan setiap jenjang.'],
    ['No student payments for this selection.', 'Belum ada pembayaran siswa untuk pilihan ini.'],
    ['Other student fees', 'Biaya siswa lainnya'],
    ['Account created. It is waiting for Headmaster approval.', 'Akun dibuat. Akun sedang menunggu persetujuan kepala sekolah.'],
    ['Account created. Check your email and click the verification link, then return here to sign in.', 'Akun dibuat. Periksa email dan klik tautan verifikasi, lalu kembali ke sini untuk masuk.'],
    ['Email and password required.', 'Email dan kata sandi wajib diisi.'], ['Enter your name.', 'Masukkan nama Anda.'],
    ['No active school term has been set yet.', 'Belum ada tahun ajaran aktif yang ditetapkan.'],
    ['Could not load your class assignments. Please contact the school office.', 'Tidak dapat memuat penugasan kelas Anda. Silakan hubungi kantor sekolah.'],
    ['You are not assigned to this class.', 'Anda tidak ditugaskan ke kelas ini.'],
    ['Nothing to save.', 'Tidak ada yang perlu disimpan.'], ['Grades saved.', 'Nilai tersimpan.'],
    ['Monday', 'Senin'], ['Tuesday', 'Selasa'], ['Wednesday', 'Rabu'], ['Thursday', 'Kamis'],
    ['Friday', 'Jumat'], ['Saturday', 'Sabtu'], ['Sunday', 'Minggu'],
    ['January', 'Januari'], ['February', 'Februari'], ['March', 'Maret'], ['April', 'April'],
    ['May', 'Mei'], ['June', 'Juni'], ['July', 'Juli'], ['August', 'Agustus'],
    ['September', 'September'], ['October', 'Oktober'], ['November', 'November'], ['December', 'Desember'],
    ['Tuition fee', 'Uang Sekolah'], ['Enrollment fee', 'Uang Pangkal'], ['Registration', 'Registrasi'],
    ['Activity Fee', 'Biaya Kegiatan'], ['Uniform', 'Seragam'], ['Books', 'Buku'], ['Extracurricular', 'Ekskul'],
    ['Competition', 'Lomba'], ['Re-enrollment', 'Daftar Ulang'], ['Other', 'Lainnya'],
    ['Daycare', 'Daycare'], ['Playgroup (Nursery)', 'Playgroup (Nursery)'],
    ['Kindergarten (K1 & K2)', 'Taman Kanak-Kanak (K1 & K2)'],
    ['Elementary (PKBM)', 'Sekolah Dasar (PKBM)'],
    ['Amazing Kids Therapy Centre', 'Pusat Terapi Amazing Kids']
  ];

  const exact = { en: new Map(), id: new Map() };
  PAIRS.forEach(([en, id]) => { exact.id.set(en, id); exact.en.set(id, en); });
  const ordered = {
    en: [...exact.en.entries()].sort((a, b) => b[0].length - a[0].length),
    id: [...exact.id.entries()].sort((a, b) => b[0].length - a[0].length)
  };
  const textState = new WeakMap();
  const attrState = new WeakMap();
  let language = localStorage.getItem(STORAGE_KEY) === 'id' ? 'id' : 'en';
  const sourceTitle = document.title;
  let observer = null;
  let applying = false;

  function translate(source, lang) {
    if (!source || lang === (source === exact.id.get(source) ? 'id' : '')) return source;
    if (exact[lang].has(source)) return exact[lang].get(source);
    let out = source;
    ordered[lang].forEach(([from, to]) => {
      if (from && from !== to && out.includes(from)) out = out.split(from).join(to);
    });
    return out;
  }

  function renderText(node) {
    if (!node || !node.nodeValue || !node.nodeValue.trim()) return;
    let state = textState.get(node);
    if (!state || node.nodeValue !== state.rendered) state = { source: node.nodeValue, rendered: node.nodeValue };
    const leading = state.source.match(/^\s*/)[0], trailing = state.source.match(/\s*$/)[0];
    const core = state.source.slice(leading.length, state.source.length - trailing.length || undefined);
    state.rendered = leading + translate(core, language) + trailing;
    textState.set(node, state);
    if (node.nodeValue !== state.rendered) node.nodeValue = state.rendered;
  }

  function renderAttrs(element) {
    if (!element || element.nodeType !== 1) return;
    const names = ['placeholder', 'title', 'aria-label'];
    let states = attrState.get(element) || {};
    names.forEach(name => {
      if (!element.hasAttribute(name)) return;
      const current = element.getAttribute(name);
      let state = states[name];
      if (!state || current !== state.rendered) state = { source: current, rendered: current };
      state.rendered = translate(state.source, language);
      states[name] = state;
      if (current !== state.rendered) element.setAttribute(name, state.rendered);
    });
    attrState.set(element, states);
  }

  function walk(root) {
    if (!root) return;
    applying = true;
    try {
      if (root.nodeType === 3) renderText(root);
      if (root.nodeType === 1) renderAttrs(root);
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) node.nodeType === 3 ? renderText(node) : renderAttrs(node);
      document.documentElement.lang = language === 'id' ? 'id' : 'en';
      document.querySelectorAll('[data-language]').forEach(button => {
        const active = button.dataset.language === language;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      });
    } finally { applying = false; }
  }

  function init() {
    walk(document.body);
    document.title = translate(sourceTitle, language);
    if (observer) observer.disconnect();
    observer = new MutationObserver(records => {
      if (applying) return;
      records.forEach(record => {
        if (record.type === 'characterData') renderText(record.target);
        record.addedNodes.forEach(walk);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  function setLanguage(next) {
    language = next === 'id' ? 'id' : 'en';
    localStorage.setItem(STORAGE_KEY, language);
    walk(document.body);
    document.title = translate(sourceTitle, language);
    document.dispatchEvent(new CustomEvent('santa-language-change', { detail: { language } }));
  }

  window.SantaI18n = {
    init, setLanguage, getLanguage: () => language,
    locale: () => language === 'id' ? 'id-ID' : 'en-GB',
    t: source => translate(source, language), refresh: () => walk(document.body)
  };
  const nativeAlert = window.alert.bind(window), nativeConfirm = window.confirm.bind(window);
  window.alert = message => nativeAlert(translate(String(message), language));
  window.confirm = message => nativeConfirm(translate(String(message), language));
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();

import Navbar from './components/navbar.jsx'
import { TextField, InputAdornment, IconButton, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  const provinces = ["Jawa Timur", "Jawa Barat", "DKI Jakarta", "Sumatera Utara"];
  const regions = ["Surabaya", "Bandung", "Jakarta Pusat", "Medan"];
  const latestCases = [
    {
      id: 1,
      title: "Putusan No. 123/Pdt.G/2025/PN Jkt",
      excerpt: "Perkara perdata mengenai sengketa tanah...",
    },
    {
      id: 2,
      title: "Putusan No. 45/TUN/2025/PTUN Sby",
      excerpt: "Kasus terkait sengketa tata usaha negara...",
    },
    {
      id: 3,
      title: "Putusan No. 78/Pid.B/2025/PN Bdg",
      excerpt: "Perkara pidana umum terkait pencurian...",
    },
    {
      id: 4,
      title: "Putusan No. 92/Pdt.Sus/2025/PN Mlg",
      excerpt: "Perkara khusus mengenai perbankan...",
    },
    {
      id: 5,
      title: "Putusan No. 11/Pid.Sus/2025/PN Mdn",
      excerpt: "Kasus pidana khusus terkait narkotika...",
    },
    {
      id: 6,
      title: "Putusan No. 34/Pdt.G/2025/PN Sby",
      excerpt: "Perkara perdata mengenai waris...",
    },
    {
      id: 7,
      title: "Putusan No. 56/TUN/2025/PTUN Jkt",
      excerpt: "Kasus tata usaha negara terkait izin usaha...",
    },
    {
      id: 8,
      title: "Putusan No. 89/Pid.B/2025/PN Dps",
      excerpt: "Perkara pidana umum mengenai penipuan...",
    },
    {
      id: 9,
      title: "Putusan No. 22/Pdt.Sus/2025/PN Bgr",
      excerpt: "Perkara khusus terkait asuransi...",
    },
    {
      id: 10,
      title: "Putusan No. 67/Pid.Sus/2025/PN Jkt",
      excerpt: "Kasus pidana khusus mengenai korupsi...",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div class="h-screen bg-gray-200">
        <div className='container mx-auto px-4'>
          <Navbar />
          <div className="mt-10 flex items-center">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                  Akses Mudah Data Putusan Pengadilan di Seluruh Indonesia
                </h1>
                <p className="text-lg text-gray-600">
                  Cari, baca, dan pahami putusan pengadilan dengan cepat dan transparan.
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                  Mulai Mencari
                </button>
              </div>

              <div className="flex justify-center md:justify-end">
                <img
                  src="/assets/hero_section1.png"
                  alt="Hero Image"
                  className="w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-[#F4F4F4]">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Kolom kiri: Advanced Search */}
            <div className="md:col-span-2 bg-white shadow rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-6">Cari Putusan Pengadilan</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextField
                  label="Nomor Putusan"
                  placeholder="Contoh: 123/Pdt.G/2025/PN Jkt"
                  variant="outlined"
                  fullWidth
                />

                <TextField
                  label="Kata Kunci"
                  placeholder="Masukkan kata kunci..."
                  variant="outlined"
                  fullWidth
                />

                <TextField
                  label="Tahun"
                  placeholder="2025"
                  type="number"
                  variant="outlined"
                  fullWidth
                />

                <TextField
                  label="Tanggal Register"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  fullWidth
                />

                <TextField
                  label="Provinsi"
                  select
                  variant="outlined"
                  fullWidth
                >
                  {provinces.map((prov) => (
                    <MenuItem key={prov} value={prov}>
                      {prov}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  label="Daerah / Pengadilan"
                  select
                  variant="outlined"
                  fullWidth
                >
                  {regions.map((reg) => (
                    <MenuItem key={reg} value={reg}>
                      {reg}
                    </MenuItem>
                  ))}
                </TextField>
              </div>

              <div className="flex justify-end mt-6">
                <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
                  <SearchIcon />
                  Cari Putusan
                </button>
              </div>

              <p className="mt-4 text-gray-600 text-sm">
                Gunakan formulir di atas untuk mencari putusan berdasarkan nomor, kata kunci, tahun, atau wilayah pengadilan.
              </p>
            </div>

            {/* Kolom kanan: Putusan Terbaru */}
            <div className="bg-white shadow rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Putusan Terbaru</h2>
              <ul className="space-y-4">
                {latestCases.map((caseItem) => (
                  <li key={caseItem.id}>
                    <a href="#" className="block text-blue-600 font-medium hover:underline">
                      {caseItem.title}
                    </a>
                    <p className="text-sm text-gray-500">{caseItem.excerpt}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-center">
                <button className="text-blue-600 hover:underline font-medium">
                  Lihat Semua Putusan →
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Statistik  */}

      <div className=" bg-gray-200">
        <div className="container mx-auto px-4 py-10">

          {/* 🔹 Section Statistik Ringkas */}
          <div className="mt-16 bg-white shadow rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-6">Data Statistik Ringkas</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
              <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <span className="text-4xl mb-2">📄</span>
                <h3 className="text-lg font-medium">125.432 Putusan</h3>
              </div>

              <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <span className="text-4xl mb-2">⚖️</span>
                <h3 className="text-lg font-medium">412 Pengadilan</h3>
              </div>

              <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <span className="text-4xl mb-2">🔄</span>
                <h3 className="text-lg font-medium">Terakhir diperbarui: 4 Oktober 2025</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

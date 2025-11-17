
function navbar() {
  return (
    <nav className="top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        <div className="flex items-center space-x-3">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-70"
          />
        </div>

        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-[#B89B40] cursor-pointer transition-colors">Beranda</li>
          <li className="hover:text-[#B89B40] cursor-pointer transition-colors">Direktori</li>
          <li className="hover:text-[#B89B40] cursor-pointer transition-colors">Peraturan</li>
          <li className="hover:text-[#B89B40] cursor-pointer transition-colors">Tentang</li>
        </ul>
      </div>
    </nav>
  )
}

export default navbar
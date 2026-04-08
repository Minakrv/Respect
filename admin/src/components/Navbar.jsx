import { assets } from "../assets/assets"

const Navbar = ({ setToken }) => {
    return (
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img className="h-9 object-contain" src={assets.logo} alt="logo" />
                <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full tracking-wide">
                    ADMIN
                </span>
            </div>
            <button
                onClick={() => setToken("")}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 transition-colors duration-200 font-medium"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
            </button>
        </div>
    )
}

export default Navbar

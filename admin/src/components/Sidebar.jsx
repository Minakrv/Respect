import { NavLink } from "react-router-dom"

const navItems = [
    {
        to: "/add",
        label: "Add Product",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
        ),
    },
    {
        to: "/list",
        label: "Products",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
        ),
    },
    {
        to: "/orders",
        label: "Orders",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        ),
    },
]

const Sidebar = () => {
    return (
        <div className="w-60 min-h-screen bg-slate-900 text-white flex flex-col shrink-0">
            <div className="p-6 border-b border-slate-700">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Dashboard</p>
            </div>
            <nav className="flex-1 p-4 space-y-1">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                                isActive
                                    ? "bg-amber-500 text-white shadow-lg shadow-amber-500/25"
                                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                            }`
                        }
                    >
                        {item.icon}
                        {item.label}
                    </NavLink>
                ))}
            </nav>
            <div className="p-4 border-t border-slate-700">
                <div className="flex items-center gap-3 px-4 py-3">
                    <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-xs font-bold text-white">
                        A
                    </div>
                    <div>
                        <p className="text-sm font-medium text-white">Admin</p>
                        <p className="text-xs text-slate-400">Manager</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

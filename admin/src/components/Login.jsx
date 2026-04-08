import axios from "axios"
import { useState } from "react"
import { backendUrl } from "../App"
import { toast } from "react-toastify"
import { assets } from "../assets/assets"

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault()
            setLoading(true)
            const response = await axios.post(backendUrl + '/api/user/admin', { email, password })
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex">
            {/* Left panel */}
            <div className="hidden lg:flex w-1/2 bg-slate-900 flex-col items-center justify-center p-12">
                <img src={assets.logo} alt="logo" className="h-16 object-contain mb-6 brightness-0 invert" />
                <h2 className="text-white text-3xl font-bold mb-3">Welcome Back</h2>
                <p className="text-slate-400 text-center text-sm max-w-xs">
                    Manage your candle store products, inventory and orders from one place.
                </p>
                <div className="mt-12 grid grid-cols-3 gap-4 w-full max-w-xs">
                    {["Products", "Orders", "Analytics"].map((item) => (
                        <div key={item} className="bg-slate-800 rounded-xl p-4 text-center">
                            <div className="w-8 h-8 bg-amber-500 rounded-lg mx-auto mb-2" />
                            <p className="text-slate-300 text-xs">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right panel */}
            <div className="flex-1 flex items-center justify-center bg-gray-50 p-8">
                <div className="w-full max-w-sm">
                    <div className="lg:hidden text-center mb-8">
                        <img src={assets.logo} alt="logo" className="h-12 object-contain mx-auto mb-4" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">Sign in</h1>
                    <p className="text-sm text-gray-500 mb-8">Enter your admin credentials to continue</p>

                    <form onSubmit={onSubmitHandler} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm transition"
                                type="email"
                                placeholder="admin@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm transition"
                                type="password"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition-colors duration-200 disabled:opacity-60"
                        >
                            {loading ? "Signing in..." : "Sign In"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

import axios from "axios"
import { useEffect, useState } from "react"
import { backendUrl, currency } from "../App"
import { toast } from "react-toastify"

const List = ({ token }) => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchList = async () => {
        try {
            setLoading(true)
            const response = await axios.get(backendUrl + "/api/product/list")
            if (response.data.success) {
                setList(response.data.products)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchList()
    }, [])

    const removeProduct = async (id) => {
        try {
            const response = await axios.post(backendUrl + "/api/product/remove", { id }, { headers: { token } })
            if (response.data.success) {
                toast.success(response.data.message)
                await fetchList()
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const categoryColors = {
        "Candle": "bg-amber-100 text-amber-700",
        "Candle Jar": "bg-orange-100 text-orange-700",
        "Resin": "bg-purple-100 text-purple-700",
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Products</h2>
                    <p className="text-sm text-gray-500 mt-1">{list.length} items in store</p>
                </div>
            </div>

            {loading ? (
                <div className="flex items-center justify-center py-20">
                    <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
                </div>
            ) : list.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                    </div>
                    <p className="text-gray-500 font-medium">No products yet</p>
                    <p className="text-gray-400 text-sm mt-1">Add your first product from the Add Product page</p>
                </div>
            ) : (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    {/* Header */}
                    <div className="grid grid-cols-[80px_1fr_120px_100px_80px_60px] gap-4 px-6 py-3 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        <span>Image</span>
                        <span>Name</span>
                        <span>Category</span>
                        <span>Sub</span>
                        <span>Price</span>
                        <span></span>
                    </div>

                    {list.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-[80px_1fr_120px_100px_80px_60px] gap-4 px-6 py-4 items-center border-b border-gray-50 hover:bg-gray-50 transition-colors last:border-b-0"
                        >
                            <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                                <img
                                    className="w-full h-full object-cover"
                                    src={Array.isArray(item.image) ? item.image[0] : item.image}
                                    alt={item.name}
                                />
                            </div>
                            <div>
                                <p className="font-medium text-gray-800 text-sm leading-snug">{item.name}</p>
                                {item.bestSeller && (
                                    <span className="text-xs text-amber-600 font-medium">★ Best Seller</span>
                                )}
                            </div>
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium w-fit ${categoryColors[item.category] || 'bg-gray-100 text-gray-600'}`}>
                                {item.category}
                            </span>
                            <span className="text-xs text-gray-500 capitalize">{item.subCategory || '—'}</span>
                            <span className="text-sm font-semibold text-gray-800">{item.price}{currency}</span>
                            <button
                                onClick={() => removeProduct(item._id)}
                                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default List

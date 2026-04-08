import { useState } from "react"
import { assets } from "../assets/assets"
import axios from "axios"
import { backendUrl } from "../App"
import { toast } from "react-toastify"

const Add = ({ token }) => {
    const [image1, setImage1] = useState(false)
    const [image2, setImage2] = useState(false)
    const [image3, setImage3] = useState(false)
    const [image4, setImage4] = useState(false)

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("Candle")
    const [subCategory, setSubCategory] = useState("ghalami")
    const [bestSeller, setBestSeller] = useState(false)
    const [loading, setLoading] = useState(false)

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const formData = new FormData()
            formData.append("name", name)
            formData.append("description", description)
            formData.append("category", category)
            formData.append("subCategory", subCategory)
            formData.append("price", price)
            formData.append("bestSeller", bestSeller)
            image1 && formData.append("image1", image1)
            image2 && formData.append("image2", image2)
            image3 && formData.append("image3", image3)
            image4 && formData.append("image4", image4)

            const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } })
            if (response.data.success) {
                toast.success(response.data.message)
                setName("")
                setDescription("")
                setImage1(false)
                setImage2(false)
                setImage3(false)
                setImage4(false)
                setPrice("")
                setBestSeller(false)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    const ImageUpload = ({ id, image, setImage }) => (
        <label htmlFor={id} className="cursor-pointer group">
            <div className="w-24 h-24 rounded-xl border-2 border-dashed border-gray-300 group-hover:border-amber-400 transition-colors overflow-hidden flex items-center justify-center bg-gray-50">
                {image
                    ? <img className="w-full h-full object-cover" src={URL.createObjectURL(image)} alt="" />
                    : <div className="flex flex-col items-center gap-1 text-gray-400 group-hover:text-amber-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs">Upload</span>
                    </div>
                }
            </div>
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id={id} hidden accept="image/*" />
        </label>
    )

    return (
        <div className="max-w-2xl">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800">Add New Product</h2>
                <p className="text-sm text-gray-500 mt-1">Fill in the details to add a new product to your store</p>
            </div>

            <form onSubmit={onSubmitHandler} className="space-y-6">

                {/* Images */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-700 mb-4">Product Images</h3>
                    <div className="flex gap-3 flex-wrap">
                        <ImageUpload id="image1" image={image1} setImage={setImage1} />
                        <ImageUpload id="image2" image={image2} setImage={setImage2} />
                        <ImageUpload id="image3" image={image3} setImage={setImage3} />
                        <ImageUpload id="image4" image={image4} setImage={setImage4} />
                    </div>
                    <p className="text-xs text-gray-400 mt-3">Upload up to 4 images. First image will be the main display.</p>
                </div>

                {/* Basic Info */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                    <h3 className="text-sm font-semibold text-gray-700">Product Details</h3>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">Product Name</label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm transition"
                            type="text"
                            placeholder="e.g. شمع معطر وانیل"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">Description</label>
                        <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            rows={3}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm transition resize-none"
                            placeholder="Describe the product..."
                            required
                        />
                    </div>
                </div>

                {/* Category & Price */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-700 mb-4">Category & Pricing</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1.5">Category</label>
                            <select
                                onChange={(e) => setCategory(e.target.value)}
                                value={category}
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-amber-400 text-sm bg-white"
                            >
                                <option value="Candle">Candle</option>
                                <option value="Candle Jar">Candle Jar</option>
                                <option value="Resin">Resin</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1.5">Sub Category</label>
                            <select
                                onChange={(e) => setSubCategory(e.target.value)}
                                value={subCategory}
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-amber-400 text-sm bg-white"
                            >
                                <option value="ghalami">قلمی</option>
                                <option value="sangi">سنگی</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1.5">Price (T)</label>
                            <input
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-amber-400 text-sm transition"
                                type="number"
                                placeholder="0"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Best Seller */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <label className="flex items-center gap-3 cursor-pointer select-none">
                        <div className="relative">
                            <input
                                onChange={() => setBestSeller(prev => !prev)}
                                checked={bestSeller}
                                type="checkbox"
                                id="bestSeller"
                                className="sr-only"
                            />
                            <div className={`w-10 h-6 rounded-full transition-colors duration-200 ${bestSeller ? 'bg-amber-500' : 'bg-gray-200'}`}>
                                <div className={`w-4 h-4 bg-white rounded-full shadow mt-1 transform transition-transform duration-200 ${bestSeller ? 'translate-x-5' : 'translate-x-1'}`} />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-700">Mark as Best Seller</p>
                            <p className="text-xs text-gray-400">This product will appear in the Best Sellers section</p>
                        </div>
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors duration-200 disabled:opacity-60 text-sm"
                >
                    {loading ? "Adding Product..." : "Add Product"}
                </button>
            </form>
        </div>
    )
}

export default Add

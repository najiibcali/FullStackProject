
function ProductList ({product}) {
    return <div className="w-60 h-96 border-2 border-black rounded-lg p-4">
        <img className="w-full h-40 " src={product.image} alt="" />
        <h1 className="text-xl font-semibold text-center">{product.name}</h1>
        <p className="text-xl text-center font-bold mb-5 mt-5">{product.price}</p>
         <p className="text-xl text-center font-bold mb-5 mt-5">{product.transmission}</p>
        <button  className="bg-blue-500 w-full h-10 rounded-lg text-white">Add Chart</button>
    </div>
}
export default ProductList
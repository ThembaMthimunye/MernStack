import React, { useState } from "react";
import { useProductStore } from "../Store/product";

const Createpage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [loading, setLoading] = useState(false); 
  const [message, setMessage] = useState(""); 
  
  const { createProduct } = useProductStore();

  const handleProduct = async () => {
    setLoading(true); 
    const { success, message } = await createProduct(newProduct);
    
    setMessage(message); 

    if (success) {
      setNewProduct({ name: "", price: "", image: "" }); 
    }
    
    setLoading(false); 
  };

  const isSubmitDisabled = !newProduct.name || !newProduct.price || !newProduct.image || loading;

  return (
    <div className=" dark:bg-slate-900 h-[900px] bg-slate-100 dark:text-white ">
      <form className="space-y-4 ">
        <div>
          <label className="block text-sm font-bold">Product Name</label>
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold">Product Price</label>
          <input
            type="number"
           placeholder="Product Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold">Product Image URL</label>
          <input
            type="text"
            placeholder="Image URL"
            name="image"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          className={`mt-4 py-2 px-4 bg-blue-600 text-white rounded-md${isSubmitDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500'}`}
          onClick={handleProduct}
          disabled={isSubmitDisabled} // Disable button if any field is empty or request is loading
        >
          {loading ? "Submitting..." : "Submit Product"}
        </button>

        {message && (
          <div className={`mt-4 p-2 text-center ${message.includes("success") ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </div>
        )}
      </form>

{/* ///////////////////////////////////////////////////////////////////////////////////////// */}
    </div>
  );
};

export default Createpage;

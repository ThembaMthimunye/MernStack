import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductStore } from "../Store/product";
const EditProductPage = () => {
  const { id } = useParams();
  const { products, updateProduct } = useProductStore();
  const navigate = useNavigate();

  const product = products.find((p) => p._id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);
  const [error, setError] = useState("");

  useEffect(() => {
    setName(product.name);
    setPrice(product.price);
    setImage(product.image);
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { success, message } = await updateProduct(id, {
        name,
        price,
        image,
      });

      if (success) {
        navigate("/");
      } else {
        setError(message);
      }
    } catch (err) {
      setError("Error updating product. Please try again later.");
    }
  };
  const [updatedProduct, setUpdatedProduct] = useState(products);

  const { pid } = useParams();
  return (
    <div className="p-4 bg-slate-100 h-[900px] dark:bg-slate-900 dark:text-white">
      <h2 className="text-3xl">Edit Product</h2>

      <form className="space-y-4 mt-4">
        <div>
          <label className="block text-sm font-bold">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold">Product Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold">Product Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md"
          onClick={handleSubmit}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;

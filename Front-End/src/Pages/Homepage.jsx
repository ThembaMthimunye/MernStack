import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useProductStore } from "../Store/product";
import { useParams, useNavigate } from "react-router-dom";


const HomePage = () => {
  const { fetchProduct, products } = useProductStore();
  const [loading, setLoading] = useState(true); // Loading state for products
  const [error, setError] = useState(null); // Error state for fetch failures
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchProduct();
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false); // Stop loading once fetch is complete
      }
    };
    fetchData();
  }, [fetchProduct]);
 

  const { deleteProduct } = useProductStore();
  
  const handleDeleteProduct = async (pid) => {

    try {
      const { success, message } = await deleteProduct(pid);
      if (success) {
      
        console.log(message);
      } else {
       
        setError("Failed to delete the product.");
      }
    } catch (err) {
      setError("Error deleting product. Please try again later.");
    }
  };
  // const handleDeleteProduct = async (pid) => {
	// 	const { success, message } = await deleteProduct(pid);
		
	// };
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-xl">Loading products...</p>
      </div>
    );
  }
  console.log(products);

  
  if (error) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
    
      {products && products.length > 0 ? (
        <div className="grid grid-cols-4 gap-4 p-4 bg-slate-100 dark:bg-slate-900 dark:text-white">
          {products.map((data) => (
            <div
              key={data.id}
              className="font-bold text-center bg-slate-200 dark:bg-slate-900 p-4 rounded-md flex flex-col justify-center items-center"
            >
              <img
                className="w-full h-[200px] object-cover mb-4"
                src={data.image}
                alt={data.name}
              />
              <p className="">{data.name}</p>
              <p>R {data.price}</p>
              <div className="flex justify-evenly space-x-4 mt-4">
                <MdDeleteOutline
                  className="text-red-600 cursor-pointer"
                  onClick={() => handleDeleteProduct(data._id)}
                />
                <Link to={`/edit/${data._id}`}>
                <CiEdit className="text-blue-800 cursor-pointer" />
                </Link>
                
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-4">
            <h1 className="text-4xl text-indigo-800">Create Product</h1>
            <p className="text-xl text-indigo-700">
              No Product Found😒
              <Link to={"/create"} className="text-blue-500 hover:underline">
                Create a Product
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;

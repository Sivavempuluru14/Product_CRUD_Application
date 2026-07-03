import { useState, useEffect } from "react";
import API from "../services/api";

function ProductForm({
  refreshProducts,
  selectedProduct,
  setSelectedProduct,
}) {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
    } else {
      setProduct({
        name: "",
        price: "",
        category: "",
        description: "",
      });
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedProduct) {
        await API.put(`/${selectedProduct._id}`, product);
        alert("✅ Product Updated Successfully");
      } else {
        await API.post("/", product);
        alert("✅ Product Added Successfully");
      }

      setProduct({
        name: "",
        price: "",
        category: "",
        description: "",
      });

      setSelectedProduct(null);
      refreshProducts();

    } catch (error) {
      console.error(error);
      alert("❌ Operation Failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={product.category}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={product.description}
        onChange={handleChange}
      />

      <button type="submit">
        {selectedProduct ? "Update Product" : "Add Product"}
      </button>

    </form>
  );
}

export default ProductForm;
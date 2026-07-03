import { useEffect, useState } from "react";
import API from "../services/api";

function ProductList({ fetchTrigger, onEdit, onAdd }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchTrigger]);

  const deleteProduct = async (id) => {

  const confirmDelete = window.confirm(
    "⚠️ Are you sure you want to delete this product?"
  );

  if (!confirmDelete) {
    return;
  }

  try {
    await API.delete(`/${id}`);
    alert("✅ Product Deleted Successfully");
    fetchProducts();
  } catch (error) {
    console.log(error);
    alert("❌ Failed to delete product");
  }
};

  return (
    <div>
      <h2>Product List</h2>

      {products.length === 0 ? (
        <div className="empty-products">
          <div className="box-icon">📦</div>

          <h2>No products yet</h2>

          <p>Add your first product to get started.</p>

          <button
            className="add-btn"
            onClick={onAdd}
          >
            + Add Product
          </button>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <h3>{product.name}</h3>

              <p>
                <strong>Price:</strong> ₹{product.price}
              </p>

              <p>
                <strong>Category:</strong> {product.category}
              </p>

              <p>
                <strong>Description:</strong>{" "}
                {product.description || "No Description"}
              </p>

              <div className="button-group">
                <button
                  className="edit-btn"
                  onClick={() => onEdit(product)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;

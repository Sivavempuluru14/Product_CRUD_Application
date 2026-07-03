import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [fetchTrigger, setFetchTrigger] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const refreshProducts = () => {
    setFetchTrigger((prev) => prev + 1);
    setShowForm(false);
    setSelectedProduct(null);
  };

  return (
    <div className="container">

      {/* Header */}
      <div className="header">
        <h1 className="main-title">🛒 Product CRUD Application</h1>
      </div>

      {/* Add Product Button */}
      <div className="top-bar">
        <button
          className="add-btn"
          onClick={() => {
            setSelectedProduct(null);
            setShowForm(true);
          }}
        >
          + Add Product
        </button>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <ProductForm
              refreshProducts={refreshProducts}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />

            <button
              className="close-btn"
              onClick={() => {
                setShowForm(false);
                setSelectedProduct(null);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Product List */}
      <ProductList
        fetchTrigger={fetchTrigger}
        onAdd={() => {
          setSelectedProduct(null);
          setShowForm(true);
        }}
        onEdit={(product) => {
          setSelectedProduct(product);
          setShowForm(true);
        }}
      />

    </div>
  );
}

export default App;
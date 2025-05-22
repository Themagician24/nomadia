import React, { useRef, useState } from "react";
import { HeartIcon, Search, ShoppingBag, UserRoundCog } from "lucide-react";
import Products from "./../../product.json"; 
import { Modal } from "bootstrap";





const Nav = () => {
  const modalRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredProducts(
      value.trim() === ""
        ? []
        : Products.filter((p) =>
            p.name.toLowerCase().includes(value.toLowerCase())
          )
    );
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    const modal = new window.bootstrap.Modal(
      document.getElementById("productModal")
    );
    modal.show();
  };

  const openSignupModal = (e) => {
    e.preventDefault();
    if (modalRef.current) {
      const modal = new Modal(modalRef.current);
      modal.show();
    } else {
      console.warn("Le modalRef est null.");
    }
  };

  return (
    <>
      <div className="w-100 fixed-top top-0 start-0 bg-light shadow-sm">
        <nav className="container navbar navbar-expand-lg py-2">
          <a href="#" className="navbar-brand text-uppercase fw-bold">
            <h3 style={{ color: "#1a6747", margin: 0 }}>Nomadia</h3>
          </a>

          {/* Icônes mobile */}
          <div className="d-lg-none d-flex align-items-center gap-3">
            <a href="#" data-bs-toggle="modal" data-bs-target="#searchModal">
              <Search size={30} strokeWidth={2.2} />
            </a>
            <a href="#" onClick={openSignupModal}>
              <UserRoundCog size={30} strokeWidth={2.2} />
            </a>
            <a href="#" className="position-relative">
              <HeartIcon size={30} strokeWidth={2.2} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2</span>
            </a>
            <a href="#" className="position-relative">
              <ShoppingBag size={30} strokeWidth={2.2} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
            </a>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto align-items-center">
              {["Home", "Shop", "About", "Blog", "Contact"].map((item) => (
                <li className="nav-item" key={item}>
                  <a href="#" className="nav-link">{item}</a>
                </li>
              ))}
            </ul>

            <ul className="navbar ms-auto d-none d-lg-flex align-items-center gap-3">
              <li className="nav-item">
                <a href="#" data-bs-toggle="modal" data-bs-target="#searchModal">
                  <Search size={22} strokeWidth={2.2} className="text-black" />
                </a>
              </li>
              <li className="nav-item">
                <a href="#" onClick={openSignupModal}>
                  <UserRoundCog size={22} strokeWidth={2.2} className="text-black" />
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="position-relative">
                  <HeartIcon size={22} strokeWidth={2.2} className="text-black" />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="position-relative">
                  <ShoppingBag size={22} strokeWidth={2.2} className="text-black" />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>




      {/* Modal signup */}
      <div className="modal fade" id="signupModal" tabIndex="-1" ref={modalRef} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold">Sign Up</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"
               aria-label="Close" />
            </div>
            <div className="modal-body">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" required autofocus autoComplete="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required autofocus autoComplete="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" required autofocus autoComplete="new-password" placeholder="Enter your password" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>




      {/* Modal recherche */}
      <div className="modal fade" id="searchModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold">Search</h5>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Search for products"
                autoFocus
                onChange={handleChange}
              />
              <div className="row">
                {searchTerm.trim() !== "" ? (
                  filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <div className="col-6 mb-3" key={product.id} onClick={() => handleProductClick(product)} style={{ cursor: 'pointer' }}>
                        <div className="border p-2 h-100">
                          <img src={product.image} alt={product.name} className="img-fluid mb-2" />
                          <h6>{product.name}</h6>
                          <p className="small text-muted">{product.description}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted">No products found.</p>
                  )
                ) : (
                  <p className="text-muted">Start typing to search for products...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

import { HeartIcon, Search, ShoppingBag, ShoppingBasket, ShoppingBasketIcon, UserRoundCog } from "lucide-react";
import React from "react";


const Nav = () => {
  return (


    <div className="w-100 fixed-top top-0 start-0 bg-light shadow-sm">
      <nav className="container navbar navbar-expand-lg py-2">
        <a href="#" className="navbar-brand text-uppercase fw-bold">
          <h3 style={{ color: "#1a6747", margin: 0 }}>Nomadia</h3>
        </a>



        {/* Icônes visibles uniquement en mobile */}
        <div className="d-lg-none d-flex align-items-center gap-3">
          <a href="#">
            <Search size={22} strokeWidth={2.2} />
          </a>
          <a href="#">
            <UserRoundCog size={22} strokeWidth={2.2} />
          </a>
          <a href="#" className="position-relative">
            <ShoppingBasket size={22} strokeWidth={2.2} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
          </a>
          <a href="#" className="position-relative">
            <ShoppingBasketIcon size={22} strokeWidth={2.2} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
          </a>
        </div>

        <button 
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"> 

          </span>

        </button>

      
      {/* Main Nav Links */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto align-items-center">
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Shop</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">About</a>
          </li>
        
          <li className="nav-item">
            <a href="#" className="nav-link">Blog</a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">Contact</a>
          </li>


        </ul>


        {/* DESTOP ICONS */}

        <ul className="navbar ms-auto d-none d-lg-flex align-items-center gap-3">
          <li className="nav-items">
            <a href="#">
              <Search size={22} strokeWidth={2.2} />
            </a>
          </li>
          <li className="nav-items">
            <a href="#">
              <UserRoundCog  size={22} strokeWidth={2.2} />
            </a>
          </li>
          <li className="nav-items">
            <a href="#" className="position-relative">
              <HeartIcon  size={22} strokeWidth={2.2} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
            </a>
          </li>
          <li className="nav-items">
            <a href="#" className="position-relative">
              <ShoppingBag   size={22} strokeWidth={2.2} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
            </a>

          </li>

        </ul>


      </div>
     


      </nav>
    </div>
  );
};

export default Nav;

import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light sticky-top py-3 d-block bg-light" data-navbar-on-scroll="data-navbar-on-scroll" style={{backgroundImage: 'none', transition: 'none 0s ease 0s', backgroundColor: 'rgba(249, 250, 253, 0)'}}>
        <div className="container"><a className="navbar-brand" href="index.html"><img src="assets/img/gallery/logo-n.png" height={45} alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"> </span></button>
          <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
              <li className="nav-item px-2"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
              <li className="nav-item px-2"><Link className="nav-link" aria-current="page" to="/pricing">Pricing</Link></li>
              <li className="nav-item px-2"><Link className="nav-link" aria-current="page" to="/webdevelopment">Web Development</Link></li>
              <li className="nav-item px-2"><Link className="nav-link" aria-current="page" to="/userresearch">User Research</Link></li>
            </ul><a className="btn btn-primary order-1 order-lg-0" href="#!">Sign Up</a>
            <form className="d-flex my-3 d-block d-lg-none">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
            <div className="dropdown d-none d-lg-block">
              <button className="btn btn-outline-light ms-2" id="dropdownMenuButton1" type="submit" data-bs-toggle="dropdown" aria-expanded="false"><svg className="svg-inline--fa fa-search fa-w-16 text-800" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg>{/* <i class="fas fa-search text-800"></i> Font Awesome fontawesome.com */}</button>
              <ul className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton1" style={{top: '55px'}}>
                <form>
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                </form>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
}
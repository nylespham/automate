import React from "react";

function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
<div class="container-fluid">
      <a class="navbar-brand" href="/">AutoMate</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Purchase
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/purchase/new">New</a></li>
              <li><a class="dropdown-item" href="/purchase/used">Used</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="/purchase/all">Explore All Cars</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Rent Car</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signin">Login or Sign Up</a>
          </li>

        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
    </nav>
  );
}

export default Navigation;

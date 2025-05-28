import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div class="carousel-inner">
          <div
            class="carousel-caption d-none d-md-block"
            style={{ zIndex: "5" }}
          >
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div class="carousel-item active">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg"
              class="d-block w-100"
              alt="..."
              style={{ filter: "brightness(30%)", height: "700px" }}
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
              class="d-block w-100"
              alt="..."
              style={{ filter: "brightness(30%)", height: "700px" }}
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/dc/The_Only_Original_Alfredo_Sauce_with_Butter_and_Parmesano-Reggiano_Cheese.png"
              class="d-block w-100"
              alt="..."
              style={{ filter: "brightness(30%)", height: "700px" }}
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

class MyBestSellers extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="sidebar  has-scrollbar" data-mobile-menu>
          <div class="product-showcase">
            <h3 class="showcase-heading">best sellers</h3>
            <div class="showcase-wrapper">
              <div class="showcase-container">
                <div class="showcase">
                  <a href="#" class="showcase-img-box">
                    <img src="./assets/products/4d_plates.jpg" alt="4d plates" width="75" height="75"
                      class="showcase-img">
                  </a>
                  <div class="showcase-content">
                    <a href="#">
                      <h4 class="showcase-title">4D Plates</h4>
                    </a>
                    <div class="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                    <div class="price-box">
                      <del>£50.00</del>
                      <p class="price">£40.00</p>
                    </div>
                  </div>
                </div>
                <div class="showcase">
                  <a href="#" class="showcase-img-box">
                    <img src="./assets/images/logo/logo.jpg" alt="men's hoodies t-shirt" class="showcase-img"
                      width="75" height="75">
                  </a>
                  <div class="showcase-content">
                    <a href="#">
                      <h4 class="showcase-title">men's hoodies t-shirt</h4>
                    </a>
                    <div class="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-half-outline"></ion-icon>
                    </div>
                    <div class="price-box">
                      <del>£17.00</del>
                      <p class="price">£7.00</p>
                    </div>
                  </div>
                </div>
                <div class="showcase">
                  <a href="#" class="showcase-img-box">
                    <img src="./assets/images/logo/logo.jpg" alt="girls t-shirt" class="showcase-img" width="75"
                      height="75">
                  </a>
                  <div class="showcase-content">
                    <a href="#">
                      <h4 class="showcase-title">girls t-shirt</h4>
                    </a>
                    <div class="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-half-outline"></ion-icon>
                    </div>
                    <div class="price-box">
                      <del>£5.00</del>
                      <p class="price">£3.00</p>
                    </div>
                  </div>
                </div>
                <div class="showcase">
                  <a href="#" class="showcase-img-box">
                    <img src="./assets/images/logo/logo.jpg" alt="woolen hat for men" class="showcase-img" width="75"
                      height="75">
                  </a>
                  <div class="showcase-content">
                    <a href="#">
                      <h4 class="showcase-title">woolen hat for men</h4>
                    </a>
                    <div class="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                    <div class="price-box">
                      <del>£15.00</del>
                      <p class="price">£12.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       `
    }
}

customElements.define('my-best-sellers', MyBestSellers)



class MyProducts extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="product-main">
            <h2 class="title">New Products</h2>
            <div class="product-grid">
              <div class="showcase">
                <div class="showcase-banner">
                  <img src="./assets/products/4d_plates.jpg" alt="4D plates" class="product-img default" width="300">
                  <img src="./assets/products/4d_plates.jpg" alt="4D plates" class="product-img hover" width="300">
                </div>

                <div class="showcase-content">
                  <a href="#" class="showcase-category">Number Plates</a>
                  <h3><a href="#" class="showcase-title">4D Plates</a></h3>

                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                  <div class="price-box"><p class="price">£40.00</p><del>£50.00</del></div>
                </div>
              </div>

              <div class="showcase">
                <div class="showcase-banner">
                  <img src="./assets/images/glass_coasters.jpg" alt="Coasters" class="product-img default" width="300">
                  <img src="./assets/images/glass_coasters.jpg" alt="Coasters" class="product-img hover" width="300">
                  <p class="showcase-badge angle black">sale</p>
                </div>

                <div class="showcase-content">
                  <a href="#" class="showcase-category">Glass Coasters</a>
                  <h3> <a href="#" class="showcase-title">Glass Coasters</a></h3>

                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <div class="price-box"><p class="price">£15.00</p><del>£16.00</del>
                  </div>
                </div>
              </div>

              <div class="showcase">
                <div class="showcase-banner">
                  <img src="./assets/images/fitness_hoodie.jpg" alt="Fitness Hoodie" class="product-img default"width="300">
                  <img src="./assets/images/fitness_hoodie.jpg" alt="Fitness Hoodie" class="product-img hover"width="300">
                </div>

                <div class="showcase-content">
                  <a href="#" class="showcase-category">Gym Clothes</a>

                  <h3><a href="#" class="showcase-title">Fitness Hoodie</a></h3>

                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <div class="price-box"><p class="price">£25.00</p><del>£30.00</del>
                  </div>
                </div>
              </div>
            </div>
        </div>
       `
    }
}

customElements.define('my-products', MyProducts)

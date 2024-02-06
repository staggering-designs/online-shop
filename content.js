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

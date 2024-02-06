class MyHead extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Staggering Designs Website</title>
          <link rel="shortcut icon" href="./assets/images/logo/logo.jpg" type="image/x-icon">
          <link rel="stylesheet" href="./assets/css/style-prefix.css">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        </head>
       `
    }
}

customElements.define('my-head', MyHead)
        
        
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `       
  <header>
    <div class="header-top">
      <div class="container">
        <ul class="header-social-container">
          <li>
            <a href="https://www.facebook.com/profile.php?id=100091538854325" class="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/staggeringdesigns/" class="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
        <div class="header-alert-news">
          <p>
            <b>IMPORTANT:</b>
            New Website, Stay Tuned!
          </p>
        </div>
        <div class="header-top-actions">
          <select name="currency">
            <option value="gbp">GBP &pound;</option>
          </select>
          <select name="language">
            <option value="en-US">English</option>
          </select>
        </div>
      </div>
    </div>
    <div class="header-main">
      <div class="container">
        <a href="#" class="header-logo">
          <img src="./assets/images/logo/logo.jpg" alt="SD logo" width="300" height="300">
        </a>

        <div class="header-search-container">

          <input type="search" name="search" class="search-field" placeholder="Enter the product you are searching for...">

          <button class="search-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>

        </div>

        <div class="header-user-actions">

          <button class="action-btn">
            <ion-icon name="person-outline"></ion-icon>
          </button>

          <button class="action-btn">
            <ion-icon name="heart-outline"></ion-icon>
            <span class="count">0</span>
          </button>

          <button class="action-btn">
            <ion-icon name="bag-handle-outline"></ion-icon>
            <span class="count">0</span>
          </button>

        </div>

      </div>

    </div>

    <nav class="desktop-navigation-menu">

      <div class="container">

        <ul class="desktop-menu-category-list">

          <li class="menu-category">
            <a href="#" class="menu-title">Home</a>
          </li>

          <li class="menu-category">
            <a href="#" class="menu-title">Categories</a>

            <div class="dropdown-panel">

              <ul class="dropdown-panel-list">

                <li class="menu-title">
                  <a href="#">Gym Clothes</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Hoodie</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">T-Shirt</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Shorts</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">1/4 Zip</a>
                </li>
              </ul>

              <ul class="dropdown-panel-list">

                <li class="menu-title">
                  <a href="#">Printed Products</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Coasters</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Signs</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Bottles</a>
                </li>

              </ul>

              <ul class="dropdown-panel-list">

                <li class="menu-title">
                  <a href="#">Number Plates</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">4D Plates</a>
                </li>
                
              </ul>

            </div>
          </li>

          <li class="menu-category">
            <a href="about.html" class="menu-title">About Us</a>
          </li>
        </ul>

      </div>

    </nav>

    <div class="mobile-bottom-navigation">

      <button class="action-btn" data-mobile-menu-open-btn>
        <ion-icon name="menu-outline"></ion-icon>
      </button>

      <button class="action-btn">
        <ion-icon name="bag-handle-outline"></ion-icon>

        <span class="count">0</span>
      </button>

      <button class="action-btn">
        <ion-icon name="home-outline"></ion-icon>
      </button>

      <button class="action-btn">
        <ion-icon name="heart-outline"></ion-icon>

        <span class="count">0</span>
      </button>

      <button class="action-btn" data-mobile-menu-open-btn>
        <ion-icon name="grid-outline"></ion-icon>
      </button>

    </div>

    <nav class="mobile-navigation-menu  has-scrollbar" data-mobile-menu>

      <div class="menu-top">
        <h2 class="menu-title">Menu</h2>

        <button class="menu-close-btn" data-mobile-menu-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>

      <ul class="mobile-menu-category-list">

        <li class="menu-category">
          <a href="#" class="menu-title">Home</a>
        </li>

        <li class="menu-category">

          <button class="accordion-menu" data-accordion-btn>
            <p class="menu-title">Men's</p>

            <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div>
          </button>

          <ul class="submenu-category-list" data-accordion>

            <li class="submenu-category">
              <a href="#" class="submenu-title">Shirt</a>
            </li>

            <li class="submenu-category">
              <a href="#" class="submenu-title">Shorts & Jeans</a>
            </li>

            <li class="submenu-category">
              <a href="#" class="submenu-title">Safety Shoes</a>
            </li>

            <li class="submenu-category">
              <a href="#" class="submenu-title">Wallet</a>
            </li>

          </ul>

        </li>

        <li class="menu-category">

          <button class="accordion-menu" data-accordion-btn>
            <p class="menu-title">Women's</p>

            <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div>
          </button>

        </li>

        <li class="menu-category">

          <button class="accordion-menu" data-accordion-btn>
            <p class="menu-title">Gym Clothing</p>

            <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div>
          </button>

          <ul class="submenu-category-list" data-accordion>

            <li class="submenu-category">
              <a href="#" class="submenu-title">Earrings</a>
            </li>

            <li class="submenu-category">
              <a href="#" class="submenu-title">Couple Rings</a>
            </li>

            <li class="submenu-category">
              <a href="#" class="submenu-title">Necklace</a>
            </li>

            <li class="submenu-category">
              <a href="#" class="submenu-title">Bracelets</a>
            </li>

          </ul>

        </li>

        <li class="menu-category">

          <button class="accordion-menu" data-accordion-btn>
            <p class="menu-title">Perfume</p>

            <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div>
          </button>
          <ul class="submenu-category-list" data-accordion>
            <li class="submenu-category">
              <a href="#" class="submenu-title">Clothes Perfume</a>
            </li>
            <li class="submenu-category">
              <a href="#" class="submenu-title">Deodorant</a>
            </li>
            <li class="submenu-category">
              <a href="#" class="submenu-title">Flower Fragrance</a>
            </li>
            <li class="submenu-category">
              <a href="#" class="submenu-title">Air Freshener</a>
            </li>
          </ul>
        </li>
        <li class="menu-category">
          <a href="#" class="menu-title">Blog</a>
        </li>
        <li class="menu-category">
          <a href="#" class="menu-title">Hot Offers</a>
        </li>
      </ul>
      <div class="menu-bottom">
        <ul class="menu-category-list">
          <li class="menu-category">
            <button class="accordion-menu" data-accordion-btn>
              <p class="menu-title">Language</p>
              <ion-icon name="caret-back-outline" class="caret-back"></ion-icon>
            </button>
            <ul class="submenu-category-list" data-accordion>
              <li class="submenu-category">
                <a href="#" class="submenu-title">English</a>
              </li>
              <li class="submenu-category">
                <a href="#" class="submenu-title">Espa&ntilde;ol</a>
              </li>
              <li class="submenu-category">
                <a href="#" class="submenu-title">Fren&ccedil;h</a>
              </li>
            </ul>
          </li>
          <li class="menu-category">
            <button class="accordion-menu" data-accordion-btn>
              <p class="menu-title">Currency</p>
              <ion-icon name="caret-back-outline" class="caret-back"></ion-icon>
            </button>
            <ul class="submenu-category-list" data-accordion>
              <li class="submenu-category">
                <a href="#" class="submenu-title">USD &dollar;</a>
              </li>
              <li class="submenu-category">
                <a href="#" class="submenu-title">EUR &euro;</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="menu-social-container">
          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
      `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
          <div class="footer-nav">
            <div class="container">
              <ul class="footer-nav-list">
                <li class="footer-nav-item">
                  <h2 class="nav-title">Contact</h2>
                </li>
                <li class="footer-nav-item flex">
                  <div class="icon-box">
                    <ion-icon name="location-outline"></ion-icon>
                  </div>
                  <address class="content">
                    Dunlop, Kilmarnock, Scotland
                  </address>
                </li>
                <li class="footer-nav-item flex">
                  <div class="icon-box">
                    <ion-icon name="mail-outline"></ion-icon>
                  </div>
                  <a href="mailto:staggeringdesigns.contact@gmail.com" class="footer-nav-link">staggeringdesigns.contact@gmail.com</a>
                </li>
              </ul>
              <ul class="footer-nav-list">
                <li class="footer-nav-item">
                  <h2 class="nav-title">Follow Us</h2>
                </li>
                <li>
                  <ul class="social-link">
                    <li class="footer-nav-item">
                      <a href="https://www.facebook.com/profile.php?id=100091538854325" class="footer-nav-link"><ion-icon name="logo-facebook"></ion-icon> </a>
                    </li>
                    
                    <li class="footer-nav-item">
                      <a href="https://www.instagram.com/staggeringdesigns/" class="footer-nav-link"> <ion-icon name="logo-instagram"></ion-icon> </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <div class="container">
              <p class="copyright">
                Copyright &copy; <a href="#">Staggering Designs</a> all rights reserved.
              </p>
            </div>
          </div>
        </footer>
      `
    }
}

customElements.define('my-footer', MyFooter)

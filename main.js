class MyHeader extends HTMLElement {
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
                    Dunlop, Kilmarnock
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

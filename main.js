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
        
      `
    }
}

customElements.define('my-footer', MyFooter)

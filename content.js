class MyBestSellers extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        
       `
    }
}

customElements.define('my-best-sellers', MyBestSellers)

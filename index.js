export { default, default as greet } from "./greet.js";

import greet from "./greet.js";

class GreetElement extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const name = this.getAttribute("name") || "Guest";
    const message = greet(name);

    this.shadow.innerHTML = `
      <style>
        p { color: red; font-weight: bold; }
      </style>
      <p>${message}</p>
    `;
  }
}

// prevent duplicate registration
if (!customElements.get("greet-element")) {
  customElements.define("greet-element", GreetElement);
}
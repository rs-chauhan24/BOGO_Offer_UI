const radios = document.querySelectorAll('input[type="radio"]');
const totalElement = document.querySelector(".total");
let selectedPrice = 18.0; // Default price for "2 Units"

radios.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    switch (e.target.value) {
      case "1":
        selectedPrice = 10.0;
        break;
      case "2":
        selectedPrice = 18.0;
        break;
      case "3":
        selectedPrice = 24.0;
        break;
    }
    totalElement.textContent = `Total: $${selectedPrice.toFixed(2)} USD`;
  });
});

// Highlight Most Popular on load
document.querySelector(".most-popular").style.backgroundColor = "#ffe6f1";

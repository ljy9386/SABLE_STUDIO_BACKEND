// search-dropdown.js
document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#search-input");
    const resultBox = document.querySelector("#search-results");
  
    input.addEventListener("input", () => {
      const keyword = input.value.toLowerCase();
      resultBox.innerHTML = "";
  
      if (keyword.length === 0) {
        resultBox.style.display = "none";
        return;
      }
  
      const matches = products.filter(p => p.name.toLowerCase().includes(keyword));
  
      if (matches.length > 0) {
        matches.forEach(product => {
          const item = document.createElement("a");
          item.className = "search-item";
          item.href = product.url;
          item.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <span>${product.name}</span>
          `;
          resultBox.appendChild(item);
        });
      } else {
        resultBox.innerHTML = `<div class="no-result">No results</div>`;
      }
  
      resultBox.style.display = "block";
    });
  });
  
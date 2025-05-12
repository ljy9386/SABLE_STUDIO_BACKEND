// detail.js

// 1. URL에서 id 읽어오기
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"), 10);

// 2. products.js에 있는 allProducts 배열에서 해당 id 상품 찾기
const selectedProduct = allProducts.find(product => product.id === productId);

// 3. 만약 찾은 상품이 있으면 화면에 표시
if (selectedProduct) {
  document.getElementById("product-img").src = selectedProduct.image;
  document.getElementById("product-img").alt = selectedProduct.name;
  document.getElementById("product-name").textContent = selectedProduct.name;
  document.getElementById("product-price").textContent = selectedProduct.price;
  document.getElementById("product-color").textContent = `Color: ${selectedProduct.color}`;

  const sizeSelect = document.getElementById("product-sizes");
  sizeSelect.innerHTML = `<option>SELECT YOUR SIZE</option>`;
  selectedProduct.sizes.forEach(size => {
    const option = document.createElement("option");
    option.textContent = size;
    sizeSelect.appendChild(option);
  });

  const descriptionPanel = document.getElementById("product-description");
  descriptionPanel.innerHTML = selectedProduct.description.map(d => `<p>- ${d}</p>`).join("");

  document.getElementById("product-sizeTable").innerHTML = selectedProduct.sizeTable;

} else {
  document.getElementById("product-detail").innerHTML = "<p>상품을 찾을 수 없습니다.</p>";
}

// ✅아코디언 기능
   const accordions = document.querySelectorAll('.accordion');
   accordions.forEach((acc) => {
     acc.addEventListener('click', () => {
       const panel = acc.nextElementSibling;
       panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
     });
   });

// ✅ 장바구니 담기 버튼 클릭 시 로직
document.getElementById("buy-btn").addEventListener("click", function () {
  const productName = document.getElementById("product-name").textContent;
  const productColor = document.getElementById("product-color").textContent.replace("Color: ", "");
  const productPrice = parseInt(document.getElementById("product-price").textContent.replace(/[^\d]/g, ""));
  const selectedSize = document.getElementById("product-sizes").value;
  const productImage = document.getElementById("product-img").src;

  if (selectedSize === "SELECT YOUR SIZE") {
    alert("사이즈를 선택해주세요!");
    return;
  }

  const cartItem = {
    name: productName,
    color: productColor,
    price: productPrice,
    size: selectedSize,
    quantity: 1,
    image: productImage
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(cartItem);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("장바구니에 담겼습니다!");
});

// ✅ 마이페이지 아이콘 클릭 시 이동
document.getElementById("user-icon").onclick = (e) => {
  e.preventDefault();
  window.location.href = "mypage.html";
};

// ✅ 검색창 열기/닫기 이벤트
document.getElementById("search-toggle").addEventListener("click", () => {
  document.getElementById("search-overlay").style.display = "block";
  document.getElementById("search-box").style.display = "block";
});
document.getElementById("search-close").addEventListener("click", () => {
  document.getElementById("search-overlay").style.display = "none";
  document.getElementById("search-box").style.display = "none";
});

// ✅장바구니 숫자 표시
window.addEventListener("DOMContentLoaded", function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCountSpan = document.querySelector(".cart span");
  if (cartCountSpan) {
    cartCountSpan.textContent = cart.length;
  }
});
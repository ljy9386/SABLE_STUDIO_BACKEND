// ✅ 수정된 전체 코드 (id 추가 완료)

  const allProducts = [
    {
      id: 1,
      name: "COTTON DRILL CUT-OUT DRAPE COAT",
      image: "img/COTTON DRILL CUT-OUT DRAPE COAT.webp",
      price: "400,000",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["Cotton 소재", "커트 아웃 디테일", "드레이프 실루엣"],
      sizeTable: `
        <table>
          <tr><td>어깨</td><td>45cm</td></tr>
          <tr><td>가슴</td><td>52cm</td></tr>
          <tr><td>소매</td><td>62cm</td></tr>
          <tr><td>총장</td><td>110cm</td></tr>
        </table>
      `,
      category: ["NEW", "COATS"]
    },
    {
      id: 2,
      name: "COTTON TWILL GARMENT DYED TIE-LOCKEN COAT",
      image: "img/COTTON TWILL GARMENT DYED TIE-LOCKEN COAT.webp",
      price: "687,500",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["Twill 원단", "Tie 디테일", "천연 염색"],
      sizeTable: `
        <table>
          <tr><td>어깨</td><td>46cm</td></tr>
          <tr><td>가슴</td><td>54cm</td></tr>
          <tr><td>소매</td><td>63cm</td></tr>
          <tr><td>총장</td><td>112cm</td></tr>
        </table>
      `,
      category: ["NEW", "COATS"]
    },
    {
      id: 3,
      name: "WASHER WOOL GABARDINE FLAME DOUBLE DRAPE COAT",
      image: "img/WASHER WOOL GABARDINE FLAME DOUBLE DRAPE COAT.webp",
      price: "687,500",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["Wool Gabardine", "Flame 스타일 커팅", "더블 드레이프"],
      sizeTable: `
        <table>
          <tr><td>어깨</td><td>47cm</td></tr>
          <tr><td>가슴</td><td>56cm</td></tr>
          <tr><td>소매</td><td>64cm</td></tr>
          <tr><td>총장</td><td>114cm</td></tr>
        </table>
      `,
      category: ["NEW", "COATS"]
    },
    {
      id: 4,
      name: "DOUBLE-WEAVE MELTON OVERSIZED SOUTIEN COLLAR COAT",
      image: "img/DOUBLE-WEAVE MELTON OVERSIZED SOUTIEN COLLAR COAT.webp",
      price: "975,500",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["Melton 원단", "오버사이즈 핏", "Soutien Collar 디자인"],
      sizeTable: `
        <table>
          <tr><td>어깨</td><td>48cm</td></tr>
          <tr><td>가슴</td><td>58cm</td></tr>
          <tr><td>소매</td><td>65cm</td></tr>
          <tr><td>총장</td><td>116cm</td></tr>
        </table>
      `,
      category: ["NEW", "COATS"]
    },
    {
      id: 5,
      name: "2-BUTTON DENIM JACKET WITH DECORATIVE STITCH",
      image: "img/2-BUTTON DENIM JACKET WITH DECORATIVE STITCH.webp",
      price: "1,063,800",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["데님 소재", "2버튼", "장식 스티치"],
      sizeTable: `
        <table>
          <tr><td>어깨</td><td>44cm</td></tr>
          <tr><td>가슴</td><td>53cm</td></tr>
          <tr><td>소매</td><td>61cm</td></tr>
          <tr><td>총장</td><td>68cm</td></tr>
        </table>
      `,
      category: ["NEW", "JACKETS"]
    },
    {
      id: 6,
      name: "ANGEL PATTERN DOUBLE FRONT JACKET",
      image: "img/ANGEL PATTERN DOUBLE FRONT JACKET.webp",
      price: "4,360,000",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["Angel 패턴", "더블 프론트 디자인", "럭셔리 마감"],
      sizeTable: `
        <table>
          <tr><td>어깨</td><td>45cm</td></tr>
          <tr><td>가슴</td><td>54cm</td></tr>
          <tr><td>소매</td><td>62cm</td></tr>
          <tr><td>총장</td><td>70cm</td></tr>
        </table>
      `,
      category: ["NEW", "JACKETS"]
    },
    {
      id: 7,
      name: "W.RY HARD TWISTED GABARDINE BACK PT JACKET",
      image: "img/W.RY HARD TWISTED GABARDINE BACK PT JACKET.webp",
      price: "4,323,000",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["Hard Twisted Gabardine", "백 포인트 디자인"],
      sizeTable: `
        <table>
          <tr><td>어깨</td><td>46cm</td></tr>
          <tr><td>가슴</td><td>56cm</td></tr>
          <tr><td>소매</td><td>63cm</td></tr>
          <tr><td>총장</td><td>72cm</td></tr>
        </table>
      `,
      category: ["NEW", "JACKETS"]
    },
    {
      id: 8,
      name: "CREPE de CHINE HOODED JACKET",
      image: "img/CREPE de CHINE HOODED JACKET.webp",
      price: "687,500",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["크레이프 드 신 원단", "후드 디자인", "라이트 무게감"],
      sizeTable: `
        <table>
          <tr><td>어깨</td><td>43cm</td></tr>
          <tr><td>가슴</td><td>51cm</td></tr>
          <tr><td>소매</td><td>60cm</td></tr>
          <tr><td>총장</td><td>66cm</td></tr>
        </table>
      `,
      category: ["NEW", "JACKETS"]
    },
    {
      id: 9,
      name: "PUNCTURE M A-STABBING WOMEN B",
      image: "img/PUNCTURE M A-STABBING WOMEN B.webp",
      price: "2,247,000",
      color: "White",
      sizes: ["S", "M", "L", "XL"],
      description: ["PUNCTURE 디자인", "A-STABBING 여성용"],
      sizeTable: `
        <table>
          <tr><td>어깨</td><td>42cm</td></tr>
          <tr><td>가슴</td><td>50cm</td></tr>
          <tr><td>소매</td><td>59cm</td></tr>
          <tr><td>총장</td><td>65cm</td></tr>
        </table>
      `,
      category: "SHIRT"
    },
    {
      id: 10,
      name: "CNy JERSEY B HANDWRITTEN PRINT LONG BLOUSE",
      image: "img/CNy JERSEY B HANDWRITTEN PRINT LONG BLOUSE.webp",
      price: "2,326,000",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["Handwritten 프린트", "롱 블라우스 디자인"],
      sizeTable: `
        <table>
          <tr><td>어깨</td><td>41cm</td></tr>
          <tr><td>가슴</td><td>49cm</td></tr>
          <tr><td>소매</td><td>58cm</td></tr>
          <tr><td>총장</td><td>64cm</td></tr>
        </table>
      `,
      category: "SHIRT"
    }
  ];
  
  // 이어서 allProducts 배열 계속 추가
  allProducts.push(
    {
      id: 11,
      name: "CNy PT JERSEY A STAND LONG BLOUSE",
      image: "img/CNy PT JERSEY A STAND LONG BLOUSE.webp",
      price: "2,113,000",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["CNy Jersey", "A Stand 스타일", "롱 블라우스"],
      sizeTable: `
        <table>
          <tr><td>어깨</td><td>42cm</td></tr>
          <tr><td>가슴</td><td>51cm</td></tr>
          <tr><td>소매</td><td>60cm</td></tr>
          <tr><td>총장</td><td>65cm</td></tr>
        </table>
      `,
      category: "SHIRT"
    },
    {
      id: 12,
      name: "CREPE DE CHINE CIRCLE PANTS",
      image: "img/CREPE DE CHINE CIRCLE PANTS.webp",
      price: "705,000",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["크레이프 드 신 원단", "서클 팬츠 디자인"],
      sizeTable: `
        <table>
          <tr><td>허리</td><td>34cm</td></tr>
          <tr><td>힙</td><td>50cm</td></tr>
          <tr><td>총장</td><td>102cm</td></tr>
        </table>
      `,
      category: "SKIRTS"
    },
    {
      id: 13,
      name: "CREPE DE CHINE CIRCLE PANTS B",
      image: "img/CREPE DE CHINE CIRCLE PANTS B.webp",
      price: "705,000",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["크레이프 드 신 변형 디자인", "편안한 핏"],
      sizeTable: `
        <table>
          <tr><td>허리</td><td>35cm</td></tr>
          <tr><td>힙</td><td>51cm</td></tr>
          <tr><td>총장</td><td>103cm</td></tr>
        </table>
      `,
      category: "SKIRTS"
    },
    {
      id: 14,
      name: "FLAMES PATTERN WAIST-STRING GATHERED SKIRT",
      image: "img/FLAMES PATTERN WAIST-STRING GATHERED SKIRT.webp",
      price: "537,500",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["플레임 패턴", "허리 스트링 스커트"],
      sizeTable: `
        <table>
          <tr><td>허리</td><td>33cm</td></tr>
          <tr><td>총장</td><td>90cm</td></tr>
        </table>
      `,
      category: "SKIRTS"
    },
    {
      id: 15,
      name: "WASHER WOOL GABARDINE BUTTONED SKIRT",
      image: "img/WASHER WOOL GABARDINE BUTTONED SKIRT.webp",
      price: "412,500",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["Wool Gabardine 소재", "버튼 디테일 스커트"],
      sizeTable: `
        <table>
          <tr><td>허리</td><td>34cm</td></tr>
          <tr><td>총장</td><td>88cm</td></tr>
        </table>
      `,
      category: "SKIRTS"
    },
    {
      id: 16,
      name: "LINEN LAWN DECO GURKHA PANTS",
      image: "img/LINEN LAWN DECO GURKHA PANTS.webp",
      price: "1,798,000",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["Linen Lawn 소재", "구르카 팬츠 스타일"],
      sizeTable: `
        <table>
          <tr><td>허리</td><td>36cm</td></tr>
          <tr><td>힙</td><td>53cm</td></tr>
          <tr><td>총장</td><td>105cm</td></tr>
        </table>
      `,
      category: "PANTS"
    },
    {
      id: 17,
      name: "INK DYED TWILL STANDARD CORD PANTS",
      image: "img/INK DYED TWILL STANDARD CORD PANTS.webp",
      price: "1,084,000",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["Ink Dyed Twill", "스탠다드 코드 팬츠"],
      sizeTable: `
        <table>
          <tr><td>허리</td><td>35cm</td></tr>
          <tr><td>힙</td><td>52cm</td></tr>
          <tr><td>총장</td><td>104cm</td></tr>
        </table>
      `,
      category: "PANTS"
    },
    {
      id: 18,
      name: "INK DYED TWILL GATHER CROPPED PANTS",
      image: "img/INK DYED TWILL GATHER CROPPED PANTS.webp",
      price: "1,214,000",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["Ink Dyed Twill", "크롭 팬츠", "Gather 디테일"],
      sizeTable: `
        <table>
          <tr><td>허리</td><td>34cm</td></tr>
          <tr><td>힙</td><td>51cm</td></tr>
          <tr><td>총장</td><td>95cm</td></tr>
        </table>
      `,
      category: "PANTS"
    },
    {
      id: 19,
      name: "SPIKY POKA DOTS WAIST ELASTIC PANTS",
      image: "img/SPIKY POKA DOTS WAIST ELASTIC PANTS.webp",
      price: "794,500",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["Spiky Dot 패턴", "허리밴딩 팬츠"],
      sizeTable: `
        <table>
          <tr><td>허리</td><td>33cm</td></tr>
          <tr><td>힙</td><td>50cm</td></tr>
          <tr><td>총장</td><td>100cm</td></tr>
        </table>
      `,
      category: "PANTS"
    },
    {
      id: 20,
      name: "FLOWER DESIGN TURTLE NECK KNIT",
      image: "img/FLOWER DESIGN TURTLE NECK KNIT.webp",
      price: "1,084,000",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["Flower 패턴 니트", "터틀넥 스타일"],
      sizeTable: `
        <table>
          <tr><td>어깨</td><td>42cm</td></tr>
          <tr><td>가슴</td><td>50cm</td></tr>
          <tr><td>소매</td><td>60cm</td></tr>
          <tr><td>총장</td><td>67cm</td></tr>
        </table>
      `,
      category: "KNITWEAR"
    }
  );
  // 이어서 allProducts 배열 계속 추가
  allProducts.push(
    {
      id: 21,
      name: "TENUGUI DESIGN TURTLE NECK KNIT",
      image: "img/TENUGUI DESIGN TURTLE NECK KNIT.webp",
      price: "1,084,000",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["Tenugui 디자인", "터틀넥 스타일 니트"],
      sizeTable: `
        <table>
          <tr><td>어깨</td><td>43cm</td></tr>
          <tr><td>가슴</td><td>51cm</td></tr>
          <tr><td>소매</td><td>61cm</td></tr>
          <tr><td>총장</td><td>68cm</td></tr>
        </table>
      `,
      category: "KNITWEAR"
    },
    {
      id: 22,
      name: "TENUGUI DESIGN TURTLE NECK KNIT B",
      image: "img/TENUGUI DESIGN TURTLE NECK KNIT B.webp",
      price: "1,084,000",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["Tenugui 디자인 B 버전", "터틀넥 니트"],
      sizeTable: `
        <table>
          <tr><td>어깨</td><td>44cm</td></tr>
          <tr><td>가슴</td><td>52cm</td></tr>
          <tr><td>소매</td><td>62cm</td></tr>
          <tr><td>총장</td><td>69cm</td></tr>
        </table>
      `,
      category: "KNITWEAR"
    },
    {
      id: 23,
      name: "BULKY WOOL BIRDS EYE REVERSIBLE PULLOVER",
      image: "img/BULKY WOOL BIRDS EYE REVERSIBLE PULLOVER.webp",
      price: "412,500",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      description: ["벌키 울 소재", "리버시블 풀오버 디자인"],
      sizeTable: `
        <table>
          <tr><td>어깨</td><td>45cm</td></tr>
          <tr><td>가슴</td><td>53cm</td></tr>
          <tr><td>소매</td><td>60cm</td></tr>
          <tr><td>총장</td><td>66cm</td></tr>
        </table>
      `,
      category: "KNITWEAR"
    },
    {
      id: 24,
      name: "COTTON CANVAS LACE-UP BIKER BOOTS",
      image: "img/COTTON CANVAS LACE-UP BIKER BOOTS.webp",
      price: "689,000",
      color: "Black",
      sizes: ["260", "270", "280"],
      description: ["Cotton Canvas", "Lace-up 디자인", "바이커 스타일 부츠"],
      sizeTable: `
        <table>
          <tr><td>사이즈</td><td>260 / 270 / 280</td></tr>
        </table>
      `,
      category: "SHOES"
    },
    {
      id: 25,
      name: "Y's × Flower MOUNTAIN PUMAPUNK",
      image: "img/Y's × Flower MOUNTAIN PUMAPUNK.webp",
      price: "617,500",
      color: "White",
      sizes: ["260", "270", "280"],
      description: ["Flower Mountain 협업", "PUMAPUNK 시리즈"],
      sizeTable: `
        <table>
          <tr><td>사이즈</td><td>260 / 270 / 280</td></tr>
        </table>
      `,
      category: "SHOES"
    },
    {
      id: 26,
      name: "CACTUS DESIGN PRINT LOW-CUT CANVAS SNEAKER",
      image: "img/CACTUS DESIGN PRINT LOW-CUT CANVAS SNEAKER.webp",
      price: "774,000",
      color: "White",
      sizes: ["260", "270", "280"],
      description: ["선인장 프린트", "로우컷 캔버스 스니커즈"],
      sizeTable: `
        <table>
          <tr><td>사이즈</td><td>260 / 270 / 280</td></tr>
        </table>
      `,
      category: "SHOES"
    },
    {
      id: 27,
      name: "Y’s × Dr. Martens 10 EYE Y's BLACK CLASSIC CALF",
      image: "img/Y’s × Dr. Martens 10 EYE Y's BLACK CLASSIC CALF.webp",
      price: "1,212,000",
      color: "Black",
      sizes: ["260", "270", "280"],
      description: ["Dr. Martens 협업", "10홀 부츠", "클래식 송아지 가죽 사용"],
      sizeTable: `
        <table>
          <tr><td>사이즈</td><td>260 / 270 / 280</td></tr>
        </table>
      `,
      category: "SHOES"
    },
  );  

// ✅ 카드 렌더링 코드
const container = document.getElementById("results");

allProducts.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <a href="detail.html?id=${product.id}">
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
    </a>
    <p>₩${product.price}</p>
    <p>사이즈: ${product.size || product.SHOESIZE} / 색상: ${product.color}</p>
    <button onclick="addToWishlist('${product.name}', '${product.image}', ${parseInt(product.price.replace(/[\u20a9,]/g, ''))}, '${product.size || product.SHOESIZE}', '${product.color}')">❤️</button>
  `;
  container.appendChild(card);
});

// ✅ 검색 결과 렌더링 함수
function renderProducts(products) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";
  if (products.length === 0) {
    resultsContainer.innerHTML = "<p>검색 결과가 없습니다.</p>";
  } else {
    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product-card";
    
      div.innerHTML = `
        <button class="heart-btn">♥</button> <!-- ✅ 하트 버튼 추가 -->
        <a href="detail.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}">
          <div class="product-name">${product.name}</div>
        </a>
        <div class="price">₩${product.price}</div>
      `;
    
      resultsContainer.appendChild(div);
    });
  }
}

// models/Wishlist.js
const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  size: { type: String },
  color: { type: String }
});

module.exports = mongoose.model("Wishlist", WishlistSchema);


const wishlistData = [
  {
    name: "COTTON DRILL CUT-OUT DRAPE COAT",
    price: "₩400,000",
    image: "img/COTTON DRILL CUT-OUT DRAPE COAT.webp",
    size: "",
    color: ""
  },
  {
    name: "COTTON TWILL GARMENT DYED TIE-LOCKEN COAT",
    price: "₩687,500",
    image: "img/COTTON TWILL GARMENT DYED TIE-LOCKEN COAT.webp",
    size: "",
    color: ""
  },
  {
    name: "WASHER WOOL GABARDINE FLAME DOUBLE DRAPE COAT",
    price: "₩687,500",
    image: "img/WASHER WOOL GABARDINE FLAME DOUBLE DRAPE COAT.webp",
    size: "",
    color: ""
  },
  {
    name: "DOUBLE-WEAVE MELTON OVERSIZED SOUTIEN COLLAR COAT",
    price: "₩975,500",
    image: "img/DOUBLE-WEAVE MELTON OVERSIZED SOUTIEN COLLAR COAT.webp",
    size: "",
    color: ""
  },
  {
    name: "2-BUTTON DENIM JACKET WITH DECORATIVE STITCH",
    price: "₩1,063,800",
    image: "img/2-BUTTON DENIM JACKET WITH DECORATIVE STITCH.webp",
    size: "",
    color: ""
  },
  {
    name: "ANGEL PATTERN DOUBLE FRONT JACKET",
    price: "₩4,360,000",
    image: "img/ANGEL PATTERN DOUBLE FRONT JACKET.webp",
    size: "",
    color: ""
  },
  {
    name: "W.RY HARD TWISTED GABARDINE BACK PT JACKET",
    price: "₩4,323,000",
    image: "img/W.RY HARD TWISTED GABARDINE BACK PT JACKET.webp",
    size: "",
    color: ""
  },
  {
    name: "CREPE de CHINE HOODED JACKET",
    price: "₩687,500",
    image: "img/CREPE de CHINE HOODED JACKET.webp",
    size: "",
    color: ""
  },
  {
    name: "FLOWER DESIGN TURTLE NECK KNIT",
    price: "₩1.084,000",
    image: "img/FLOWER DESIGN TURTLE NECK KNIT.webp",
    size: "",
    color: ""
  },
  {
    name: "TENUGUI DESIGN TURTLE NECK KNIT",
    price: "₩1,084,000",
    image: "img/TENUGUI DESIGN TURTLE NECK KNIT.webp",
    size: "",
    color: ""
  },
  {
    name: "TENUGUI DESIGN TURTLE NECK KNIT B",
    price: "₩1,084,000",
    image: "img/TENUGUI DESIGN TURTLE NECK KNIT B.webp",
    size: "",
    color: ""
  },
  {
    name: "BULKY WOOL BIRDS EYE REVERSIBLE PULLOVER",
    price: "₩412,500",
    image: "img/BULKY WOOL BIRDS EYE REVERSIBLE PULLOVER.webp",
    size: "",
    color: ""
  },
  {
    name: "LINEN LAWN DECO GURKHA PANTS",
    price: "₩1,798,000",
    image: "img/LINEN LAWN DECO GURKHA PANTS.webp",
    size: "",
    color: ""
  },
  {
    name: "INK DYED TWILL STANDARD CORD PANTS",
    price: "₩1,084,000",
    image: "img/INK DYED TWILL STANDARD CORD PANTS.webp",
    size: "",
    color: ""
  },
  {
    name: "INK DYED TWILL GATHER CROPPED PANTS",
    price: "₩1,214,000",
    image: "img/INK DYED TWILL GATHER CROPPED PANTS.webp",
    size: "",
    color: ""
  },
  {
    name: "SPIKY POKA DOTS WAIST ELASTIC PANTS",
    price: "₩794,500",
    image: "img/SPIKY POKA DOTS WAIST ELASTIC PANTS.webp",
    size: "",
    color: ""
  },
  {
    name: "PUNCTURE M A-STABBING WOMEN B",
    price: "₩2.247,000",
    image: "img/PUNCTURE M A-STABBING WOMEN B.webp",
    size: "",
    color: ""
  },
  {
    name: "CNy JERSEY B HANDWRITTEN PRINT LONG BLOUSE",
    price: "₩2,326,000",
    image: "img/CNy JERSEY B HANDWRITTEN PRINT LONG BLOUSE.webp",
    size: "",
    color: ""
  },
  {
    name: "CNy PT JERSEY A STAND LONG BLOUSE",
    price: "₩2,113,000",
    image: "img/CNy PT JERSEY A STAND LONG BLOUSE.webp",
    size: "",
    color: ""
  },
  {
    name: "COTTON CANVAS LACE-UP BIKER BOOTS",
    price: "₩689,000",
    image: "img/COTTON CANVAS LACE-UP BIKER BOOTS.webp",
    size: "",
    color: ""
  },
  {
    name: "Y's × Flower MOUNTAIN PUMAPUNK",
    price: "₩617,500",
    image: "img/Y's × Flower MOUNTAIN PUMAPUNK.webp",
    size: "",
    color: ""
  },
  {
    name: "CACTUS DESIGN PRINT LOW-CUT CANVAS SNEAKER",
    price: "₩774,000",
    image: "img/CACTUS DESIGN PRINT LOW-CUT CANVAS SNEAKER.webp",
    size: "",
    color: ""
  },
  {
    name: "Y’s × Dr. Martens 10 EYE Y's BLACK CLASSIC CALF",
    price: "₩1,212,000",
    image: "img/Y’s × Dr. Martens 10 EYE Y's BLACK CLASSIC CALF.webp",
    size: "",
    color: ""
  },
  {
    name: "CREPE DE CHINE CIRCLE PANTS",
    price: "₩705,000",
    image: "img/CREPE DE CHINE CIRCLE PANTS.webp",
    size: "",
    color: ""
  },
  {
    name: "CREPE DE CHINE CIRCLE PANTS B",
    price: "₩705,000",
    image: "img/CREPE DE CHINE CIRCLE PANTS B.webp",
    size: "",
    color: ""
  },
  {
    name: "FLAMES PATTERN WAIST-STRING GATHERED SKIRT",
    price: "₩537,500",
    image: "img/FLAMES PATTERN WAIST-STRING GATHERED SKIRT.webp",
    size: "",
    color: ""
  },
  {
    name: "WASHER WOOL GABARDINE BUTTONED SKIRT",
    price: "₩412,500",
    image: "img/WASHER WOOL GABARDINE BUTTONED SKIRT.webp",
    size: "",
    color: ""
  },
];

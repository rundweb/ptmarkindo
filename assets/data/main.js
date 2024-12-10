const openMenu = document.querySelector(".nav-toggle");
const toggleIcon = document.querySelector(".bx-menu-alt-right");
const listMenu = document.querySelector(".nav-list");
const listSocial = document.querySelector(".nav-social");
const navClose = document.querySelector(".nav-link");

openMenu.addEventListener("click", function () {
  listMenu.classList.toggle("menu-active");
  listSocial.classList.toggle("menu-active");
  toggleIcon.classList.toggle("bx-x");
});

navClose.addEventListener("click", function () {
  listMenu.classList.toggle("menu-active");
  listSocial.classList.toggle("menu-active");
  toggleIcon.classList.toggle("bx-x");
});

const scrollMenu = document.querySelector(".navbar");
const imgResize = document.querySelector(".nav-logo");

window.addEventListener("scroll", function () {
  if (scrollY > 100) {
    scrollMenu.classList.add("nav-scroll");
    imgResize.classList.add("resize");
    listMenu.classList.remove("menu-active");
    listSocial.classList.remove("menu-active");
    toggleIcon.classList.remove("bx-x");
  } else {
    scrollMenu.classList.remove("nav-scroll");
    imgResize.classList.remove("resize");
  }
});

var catalogSpices = [
  {
    id: 1,
    label: "Spices",
    img: "../assets/images/catalog-spices/cloves.png",
    name: "Cloves",
    desc: "Rich in protein and omega-3, catfish is healthy, flavorful",
    link: "#",
  },
  {
    id: 2,
    label: "Spices",
    img: "../assets/images/catalog-spices/ClovesStem.png",
    name: "Cloves Stem",
    desc: "Rich in protein and omega-3, catfish is healthy, flavorful",
    link: "#",
  },
  {
    id: 3,
    label: "Spices",
    img: "../assets/images/catalog-spices/Nutmeg.png",
    name: "Nutmeg",
    desc: "Rich in protein and omega-3, catfish is healthy, flavorful",
    link: "#",
  },
  {
    id: 4,
    label: "Spices",
    img: "../assets/images/catalog-spices/mace.png",
    name: "Mace",
    desc: "Rich in protein and omega-3, catfish is healthy, flavorful",
    link: "#",
  },
  {
    id: 5,
    label: "Spices",
    img: "../assets/images/catalog-spices/blackpaper.png",
    name: "Black Pepper",
    desc: "Rich in protein and omega-3, catfish is healthy, flavorful",
    link: "#",
  },
  {
    id: 6,
    label: "Spices",
    img: "../assets/images/catalog-spices/whitepaper.png",
    name: "White Pepper",
    desc: "Rich in protein and omega-3, catfish is healthy, flavorful",
    link: "#",
  },
  {
    id: 7,
    label: "Spices",
    img: "../assets/images/catalog-spices/cassiastick.png",
    name: "Cassia Stick",
    desc: "Rich in protein and omega-3, catfish is healthy, flavorful",
    link: "#",
  },
  {
    id: 8,
    label: "Spices",
    img: "../assets/images/catalog-spices/cassiabroken.png",
    name: "Cassia Broken",
    desc: "Rich in protein and omega-3, catfish is healthy, flavorful",
    link: "#",
  },
  {
    id: 9,
    label: "Spices",
    img: "../assets/images/catalog-spices/bettel.png",
    name: "Betel Nuts",
    desc: "Rich in protein and omega-3, catfish is healthy, flavorful",
    link: "#",
  },
  {
    id: 10,
    label: "Spices",
    img: "../assets/images/catalog-spices/ginger.png",
    name: "Ginger",
    desc: "Rich in protein and omega-3, catfish is healthy, flavorful",
    link: "#",
  },
  {
    id: 11,
    label: "Spices",
    img: "../assets/images/catalog-spices/dried-ginger.png",
    name: "Dried Ginger Slices",
    desc: "Rich in protein and omega-3, catfish is healthy, flavorful",
    link: "#",
  },
  {
    id: 12,
    label: "Coffee",
    img: "../assets/images/catalog-coffee/toraja.png",
    name: "Toraja Coffee",
    desc: "Rich in protein and omega-3, catfish is healthy, flavorful",
    link: "#",
  },
  {
    id: 13,
    label: "Coffee",
    img: "../assets/images/catalog-coffee/kintamani.png",
    name: "Kintamani Coffee",
    desc: "Rich in protein and omega-3, catfish is healthy, flavorful",
    link: "#",
  },
  {
    id: 14,
    label: "Coffee",
    img: "../assets/images/catalog-coffee/gayo.png",
    name: "Aceh Gayo Coffee",
    desc: "Rich in protein and omega-3, catfish is healthy, flavorful",
    link: "#",
  },
  {
    id: 15,
    label: "Coffee",
    img: "../assets/images/catalog-coffee/lintong.png",
    name: "Lintong Coffee",
    desc: "Rich in protein and omega-3, catfish is healthy, flavorful",
    link: "#",
  },
  {
    id: 16,
    label: "Coffee",
    img: "../assets/images/catalog-coffee/Mandailing.png",
    name: "Mandailing Coffee",
    desc: "Rich in protein and omega-3, catfish is healthy, flavorful",
    link: "#",
  },
  {
    id: 17,
    label: "Coffee",
    img: "../assets/images/catalog-coffee/All.png",
    name: "Other Types of Coffee",
    desc: "Rich in protein and omega-3, catfish is healthy, flavorful",
    link: "#",
  },
];

var filteredSpices = catalogSpices.filter((items) => items.label === "Spices");
var filteredCoffee = catalogSpices.filter(
  (items) => items.label === "Coffee"
);
var filteredOils = catalogSpices.filter((items) => items.label === "Oils");

var listAll = catalogSpices
  .map(
    (items) => `
      <div class="catalog-link" data-aos="fade-up" data-aos-duration="1000">
          <div class="label">
              <h1>${items.label}</h1>
            </div>
            <div class="catalog-img">
              <img src=${items.img} alt="" />
            </div>
            <div class="catalog-text">
              <h1>${items.name}</h1>
              <p>
                ${items.desc}
              </p>
              <div class="catalog-btn">
                <a href=${items.link} class="btn-more">See More</a>
                <a href="" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>
`
  )
  .join("");

var listSpices = filteredSpices
  .map(
    (
      items
    ) => `<div class="catalog-link" data-aos="fade-up" data-aos-duration="1000">
          <div class="label">
              <h1>${items.label}</h1>
            </div>
            <div class="catalog-img">
              <img src=${items.img} alt="" />
            </div>
            <div class="catalog-text">
              <h1>${items.name}</h1>
              <p>
                ${items.desc}
              </p>
              <div class="catalog-btn">
                <a href=${items.link} class="btn-more">See More</a>
                <a href="" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>`
  )
  .join("");
var listCofee = filteredCoffee
  .map(
    (
      items
    ) => `<div class="catalog-link" data-aos="fade-up" data-aos-duration="1000">
          <div class="label">
              <h1>${items.label}</h1>
            </div>
            <div class="catalog-img">
              <img src=${items.img} alt="" />
            </div>
            <div class="catalog-text">
              <h1>${items.name}</h1>
              <p>
                ${items.desc}
              </p>
              <div class="catalog-btn">
                <a href=${items.link} class="btn-more">See More</a>
                <a href="" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>`
  )
  .join("");

  var listOils = filteredOils
  .map(
    (
      items
    ) => `<div class="catalog-link" data-aos="fade-up" data-aos-duration="1000">
          <div class="label">
              <h1>${items.label}</h1>
            </div>
            <div class="catalog-img">
              <img src=${items.img} alt="" />
            </div>
            <div class="catalog-text">
              <h1>${items.name}</h1>
              <p>
                ${items.desc}
              </p>
              <div class="catalog-btn">
                <a href=${items.link} class="btn-more">See More</a>
                <a href="" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>`
  )
  .join("");

var header = document.getElementById("btn-category");
var btns = header.getElementsByClassName("btns");
var catalogList = document.getElementById("catalog-list");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    if (current[0].className == "btns 1 active") {
      catalogList.innerHTML = listAll;
    } else if (current[0].className == "btns 2 active") {
      catalogList.innerHTML = listSpices;
    } else if (current[0].className == "btns 3 active") {
      catalogList.innerHTML = listCofee;
    } else if (current[0].className == "btns 4 active") {
      catalogList.innerHTML = listOils;
    } else {
      console.log(current[0].className + "not pound");
    }
  });
}

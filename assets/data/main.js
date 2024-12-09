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

var header = document.getElementById("btn-category");
var btns = header.getElementsByClassName("btns");
var catalogList = document.getElementById("catalog-list");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    if (current[0].className == "btns 1 active") {
      catalogList.innerHTML = `
          <div class="catalog-link" data-aos="fade-up" data-aos-duration="1000">
            <div class="label">
              <h1>Spices</h1>
            </div>
            <div class="catalog-img">
              <img src="../assets/images/catalog-seafood/catfish.png" alt="" />
            </div>
            <div class="catalog-text">
              <h1>Catfish (Arius Thalasinnus)</h1>
              <p>
                Rich in protein and omega-3, catfish is healthy, flavorful, and
                versatile.
              </p>
              <div class="catalog-btn">
                <a href="" class="btn-more">See More</a>
                <a href="" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="catalog-link" data-aos="fade-up" data-aos-duration="1000">
          <div class="label">
              <h1>Coffee Beans</h1>
            </div>
            <div class="catalog-img">
              <img src="../assets/images/catalog-seafood/snapper.png" alt="" />
            </div>
            <div class="catalog-text">
              <h1>Red Snapper (Lutjanus Malabaricus)</h1>
              <p>
                Rich in protein and omega-3, with a mild flavor and firm
                texture, perfect for grilling.
              </p>
              <div class="catalog-btn">
                <a href="" class="btn-more">See More</a>
                <a href="" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="catalog-link" data-aos="fade-up" data-aos-duration="1000">
          <div class="label">
              <h1>Oils</h1>
            </div>
            <div class="catalog-img">
              <img src="../assets/images/catalog-seafood/pompret.png" alt="" />
            </div>
            <div class="catalog-text">
              <h1>Pomfret (Pampus Argenteus)</h1>
              <p>
                Low in fat, high in protein, and loaded with vitamins and
                omega-3, ideal for heart health.
              </p>
              <div class="catalog-btn">
                <a href="" class="btn-more">See More</a>
                <a href="" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="catalog-link" data-aos="fade-up" data-aos-duration="1000">
          <div class="label">
              <h1>Oils</h1>
            </div>
            <div class="catalog-img">
              <img src="../assets/images/catalog-seafood/ribbon.png" alt="" />
            </div>
            <div class="catalog-text">
              <h1>Ribbon Fish (Trichiurus Lepturus)</h1>
              <p>
                A lean source of protein, packed with selenium and vitamins,
                known for its soft texture.
              </p>
              <div class="catalog-btn">
                <a href="" class="btn-more">See More</a>
                <a href="" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>`;
    } else if (current[0].className == "btns 2 active") {
      catalogList.innerHTML = `
          <div class="catalog-link" data-aos="fade-up" data-aos-duration="1000">
          <div class="label">
              <h1>Spices</h1>
            </div>
            <div class="catalog-img">
              <img src="../assets/images/catalog-seafood/catfish.png" alt="" />
            </div>
            <div class="catalog-text">
              <h1>Catfish (Arius Thalasinnus)</h1>
              <p>
                Rich in protein and omega-3, catfish is healthy, flavorful, and
                versatile.
              </p>
              <div class="catalog-btn">
                <a href="" class="btn-more">See More</a>
                <a href="" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>`;
    } else if (current[0].className == "btns 3 active") {
      catalogList.innerHTML = `
          <div class="catalog-link" data-aos="fade-up" data-aos-duration="1000">
          <div class="label">
              <h1>Coffee Beans</h1>
            </div>
            <div class="catalog-img">
              <img src="../assets/images/catalog-seafood/snapper.png" alt="" />
            </div>
            <div class="catalog-text">
              <h1>Red Snapper (Lutjanus Malabaricus)</h1>
              <p>
                Rich in protein and omega-3, with a mild flavor and firm
                texture, perfect for grilling.
              </p>
              <div class="catalog-btn">
                <a href="" class="btn-more">See More</a>
                <a href="" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>`;
    } else if (current[0].className == "btns 4 active") {
      catalogList.innerHTML = `
          <div class="catalog-link" data-aos="fade-up" data-aos-duration="1000">
          <div class="label">
              <h1>oils</h1>
            </div>
            <div class="catalog-img">
              <img src="../assets/images/catalog-seafood/pompret.png" alt="" />
            </div>
            <div class="catalog-text">
              <h1>Pomfret (Pampus Argenteus)</h1>
              <p>
                Low in fat, high in protein, and loaded with vitamins and
                omega-3, ideal for heart health.
              </p>
              <div class="catalog-btn">
                <a href="" class="btn-more">See More</a>
                <a href="" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="catalog-link" data-aos="fade-up" data-aos-duration="1000">
          <div class="label">
              <h1>Oils</h1>
            </div>
            <div class="catalog-img">
              <img src="../assets/images/catalog-seafood/ribbon.png" alt="" />
            </div>
            <div class="catalog-text">
              <h1>Ribbon Fish (Trichiurus Lepturus)</h1>
              <p>
                A lean source of protein, packed with selenium and vitamins,
                known for its soft texture.
              </p>
              <div class="catalog-btn">
                <a href="" class="btn-more">See More</a>
                <a href="" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>`;
    } else {
      console.log(current[0].className + "not pound");
    }
  });
}

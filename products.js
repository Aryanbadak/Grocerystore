let elementsel = document.querySelector(".elements")
let cartitem = document.querySelector(".offcanvas-body")
let bestSellsel = document.querySelector(".bestSell")
let dayele = document.querySelector(".day")
let quntsel = document.querySelector(".qunbtnval")
let totalitembg = document.querySelector(".totalitm")
let pricetotal = document.querySelector(".price")
let wishitems = document.querySelector(".wishlistdata")
let likebadgesel = document.querySelector(".likeitemstotal")
let producttotalsel = document.querySelector(".producttotal")
let viweslider = document.querySelector(".view-slider")
let slideimg = document.querySelectorAll(".sliderimges")
let smimges = document.querySelector(".sm-img-col")
let viewimges = document.querySelector(".imgcontent")
let quickViweModal = document.querySelector(".quickview")


const products = [
    {
        id: 1,
        back: "b1",
        title: "Snacks & Munchies",
        name: "Haldiram's Sev Bhujiya",
        stock: 10,
        price: 18,
        oldprice: 24,
        qty: 0,
        type: "Snacks"
    },
    {
        id: 2,
        back: "b2",
        title: "Bakery & Buiscuits",
        name: "NutriChoice Digestive",
        stock: 8,
        price: 24,
        oldprice: 24,
        qty: 10,
        type: "Buiscuits"
    },
    {
        id: 3,
        back: "b3",
        title: "Bakery & Buiscuits",
        name: "Cadbury 5 Star Chocolate",
        stock: 5,
        price: 32,
        oldprice: 30,
        qty: 10,
        type: "Cadbury"
    },
    {
        id: 4,
        back: "b4",
        title: "Snacks & Munchies",
        name: "Onion Flavour Potato",
        stock: 5,
        price: 10,
        oldprice: 15,
        qty: 10,
        type: "Snacks"
    },
    {
        id: 5,
        back: "b5",
        title: "Instant food",
        name: "Salted instant popcorn",
        stock: 5,
        price: 20,
        oldprice: 25,
        qty: 10,
        type: "Instant food"
    },
    {
        id: 6,
        back: "b6",
        title: "Dairy, Bread & Eggs",
        name: "Blueberry Greek Yogurt",
        stock: 6,
        price: 50,
        oldprice: 55,
        qty: 10,
        type: "Dairy Product"
    },
    {
        id: 7,
        back: "b7",
        title: "Dairy, Bread & Eggs",
        name: "Britannia Cheese Slices",
        stock: 7,
        price: 24,
        oldprice: 30,
        qty: 10,
        type: "Dairy Product"
    },
    {
        id: 8,
        back: "b8",
        title: "Instant Food",
        name: "Kellog's original cereals",
        stock: 8,
        price: 120,
        oldprice: 150,
        qty: 10,
        type: "Grain Food"
    },
    {
        id: 9,
        back: "b9",
        title: "Snacks & Munchies",
        name: "Slurrp Millet Chocolate",
        stock: 0,
        price: 25,
        oldprice: 27,
        qty: 10
    },
    {
        id: 10,
        back: "b10",
        title: "Dairy, Bread & Eggs",
        name: "Amul Butter - 500g",
        stock: 10,
        price: 30,
        oldprice: 32,
        qty: 10,
        type: "Dairy Product"
    },
    {
        id: 11,
        back: "b11",
        title: "Instant Food",
        name: "Pasta",
        stock: 6,
        price: 50,
        oldprice: 55,
        qty: 10
    },
    {
        id: 12,
        back: "b12",
        title: "Cold Drinks & Juices",
        name: "Coka Cola",
        stock: 7,
        price: 24,
        oldprice: 30,
        qty: 10,
        type: "Cold Drinks"
    },
    {
        id: 13,
        back: "b13",
        title: "Instant Food",
        name: "Quakar oats",
        stock: 8,
        price: 250,
        oldprice: 255,
        qty: 10,
        type: "Grain Food"
    },
    {
        id: 14,
        back: "b14",
        title: "Dairy, Bread & Eggs",
        name: "Brown Breads",
        stock: 9,
        price: 25,
        oldprice: 27,
        qty: 10,
        type: "Dairy Product"
    },
    {
        id: 15,
        back: "b15",
        title: "Pet Care",
        name: "Pedigree",
        stock: 10,
        price: 200,
        oldprice: 210,
        qty: 10,
        type: "Pet's Food"
    }
]

function DisplayProducts() {
    products.forEach((i) => {
        elementsel.innerHTML +=
            `<div class="col">
                <div class="card cat-card Br-radius">
                    <div class="card-body d-flex flex-column align-items-center position-relative">
                        <img class="img-fluid p-2" src="images/${i.id}.jpg" alt="" height="150px" width="150px">
                        <div class="container-md d-flex flex-column hide text-center gx-2">
                            <a href="" data-bs-target="#Quickviewmodal" data-bs-toggle="modal" class="p-1 mb-2 rounded-circle text-decoration-none text-dark bgbtn icon-res" style="font-size:small;" onclick="showQuickView(${i.id})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye icon-res-1" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                              </svg>
                            </a>
                            <div href="" class="p-1 mb-2 rounded-circle text-decoration-none text-dark bgbtn icon-res d-flex align-items-center justify-content-center" style="font-size:small;" onclick="addtoWishList(${i.id})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart icon-res-2" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                  </svg>
                            </div>
                            <a href="#" class="p-1 rounded-circle text-decoration-none text-dark bgbtn icon-res" style="font-size:small;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right icon-res-3" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
                                  </svg>
                            </a>
                        </div>
                        <div class="container-md p-0">
                            <p class="text-muted fontSz mb-1 popResp text-truncate">${i.title}</p>
                            <h2 class="fs-6 mb-2 text-truncate">${i.name}</h2>
                            <div class="d-flex align-items-center">
                                <i class="fa-solid fa-star text-warning strS pe-1"></i>
                                <i class="fa-solid fa-star text-warning strS pe-1"></i>
                                <i class="fa-solid fa-star text-warning strS pe-1"></i>
                                <i class="fa-solid fa-star text-warning strS pe-1"></i>
                                <i class="fa-solid fa-star-half-stroke text-warning strS"></i>
                                <span class="text-muted fontSz strS ms-1">4.3 (4)</span>
                            </div>
                            <div class="container-md p-0 mt-4 d-flex align-items-center justify-content-between">
                                <span class="fs-6 fw-normal prResp">$${i.price} <del class="text-muted fw-normal">$${i.oldprice}</del></span>
                                <span class="fontSz text-light text-decoration-none rounded btnCustom d-flex align-center"
                                    style="background-color: #0aad0a;cursor: pointer;" onclick="addCart(${i.id})">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        class="bi bi-plus-lg text-light pe-1" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                    </svg>
                                    Add
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    });

}

DisplayProducts();

const bestsellproducts = [
    {
        id: 16,
        back: "b16",
        title: "Tea, Coffee & Drinks",
        name: "Roast Ground Coffee",
        stock: 10,
        price: 60,
        oldprice: 65,
        qty: 10,
        type: "Coffee"
    },
    {
        id: 17,
        back: "b17",
        title: "Fruits & Vegetables",
        name: "Crushed Tomatoes",
        stock: 10,
        price: 65,
        oldprice: 70,
        qty: 10,
        type: "Sos"
    },
    {
        id: 18,
        back: "b18",
        title: "Fruits & Vegetables",
        name: "Golden Pineapple",
        stock: 10,
        price: 30,
        oldprice: 32,
        qty: 10,
        type: "Fruits"
    }
]

const concatArray = products.concat(bestsellproducts)

let time = new Date()
let hr = time.getHours()
let min = time.getMinutes()
let sec = time.getSeconds()
let day = 0
if (hr == 24) {
    day++
} else {
    false
}

function DisplayBestSellProducts() {
    bestsellproducts.forEach((bestSproducts) => {
        bestSellsel.innerHTML +=
            `<div class="col">
                <div class="card cat-card Br-radius">
                    <div class="card-body d-flex flex-column align-items-center position-relative py-2">
                        <img class="img-fluid p-2" src="images/${bestSproducts.id}.jpg" alt="" height="250px" width="250px">
                        <div class="container d-flex flex-column hide text-center gx-2">
                            <a href="" data-bs-target="#Quickviewmodal" data-bs-toggle="modal" class="p-1 mb-2 rounded-circle text-decoration-none text-dark bgbtn" style="font-size:small;" onclick="showQuickView(${bestSproducts.id})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                              </svg>
                            </a>
                            <div href="" class="p-1 mb-2 rounded-circle text-decoration-none text-dark bgbtn d-flex align-items-center justify-content-center" style="font-size:small;"  onclick="addtoWishList(${bestSproducts.id})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                  </svg>
                            </div>
                            <a href="#" class="p-1 rounded-circle text-decoration-none text-dark bgbtn" style="font-size:small;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
                                  </svg>
                            </a>
                        </div>
                        <div class="container p-0">
                            <p class="text-muted fontSz mb-2">${bestSproducts.title}</p>
                            <h2 class="fs-6 mb-2 text-nowrap">${bestSproducts.name}</h2>
                            <div class="d-flex align-items-center justify-content-between">
                                <span class="fs-6 fw-normal">$${bestSproducts.price} <del class="text-muted fw-normal">$${bestSproducts.oldprice}</del></span>
                                <span>
                                <i class="fa-solid fa-star text-warning strS"></i>
                                <i class="fa-solid fa-star text-warning strS"></i>
                                <i class="fa-solid fa-star text-warning strS"></i>
                                <i class="fa-solid fa-star text-warning strS"></i>
                                <i class="fa-solid fa-star-half-stroke text-warning strS"></i>
                                <span class="text-muted fontSz">4.3 (4)</span>
                                </span>
                            </div>
                            <div class="container p-0 mt-4 d-flex align-items-center justify-content-center text-center">
                                <span class="text-light text-decoration-none rounded btnCustom w-100 rounded-2"
                                    style="background-color: #0aad0a;" onclick="addCart(${bestSproducts.id})">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        class="bi bi-plus-lg text-light pe-1" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                    </svg>
                                    Add to cart
                                </span>
                            </div>
                            <div class="container mt-3 mb-3">
                                <div class="row row-cols-5 row-cols-md-5 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-5 text-center d-flex justify-content-evenly">
                                    <div class="col border rounded mt-2 countdown">
                                        <p class="day fontSz m-0">${day}</p>
                                        <p class="fontSz m-0 text-muted text-nowrap">Days</p>
                                    </div>
                                    <div class="col border rounded mt-2 countdown">
                                         <p class="hrs fontSz m-0">${hr}</p>
                                        <p class="fontSz m-0 text-muted text-nowrap">Hours</p>
                                    </div>
                                    <div class="col border rounded mt-2 countdown">
                                         <p class="min fontSz m-0">${min}</p>
                                        <p class="fontSz m-0 text-muted text-nowrap">Mins</p>
                                    </div>
                                    <div class="col border rounded mt-2 countdown">
                                        <p class="sec fontSz m-0">${sec}</p>
                                        <p class="fontSz m-0 text-muted text-nowrap">Sec</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    })
}

DisplayBestSellProducts()

let cart = JSON.parse(localStorage.getItem("CART")) || [];
updatecart()

function addCart(id) {
    if (cart.some((item) => item.id === id)) {
        changeqty("plus", id)
        $(document).ready(function () {
            $(".addmessage4").fadeIn(1000)
            $(".addmessage4").fadeOut(2000)
        })
    } else {
        const item = concatArray.find((product) => product.id === id)
        cart.push({
            ...item,
            qty: 1
        });
        $(document).ready(function () {
            $(".addmessage3").fadeIn(1000)
            $(".addmessage3").fadeOut(2000)

        })
    }
    updatecart()
}

function updatecart() {
    addCartItem()
    subTotal()
    localStorage.setItem("CART", JSON.stringify(cart))
}

function addCartItem() {
    cartitem.innerHTML = ""
    cart.forEach((item) => {
        cartitem.innerHTML += `
            <div class="row d-flex align-items-center border-bottom">
                <div class="col-2 d-flex justify-content-center">
                    <img src="images/${item.id}.jpg" alt="" width="60px" height="60px" class="me-2 p-1">
                </div>
                <div class="col-4 d-flex ps-0">
                    <h6 class="fontSz m-0 pro-sz-sm">${item.name}</h6>
                </div>
                <div class="col-1 d-flex justify-content-center">
                    <span class="fontSz ps-2">$${item.price}</span>
                </div>
                <div class="col-3 d-flex ps-3 pe-0 justify-content-center">
                    <button class="qunbtn textColor" onclick="changeqty('minus', ${item.id})" style="border-top-left-radius: 5px; border-bottom-left-radius: 5px;">-</button>
                    <span class="qunbtnval">${item.qty}</span>
                    <button class="qunbtn textColor" onclick="changeqty('plus', ${item.id})" style="border-top-right-radius: 5px; border-bottom-right-radius: 5px;">
                    +</button>
                </div>
                <div class="col-2 d-flex justify-content-center">
                    <span class="d-flex align-items-center text-danger ms-2" onclick="removeitem(${item.id})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                      </svg>
                    </span>
                </div>
            </div>`
    })
}



function changeqty(action, id) {
    cart = cart.map((item) => {
        let qty = item.qty
        if (item.id === id) {
            if (action === "minus" && qty > 1) {
                qty--
            }
            else if (action === "plus" && qty < item.stock) {
                qty++
            }
        }
        return {
            ...item,
            qty
        }
    })
    updatecart()
}

function subTotal() {
    let totalprice = 0, totalitems = 0
    cart.forEach((item) => {
        totalprice += item.price * item.qty
        totalitems += item.qty
    })
    pricetotal.innerHTML = `<span class="nav-list-itm1 ps-1">total price : $${totalprice}</span>`
    totalitembg.innerHTML = totalitems
}

function removeitem(id) {
    cart = cart.filter((item) => item.id !== id)
    updatecart()
}

function addWishListItems() {
    let showStock
    wishitems.innerHTML = ""
    wishList.forEach((item) => {
        if (item.stock > 1) {
            showStock = "In Stock"
        } else {
            showStock = "Out of stock"
        }
        wishitems.innerHTML += `<tr class="text-nowrap"><td class="px-4 py-4"><input type="checkbox" class="form-check-input" value=""></td>
                    <td class="py-2"><img src="images/${item.id}.jpg" alt="" style="width: 50px; height: 50px;"></td>
                    <td class="py-4">${item.name}</td>
                    <td class="py-4 text-muted">$${item.price}</td>
                    <td class="py-4"><span class="p-1 px-2 bg-dark text-light fontSz rounded">${showStock}</span></td>
                    <td class="py-4"><span href="#" class="text-light text-decoration-none rounded btnCustom curspoint"
                        style="background-color: #0aad0a; vertical-align: middle;" tabindex="0" onclick="addCart(${item.id})">Add to cart</span>
                    </td>
                    <td class="py-4"><span class="d-flex align-items-center text-danger ms-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16" onclick="RemoveListItem(${item.id})">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                      </svg></span></td></tr>`
    })

}

let wishList = JSON.parse(localStorage.getItem("WISHLIST")) || [];
updatelist()

function addtoWishList(id) {
    if (wishList.some((checkitem) => checkitem.id === id)) {
        $(document).ready(function () {
            $(".addmessage2").fadeIn(1000)
            $(".addmessage2").fadeOut(2000)
        })
    } else {
        concatArray.forEach((element) => {
            if (element.id === id) {
                let itemObj = element
                wishList.push({
                    ...itemObj
                })
            }
        })
        $(document).ready(function () {
            $(".addmessage1").fadeIn(1000)
            $(".addmessage1").fadeOut(2000)

        })
    }
    updatelist()
}


function updatelist() {
    addWishListItems()
    wishListItemTotal()
    localStorage.setItem("WISHLIST", JSON.stringify(wishList))
}


function wishListItemTotal() {
    let total = wishList.length
    likebadgesel.innerHTML = total
    producttotalsel.innerHTML = total
}

function RemoveListItem(id) {
    wishList = wishList.filter((item) => item.id !== id)
    updatelist()
}



function showQuickView(id) {
    let showStock
    concatArray.forEach((item) => {
        if (item.stock > 1) {
            showStock = "In Stock"
        } else {
            showStock = "Out of stock"
        }
    })
    concatArray.forEach(element => {
        if (element.id === id) {
            quickViweModal.innerHTML = `
    <div class="row row-cols-md-1 row-cols-lg-2 position-relative m-auto">
        <div class="col-12 d-flex flex-column mb-md-3 mb-3 mb-lg-0 ">
            <div class="container gap-3 p-0 imgcontent mb-2">
                <img src="images/${element.id}.jpg" class="img-fluid Br-radius mb-4 mx-5"
                    style=" background-size: cover; object-fit: cover; width:230px; height: 230px;" alt="">
                <img src="images/${element.back}.jpg" class="img-fluid Br-radius mb-4 mx-5"
                    style=" background-size: cover; object-fit: cover; width:230px; height: 230px;" alt="">
            </div>
        </div>
        <div class="col px-md-4">
            <div class="container p-0">
                <p class="nav-list-itm1 tex-color">${element.title}</p>
                <h2 class="fs-3 fw-normal">${element.name}</h2>
                <div class="d-flex align-items-center mb-3">
                    <i class="fa-solid fa-star text-warning strS pe-1"></i>
                    <i class="fa-solid fa-star text-warning strS pe-1"></i>
                    <i class="fa-solid fa-star text-warning strS pe-1"></i>
                    <i class="fa-solid fa-star text-warning strS pe-1"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning strS"></i>
                    <span class="text-muted fontSz strS ms-1">4.3 (4)</span>
                </div>
                <span class="fs-5 fw-bold">$${element.price}<del
                    class="text-muted fw-normal">$${element.oldprice}</del></span>
            </div>
            <hr style="height: 0.7px;">
            <div class="container d-flex align-items-center mt-4 mb-3 p-0">
                <input type="radio" class="form-check-input me-2 mt-0" name="quntity" value="quntity1"><span
                    class="me-3">250g</span>
                <input type="radio" class="form-check-input me-2 mt-0" name="quntity" value="quntity2"><span
                    class="me-3">500g</span>
                <input type="radio" class="form-check-input me-2 mt-0" name="quntity" value="quntity3"><span
                    class="me-3">1kg</span>
            </div>
            <div class="container d-flex pe-0 mb-4 p-0">
                <button class="qunbtn textColor"
                    style="border-top-left-radius: 5px; border-bottom-left-radius: 5px;" onclick="changeqtyview('minus', ${element.id})">-</button>
                <span class="qunbtnval">${element.qty}</span>
                <button class="qunbtn textColor"
                    style="border-top-right-radius: 5px; border-bottom-right-radius: 5px;" onclick="changeqtyview('plus', ${element.id})">+</button>
            </div>
            <div class="container d-flex gap-2 mb-4 p-0">
                <span class="fontSz text-light text-decoration-none Br-radius px-sm-4 px-2 py-2 fs-6 fw-normal"
                    style="background-color: #0aad0a;cursor: pointer;" onclick="addCart(${element.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-bag-check me-1 align-text-top" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                        <path
                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                    Add to cart
                </span>
                <div class="px-3 py-2 Br-radius d-flex align-items-center bg-color position-relative curspoint wishlisticon1"
                    style="font-size:small;" onclick="addtoWishList(${element.id})">
                    <span class="tooltip-msg1 opacity-75">Wishlist</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-heart " viewBox="0 0 16 16">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                </div>
                <div class="px-3 py-2 Br-radius d-flex align-items-center bg-color position-relative curspoint wishlisticon2"
                    style="font-size:small;">
                    <span class="tooltip-msg2 opacity-75">Compare</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5" />
                    </svg>
                </div>
            </div>
            <hr style="height: 0.7px;">
            <div class="container py-3 px-0">
                <table class="table">
                    <tbody>
                        <tr">
                           <td class="text-muted text-capitalize fs-6 border-bottom-0">Type :</td>
                           <td class="text-muted text-capitalize fs-6 border-bottom-0">${element.type}</td>
                        </tr>
                       <tr>
                           <td class="text-muted text-capitalize fs-6 border-bottom-0">availability :</td>
                           <td class="text-muted text-capitalize fs-6 border-bottom-0">${showStock}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>`
        }
    });

}




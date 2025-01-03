let elementsel = document.querySelector(".elements")
let cartitem = document.querySelector(".offcanvas-body")
let bestSellsel = document.querySelector(".bestSell")
let slideimg = document.querySelector(".imgslider")
let dayele = document.querySelector(".day")
let quntsel = document.querySelector(".qunbtnval")
let totalitembg = document.querySelector(".totalitm")
let pricetotal = document.querySelector(".price")

const products=[
    {
        id:1,
        title:"Snacks & Munchies",
        name:"Haldiram's Sev Bhujiya",
        stock:10,
        price:18,
        oldprice:24,
        qty:0
    },
    {
        id:2,
        title:"Bakery & Buiscuits",
        name:"NutriChoice Digestive",
        stock:8,
        price:24,
        oldprice:24,
        qty:0
    },
    {
        id:3,
        title:"Bakery & Buiscuits",
        name:"Cadbury 5 Star Chocolate",
        stock:9,
        price:32,
        oldprice:30,
        qty:0
    },
    {
        id:4,
        title:"Snacks & Munchies",
        name:"Onion Flavour Potato",
        stock:10,
        price:10,
        oldprice:15,
        qty:0
    },
    {
        id:5,
        title:"Instant food",
        name:"Salted instant popcorn",
        stock:5,
        price:20,
        oldprice:25,
        qty:0
    },
    {
        id:6,
        title:"Dairy, Bread & Eggs",
        name:"Blueberry Greek Yogurt",
        stock:6,
        price:50,
        oldprice:55,
        qty:0
    },
    {
        id:7,
        title:"Dairy, Bread & Eggs",
        name:"Britannia Cheese Slices",
        stock:7,
        price:24,
        oldprice:30,
        qty:0
    },
    {
        id:8,
        title:"Instant Food",
        name:"Kellog's original cereals",
        stock:8,
        price:120,
        oldprice:150,
        qty:0
    },
    {
        id:9,
        title:"Snacks & Munchies",
        name:"Slurrp Millet Chocolate",
        stock:9,
        price:25,
        oldprice:27,
        qty:0
    },
    {
        id:10,
        title:"Dairy, Bread & Eggs",
        name:"Amul Butter - 500g",
        stock:10,
        price:30,
        oldprice:32,
        qty:0
    },
    {
        id:6,
        title:"Dairy, Bread & Eggs",
        name:"Blueberry Greek Yogurt",
        stock:6,
        price:50,
        oldprice:55,
        qty:0
    },
    {
        id:7,
        title:"Dairy, Bread & Eggs",
        name:"Britannia Cheese Slices",
        stock:7,
        price:24,
        oldprice:30,
        qty:0
    },
    {
        id:8,
        title:"Instant Food",
        name:"Kellog's original cereals",
        stock:8,
        price:120,
        oldprice:150,
        qty:0
    },
    {
        id:9,
        title:"Snacks & Munchies",
        name:"Slurrp Millet Chocolate",
        stock:9,
        price:25,
        oldprice:27,
        qty:0
    },
    {
        id:10,
        title:"Dairy, Bread & Eggs",
        name:"Amul Butter - 500g",
        stock:10,
        price:30,
        oldprice:32,
        qty:0
    }
]

function DisplayProducts(){
    products.forEach((i)=>{
       console.log(i)
        elementsel.innerHTML+=
        `<div class="col">
                <div class="card cat-card">
                    <div class="card-body d-flex flex-column align-items-center position-relative">
                        <img class="img-fluid" src="images/${i.id}.jpg" alt="" height="200px" width="200px">
                        <div class="container-md d-flex flex-column  hide text-center gx-2">
                            <a href="#" class="p-1 mb-2 rounded-circle text-decoration-none text-dark bgbtn icon-res" style="font-size:small;" title="Quick View">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye icon-res-1" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                              </svg>
                            </a>
                            <a href="#" class="p-1 mb-2 rounded-circle text-decoration-none text-dark bgbtn icon-res" style="font-size:small;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart icon-res-2" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                  </svg>
                            </a>
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
                                <span class="fontSz text-light text-decoration-none rounded btnCustom d-flex align-center "
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

const bestsellproducts=[
    {
        id:11,
        title:"Tea, Coffee & Drinks",
        name:"Roast Ground Coffee",
        stock:10,
        price:60,
        oldprice:65,
        qty:0
    },
    {
        id:12,
        title:"Fruits & Vegetables",
        name:"Crushed Tomatoes",
        stock:10,
        price:65,
        oldprice:70,
        qty:0
    },
    {
        id:13,
        title:"Fruits & Vegetables",
        name:"Golden Pineapple",
        stock:10,
        price:30,
        oldprice:32,
        qty:0
    },
]

const concat = products.concat(bestsellproducts)

let time = new Date()
let hr =  time.getHours()
let min = time.getMinutes()
let sec = time.getSeconds()
let day=0
if(hr==24){
    day++
    console.log(day)
}else{
    false
}

function DisplayBestSellProducts(){
    bestsellproducts.forEach((bestSproducts)=>{
        bestSellsel.innerHTML+=
        `<div class="col">
                <div class="card cat-card" >
                    <div class="card-body d-flex flex-column align-items-center position-relative">
                        <img class="img-fluid" src="images/${bestSproducts.id}.jpg" alt="" height="280px">
                        <div class="container d-flex flex-column hide text-center gx-2">
                            <a href="#" class="p-1 mb-2 rounded-circle text-decoration-none text-dark bgbtn" style="font-size:small;" title="Quick View">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                              </svg>
                            </a>
                            <a href="#" class="p-1 mb-2 rounded-circle text-decoration-none text-dark bgbtn" style="font-size:small;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                  </svg>
                            </a>
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

function addCart(id){
    if(cart.some((item)=>item.id===id)){
        changeqty("plus",id)
        console.log("false")
    }else{
        console.log("true")
        const item = concat.find((product)=>product.id===id)
        cart.push({
            ...item,
            qty:1
        });
    }
    updatecart()
}

function updatecart(){
    addCartItem()
    subTotal()
    localStorage.setItem("CART", JSON.stringify(cart))
}

function addCartItem(){
    cartitem.innerHTML=""
    cart.forEach((item)=>{
        cartitem.innerHTML +=`
            <div class="row">
        <div class="col-8 d-flex align-items-center justify-content-evenly border-bottom position-relative p-0">
            <img src="images/${item.id}.jpg" alt="" width="60px" height="60px">
            <h6 class="fontSz m-0 text-rap">${item.name}</h6>
            <span class="fontSz">$${item.price}</span>
            </div>
            <div class="col-4 d-flex align-items-center justify-content-evenly border-bottom p-0">
            <span class="d-flex align-items-center">
            <button class="qunbtn textColor" onclick="changeqty('minus',${item.id})" style="border-top-left-radius: 5px; border-bottom-left-radius: 5px;">-</button>
            <span class="qunbtnval">${item.qty}</span>
            <button class="qunbtn textColor" onclick="changeqty('plus',${item.id})" style="border-top-right-radius: 5px; border-bottom-right-radius: 5px;">+</button>
            </span>
            <span class="d-flex align-items-center text-danger ms-2" onclick="removeitem(${item.id})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
              </svg></span>

        </div>
    </div>`
    })
}


function changeqty(action,id){
    cart = cart.map((item)=>{
        let qty = item.qty
        if(item.id === id){
            if(action === "minus" && qty > 1){
                qty--
            }
            else if(action === "plus" && qty < item.stock){
                qty++
            }
        }
        return{
            ...item,
            qty
        }
    })
    updatecart()
}

function subTotal(){
    let totalprice = 0, totalitems = 0
    cart.forEach((item)=>{
        totalprice += item.price * item.qty
        totalitems += item.qty
    })
    pricetotal.innerHTML=`<span class="nav-list-itm1 ps-1">total price : $${totalprice}</span>`
    totalitembg.innerHTML=totalitems
    console.log(totalprice)
    console.log(pricetotal)
}

function removeitem(id){
    cart = cart.filter((item) => item.id !== id)
    updatecart()
}




let servicecard1 = document.getElementById("service-card1")
let servicecard2 = document.getElementById("service-card2")
let servicecard3 = document.getElementById("service-card3")
let servicecard4 = document.getElementById("service-card4")
let servicecard5 = document.getElementById("service-card5")
let servicecard6 = document.getElementById("service-card6")

let serviceicon1 = document.getElementById("service-icon1")
let serviceicon2 = document.getElementById("service-icon2")
let serviceicon3 = document.getElementById("service-icon3")
let serviceicon4 = document.getElementById("service-icon4")
let serviceicon5 = document.getElementById("service-icon5")
let serviceicon6 = document.getElementById("service-icon6")


servicecard1.addEventListener("mouseover", ()=>{
    serviceicon1.innerHTML = ` <img src="images/shape1midori.svg" alt="" srcset="">`
    serviceicon1.style.transitionDuration = "0.5s"

})
servicecard1.addEventListener("mouseout", ()=>{
    serviceicon1.innerHTML = ` <img src="images/shape1yami.svg" alt="" srcset="">`

})

servicecard2.addEventListener("mouseover", ()=>{
    serviceicon2.innerHTML = ` <img src="images/shape2midori.svg" alt="" srcset="">`

})
servicecard2.addEventListener("mouseout", ()=>{
    serviceicon2.innerHTML = ` <img src="images/shape2yami.svg" alt="" srcset="">`

})
servicecard3.addEventListener("mouseover", ()=>{
    serviceicon3.innerHTML = ` <img src="images/shape3midori.svg" alt="" srcset="">`

})
servicecard3.addEventListener("mouseout", ()=>{
    serviceicon3.innerHTML = ` <img src="images/shape3yami.svg" alt="" srcset="">`

})
servicecard4.addEventListener("mouseover", ()=>{
    serviceicon4.innerHTML = ` <img src="images/shape4midori.svg" alt="" srcset="">`

})
servicecard4.addEventListener("mouseout", ()=>{
    serviceicon4.innerHTML = ` <img src="images/shape4yami.svg" alt="" srcset="">`

})
servicecard5.addEventListener("mouseover", ()=>{
    serviceicon5.innerHTML = ` <img src="images/shape5midori.svg" alt="" srcset="">`

})
servicecard5.addEventListener("mouseout", ()=>{
    serviceicon5.innerHTML = ` <img src="images/shape5yami.svg" alt="" srcset="">`

})
servicecard6.addEventListener("mouseover", ()=>{
    serviceicon6.innerHTML = ` <img src="images/shape6midori.svg" alt="" srcset="">`

})
servicecard6.addEventListener("mouseout", ()=>{
    serviceicon6.innerHTML = ` <img src="images/shape6yami.svg" alt="" srcset="">`

})


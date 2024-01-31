
//  declaring a variable 
var car = document.getElementById("car")
var bike =document.getElementById("bike")
var health =document.getElementById("health")
var life=document.getElementById("life")
var travel =document.getElementById("travel")

// Baners 

var carBanner = document.querySelector(".m_car_service_banner")
var bikeBanner = document.querySelector(".m_bike_banner")
var healthBanner = document.querySelector(".m_health_banner")
var lifeBanner = document.querySelector(".m_life_banner")
var travelBanner = document.querySelector(".m_travel_banner")

// function 
window.onload = function (){

    car.classList.add("active")
 
    carBanner.classList.remove("d-none")

}

//for bike section
bike.addEventListener("click",function (event){

car.classList.remove("active")
health.classList.remove("active")
life.classList.remove("active")
travel.classList.remove("active")
bike.classList.add("active")

//banner
bikeBanner.classList.remove("d-none")
carBanner.classList.add("d-none")
healthBanner.classList.add("d-none")
lifeBanner.classList.add("d-none")
travelBanner.classList.add("d-none")
})


//for car section
car.addEventListener("click", function (event){

    car.classList.add("active")
    health.classList.remove("active")
    life.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.remove("active")

    //banner
    carBanner.classList.remove("d-none")
    bikeBanner.classList.add("d-none")
    healthBanner.classList.add("d-none")
    lifeBanner.classList.add("d-none")
    travelBanner.classList.add("d-none")
})

//health section 

health.addEventListener("click", function (event){

    health.classList.add("active")
    car.classList.remove("active")
    bike.classList.remove("active")
    life.classList.remove("active")
    travel.classList.remove("active")
//banner

    healthBanner.classList.remove("d-none")
    bikeBanner.classList.add("d-none")
    carBanner.classList.add("d-none")
    lifeBanner.classList.add("d-none")
    travelBanner.classList.add("d-none")

})

// life section

life.addEventListener("click", function(event){

life.classList.add("active")
car.classList.remove("active")
bike.classList.remove("active")
health.classList.remove("active")
travel.classList.remove("active")

//banner

lifeBanner.classList.remove("d-none")
bikeBanner.classList.add("d-none")
carBanner.classList.add("d-none")
healthBanner.classList.add("d-none")
travelBanner.classList.add("d-none")

})

//travel

travel.addEventListener("click",function(event){

travel.classList.add("active")
car.classList.remove("active")
bike.classList.remove("active")
health.classList.remove("active")
life.classList.remove("active")

//banner

travelBanner.classList.remove("d-none")
bikeBanner.classList.add("d-none")
carBanner.classList.add("d-none")
healthBanner.classList.add("d-none")
lifeBanner.classList.add("d-none")

})

// video section

const currentVideo =document.getElementById("m_current_video")
const currentTitle =document.getElementById("title")
const videoList =document.getElementsByClassName("m_video")
// loop

for (let i=0;i<videoList.length;i++){
const listSrc =  videoList[i].children.item("div").children.item("div").children.item("video").src
const text = videoList[i].children[1].children[0].innerText

videoList[i].addEventListener("click",()=>{
    currentVideo.src=listSrc
    currentTitle.innerText=text
    videoList.play()
})

}


console.log("video working")
//  acko info section


// creating arrey of abject
const ackoData= [{

    img:"/ackocard1.svg",
    title:"Incredibly low premiums",
    description:"Insuring things that matter to you shouldn’t come at a cost. That’s why when you buy from us, you get insurance that fits your pocket."
},
{
 img:"/ackocard2.svg",
   title:"Superquick and easy",
   description:"We’re easy, effortless and 100% digital. Forget paperwork, just access all our services with just a few clicks."
},
{
       img:"/ackocard3.svg",
    title:"Hassle-free claims",
    description:"We’re on a mission to make insurance claims stress-free. Just give us a call or file a claim online and experience cashless, speedy claim settlements."
},
]


// acko section

const ackoSection= document.getElementById("acko_section")

// console.log("ackoData")

for( let i=0; i < ackoData.length; i++ ){
    
// creating a div element 

const ackoCard = document.createElement("div")
ackoCard.className="col-12 col-lg-4"

// create an img tag 

const img =document.createElement("img")
img.src= "../imges"+ ackoData[i].img
img.alt="image1"
img.width=120


//    creating h4 tag

const h4 =document.createElement("h4")
h4.innerText=ackoData[i].title


//creating p tag 
const p = document.createElement("p")
p.innerText=ackoData[i].description


// appending the img 

ackoCard.appendChild(img)
// adding child of acko card 
ackoCard.appendChild(h4)
ackoCard.appendChild(p)

// adding child of  acko child 
ackoSection.appendChild(ackoCard)


}

console.log("yes")

  // footer navbar section 
const footerNavData=[{
    title:"products",
    navLinks:["Motor Insurance","Car Insurance","Bike Insurance","Health Insurance", "Travel Insurance","International Travel Insurance","Life Insurance","Term Insuranc","Group Health Insurance"]
},
{
title:"Company",
navLinks:["About us","Board of directors","Bike Insurance","Health Insurance","Travel Insurance","International Travel Insurance","Life Insurance","Term Insurance","Group Health Insurance" ]
},
{
    title:"Life Insurance",
    navLinks:["Life Insurance","Term Insurance","Critical Illness Insurance","Accidental Death Benefit Rider","Disability Income Rider","Life Insurance Riders In India"]
},
{
title:"Travel Insurance",
navLinks:["Travel Insurance","International Travel Insurance","USA Travel Insurance","Schengen Travel Insurance","Travel Insurance for Dubai","Travel Insurance for Thailand"]
},
{
    title:"Bike Insurance",
    navLinks:["Bike Insurance","Scooter Insurance","Comprehensive Bike Insurance","Third Party Bike Insurance","Used Bike Insurance","EV Bike Insurance","Own Damage Bike Insurance","Bike Insurance Calculator","Compare Bike Insurance"]
},
{
    title:"Company",
    navLinks:["About us","Board of directors","Bike Insurance","Health Insurance","Travel Insurance","International Travel Insurance","Life Insurance","Term Insurance","Group Health Insurance" ]
    },
 {
    title:"Company",
    navLinks:["About us","Board of directors","Bike Insurance","Health Insurance","Travel Insurance","International Travel Insurance","Life Insurance","Term Insurance","Group Health Insurance" ]
    },
    {
        title:"Bike Insurance",
        navLinks:["Bike Insurance","Scooter Insurance","Comprehensive Bike Insurance","Third Party Bike Insurance","Used Bike Insurance","EV Bike Insurance","Own Damage Bike Insurance","Bike Insurance Calculator","Compare Bike Insurance"]
    },
]

const footerNavbar= document.getElementById("footer_navbar")

for( let i = 0; i < footerNavData.length; i++ ){

// creating a div and giving classname "col-12 col-lg-3"
const div= document.createElement("div")
// there are three ways to add values 
// div.classList.add("col-12","col-lg-3")
// div.setAttribute("class","col-12 col-lg-3")

div.className="col-12 col-lg-3 mt-4"

// creating h5

const h5 =document.createElement("h5")
 
// 2 ways to add text
// 1 innerText
// 2 innerHTML
h5.innerText=footerNavData[i].title

// creating ul element 

const ul = document.createElement("ul")
ul.style.listStyle="none"
ul.style.margin="0"
ul.style.padding="0"

// loops starting on the footerNavData[i].navLinks

// going inside the div
for(let link=0; link < footerNavData[i].navLinks.length; link++){

    const li = document.createElement("li")
    const a = document.createElement("a")
  a.style.textDecoration="none"
  a.style.color="#000"
  a.classList.add("m_font_size")
  a.href="#"
  a.innerText =footerNavData[i].navLinks[link]



    // adding li to ul 
    ul.appendChild(li)
    
// adding a to li
li.appendChild(a)
}

div.appendChild(h5)
// adding  ul
div.appendChild(ul)
footerNavbar.appendChild(div)
}
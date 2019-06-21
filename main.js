var body = document.getElementById("body")
body.style.margin = "0px"
body.style.fontFamily = "Trebuchet MS"

// Header Section
var header = document.createElement("header")
header.style.backgroundColor = "black"
header.style.padding = "10px"
document.body.appendChild(header)
var navBar = document.createElement("div")
navBar.id = "nav-bar"
navBar.classList = "container flex"
navBar.style.justifyContent="space-between"
header.appendChild(navBar)

//Logo
var logo = document.createElement("p")
logo.innerHTML = "Start Bootstrap"
logo.style.color = "white"
logo.style.fontSize = "30px"
logo.style.display = "inline-block"
logo.style.cursor="pointer"
navBar.appendChild(logo)

//Nav
var navElements = ["Home", "About", "Services", "Contact"]
var nav = document.createElement("ul")
nav.id = "nav"
nav.style.display = "inline-block"
nav.style.margin = "0px"
nav.style.fontSize = "20px"
nav.style.paddingTop = "5px"
navBar.appendChild(nav)
for (let i = 0; i < navElements.length; i++) {
  
    var navLink = document.createElement("a")
    navLink.setAttribute("href", "#")
    navLink.style.textDecoration = "none"
    
    if(i!=0){
        navLink.style.color = "rgba(128,128,128)"
    }else{
        navLink.style.color = "white"
    }
     
    navLink.innerHTML = navElements[i]
    var navList = document.createElement("li")
    navList.style.display = "inline-block"
    navList.style.marginLeft = "20px"
    navList.style.color = "white"
    navList.appendChild(navLink)
    nav.appendChild(navList)
    navList.addEventListener("mouseover",function(e){
    if(i!=0){
        e.target.style.color="white"
    }
    })
    navList.addEventListener("mouseout",function(e){
        if(i!=0){
            e.target.style.color="rgba(128,128,128,0.6)"
        }
        })
}

//Slider Section


var sliderSection = document.createElement("section")
sliderSection.id = "slider"
var sliderContainer = document.createElement("div")
sliderContainer.className = "container"


sliderSection.style.marginTop="20px"
document.body.appendChild(sliderSection)
sliderSection.appendChild(sliderContainer)
var mainContent=document.createElement("div")
mainContent.classList="flex"
mainContent.style.flexWrap="wrap"
sliderContainer.appendChild(mainContent)
//ASiDE bar
var aside=document.createElement("div")
aside.id="aside"
aside.style.width="25%"

mainContent.appendChild(aside)
var categoriesHeading=document.createElement("p")
categoriesHeading.innerText="Shop Name"
categoriesHeading.style.fontSize="40px"
categoriesHeading.style.fontStyle="bold"
aside.appendChild(categoriesHeading)
var categoryName=["Category 1","Category 2","Category 3"]
var categoryBox=document.createElement("div")
categoryBox.id="category-box"
categoryBox.style.border="1px solid gray"
categoryBox.style.marginTop="20px"
categoryBox.style.borderRadius="3%"
aside.appendChild(categoryBox)
for(let i=0;i<categoryName.length;i++){
    var category=document.createElement("div")
    var categoryLink=document.createElement("a")
    categoryLink.setAttribute("href","#")
    categoryLink.style.fontSize="18px"
    categoryLink.style.textDecoration="none"
    categoryLink.style.color="blue"
    category.style.padding="20px"
    category.style.cursor="pointer"
    categoryLink.innerHTML=categoryName[i]
    if(i!=categoryName.length-1){
        category.style.borderBottom="1px solid grey"
    }
    category.addEventListener("mouseover",function(e){
        e.target.style.textDecoration="underline"
    })
    category.addEventListener("mouseout",function(e){
        e.target.style.textDecoration="none"})
    category.appendChild(categoryLink)
    categoryBox.appendChild(category)
}
//Slider 
var sliders=document.createElement("div")
sliders.style.width="73%"
sliders.id="sliders"
sliders.style.height="350px"
sliders.style.position="relative"
sliders.style.marginLeft="20px"
mainContent.appendChild(sliders)
var images=["bg1","bg2","bg3"]
for(let i=0;i<images.length;i++){
    var sliderDiv=document.createElement("div")
    sliderDiv.className="slide"
    sliderDiv.style.height="100%"    
    sliderDiv.style.backgroundImage='url("imges/'+images[i]+'.jpg")'
    sliderDiv.style.backgroundSize = "cover"
    sliderDiv.style.backgroundRepeat="no-repeat"
    sliderDiv.style.backgroundPosition="center"
    if(i==0){
        sliderDiv.style.display="block"
    }
    else{
        sliderDiv.style.display="none"
    }
    sliders.appendChild(sliderDiv)
}
//Buttons
var btnsDiv=document.createElement("div")
btnsDiv.className="flex"
var divLeftBtn=document.createElement("div")
divLeftBtn.style.color="white"
divLeftBtn.style.fontSize="50px"
divLeftBtn.innerHTML='<i class="fas fa-chevron-left"></i>'
divLeftBtn.style.position="absolute"
divLeftBtn.style.top="40%"
divLeftBtn.style.marginLeft="10px"
divLeftBtn.style.cursor="pointer"
var divRightBtn=document.createElement("div")
divRightBtn.style.color="white"
divRightBtn.style.fontSize="50px"
divRightBtn.innerHTML='<i class="fas fa-chevron-right"></i>'
divRightBtn.style.position="absolute"
divRightBtn.style.top="40%"
divRightBtn.style.right="0px"
divRightBtn.style.marginRight="10px"
divRightBtn.style.cursor="pointer"
sliders.appendChild(btnsDiv)
btnsDiv.appendChild(divRightBtn)
btnsDiv.appendChild(divLeftBtn)
//Slider click events
var slideItems=document.querySelectorAll(".slide")
var i=0
function moveRight(){
    if(i==slideItems.length-1){
        i=-1
    }
    slideItems.forEach(element=>{
        element.style.display="none"
    })
        slideItems[i+1].style.display="block"
        i=i+1
}
function moveLeft(){
    if(i==0){
        i=slideItems.length
    }
    slideItems.forEach(element=>{
        element.style.display="none"
    })
    slideItems[i-1].style.display="block"
    i=i-1
}
divRightBtn.addEventListener("click",moveRight)
divLeftBtn.addEventListener("click",moveLeft)

//Information divs
var allInfoDiv=document.createElement("div")
allInfoDiv.className="flex"
allInfoDiv.style.flexWrap="wrap"
allInfoDiv.style.justifyContent="space-between"
allInfoDiv.style.marginTop="20px"
allInfoDiv.style.width="73%"
allInfoDiv.style.cssFloat="right"
sliderContainer.appendChild(allInfoDiv)

//Little information divs
for(let i=0;i<6;i++){
    var infoDiv=document.createElement("div")
    infoDiv.style.width="31%"
    infoDiv.style.border="1px solid gray"
    infoDiv.style.borderRadius="2%"
    infoDiv.style.marginBottom="20px"
    allInfoDiv.appendChild(infoDiv)
    var img=document.createElement("img")
    img.src="imges/img3.jpg"
    img.style.width="100%"
    img.style.boxSizing="border-box"
    img.style.borderTopRightRadius="2%"
    img.style.borderTopLeftRadius="2%"
    infoDiv.appendChild(img)
    var allText=document.createElement("div")
    allText.style.padding="10px"
    allText.style.backgroundColor="white"
    infoDiv.appendChild(allText)
    var contentHeading=document.createElement("h2")
    var headingLink=document.createElement("a")
    headingLink.setAttribute("href","#")
    headingLink.innerHTML="Item One"
    headingLink.style.textDecoration="None"
    headingLink.style.color=" #007bff"
    contentHeading.appendChild(headingLink)
    allText.appendChild(contentHeading)
    var price=document.createElement("h3")
    price.innerText="$24.99"
    allText.appendChild(price)
    var contentText=document.createElement("p")
    contentText.innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br> Amet numquam aspernatur!"
    
    allText.appendChild(contentText)
    var iconsDiv=document.createElement("div")
 
    iconsDiv.style.padding="20px"
    iconsDiv.style.fontSize="10px"
    iconsDiv.style.borderTop="1px solid gray"
    iconsDiv.innerHTML="<i class='fas fa-star'></i>".repeat(4)+"<i class='far fa-star'></i>"
    iconsDiv.style.backgroundColor="#c1c1c157"
    infoDiv.appendChild(iconsDiv)
    
    contentHeading.addEventListener("mouseover",function(e){
        e.target.style.textDecoration="underline"
        e.target.style.color="blue"
    })
    contentHeading.addEventListener("mouseout",function(e){
        e.target.style.textDecoration="none"
        e.target.style.color="#007bff"
    })
    
}
//Clear
var clear=document.createElement("div")
clear.style.clear="both"
body.appendChild(clear)
//Footer
var footer=document.createElement("footer")
footer.style.color="white"
footer.style.textAlign="center"
footer.innerHTML="<p>Copyright &copy Your Website</p>"
footer.style.backgroundColor="black"
footer.style.padding="50px"
document.body.appendChild(footer)
//Container
var container = document.getElementsByClassName("container")

for (let i = 0; i < container.length; i++) {
    container[i].style.width = "70%"
    container[i].style.margin = "0 auto"
}

//Flex
var flex = document.getElementsByClassName("flex")

for (let i = 0; i < flex.length; i++) {
    flex[i].style.display="flex"
}
// Pragraps default margin
var paragraphs = document.getElementsByTagName("p")
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.margin = "0px"
}
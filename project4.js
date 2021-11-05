var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var bookmarkList = document.getElementById("bookmarkList");
var visitBtn = document.getElementById("visitBtn");
var deleteBtn = document.getElementById("deleteBtn");
var main3 = document.getElementById("main3");
var mainBtn = document.getElementById("mainBtn");
var nameError = document.getElementById("nameError");
var urlError = document.getElementById("urlError");
var inputName = siteName.value;
var inputUrl = siteUrl.value;
var regex = /^[a-zA-Z0-9]/gm
var siteList;


if(localStorage.getItem("siteList") != null) {

    siteList = JSON.parse(localStorage.getItem("siteList"))
    displaySites() 

}else{
    siteList = []
}

function addSites(){

    var website = {
        name: siteName.value,
        url: siteUrl.value,
    }

    siteList.push(website)
    setInStorage()
    displaySites()
    clearForm()

// console.log(siteList)

}

// function validation(){

    // var inputValue = siteName.value
    // var inputValue2 = siteUrl.value
    
    
// if(regex.test(inputValue) == true & regex.test(inputValue2) == true){
    
//    console.log(true)

// }else{
//    console.log(false)
// }

// }

function addVali(){

    if(regex.test(siteName.value && siteUrl.value) == true ){

        addSites()
        
        
    }else{
        nameError.classList.replace("d-none" , "d-block")
        urlError.classList.replace("d-none" , "d-block")
        // console.log(siteName.value)
    }
}


function displaySites(){
    var cartona = ``
    for(var i = 0; i < siteList.length; i++ ){
        cartona += ` <div class="main3 d-flex  mt-lg-4 bg-gradient p-5" id="main3">
        <h2 class=" me-5 w-25">${siteList[i].name}</h2>
        <a id="visitBtn" class=" btn btn-primary ms-5 me-3 py-2 px-3" href="${siteList[i].url}" target="_blank">Visit</a>
        <button id="deleteBtn" class=" btn btn-danger px-3" onclick = "deleteSite(${i})">Delete</button>
    </div>`
    }
    document.getElementById("bookmarkList").innerHTML = cartona
}

function clearForm(){

    siteName.value = ""
    siteUrl.value = ""
}


function deleteSite(index){
    siteList.splice(index , 1)
    setInStorage()
    displaySites()
}

// deleteBtn.addEventListener("click" , function deleteSite(index){
    
//     siteList.splice(index , 1)
//     displaySites()

// })
function setInStorage() {
    localStorage.setItem("siteList",JSON.stringify(siteList))
}

// function validation(){

    // var inputValue = siteName.value
    // var inputValue2 = siteUrl.value
//     var regex = /^[a-zA-Z0-9]/gm
    
// if(regex.test(inputValue) == true & regex.test(inputValue2) == true){
    
//    console.log(true)

// }else{
//    console.log(false)
// }

// }
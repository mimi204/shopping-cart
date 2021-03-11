
var btnaddtag = document.getElementsByClassName("add")
var btnremovetag = document.getElementsByClassName("remove")
var btnlike = document.getElementsByClassName("fas fa-heart")
var checktag = document.getElementsByClassName("check")
var btnremoveproducttag = document.getElementsByClassName("remove-product")


//btn add
for (var i = 0; i<btnaddtag.length; i++){
    //btnaddtag[i].addEventListener("click", add)
    btnaddtag[i].onclick = add  
}
//console.log(btnaddtag)
 
function add(event) {
    var btnaddtag = event.target
    var tdelm = btnaddtag.parentElement
    var inputtag = tdelm.querySelector(".quantity")
    var quantity = Number(inputtag.value)
    quantity++
    inputtag.value = quantity

    var unitprice = Number(btnaddtag.parentElement.parentElement.querySelector(".unitprice").innerHTML)

    var tr = btnaddtag.parentElement.parentElement
    var pricetag = tr.querySelector(".price")
    var price = Number(pricetag.innerHTML)
    price = quantity*unitprice
    pricetag.innerHTML=price
}




//btn remove
for (var i = 0; i<btnremovetag.length; i++){
    //btnaddtag[i].addEventListener("click", add)
    btnremovetag[i].onclick =remove 
}
 
function remove(event) {
    var btnremovetag = event.target

    var tdelm = btnremovetag.parentElement
    var inputtag = tdelm.querySelector(".quantity")
    var quantity = Number(inputtag.value)
    quantity--
    inputtag.value = quantity

    console.log(quantity)

    var unitprice = Number(btnremovetag.parentElement.parentElement.querySelector(".unitprice").innerHTML)


    var tr = btnremovetag.parentElement.parentElement
    var pricetag = tr.querySelector(".price")
    var price = Number(pricetag.innerHTML)
    price = quantity*unitprice
    pricetag.innerHTML=price
}

//cheackout
for (var i = 0; i<checktag.length; i++){
    //checktag[i].addEventListener("click", total)
    checktag[i].onclick = total
}
function total(event) {
    var checktag = event.target
    var totaltag = document.getElementById("total")
    var total = Number(document.getElementById("total").innerHTML)

    var trelm = checktag.parentElement.parentElement
    var pricetag = trelm.querySelector(".price")
    var price = Number(pricetag.innerHTML)

    var btnaddtag = checktag.parentElement.parentElement.querySelector(".add")
    var btnremovetag=checktag.parentElement.parentElement.querySelector(".remove")
  
    if (checktag.checked === true) {
        total = total + price
        btnaddtag.setAttribute("disabled", true)
        btnremovetag.setAttribute("disabled",true)
    }
    else {
        total = total - price
        btnaddtag.setAttribute("disabled", false)
        btnremovetag.setAttribute("disabled",false)
    }
    totaltag.innerHTML=total

}

//remove product
for (var i = 0; i <btnremoveproducttag.length; i++) {
    //checktag[i].addEventListener("click", total)
    btnremoveproducttag[i].onclick = removeproduct
}

    function removeproduct(event) {
        var btnremoveproducttag= event.target
        let trelm = btnremoveproducttag.parentElement.parentElement
        trelm.remove() 
         total(event)      
}


//like
for (var i = 0; i <btnlike.length; i++) {
    //checktag[i].addEventListener("click", total)
    btnlike[i].onclick = like
}

    function like(event) {
        var btnlike= event.target
        btnlike.style.color = "#ff6d77";
}
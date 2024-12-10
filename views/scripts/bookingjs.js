
let currentTab = 0;
let tabArray = document.getElementsByClassName("tab");
let stepArray = document.getElementsByClassName("stepbar");
let buttonsPlace = document.getElementById("nextprevBtns");
let progressBar = document.getElementById("progressbar");
let carD = document.getElementsByClassName("carCard");

let carImg = document.getElementsByClassName("carImg");
let carName = document.getElementsByClassName("carName");
let doors = document.getElementsByClassName("doors");
let mpg = document.getElementsByClassName("mpg");
let passengers = document.getElementsByClassName("passengers");
let fuel = document.getElementsByClassName("fuel");
let gears = document.getElementsByClassName("gears");
let ac = document.getElementsByClassName("ac");
let luggage = document.getElementsByClassName("luggage");
let price = document.getElementsByClassName("price");

let dates = document.getElementsByClassName("datest");

let cardCount = 0;
let carPrice = [];
let selectedCarPrice;
let Selectedc = 0;
let bookingModel;
let selectedModel;

fromHome();
tabDisplay(currentTab);



let inCarExtras = document.getElementsByClassName("inCarExtras");

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();


today = yyyy + '-'+ mm + '-' + dd;
let totalPrice;


for (let i=0; i<inCarExtras.length; i++)  {
  if (inCarExtras[i].type == 'checkbox')   {
    inCarExtras[i].checked = false;
  }
}

let insurance = document.getElementsByClassName("insurance");

for (let i=0; i<insurance.length; i++)  {
  if (insurance[i].type == 'checkbox')   {
    insurance[i].checked = false;
  }
}

$(document).ready(function(){
    resize();
    $(window).resize(resize);
});

function extrasFunc() {

    let inCarExtras = document.getElementsByClassName("inCarExtras");
    let extras_money = document.getElementById("extras_money");
    let extrasNum = 0.0 ;

    if (inCarExtras[0].checked == true){
        extrasNum += 4.90;
    }
    if (inCarExtras[1].checked == true){
        extrasNum += 3.90;
    }

    extras_money.innerHTML = extrasNum;
}

function insuranceFunc(){

    let insurance = document.getElementsByClassName("insurance");
    let insurance_money = document.getElementById("insurance_money");
    let insuranceNum = 10.0;
    

    if (insurance[0].checked == true){
        insuranceNum += 9.90;
    }
    if (insurance[1].checked == true){
        insuranceNum += 12.90;
    }
    
    insurance_money.innerHTML = insuranceNum;
}

function tabDisplay(i){
    
    tabArray[i].style.display = "block";

    let prevbutton = document.getElementById("prevBT");
    let nextbutton = document.getElementById("nextBT");

    let pudr = document.getElementById("PickUpDate");
    let dodr = document.getElementById("DropOffDate");
    let pud = pudr.value;
    let dod = dodr.value;
    let priceNum = document.getElementById("totalprice");
    let priceSend = document.getElementsByClassName('priceSend');

    let insurance_money = document.getElementById("insurance_money");
    let extras_money = document.getElementById("extras_money");


    let ufname = document.getElementById("Fname");
    let ulname = document.getElementById("Lname");
    let uemail = document.getElementById("Email");
    let uphone = document.getElementById("Phone");


    if (i === 0){
        prevbutton.disabled = true;
        nextbutton.disabled = false;
        $.ajax({
            url: "/defaultInfo",
            data: {nec:'nec'},
            method: "POST",
            success: (userinfo) => {
                
                ufname.value = userinfo.fname;
                ulname.value = userinfo.lname;
                uemail.value = userinfo.email;
                uphone.value = userinfo.phone;
            }
        });
        
    }
    else {
        prevbutton.disabled = false;
    }

    if (i === 3){
        nextbutton.disabled = true;


        setTimeout(() => {
            nextbutton.innerHTML = "Book!"
            nextbutton.setAttribute('onclick','submit');
            nextbutton.setAttribute('type','submit')
    
            //price Calculation
            pud = Date.parse(pud);
            dod = Date.parse(dod);
            let days = (dod - pud)/(1000 * 60 * 60 * 24) + 1;
            totalPrice =  parseFloat(insurance_money.innerHTML) + parseFloat(extras_money.innerHTML) + (days * selectedCarPrice);
            priceNum.innerHTML = totalPrice ;

            document.getElementById("bookingPrice").value = totalPrice;
            document.getElementById("bookingModel").value = selectedModel;


            nextbutton.disabled = false;
        }, 1000);
        
        
        
        
    }
    else if (i < 3){
        nextbutton.innerHTML = "Next"
        nextbutton.setAttribute('onclick','nextPrev(1)');
        nextbutton.setAttribute('type','button')
    }
    if(currentTab ==1 ) {
        if (Selectedc === 0) {
            nextbutton.disabled = true;
        }
        else{
            nextbutton.disabled = false;
        }
    }



}



function nextPrev(i){


    

    let category = document.getElementById("Category");
    let pudr = document.getElementById("PickUpDate");
    let dodr = document.getElementById("DropOffDate");
    let catsele = category.options[category.selectedIndex].value;
    let pud = pudr.value;
    let dod = dodr.value;
    let carD = document.getElementsByClassName("carCard");
    let noCarsMess = document.getElementById("noCarsMessage");

    let nextbutton = document.getElementById("nextBT");


    
    let catid = category.options[category.selectedIndex].id;

    if(dod=='' | pud==''){
        alert('Please fill both the drop off and the pick up date to continue');
    }
    else if(pud<today){
        alert('The pick up date you choose is not valid');
    }
    else if(pud>dod){
        alert('The pick up date cannot be later than then drop off date');
    }
    else{
        tabArray[currentTab].style.display ="none";
        currentTab = currentTab + i;
        tabDisplay(currentTab);

    }
    

    

    StepDisplay();
    resize();

    if(currentTab===1 && i===1){


        

            cardCount = 0 ;
            for(let i=0;i<4;i++){
                carD[i].style.display='none';
                carImg[i].src = '';
                carName[i].innerHTML = '';
                doors[i].innerHTML = '<i class="fas fa-door-closed"></i>';
               
                passengers[i].innerHTML = '<i class="fas fa-user"></i>';
                fuel[i].innerHTML = '<i class="fas fa-gas-pump"></i>';
                gears[i].innerHTML = '<i class="fas fa-car-alt"></i>';
                ac[i].innerHTML = '<i class="fas fa-fan"></i>';
                luggage[i].innerHTML = '<i class="fas fa-briefcase"></i>';
                price[i].innerHTML = '<i class="fas fa-euro-sign"></i>';
                bookingModel = [];
                carPrice = [];
                
            }
            $.ajax({
                url: "/carCat",
                data: { cat: catid , pud: pud , dod: dod },
                method: "POST",
                success: (selectedCars) => {
                    
                    if(selectedCars.length<1){
                        noCarsMess.innerHTML = '<h3 class="alert alert-primary mt-4" id="indexMessage">No available cars found in the category you choose for those dates</h3>'
                    }
                    else{
                        noCarsMess.innerHTML = '';
                    }
                    for(let i=0;i<selectedCars.length;i++){

                        
                        carD[cardCount].style.display = 'block';
                        carImg[cardCount].src = selectedCars[i][0].imgSrc;
                        carName[cardCount].innerHTML += selectedCars[i][0].model;
                        doors[cardCount].innerHTML += selectedCars[i][0].doors + ' Doors';
                        passengers[cardCount].innerHTML +=  selectedCars[i][0].passengers + ' Passengers';
                        fuel[cardCount].innerHTML +=  selectedCars[i][0].fuel;
                        gears[cardCount].innerHTML +=  selectedCars[i][0].gear;
                        ac[cardCount].innerHTML +=  selectedCars[i][0].ac;
                        luggage[cardCount].innerHTML +=  selectedCars[i][0].luggage;
                        price[cardCount].innerHTML += selectedCars[i][0].price + '€ per day';
                        bookingModel.push(selectedCars[i][0].id);
                        carPrice.push(selectedCars[i][0].price);
                        cardCount += 1;
                        

                    }
                    
                }
            });
            
            
            
        }
        
    
    


}

function StepDisplay(){

    
    if (currentTab > 0){
        stepArray[currentTab - 1].style = "width: 100%; background-color: rgba(58, 83, 155, 1) !important;"
    }

    stepArray[currentTab].style = "width: 100%; background-color: rgba(58, 83, 155, 0.65) !important;"
    

    for(let n=(currentTab +1); n < 4; n++){
        stepArray[n].style = "width: 0%; background-color: white !important;"
    }

}

function resize() {
    let liElements = progressBar.children;
    if ( window.innerWidth < 980 && window.innerWidth > 750) {     
        progressBar.style = "flex-direction: row;";
        for(let i=0;i< liElements.length; i++){
            liElements[i].style = "width : 10em !important";
        }

    }
    else if ( window.innerWidth > 980) {     
        for(let i=0;i< liElements.length; i++){
            liElements[i].style = "width : 15em !important";
        }
    }
    else if( window.innerWidth < 751) { 
        for(let i=0;i< liElements.length; i++){
            liElements[i].style = "display: none;";
        }
        liElements[currentTab].style = " display: block;"
     
    }
    
}

function carSelect(n){
    let card = document.getElementsByClassName("card");
    let cardvalue = document.getElementsByClassName("carcards");
    let nextbutton = document.getElementById("nextBT");

    Selectedc = 1;
    for(let i=0;i,card.length;i++){
        if(i!=n){
            card[i].style.backgroundColor = "white";
            
        }
        else{
            card[n].style.backgroundColor = "rgb(37, 37, 38)";
            cardvalue.value = n;
            nextbutton.disabled = false;
            selectedCarPrice = carPrice[n];
            selectedModel = bookingModel[n];
            
        }
    }
   
}

function fromHome(){

    const queryString = window.location.search;
    
    if(queryString){
        const urlParams = new URLSearchParams(queryString);
        const category = urlParams.get('cat')
        const pickloc = urlParams.get('pickloc')
        const droploc = urlParams.get('droploc')
        const pickdate = urlParams.get('pickdate')
        const dropdate = urlParams.get('dropdate')
        
    
        let picklocfield = document.getElementById("PickUpLoc");
        let droplocfield = document.getElementById("DropOffLoc");
        let pickdatefield = document.getElementById("PickUpDate");
        let dropdatefield = document.getElementById("DropOffDate");
        let categoryfield = document.getElementById("Category");
    
        picklocfield.value = pickloc;
        droplocfield.value = droploc;
        categoryfield.value = category;
    

        if(pickdate && dropdate){
            pickdatefield.value = pickdate;
            dropdatefield.value = dropdate;
            nextPrev(1);
            
        }
        else if(pickdate){
            pickdatefield.value = pickdate;
        }
        else if(dropdate){
            dropdatefield.value = dropdate;
        }
        
    }





}
function bookSearch(){

    let pickloc = document.getElementById("PickUpLoc");
    let droploc = document.getElementById("DropOffLoc");
    let pickdate = document.getElementById("PickUpDate");
    let dropdate = document.getElementById("DropOffDate");
    let category = document.getElementById("Category");
    let anc = document.getElementById("Search");

    let link = "/booking?pickloc="+pickloc.value+'&droploc='+droploc.value+"&cat="+category.value;


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '-'+ mm + '-' + dd;


    if(dropdate.value=='' | pickdate.value==''){
        alert('Please fill both the drop off and the pick up date to continue');
    }
    else if(pickdate.value<today){
        alert('The pick up date you choose is not valid');
    }
    else if(pickdate.value>dropdate.value){
        alert('The pick up date cannot be later than then drop off date');
    }
    else{
        link += "&pickdate="+ pickdate.value;
        link += "&dropdate="+ dropdate.value;
        anc.href = link;

    }


    
    

}
function dayOftheWeek(){
    var birthdayDate = document.getElementById("BD").value;
    var wday = new Date(birthdayDate) ;
    // //document.getElementById("Result").innerHTML = birthdayDate ;
    // var weekday = new Array(7);
    // weekday[0] = "Sunday";
    // weekday[1] = "Monday";
    // weekday[2] = "Tuesday";
    // weekday[3] = "Wednesday";
    // weekday[4] = "Thursday";
    // weekday[5] = "Friday";
    // weekday[6] = "Saturday";
    //using getday you directly get the index of day  without using array 
    var bornDay =wday.getDay();
    var genderMF;
    if (document.getElementById("male").checked ){
        genderMF = "male";
    }
    else if (document.getElementById("female").checked ){
        genderMF = "female";
    }
    else{
        alert("Select your Gender");
        // return;
    }
    if (bornDay == 0 && genderMF=="male"){
        alert("Your Name is Kwasi");
    }
    else if (bornDay == 1 && genderMF=="male"){
        alert("Your Name is Kwadwo");
    }
    else if (bornDay == 2 && genderMF=="male"){
        alert("Your Name is Kwabena");
    }
    else if (bornDay == 3 && genderMF=="male"){
        alert("Your Name is Kwaku");
    }
    else if (bornDay == 4 && genderMF=="male"){
        alert("Your Name is Yaw");
    }
    else if (bornDay == 5 && genderMF=="male"){
        alert("Your Name is Kofi");
    }
    else if (bornDay == 6 && genderMF=="male"){
        alert("Your Name is Kwame");
    }
    else if (bornDay == 0 && genderMF=="female"){
        alert("Your Name is Akosua");
    }
    else if (bornDay == 1 && genderMF=="female"){
        alert("Your Name is Adwoa");
    }
    else if (bornDay == 2 && genderMF=="female"){
        alert("Your Name is Abenaa");
    }
    else if (bornDay == 3 && genderMF=="female"){
        alert("Your Name is Akua");
    }
    else if (bornDay == 4 && genderMF=="female"){
        alert("Your Name is Yaa");
    }
    else if (bornDay == 5 && genderMF=="female"){
        alert("Your Name is Afua");
    }
    else {
        alert("Your Name is Ama");
    }
    
}

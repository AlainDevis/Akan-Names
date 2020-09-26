function dayOftheWeek(){
    var birthdayDate = document.getElementById("BD").value;
    var genderMF;
    if (document.getElementById("male").checked ){
        genderMF = "male";
    }
    else{
        genderMF = "female";
    }
    document.getElementById("Result").innerHTML = birthdayDate + " " + genderMF;
}



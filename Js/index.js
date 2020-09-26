function dayOftheWeek(){
    var birthdayDate = document.getElementById("BD").value;
    var genderMF;
    if (document.getElementById("male").checked = true){
        genderMF = "male";
    }
    if (document.getElementById("female").checked = true){
        genderMF = "female";
    }  
    // alert(birthdayDate);
    document.getElementById("Result").innerHTML = birthdayDate + " " + genderMF;
}

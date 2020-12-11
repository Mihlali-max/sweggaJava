function swegga (m ,x){
    y = parseFloat(document.getElementById("fname").value);
    var results = document.getElementById("femme")

    results.value = Math.round(150.95 * y* 100)/100;
    z =parseFloat(document.getElementById("Mname").value);
    var results2 = document.getElementById("male")

    results2.value = Math.round(180.95 * z* 100)/100;


    m = parseFloat(document.getElementById("femme").value);
    x =parseFloat(document.getElementById("male").value);
    var results3 = document.getElementById("Submit");
    results3.value = m + x;
}
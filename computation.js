function validateForm() {
    var fn = document.getElementById("first").value;
    var ln = document.getElementById("last").value;
    var add = document.getElementById("address").value;

    var message = "";
    var reg1 = /^[a-zA-Z -]+$/;
    var reg2 = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;

    if(fn.length < 1 || fn.length > 20 && reg1.test(fn) == false) {
        alert("Firstname required");
    } else {
        message = (message + fn + " ");
    }

    if (reg1.test(fn) == false) {
        alert("Invalid first name")
    }

    if(ln.length < 1 || ln.length > 20) {
        alert("Lastname required");
    } else {
        message = (message + ln + "<br>");
    }

    if (reg1.test(ln) == false) {
        alert("Invalid last name")
    }

    if(pn.length < 1 || pn.length > 20) {
        alert("Phone number required");
    } else {
        message = (message + pn);
    }

    if (reg2.test(pn) == false) {
        alert("Invalid phone number. Please check the format.")
    }

    document.getElementById("customerDetails").innerHTML = message + "<br>Pickup: " + datetime + "<br><br>";


    var totalAmount = 0;
    var message2 = "";
    
    if (parseFloat(document.getElementById("margherita").value) > 0) {
        var total = 0;
        total += parseFloat(document.getElementById("margherita").value) * 12;
        message2 = (message2 + parseFloat(document.getElementById("margherita").value) + " Margherita Pizza     $" + total + "<br>");
        totalAmount += total;
    }

    if (parseFloat(document.getElementById("qformaggi").value) > 0) {
        var total = 0;
        total += parseFloat(document.getElementById("qformaggi").value) * 12.50;
        message2 = (message2 + parseFloat(document.getElementById("qformaggi").value) + " Quattro Formaggi     $" + total + "<br>");
        totalAmount += total;
    }

    if (parseFloat(document.getElementById("capricciosa").value) > 0) {
        var total = 0;
        total += parseFloat(document.getElementById("capricciosa").value) * 13;
        message2 = (message2 + parseFloat(document.getElementById("capricciosa").value) + " Capricciosa     $" + total + "<br>");
        totalAmount += total;
    }

    if (parseFloat(document.getElementById("schnitzel").value) > 0) {
        var total = 0;
        total += parseFloat(document.getElementById("schnitzel").value) * 8.50;
        message2 = (message2 + parseFloat(document.getElementById("schnitzel").value) + " Schnitzel     $" + total + "<br>");
        totalAmount += total;
    }

    if (parseFloat(document.getElementById("mixed-grill").value) > 0) {
        var total = 0;
        total += parseFloat(document.getElementById("mixed-grill").value) * 9.50;
        message2 = (message2 + parseFloat(document.getElementById("mixed-grill").value) + " Mixed Grill     $" + total + "<br>");
        totalAmount += total;
    }

    if (parseFloat(document.getElementById("beef-bun").value) > 0) {
        var total = 0;
        total += parseFloat(document.getElementById("beef-bun").value) * 10;
        message2 = (message2 + parseFloat(document.getElementById("beef-bun").value) + " Big Beef on a Bun     $" + total + "<br>");
        totalAmount += total;
    }

    if (parseFloat(document.getElementById("coffee").value) > 0) {
        var total = 0;
        total += parseFloat(document.getElementById("coffee").value) * 2;
        message2 = (message2 + parseFloat(document.getElementById("coffee").value) + " Coffee     $" + total + "<br>");
        totalAmount += total;
    }

    if (parseFloat(document.getElementById("latte").value) > 0) {
        var total = 0;
        total += parseFloat(document.getElementById("latte").value) * 2.50;
        message2 = (message2 + parseFloat(document.getElementById("latte").value) + " Latte     $" + total + "<br>");
        totalAmount += total;
    }

    if (parseFloat(document.getElementById("soft-drink").value) > 0) {
        var total = 0;
        total += parseFloat(document.getElementById("soft-drink").value) * 1.75;
        message2 = (message2 + parseFloat(document.getElementById("soft-drink").value) + " Soft-drink     $" + total + "<br>");
        totalAmount += total;
    }

    document.getElementById("orders").innerHTML = message2 + "<br>" + "Total Cost: $" + totalAmount;
}


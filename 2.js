function validation() {

    if ((document.getElementById("userid").value) == "") {
        alert("empty username field")
    }

    if ((document.getElementById("pswid").value) == "") {
        alert("empty password field")
    }

    if ((document.getElementById("emailid").value) == "") {
        alert("empty emailid field")
    }

    document.getElementById("formvalues").textContent =
        "USERNAME IS - " + "  " + document.getElementById("userid").value + "  " +
        "PASSWORD IS - " + "  " + document.getElementById("pswid").value + "  " +
        "EMAILID IS - " + "  " + document.getElementById("emailid").value;

    document.getElementById("userid").value = "";
    document.getElementById("pswid").value = "";
    document.getElementById("emailid").value = "";

}
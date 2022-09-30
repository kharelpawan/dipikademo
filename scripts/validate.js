function validateForm() {
  var validemail = document.forms["myForm"]["email"].value;
  var name = document.forms["myForm"]["name"].value;
  if (validemail == null || validemail == "" || name == null || name == "") {
    if (validemail == null || validemail == "")
      document.getElementById("jsemail").innerHTML = "* Email";
    else document.getElementById("jsname").innerHTML = "* Name";
    alert("All Field must be filled out");
    return false;
  } else {
    alert("Form Submitted");
    window.location.href = "index.html";
  }
}

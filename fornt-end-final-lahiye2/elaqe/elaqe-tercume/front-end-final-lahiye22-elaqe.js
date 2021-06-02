function section1languageAz() {
    document.getElementById("languageAz").style.backgroundColor = "#7520B9";
    document.getElementById("languageAz").style.color = "white";
    document.getElementById("languageEs").style.backgroundColor = "";
    document.getElementById("languageEs").style.color = "";
  }
  function section1languageEs() {
    document.getElementById("languageEs").style.backgroundColor = "#7520B9";
    document.getElementById("languageEs").style.color = "white";
    document.getElementById("languageAz").style.background= "";
    document.getElementById("languageAz").style.color = "";
  }
  $("#mySubmitBtn").click(function () {
    var myCount = validation();
  
    if (myCount != -3) {
      return false;
    }
    document.forms["myform"]["Ad"].value = "";
    document.forms["myform"]["Nömrə"].value = "";
    document.forms["myform"]["Mesajı"].value = "";
    swal("Məlumat göndərildi!", "Əməliyyat uğurla yerinə yetirildi!", "success");
  });
  function validation() {
    var count = 0;
  
    var myInputFields = ["Ad", "Nömrə", "Mesajı"];
  
    var fieldName;
    for (let i = 0; i < myInputFields.length; i++) {
      fieldName = myInputFields[i];
      if (document.forms["myform"][fieldName].value === "") {
        document.forms["myform"][fieldName].style.border = "2px solid red";
        document.getElementById(fieldName + "Validation").innerText =
          fieldName + "Introduzca su nombre completo.";
        document.forms["myform"][fieldName].focus();
  
        count++;
      } else {
        document.forms["myform"][fieldName].style.border = "1px solid white";
        document.getElementById(fieldName + "Validation").innerText = "";
        count--;
      }
    }
    return count;
  }
  
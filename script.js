function submitForm() {
  event.preventDefault();

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var MobileNo = document.getElementById("MobileNo").value;
  var DOB = document.getElementById("DOB").value;

  var data = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    MobileNo: MobileNo,
    DOB: DOB,
  };

  var params = Object.keys(data)
    .map(function (key) {
      return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
    })
    .join("&");

  var newTab = window.open();
  newTab.document.body.innerHTML =
    "<h3>Registration Details</h3><p>" + params.replace(/&/g, "<br>") + "</p>";
  document.getElementById("regForm").reset();
}

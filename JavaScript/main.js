// Index (Home) -->
google.charts.load('current', {
    'packages':['geochart'],
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Customers'],
      ['Germany', 20000000],
      ['United States', 30600000],
      ['Brazil', 40580000],
      ['Canada', 40000000],
      ['France', 34000000],
      ['India', 52400000],
      ['Saudi Arabia', 29600000],
      ['Russia', 29800000],
      ['Pakistan', 16000000],
      ['Australia', 26000000],
      ['China', 66099000],
      ['South Africa', 19600000],
      ['Nigeria', 1160000],
      ['United Kingdom',22805000]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }



// TOP BUTTON --> Get the button
var mybutton = document.getElementById("top_Btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




// CONTACT Script -->

function myFunction() {

  // Get the value of the input field with id="numb"
  let x = document.getElementById("form3").value;
  let y = document.getElementById("email").value;
  let z = document.getElementById("form1").value;

  let text;
  let text_1;
  let text_2;

  if (isNaN(x) || x == '' || x.length < 10 || x.length > 13) {
    text = "*Entered mobile number is invalid !!";
  }
  else if (y == '') {
    text_1 = "*Email is required !!"
  }
  else if(z == '') {
    text_2 = "*Username is required !!"
  }
  else {
    alert("Hey " + z + " Your Submission has been recorded !!\n We will contact you soon");
    window.location.reload();
  }

  document.getElementById("Msg_number").innerHTML = text;

  document.getElementById('result_email').innerHTML = text_1;

  document.getElementById('result_Name').innerHTML = text_2;
}

// Email Validation
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validate = () => {
  const $result_email = $('#result_email1');
  const email = $('#email').val();
  $result_email.text('');

  if (validateEmail(email)) {
    $result_email.text('*' + email + ' IS VALID !');
    $result_email.css('color', 'green');
  } 
  else {
    $result_email.text('*' + email + ' IS NOT VALID !');
    $result_email.css('color', 'red');
  }
  return false;
}

$('#email').on('input', validate);




// Tracking Script --->
function TrackFunc() {

  var a = document.getElementById("Track_NO").value;

  if(a == '') {
    alert("Enter a Tracking Number !! ");
  }
  else {
    location.replace("./Track_details.html");
  }
    localStorage.setItem("textvalue", a);
    return false;
  
}



function FreightFunc() {
  let B = document.getElementById("From_details2").value;
  let C = document.getElementById("To_details2").value;
  let D = document.getElementById("Date_details").value;
  if(B == '') {
    alert("Enter Valid Details !! ");
  }
  else if(C == '') {
    alert("Enter Valid Details !! ");
  }
  else if(D == '') {
    alert("Enter Valid Details !! ");
  }
  else {
    location.replace("./SubmittedFreight.html");
  }
  localStorage.setItem("textvalue_2", B);
  localStorage.setItem("textvalue_3", C);
  localStorage.setItem("textvalue_4", D);
  
  return false;
}



function TrackFunc_2() {

  var a = document.getElementById("Track_NO").value;

  if(a == '') {
    alert("Enter a Tracking Number !! ");
  }
  else {
    location.replace("./Track_details_2.html");
  }
    localStorage.setItem("textvalue", a);
    return false;
  
}

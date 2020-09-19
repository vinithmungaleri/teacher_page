function required()
{
var fname = document.form1.fname.value;
var lname = document.form1.lname.value;
var eaddress = document.form1.eaddress.value;
var phone = document.form1.phone.value;
var checkindate = document.form1.checkindate.value;
var checkoutdate = document.form1.checkoutdate.value;
var e = document.getElementById("days");
var day = e.options[e.selectedIndex].value;
var instruction = document.form1.instruction.value;
if (fname === "")
{
alert("first name cannot be empty ");

}
if (lname === "")
{
alert("last name name cannot be empty ");
}
if (eaddress === "")
{
alert("Email address cannot be empty ");

}
if (phone === "")
{
alert("phone number cannot be empty ");
}
if (checkindate === "")
{
alert("From date cannot be empty ");
}
if (checkoutdate === "")
{
alert("To date cannot be empty ");
}
if (day === "")
{
alert("Noof days cannot be empty ");
}

if(phone.length>10 || (phone.length>=1 && phone.length<10))
{
 alert("phone number should be of 10 digits recheck again!!");
}
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(!(eaddress.match(mailformat)))
{
 alert("invalid email");
}
if(checkindate>checkoutdate)
{
 alert("invalid from and to dates!!From date cannot be greater than To date");
}

var letterNumber = /^[0-9a-zA-Z]+$/;
 if((instruction.match(letterNumber)))
 {
  
 }
 else{
  alert("In Reason field Only letters and numbers allowed!!please check again");
 }
 
 var Difference_In_Time = checkoutdate.getTime() - checkindate.getTime(); 
  
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

if(!(Difference_In_Days==day))
{
 alert("Please check dates and noof days again!!");
}

}
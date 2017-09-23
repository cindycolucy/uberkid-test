function validateForm(){
	var contact = document.forms["myForm"]["contact_name"].value;
	var kidName = document.forms["myForm"]["kid_name"].value;
	var email = document.forms["myForm"]["email"].value;
	var phone = document.forms["myForm"]["phone"].value;
	var tripdate = document.forms["myForm"]["trip_date"].value;
	var pickuptime = document.forms["myForm"]["pickup_time"].value;
	var appttime = document.forms["myForm"]["appt_time"].value;
	var paddress = document.forms["myForm"]["pickup_address"].value;
	var pcity = document.forms["myForm"]["pickup_city"].value;
	var pzip = document.forms["myForm"]["pickup_zip"].value;
	var daddress = document.forms["myForm"]["destination_address"].value;
	var dcity = document.forms["myForm"]["destination_city"].value;
	var dzip = document.forms["myForm"]["destination_zip"].value;
	var comment = document.forms["myForm"]["comment"].value;
	if(contact == ""){
		alert("Name must be filled out");
		return false;
	} else if(kidName == ""){
		alert("Kid's name must be filled out");
		return false;
	} else if (email == ""){
		alert("Email must be filled out");
		return false;
	} else if (phone == ""){
		alert("Phone number must be filled out");
		return false;
	} else if (tripdate == ""){
		alert("Trip date must be filled out");
		return false;
	} else if (pickuptime == ""){
		alert("Pickup time must be filled out");
		return false;
	} else if (appttime == ""){
		alert("Appointment time must be filled out");
		return false;
	} else if (paddress == ""){
		alert("Pickup address must be filled out");
		return false;
	} else if (pcity == ""){
		alert("Pickup city must be filled out");
		return false;
	} else if (pzip == ""){
		alert("Pickup zip code must be filled out");
		return false;
	} else if (daddress == ""){
		alert("Destination address must be filled out");
		return false;
	} else if (dcity == ""){
		alert("Destination city must be filled out");
		return false;
	} else if (dzip == ""){
		alert("Destination zip code must be filled out");
		return false;
	} else if (comment == ""){
		alert("Restaurant description must be filled out");
		return false;
	}

}

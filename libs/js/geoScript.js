$('#btnRun1').click(function() {

	$.ajax({
		url: "Libs/php/geopostal.php",
		type: 'POST',
		dataType: 'json',
		data: {
			adminName1: $('#adminName1').val(),
		},
		success: function(result) {

			console.log(JSON.stringify(result));

			if (result.status.name == "ok") {

			
				$('#txtLng').html(result['data'][0]['lng']);
				$('#txtLat').html(result['data'][0]['lat']);
                $('#txtPlaceName').html(result['data'][0]['placeName']);
				
                       
			
			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
		}
	}); 

});

$('#btnRun2').click(function() {

	$.ajax({
		url: "Libs/php/geoChildren.php",
		type: 'POST',
		dataType: 'json',
		data: {
			adminCode1: $('#adminCode1').val(),
		},
		success: function(result) {

			console.log(JSON.stringify(result));

			if (result.status.name == "ok") {

			
				
				$('#txtFcodeName').html(result['data'][0]['fcodeName']);
				$('#txtAdminName1').html(result['data'][0]['adminName1'])
                $('#txtCountryName').html(result['data'][0]['countryName']);
                
			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
		}
	}); 
	
	$('#btnRun3').click(function() {

		$.ajax({
			url: "Libs/php/geoSearch.php",
			type: 'POST',
			dataType: 'json',
			data: {
				countryCode: $('#countryCode').val(),
			},
			success: function(result) {
	
				console.log(JSON.stringify(result));
	
				if (result.status.name == "ok") {
	
				
					
					
					$('#txtCountryId').html(result['data'][0]['countryId'])
					$('#txtGeonameId').html(result['data'][0]['geonameId']);
					$('#txtName').html(result['data'][0]['name']);
				
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	
	});


});
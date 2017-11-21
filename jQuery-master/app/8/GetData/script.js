$(function(){

	

	

	// load xml	
	$("#b1").on("click", function(){
		$.ajax({
			type: 'GET',
			url: 'data/xml.xml',
			dataType: 'XML',
			success: function(data){
				var $xml = $(data);
				$('#xmlContent').text($xml.find('shop_name').text());
			}
		});
	});
	
	// load html	
	$("#b2").on("click", function(){
		$('#htmlContent').load("data/html.html");
	});
	
	// load json	
	$("#b3").on("click", function(){
		$.ajax({
			type: 'GET',
			url: 'data/json.json',
			dataType: 'JSON',
			success: function(data){
				$('#jsonContent').append(data.a);
			}
		});
	});
	
	// run script
	$("#b4").on("click" ,function(){
		$.ajax({
			type: 'GET',
			url: 'data/js.js',
			success: function(){
				myAlert();
			}
		});
	});

	

})
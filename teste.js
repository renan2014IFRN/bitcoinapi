$(document).ready(function() {  
    function request() {
		$.ajax({
		  dataType: 'jsonp',
		  url: 'https://api.blinktrade.com/api/v1/BRL/ticker?callback=showIP',
		  cache: false,
		  data: "jsonp",
		  success: function showIP(data) {
		    document.getElementById('high-id').innerHTML = data.high
		    document.getElementById('low-id').innerHTML = data.low
		    document.getElementById('buy-id').innerHTML = data.buy
		    document.getElementById('sell-id').innerHTML = data.sell 
		  }
		});
	}
 	setInterval(request, 5000);
});
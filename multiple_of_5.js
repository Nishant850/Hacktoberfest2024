<script> 
	function round(x) { 
		if (x % 5 == 0) { 
			return (Math.floor(x / 5)) * 5; 
		} else { 
			return ((Math.floor(x / 5)) * 5) + 5; 
		} 
	} 
	
	var n = 34; 
	console.log(round(n)); 
</script>

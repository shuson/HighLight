function highLight(searchInput, resultDiv){
	var result = document.getElementById(resultDiv).innerHTML;
	var keyword = document.getElementById(searchInput).value;
			
	if(keyword){
		var regx = new RegExp(keyword,'gi');

		var matches = [];
		while((match = regx.exec(result)) != null){
			matches.push(match);
		}
		matches = removeDuplicate(matches);
		matches.forEach(function(elem, index){
			var hl = "<font class='hl'>"+elem+"</font>";
			result = replaceAll(elem,hl,result);
		});
		}
	
		document.getElementById(resultDiv).innerHTML = result;

	function replaceAll(orig, replace, str) {
		 return str.replace(new RegExp(orig, 'g'), replace);
	}

	function removeDuplicate(arr) {
		var temp = {};
		return arr.filter(function(item) {
			return temp.hasOwnProperty(item) ? false : (temp[item] = true);
		});
	}
}

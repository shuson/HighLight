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

	function replaceAll(find, replace, str) {
		 return str.replace(new RegExp(find, 'g'), replace);
	}

	function removeDuplicate(a) {
		var seen = {};
		return a.filter(function(item) {
			return seen.hasOwnProperty(item) ? false : (seen[item] = true);
		});
	}
}

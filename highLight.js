function hightLight(searchInput, resultDiv){
	var result = $("#"+resultDiv).html();
	var keyword = $("#"+searchInput).val();
			
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
	
		$("#"+resultDiv).html(result);

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

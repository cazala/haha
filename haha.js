window.haha = function(code, getFunc){
	
	if (!window.hieroglyphy)
		throw "Error: Hieroglyphy.js is missing!";

	// hieroglyphy
	var hieroglyphied = hieroglyphy.hieroglyphyScript(code);

	var rules = {
		'[': 'Haha',
		']': 'AhAh',
		'{': 'Haa',
		'}': 'AAAH',
		'(': 'hHAaa',
		')': 'aAaA',
		'!': 'Hhhh',
		'+': 'hhaaa'
	}

	// hahaha...
	var haha = hieroglyphied.replace(/\[|\]|\{|\}|\(|\)|\!|\+/g, function(c){return c=='['?rules['[']:c==']'?rules[']']:c=='{'?rules['{']:c=='}'?rules['}']:c=='('?rules['(']:c==')'?rules[')']:c=='+'?rules['+']:c=='!'?rules['!']:''})
	var replacer = "'.replace(/"+rules['[']+"|"+rules[']']+"|"+rules['{']+"|"+rules['}']+"|"+rules['(']+"|"+rules[')']+"|"+rules['+']+"|"+rules['!']+"/g, function(_){return _=='"+rules['[']+"'?'[':_=='"+rules[']']+"'?']':_=='"+rules['{']+"'?'{':_=='"+rules['}']+"'?'}':_=='"+rules['(']+"'?'(':_=='"+rules[')']+"'?')':_=='"+rules['!']+"'?'!':_=='"+rules['+']+"'?'+':''})";
	var string = "Function('" + haha + replacer + ')()';

	return getFunc ? Function(string) : string;
}
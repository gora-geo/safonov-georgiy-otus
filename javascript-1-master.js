var b = [];
function sum(...n){
	var a = 0;
	
	var c = 0;
	if (n.length > 1) {
		for (i = 0; i < n.length; i++) {
			a=a+n[i];	
		}
		b.splice(1, 0, a);
		return a;
	}
	else if (n.length === 1){
		return "нахождение суммы не возможно введите 2и более параметра"
	}


	else if (n.length === 0 ){
		for (i = 0; i < b.length; i++) {
			c = c +  b[i];
		}
		return c;

	}
};
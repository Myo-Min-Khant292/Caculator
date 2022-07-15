let result = document.getElementById('result') ;

function display(num) {
	result.value += num
}

function caculate() {
	try {
		result.value = eval(result.value)
	}
	catch (err) {
		alert(err)
	}
}

function Clear() {
	result.value = " ";
}

function del() {
	result.value = result.value.slice(0,-1)
}

let i = 0;
let text = "Caculator";
let effect_box = document.getElementById("text")

function typing() {
	effect_box.textContent += text.charAt(i);
	i++;
	setTimeout(typing , 300);
}

typing()


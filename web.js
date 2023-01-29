timer(){
	function timer(){
		let blink = document.getElementsById('Alert');
		blink.style.opacity = blink.style.opacity == 0 ? 1 : 0;
		setTimeout(timer, 500);
	}
}
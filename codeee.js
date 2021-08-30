var numberOfButtons = document.querySelectorAll(".button").length
for(var i=0; i<numberOfButtons; i++)
{
	document.querySelectorAll(".button")[i].addEventListener("click",function(){
		var buttonStyle = this.innerHTML;
		sound(buttonStyle)
		animation(buttonStyle)
	});
}
document.addEventListener("keypress",function(event){
	sound(event.key);
	animation(event.key);
});
function sound(key){
	switch(key){

	case "e":
	var sound2 = new Audio("http://soundfxcenter.com/human/speech/8d82b5_Letter_e_Sound_Effect.mp3");
	sound2.play();
	break;

	case "i":
	var sound3 = new Audio('http://soundfxcenter.com/human/speech/8d82b5_Letter_i_Sound_Effect.mp3');
	sound3.play();
	break;

	case "o":
	var sound4 = new Audio('http://soundfxcenter.com/human/speech/8d82b5_Letter_o_Sound_Effect.mp3');
	sound4.play();
	break;

	case "u":
	var sound5 = new Audio('http://soundfxcenter.com/human/speech/8d82b5_Letter_u_Sound_Effect.mp3');
	sound5.play();
	break;

	case "a":
	var sound6 = new Audio('http://soundfxcenter.com/human/speech/8d82b5_Letter_a_Sound_Effect.mp3');
	sound6.play();
	break;

	case "s":
	var sound1 = new Audio('http://soundfxcenter.com/human/speech/8d82b5_Letter_s_Sound_Effect.mp3');
	sound1.play();
	break;
	default: console.log(key);
	}}

function animation(currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("animation");

setTimeout(function() {
	activeButton.classList.remove("animation");
}, 100);
}
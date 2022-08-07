console.log("hello world");

let form = document.querySelector('#contact');
const duck = document.querySelector('#duck')

function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form has been submitted")
}

function giveCompliment(evt){
	evt.preventDefault()
	alert(`You're looking cool`)
}



form.addEventListener('submit', handleSubmit);
duck.addEventListener('mouseover', giveCompliment)
document.querySelector('.name').addEventListener('click', (e) => {
	let links = document.querySelector('.links');
	links.classList.toggle('modal--open');
	console.log(links.classList)
});

window.addEventListener('scroll', (e) => {
	if(scrollY < 100)return;
	let links = document.querySelector('.links');
	if(links.classList.contains('modal--open'))return;
	links.classList.add('modal--open');
});

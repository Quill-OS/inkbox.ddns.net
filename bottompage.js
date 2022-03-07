fetch('bottompage.html')
.then(res => res.text())
.then(text => {
	let oldelem = document.querySelector("script#bottompage");
	let newelem = document.createElement("div");
	newelem.innerHTML = text;
	oldelem.parentNode.replaceChild(newelem,oldelem);
})

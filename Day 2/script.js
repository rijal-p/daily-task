// let btn_1 = document.createElement("button");
// btn_1.innerHTML = "Click Me";
// btn_1.class = "btn";
// document.body.appendChild(btn_1);


for (let i = 0; i < 4; i++) {
	let btn = document.createElement("button");
	btn.innerHTML = "Click Me";
	btn.className  = "btn";
	btn.id  = `btn-${i}`;
	document.body.appendChild(btn);
  }	

  const val = document.querySelectorAll('.btn')
  const count = val.forEach(el => {
	let counter = 0;
	el.addEventListener('click',function(){
		// document.getElementById(e.target.id).innerHTML = `Clicked ${counter++}`
		this.innerHTML = `Clicked ${counter++}`
	  })
  })
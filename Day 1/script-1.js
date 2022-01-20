// let counter_2 = 0;
let btn = document.querySelectorAll('.btn')
const val = btn.forEach((el) => {
	let count = 0
	el.addEventListener('click', function() {
		// count = counter_2 ++ ;
	this.innerHTML = `Clicked ${count++}`
	})
})


//First Logic.
// const value = btn.forEach(addEventListener('click',clicked = () => {
// 	count = counter ++ ;
// 	document.querySelector('.display').innerHTML = count
// }))



	// let value = btn.addEventListener('click',clicked= () => {
// 	btn.forEach(element => {
// 		counter ++
// 		console.log(counter);
// 	});
// })


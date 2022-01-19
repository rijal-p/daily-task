// let counter_2 = 0;
let counter_2 = 1;
let btn = document.querySelectorAll('.btn')

const val = btn.forEach(el => {
	el.addEventListener('click', (e)=> {
		count = counter_2 ++ ;
	document.querySelector('.display').innerHTML = count
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


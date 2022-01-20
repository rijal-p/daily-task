let counter = 0;
let btn_1 = document.querySelector('.btn-1');
let btn_2 = document.querySelector('.btn-2');
let btn_3 = document.querySelector('.btn-3');
let btn_4 = document.querySelector('.btn-4');
// btn_1.addEventListener('click',clicked)
const value_1 = btn_1.addEventListener('click',clicked = () => {
	// return counter ++
		counter ++ ;
		updateDisplay(counter)
	})

	const value_2 = btn_2.addEventListener('click',clicked = () => {
		counter ++ ;
		updateDisplay(counter)
	})
	const value_3 = btn_3.addEventListener('click',clicked = () => {
		counter ++ ;
		updateDisplay(counter)
	})
	const value_4 = btn_4.addEventListener('click',clicked = () => {
		counter ++ ;
		updateDisplay(counter)
	})

	function updateDisplay(val) {
		array.forEach(element => {
			
		});
		document.getElementById("btn").innerHTML = val;
	}
// console.log(value)

	// btn_1.addEventListener("click", ()=>{
	// 	let count = count++;
	// }
	// );

// const btn_1 = document.querySelector('.btn-1').addEventListener('click',alert('clicked'))
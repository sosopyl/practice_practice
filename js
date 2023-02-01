"use strict";

///Практика на изменение элементов на JavaScript

//1 - 5
// let arr = [1, 2, 3, 4, 5]
// let ul = document.querySelector('ul')
// let adder = document.querySelector('input')


// adder.addEventListener('blur', function(){
//     let li = document.createElement('li')
//     li.textContent = adder.value
//     li.addEventListener('click', change)
//     ul.appendChild(li)

//     let a = document.createElement('a')
//     a.textContent = ' перечернуть'
//     a.href = '#'
//     li.appendChild(a)
//     a.addEventListener('click', function(){
//         li.classList.add('style')
//     })

//     let remove = document.createElement('a')
//     remove.textContent = ' remove  '
//     remove.href = '#'
//     remove.addEventListener('click', function(){
//         li.remove()
//     })
//     li.appendChild(remove)
//     adder.value = ''
// })

// for(let elem of arr){

//     let li = document.createElement('li')
//     li.textContent = elem
//     li.addEventListener('click', change)
//     ul.appendChild(li)

//     let a = document.createElement('a')
//     a.textContent = ' перечернуть'
//     a.href = '#'
//     li.appendChild(a)
//     a.addEventListener('click', function(){
//         li.classList.add('style')
//     })


//     let remove = document.createElement('a')
//     remove.textContent = ' remove  '
//     remove.href = '#'
//     remove.addEventListener('click', function(){
//         li.remove()
//     })
//     li.appendChild(remove)

// }

// function change(){
//     let changer = document.createElement('input')
//     let self = this
//     changer.addEventListener('blur', function (){
//         self.textContent = changer.value
//     })
//     this.appendChild(changer)
//     this.removeEventListener('click', change)
// }

// 6

let employees = [
	{name: 'employee1', age: 30, age: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

let table = document.getElementById('table');
for (let employee of employees) {
	let tr = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.textContent = employee.name;
	tr.appendChild(td1);
	
	let td2 = document.createElement('td');
	td2.textContent = employee.age;
	tr.appendChild(td2);
	
	let td3 = document.createElement('td');
	td3.textContent = employee.age;
	tr.appendChild(td3);
	
	table.appendChild(tr);
}

// 7
// 8
// 9
// 10
// 11
// 12
// 13

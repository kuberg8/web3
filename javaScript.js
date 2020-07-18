"use strict";


function openLeague_block (elim) {
	elim.getElementsByClassName('League_block')[0].style.display = "block"
	elim.classList.add("Active_small_block")
	elim.setAttribute("onclick", "closeLeague_block(this)")
}


function closeLeague_block (elim) {
	elim.getElementsByClassName('League_block')[0].style.display = "none"
	elim.classList.remove("Active_small_block")
	elim.setAttribute("onclick", "openLeague_block(this)")
}





function switch_focus(elim) {
	let switch_mob = document.getElementsByClassName('mobile_switch_item')
	for (var i = 0; i < switch_mob.length; i++) {
		switch_mob[i].classList.remove('mobile_switch_item_active')
	}	
	elim.classList.add('mobile_switch_item_active')

	if (elim.textContent === "Тоp игроков") {
		document.getElementById('standings_table').style.display = 'none'
		document.getElementById('top_players').style.display = 'block'
	} else if(elim.textContent === "Турнирная таблица") {
		document.getElementById('top_players').style.display = 'none'
		document.getElementById('standings_table').style.display = 'block'		
	}
}



function open_menu() {
	document.getElementsByClassName('nav')[0].style.display = 'block'
}

function close_menu() {
	document.getElementsByClassName('nav')[0].style.display = 'none'
}



function contetnSwitch(elim, content, notNone) {

	if(notNone != true) {
		let small_menu_item = document.getElementsByClassName('small_menu_item')
		for (var i = 0; i < small_menu_item.length; i++) {
			small_menu_item[i].classList.remove('active_small_menu_item')
		}

		elim.classList.add('active_small_menu_item')

		let content_switch = document.getElementsByClassName('content_switch')

		for (var i = 0; i < content_switch.length; i++) {
			content_switch[i].style.display = "none"
		}
	}


	document.getElementById(content).style.display = 'block'
}


function close_standings() {
	document.getElementById('standings').style.display = 'none'
}





var date = new Date();



let sec = date.getSeconds()
let min = date.getMinutes()
let hour = date.getHours()



function timeIs(num) {
	if(num < 10) {
		num = 0 + String(num)
	}

	return num
}


let time = document.getElementsByClassName("clock")
for (var i = 0; i < time.length; i++) {
	time[i].textContent = (timeIs(hour) + ":"+ timeIs(min) + ":" + timeIs(sec))
}



setInterval(t, 1000)

function t() {

	if(hour == 23 && min == 59 && sec == 59) {
		hour = -1
	}


	if(min == 59 && sec == 59) {
		min = -1
		hour += 1
	}


	if(sec == 59) {
		sec = -1
		min += 1 
	}



	sec = sec + 1

	for (var i = 0; i < time.length; i++) {
	time[i].textContent = (timeIs(hour) + ":"+ timeIs(min) + ":" + timeIs(sec))
	}
}
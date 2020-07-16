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
	} else {
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
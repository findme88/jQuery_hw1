'use strict';

$(document).ready(function() {

const playList = [
	{
	author: "LED ZEPPELIN",
	song:"STAIRWAY TO HEAVEN"
	},{
	author: "QUEEN",
	song:"BOHEMIAN RHAPSODY"
	},{
	author: "LYNYRD SKYNYRD",
	song:"FREE BIRD"
	},{
	author: "DEEP PURPLE",
	song:"SMOKE ON THE WATER"
	},{
	author: "JIMI HENDRIX",
	song:"ALL ALONG THE WATCHTOWER"
	},{
	author: "AC/DC",
	song:"BACK IN BLACK"
	},{
	author: "QUEEN",
	song:"WE WILL ROCK YOU"
	},{
	author: "METALLICA",
	song:"ENTER SANDMAN"
	}];
	
	
$('body').append('<ol class="tracks"></ol>')

renderList(playList)

function renderList(playList) {
  for(let item of playList) {
    let $listItem = $(`<li class="track">${item.author} - ${item.song} 
    <button class="modal">Show info</button></li>`)
    $('.tracks').append($listItem)
    let $openBtn = $listItem.find('.modal')
    $openBtn.click(function() { openWindow(item.author, item.song, $listItem)})
  }
}

function openWindow(autor, song, listItem) {
  $('body').append('<div class="modalWindow"></div>')
  $('.modalWindow').append(`${autor} - ${song}` )
  $('.modalWindow').append(`<button class = "close">close</button>`)
  let $closeBtn =  $('.close')
  $closeBtn.click(function(){
	$('.modalWindow').remove()  
	listItem.append('<hr align="left" width="350" style= "margin: 0; position: absolute; top: 70%">')
  })

}
})


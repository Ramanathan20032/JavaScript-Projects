// selecting popup-overlay
var popup_overlay = document.querySelector(".popup-overlay")
// selecting popup-box
var popup_box = document.querySelector(".popup-box")
//selecting add-popup-button through its "id"
var add_popup_button = document.querySelector("#add-popup-button")

// event-listner
add_popup_button.addEventListener('click',function(){
    popup_overlay.style.display = "block"
    popup_box.style.display = "block"
})

// select cancel button
var cancel_popup = document.getElementById("cancel-popup")

// event-listner
cancel_popup.addEventListener('click',function(event){
    event.preventDefault()
    popup_overlay.style.display = "none"
    popup_box.style.display = "none"
})

// selecting container, add-book, book-title-input, book-author-input, book-discription-input
var container = document.querySelector(".container")
var add_book = document.getElementById("add-book")
var book_title_input = document.getElementById("book-title-input")
var book_author_input = document.getElementById("book-author-input")
var book_discription_input = document.getElementById("book-discription-input")

// event-listner
add_book.addEventListener('click',function(event){
    event.preventDefault()
    popup_overlay.style.display = "none"
    popup_box.style.display = "none"
    
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${book_title_input.value}</h2>
    <h5>${book_author_input.value}</h5>
    <p>${book_discription_input.value}</p>
    <button onclick="delete_book(event)">Delete</button>`
    container.append(div)
})

function delete_book(event){
    event.target.parentElement.remove()
}
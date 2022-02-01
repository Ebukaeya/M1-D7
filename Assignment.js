/*
 EX7: Write a function to change the h1 text to something else

EX8: Write a function to change the page background color

EX9: Write a function to change the footer address with a fake one

EX10: Write a function to add a CSS class to every Amazon link

EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

EX12: Write a function to color the price of the products in a different one every time it's invoked -->

Select a tag in another tag

 */

let heading = document.getElementsByTagName("h1")[0]

heading.innerHTML="Welcome to BagIt store"

let body= document.getElementsByTagName("body")[0]

body.style.backgroundColor= "pink"

let footer= document.getElementsByClassName("footer")[0]
footer.innerHTML = "<b>Emaill </b> majdjeduhe3@gmjsd.comjdw"


let amazonLink= document.getElementsByClassName("buyProduct")



amazonLink.style.backgroundColor = "red"


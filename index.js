// Write your code here!
//"Make sure you remove the <main> with id 'main'"
main.remove();

//newHeader variable created in 'h1' (newHeader is the h1)
const newHeader = document.createElement('h1');
// append it to show up in DOM / element (h1 shows up)
document.body.appendChild(newHeader);
// make and id called victory to store text 
// id is for text (single element)
// class is for multiple element
newHeader.id = "victory";
//add element using .innerHTML
// victory.innerHTML = "<h1>Hoa is the champion</h1>";
victory.textContent = "Hoa is the champion"
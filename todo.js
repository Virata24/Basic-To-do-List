let entry = null;
let list = null;

document.getElementById("submit").onclick = function(){
    let entry = document.getElementById("entry").value;

     let li = document.createElement("li");
     li.textContent = entry;

    //Now use appendChild and add it to the list!
    document.getElementById("list").appendChild(li);

    document.getElementById("entry").value = ""; 
    let strikeButton = document.createElement("button");
    strikeButton.textContent = "✔";
    strikeButton.style.marginLeft = "10px";

    // Toggle strikethrough effect on click
    strikeButton.onclick = function () {
        li.style.textDecoration = 
            li.style.textDecoration === "line-through" ? "none" : "line-through";
    };

    // Append button to the list item
    li.appendChild(strikeButton);

    // Append list item to the list
    document.getElementById("list").appendChild(li);

    // Clear input field
    document.getElementById("entry").value = "";
}





Add = document.getElementById("add");
Add.addEventListener("click", () => {
    console.log("updating...")
    Title = document.getElementById('title').value;
    Description = document.getElementById('description').value;
    if (localStorage.getItem('items') == null) {
        console.log("i am if");
        itemsArray = [];
        itemsArray.push([Title,Description]);
        localStorage.setItem('items', JSON.stringify(itemsArray))
    }
    else{
        console.log("i am else");
        itemsStr=localStorage.getItem('items');
        itemsArray=JSON.parse(itemsStr);
        itemsArray.push([Title,Description]);
        localStorage.setItem('items', JSON.stringify(itemsArray))
    }
});

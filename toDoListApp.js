let addInp = document.querySelector("#addInp");
let add = document.querySelector('#add');
let reset = document.querySelector('#reset');
let list = document.querySelector('ul');

//add tasks --------------------------------------------

add.addEventListener("click", function () {
    if (addInp.value != "") {

        let listItem = document.createElement("li");
        let para = document.createElement('p');
        let delBtn = document.createElement("input");

        listItem.classList.add("li");
        list.append(listItem);

        para.classList.add("taskItem");
        listItem.append(para);

        delBtn.type = "checkbox";
        delBtn.classList.add("delCheckBox")
        listItem.insertAdjacentElement("afterbegin", delBtn);

        para.innerText = addInp.value;
        addInp.value = "";
    }
})

//delete tasks ------------------------------------------

list.addEventListener("click", function (event) { //using event delegation - event listners are not applied on the newly added elements, so we use event bubbling phenomenon to give event listners to the added elements.
    if (event.target.nodeName == "INPUT") {
        event.target.style.backgroundColor = "rgb(81, 149, 226)";
        event.target.style.border = "2px white solid";
        setTimeout(function () {
            event.target.parentElement.remove();
        }, 200);
    }
})

//reset tasks-----------------------------------------------

reset.addEventListener("dblclick", function () {
    let liList = document.querySelectorAll("ul li");
    for (let i = 0; i <= liList.length - 1; i++) {
        liList[i].remove();
    }
})

//edit tasks-------------------------------------------------

let editBox = document.querySelector(".editBox")
let editInp = document.createElement("input");
let editBtn = document.createElement("button");
editInp.placeholder = "Edit your task";
editInp.classList.add("editInp");
editBtn.innerText = "Edit task";
editBtn.classList.add("editBtn");
let editEle;
let editEleOriValue;

list.addEventListener("click",function(event) {
    if(event.target.nodeName == "P") {
        editBox.appendChild(editInp);
        editBox.appendChild(editBtn);
        event.target.classList.add("editHighlight");
        editInp.value = event.target.innerText;
        editEle = event.target;
        editEleOriValue = event.target.innerText;
    }
})

editInp.addEventListener("input", function () {
    editEle.innerText = this.value;
})

document.addEventListener("keydown" , function (event) {
    if(event.code == "Enter") { 
        if(editInp.value == "") {
            editEle.innerText = editEleOriValue;
        } else {
            editEle.innerText = editInp.value;
            editInp.value = "";   
        }  
        editEle.classList.remove("editHighlight");
        editInp.remove();
        editBtn.remove();  
    }
})

editBtn.addEventListener("click", function () {
    if(editInp.value == "") {
        editEle.innerText = editEleOriValue;
    } else {
        editEle.innerText = editInp.value;
        editInp.value = "";   
    }  
    editEle.classList.remove("editHighlight");
    editInp.remove();
    editBtn.remove();  
})
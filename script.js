import kanbanAPI from "./api/kanbanAPI.js";

console.log(kanbanAPI.insertItem(2, "ljhjdsg"));

let addItems = document.querySelectorAll(".kanban__add__item");

Array.from(addItems).forEach((addItem) => {
  addItem.addEventListener("click", (event) => {
    let task = document.createElement("div");
    task.setAttribute("contenteditable", "true");
    task.setAttribute("class", "kanban__item__input");
    task.setAttribute("draggable", "true");
    task.style.marginTop = "10px";
    event.target.parentElement
      .querySelector(".kanban__items")
      .appendChild(task);
  });
});

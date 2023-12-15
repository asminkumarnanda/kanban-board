export default class kanbanAPI {
  static getItems(columnId) {
    const column = read().find((column) => column.id == columnId);
    if (!column) {
      return [];
    }
    return column.items;
  }
  static insertItem(columnId, content) {
    const data = read();   
    const column = data.find((column) => column.id == columnId);
    const item = {
      id: Math.floor(Math.random() * 50000 + 1),
      content,
    };
    if (!column) {
      throw new Error("Column Doesn't Exist");
    }
    column.items.push(item);
    save(data);
  }
  static updateItem(itemId,newProps){
    const data = read();
  }
}
function read() {
  const json = localStorage.getItem("kanban-data");
  if (!json) {
    return [
      {
        id: 1,
        items: [],
      },
      {
        id: 2,
        items: [],
      },
      {
        id: 3,
        items: [],
      },
    ];
  }

  return JSON.parse(json);
}

function save(data) {
  localStorage.setItem("kanban-data", JSON.stringify(data));
}

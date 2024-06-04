const toddo_int = document.getElementById("toddo-int");
const todo_add = document.querySelector(".todo-add");
const list_group = document.querySelector(".list-group");
const nn = new Database();

const getAlldata = () => {
  const data = nn.find("Todo");

  if (data) {
    // Check if data is not null
    let list = "";
    data.map((item) => {
      list += `
      <li class="list-group-item d-flex justify-content-between">${item} <button onclick="deletdata('${item}')" class="btn btn-danger btn-sm">X</button></li>

     
      `;
    });

    list_group.innerHTML = list;
  } else {
    console.log("No data found");
  }
};
getAlldata();
todo_add.addEventListener("click", (e) => {
  e.preventDefault();
  const intdata = toddo_int.value;
  nn.creat("Todo", intdata);
  getAlldata();
});

const deletdata = (item) => {
  nn.delet("Todo", item);
  getAlldata();
};

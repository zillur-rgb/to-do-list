const btn = document.querySelector("button");
const input = document.querySelector("input");
const taskArea = document.querySelector(".tasks");
const cross = document.querySelector(".right");
const clear = document.querySelector(".clear-all");

const addTasks = () => {
  if (input.value.length === 0) {
    alert("Please add some texts");
    return;
  }
  showTasks();
};

const showTasks = () => {
  const div = document.createElement("div");
  div.classList.add("task");

  //Creating Left Contents
  const leftDiv = document.createElement("div");
  leftDiv.classList.add("left");

  const circleDiv = document.createElement("div");
  circleDiv.classList.add("circle");
  circleDiv.classList.add("tick");
  leftDiv.appendChild(circleDiv);

  const textDiv = document.createElement("div");
  textDiv.classList.add("textContent");
  textDiv.textContent = input.value; //textdiv created

  //Adding Circle Image
  const img = document.createElement("img");
  img.classList.add("right");
  img.classList.add("circle");
  img.src = "./images/close.png";

  //Append all the divs to parent
  div.appendChild(leftDiv);
  div.appendChild(img);
  leftDiv.appendChild(textDiv);
  taskArea.appendChild(div);
};

const completedTask = (e) => {
  let item = e.target.nextElementSibling;
  item.classList.add("complete");
  e.target.style.backgroundImage = "linear-gradient(#e66465, #9198e5)";
  e.target.innerHTML = `<img src='./images/icon-check.svg'>`;
};

const deleteTask = (e) => {
  let item = e.target.parentNode;
  item.remove();
};

const addDelete = (e) => {
  if (e.target.classList.contains("tick")) {
    completedTask(e);
  } else if (e.target.classList.contains("right")) {
    deleteTask(e);
  }
};

taskArea.addEventListener("click", addDelete);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  addTasks();
  input.value = "";
});

const clearAll = () => {
  taskArea.textContent = "";
};

clear.addEventListener("click", clearAll);

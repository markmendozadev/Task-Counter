import {
  createElement as CE,
  appendElement,
  addClass,
  removeClass,
  addElementId,
  prependElement,
} from "./helpers.js";
let container = document.querySelector("#container");

let taskCount = 0;
const createTask = (e) => {
  e.preventDefault();

  let div = CE("div");
  addElementId(div, `task__container_${taskCount}`);
  addClass(div, "task__container");

  let input = CE("input");
  input.id = `input__${taskCount}`;
  addClass(input, "task__input");

  let button_container = CE("div");
  addElementId(button_container, `button__container_${taskCount}`);
  addClass(button_container, "button__container");

  let add_task_button = CE("button");
  add_task_button.innerText = "Add Task";
  addClass(add_task_button, "add__task__button");

  let remove_task_button = CE("button");
  remove_task_button.disabled = true;
  remove_task_button.innerText = "Remove Task";

  addClass(remove_task_button, "remove__task__button");
  addClass(remove_task_button, "disabled");

  appendElement(button_container, add_task_button);
  appendElement(button_container, remove_task_button);
  appendElement(div, input);
  appendElement(div, button_container);
  taskCount++;

  // Add Single Task
  add_task_button.addEventListener("click", (e) => {
    const newTask = e.target.parentNode.parentNode.firstChild.value;
    let errorTime;
    let error = document.createElement("span");
    if (newTask.trim() === "") {
      error.classList.add("error");
      error.innerText = "Please Enter A Task";

      prependElement(div, error);
      errorTime = setTimeout(() => {
        e.target.parentNode.parentNode.firstChild.remove();
      }, 1000);
      return;
    }
    clearTimeout(errorTime);
    let newTaskContainer = CE("div");
    let newTaskParagraph = CE("p");
    addClass(newTaskParagraph, "task_paragraph");
    newTaskParagraph.innerText = newTask;

    let taskCountContainer = CE("div");
    let taskCountSpan = CE("span");
    taskCountSpan.id = "taskCountSpan";
    let taskCount = CE("input");
    let startCount = 0;
    taskCountSpan.innerHTML = 0;
    let currentCount = (taskCount.value = startCount);
    taskCount.value = startCount;
    addClass(taskCountContainer, "task_count__container");
    let plusCount = CE("button");
    plusCount.id = "plusCount";
    plusCount.innerText = "+";
    plusCount.addEventListener("click", (e) => {
      currentCount += 1;
      taskCountSpan.innerHTML = currentCount;
    });
    let minusCount = CE("button");
    minusCount.innerText = "-";
    minusCount.id = "minusCount";
    minusCount.addEventListener("click", (e) => {
      currentCount -= 1;
      taskCountSpan.innerHTML = currentCount;
    });

    appendElement(taskCountContainer, newTaskParagraph);
    appendElement(div, taskCountContainer);
    appendElement(taskCountContainer, taskCountSpan);
    appendElement(taskCountContainer, plusCount);
    appendElement(taskCountContainer, minusCount);
    div.appendChild(newTaskContainer);
    remove_task_button.disabled = false;
    removeClass(remove_task_button, "disabled");
    e.target.disabled = true;
  });
  appendElement(container, div);
  // For removing task
  remove_task_button.addEventListener("click", (e) => {
    e.target.parentNode.parentNode.remove();
  });
};

export default createTask;

const container = document.querySelector("#container");

const p = document.createElement("p");
p.setAttribute("style", "color: red");
p.textContent = "Hey I'm red!";

const header = document.createElement("h3");
header.setAttribute("style", "color: blue");
header.textContent = "I'm a blue h3!";

container.appendChild(p);
container.appendChild(header);

const div = document.createElement("div");
div.classList.add("another-div");
div.setAttribute("style", "background-color: pink; border: 2px solid black");

const headerTwo = document.createElement("h1");
headerTwo.textContent = "I'm in a div";

const pTwo = document.createElement("p");
pTwo.textContent = "ME TOO!";

div.appendChild(headerTwo);
div.appendChild(pTwo);

container.appendChild(div);
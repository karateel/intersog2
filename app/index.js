// const inputValue = document.getElementById('searchInput').value;


const search = 'javascript'
const key = 'AIzaSyDmFXBN2Oz33F7EZfNUHxrmC9Fz8F5Q1EU'
const searchResults = '30'

const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${searchResults}&q=${search}&key=${key}`


function createBtn(className) {
  const btn = document.createElement("button");
  btn.className = className;
  btn.innerText = "Get data";
  return btn;
}

function createList(className) {
  const list = document.createElement("ul");
  list.className = className;
  return list;
}

const getDataBtn = createBtn("btn");
document.body.appendChild(getDataBtn);
document.body.appendChild(createList("list"));

getDataBtn.addEventListener("click", (event) => {
  event.target.innerText = "getting data...";
  getData(url)
    .then(response => onLoad(response))
    .catch(error => console.error(error));
})

function getData() {
  return fetch(url)
    .then(res => res.json());
}

function onLoad(data) {
  const btn = document.querySelector("button");
  if (data.info === null) {
    btn.innerText = "end";
    return;
  }
  btn.innerText = "Get data";
  btn.disabled = false;
  const list = document.querySelector("ul");
  list.innerHTML = "";
  let dataValues = Object.keys(data)
  for (let i of dataValues[5]) {
      const li = document.createElement("li");
      li.innerText = i;
      list.appendChild(li);
  }
}
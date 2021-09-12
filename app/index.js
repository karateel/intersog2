// const inputValue = document.getElementById('searchInput').value;


const search = 'javascript'
const key = 'AIzaSyDmFXBN2Oz33F7EZfNUHxrmC9Fz8F5Q1EU'
const searchResults = '30'

const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${searchResults}&q=${search}&key=${key}`

const getDataBtn = document.getElementById('getData')

getDataBtn.addEventListener("click", (event) => {
  event.preventDefault();

  getData("GET", url , onLoad, onError);
})

function getData(request, url, callback, onerror) {
  const xhr = new XMLHttpRequest();
  xhr.open(request, url);
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = () => {
    if (xhr.status !== 200) {
      onerror(xhr);
      return;
    }
    callback(xhr.response);
  }
  xhr.onerror = () => {
    onerror(xhr);
  }
}

function onLoad(data) {
  if (data.info === null) return
  const list = document.getElementById('list');
  for (let i of Object.entries(data)) {
    for(let j of i.values()){
      console.log(j)
      const li = document.createElement("li");
      li.innerText = j[6]
      list.appendChild(li);
    }

    // if(data[i] === "object"){
    //   onLoad(data[i].items)
    // } else {
    // }
  }
}
function onError(xhr) {
  console.error(new Error(`Error ${xhr.status}`));
}


// if(data.hasOwnProperty(i)) {
//   console.log(data)
//   console.log(i)
//   console.log()
// }
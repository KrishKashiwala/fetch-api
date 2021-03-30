// let fetchBtn = document.querySelector("#fetchBtn");
// let backupBtn = document.querySelector("#backupBtn");
// fetchBtn.addEventListener("click", function () {
//   console.log("you have clicked");
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
//   xhr.getResponseHeader("content-type", "application/json");
//   xhr.onprogress = function () {
//     console.log("on progress");
//   };
//   xhr.onload = function () {
//     if (this.status == 200) console.log(this.responseText);
//     else console.error(this.errorCode);
//   };

//   xhr.send();
//   console.log("we are done");
// });
// backupBtn.addEventListener("click", function () {
//   console.log("you have clicked");
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
//   xhr.getResponseHeader("content-type", "application/json");
//   xhr.onprogress = function () {
//     console.log("on progress");
//   };
//   xhr.onload = function () {
//     if (this.status == 200) {
//       const obj = JSON.parse(this.responseText);
//       console.log(obj);
//       const list = document.querySelector("#list");
//       str = "";
//       for (key in obj) {
//         str += `<li>${obj[key].employee_name}</li>`;
//       }
//       list.innerHTML = str;
//     } else console.error("no data");
//   };

//   xhr.send();
//   console.log("we are done");
// });

// ............................... fetch api ..............................................

const btnTxt = document.querySelector("#btntxt");
const getUsers = document.querySelector("#getusers");
const getPosts = document.querySelector("#getposts");
const addPost = document
  .querySelector("#addPost")
  .addEventListener("submit", addPosts);
btnTxt.addEventListener("click", function () {
  const normals = document.querySelector("#normal");

  fetch("ver-1.txt")
    .then((res) => res.text())
    .then((data) => (normals.innerHTML = data))
    .catch((err) => console.log(err));
});
getUsers.addEventListener("click", function () {
  const normals = document.querySelector("#normal");
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      let jsonoutput = '<h2 class = "mb-4">Users</h2>';
      data.forEach((users) => {
        jsonoutput += `
        <ul class ="list-group">
            <li class= "list-group-item mb-3">ID : ${users.id}</li>
             <li class= "list-group-item mb-3">Name : ${users.name}</li>
              <li class= "list-group-item mb-3">Email : ${users.email}</li>
               
        </ul>
        `;
      });
      normals.innerHTML = jsonoutput;
    });
});
getPosts.addEventListener("click", function () {
  const normals = document.querySelector("#normal");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let jsonoutput = '<h2 class = "mb-4">Posts</h2>';
      data.forEach((users) => {
        jsonoutput += `
      
               ${
                 /*<li>Users ID : ${users.userId}</li>
              <li>ID : ${users.id}</li>
      <li>Title : ${users.title}</li> */ ""
               }
               <div class = "card card-body mb-3">
               <h3>${users.title}</h3>
              <p>${users.body}</p>
              </div>
               
        
        `;
      });
      normals.innerHTML = jsonoutput;
    });
});
function addPosts(e) {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  // console.log(title);
  // console.log(body);
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json text/plain  */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      body: body,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

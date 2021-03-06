var data = [
  {
    imgSrc: "res/pic1.jpg",
    meta: "2021/08/15",
    postTitle: "Steak is good good eat!",
    postContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dicta dolore molestias ipsam inventore nihil quos doloribus atque repudiandae fugiat. Quibusdam aut incidunt aliquam doloremque expedita inventore dolorum vitae culpa?",
  },
  {
    imgSrc: "res/pic2.jpg",
    meta: "2021/08/15",
    postTitle: "I'm lovin' it!",
    postContent:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut illo tenetur qui sit, iste incidunt atque quas, ab error sunt laborum deserunt, excepturi expedita repudiandae dolores. Debitis alias tempore soluta?",
  },
];


function fetchData(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json() )
  .then(json => {
    json.forEach(element => {
      //console.log(element);
      let {title:postTitle, body:postContent} = element;
      //console.log(postTitle+"__"+postContent);
      let p = {
        imgSrc:'res/pic1.jpg',
        meta:'20211010',
        postTitle,
        postContent
      }
      data.push(p);
    });

    displayPosts();
  })
}

fetchData();


function displayPosts() {
  let postsDiv = document.getElementById("posts");
  postsDiv.innerHTML = "";

  data.forEach((element, index) => {
    let post = document.createElement("div");
    post.classList.add("post");
    let img = document.createElement("img");
    img.classList.add("postImg");
    img.src = element.imgSrc;
    img.alt = "";
    post.appendChild(img);

    let postData = document.createElement("div");
    postData.classList.add("postData");
    let meta = document.createElement("h5");
    meta.classList.add("meta");
    meta.innerHTML = element.meta;
    postData.appendChild(meta);

    let postTitle = document.createElement("h3");
    postTitle.classList.add("postTitle");
    postTitle.id = "title_" + index;
    postTitle.innerHTML = element.postTitle;
    postData.appendChild(postTitle);

    let postContent = document.createElement("p");
    postContent.id = "postContent_" + index;
    postContent.classList.add("postContent");
    postContent.innerHTML = element.postContent;
    postData.appendChild(postContent);

    let btn = document.createElement("input");
    btn.type = "button";
    btn.value = "Read More";
    btn.id = "readMoreBtn_"+index;
    postData.appendChild(btn);

    let modifyBtn = document.createElement("input");
    modifyBtn.type = "button";
    modifyBtn.value = "Modify";
    modifyBtn.id = "modifyBtn_" + index;
    postData.appendChild(modifyBtn);

    modifyBtn.addEventListener("click", modifyPost);

    post.appendChild(postData);
    postsDiv.appendChild(post);
  });
}

function modifyPost(e) {
  console.log(e);
  let id = e.target.id.split("_")[1];
  let titleEle = document.getElementById("title_" + id);

  let titleEdit = document.createElement("input");
  titleEdit.type = "text";
  titleEdit.id = "title_" + id;
  titleEdit.value = titleEle.innerText;

  titleEle.replaceWith(titleEdit);

  let postContent = document.getElementById("postContent_" + id);
  let contentEdit = document.createElement("textarea");
  contentEdit.id = "postContentEdit_" + id;
  contentEdit.classList.add("postContentEdit");
  contentEdit.innerText = postContent.innerText;
  postContent.replaceWith(contentEdit);

  let p = contentEdit.parentElement;
  p.insertBefore(document.createElement("br"), contentEdit);
  p.insertBefore(
    document.createElement("br"),
    document.getElementById("readMoreBtn_"+id)
  );
  let btn = document.getElementById("modifyBtn_" + id);
  btn.value = "Save";
  btn.removeEventListener("click", modifyPost);

  btn.addEventListener("click", savePost);

  let rmBtn = document.createElement("input");
  rmBtn.type = "button";
  rmBtn.value = "Delete";
  rmBtn.id = "removeBtn_" + id;
  p.appendChild(rmBtn);
  rmBtn.addEventListener('click', removePost);
}

function removePost(e){
 let id = e.target.id.split("_")[1];
 data = data.filter((ele, index) => index != id);
 displayPosts();
}

function savePost(e) {
  let id = e.target.id.split("_")[1];
  data[id].postTitle = document.getElementById("title_" + id).value;

  data[id].postContent = document.getElementById("postContentEdit_" + id).value;

  document.getElementById('removeBtn_'+id).remove();
  
  displayPosts();
}



function addPost(e) {
  e.preventDefault();

  let inputForm = document.getElementById("inputPost");

  let newPost = {
    imgSrc: "res/pic1.jpg",
    meta: Date.now(),
    postTitle: inputForm.elements["title_n"].value,
    postContent: inputForm.elements["content_n"].value,
  };

  data = [...data, newPost];
  // data = data.push(newPost);
  //   console.log(data);
  displayPosts();
  // console.log(document.getElementsByName('title_n')[0].value);
}

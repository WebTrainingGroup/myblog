
var data = [
    {"imgSrc":"pic/boat.jpg",
    "postContent":"<span>L</span>orem ipsum dolor sit amet consectetur adipisicing elit.     Id provident quasi maiores. Perspiciatis, a alias ab id voluptates    ipsam sed aliquam accusamus molestiae voluptas autem iste nemo et     temporibus corrupti.",
    "meta":"20210928"
    },
    {
    "imgSrc":"pic/pexels-photo-2346.jpeg",
    "postContent":"Lorem ipsum dolor sit amet consectetur adipisicing elit.     Id provident quasi maiores. Perspiciatis, a alias ab id voluptates    ipsam sed aliquam accusamus molestiae voluptas autem iste nemo et     temporibus corrupti.",
    "meta":"20210928"
    },
    {
    "imgSrc":"pic/pexels-photo-1591373.jpeg",
    "postContent":"Lorem ipsum dolor sit amet consectetur adipisicing elit.     Id provident quasi maiores. Perspiciatis, a alias ab id voluptates    ipsam sed aliquam accusamus molestiae voluptas autem iste nemo et     temporibus corrupti.",
    "meta":"20210928"
    },
    {
    "imgSrc":"pic/pexels-photo-1660995.jpg",
    "postContent":"Lorem ipsum dolor sit amet consectetur adipisicing elit.     Id provident quasi maiores. Perspiciatis, a alias ab id voluptates    ipsam sed aliquam accusamus molestiae voluptas autem iste nemo et     temporibus corrupti.",
    "meta":"20210928"
    }
]


function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
        //.then(response => console.log(response));
      //.then(json => console.log(json))
        .then(json => {
            json.forEach(element => {
                let {body:postContent} = element;
                let p = {
                    imgSrc:"pic/pexels-photo-2346.jpeg", 
                    postContent, 
                    meta:"20211024" 
                }
                data.push(p);
                });
            displayPosts();
        },
            //console.log(data),
            //displayPosts()   //-->為什麼不能放這裡? 不是已經把資料都push到data了嗎?
        );
    }

fetchData();


function displayPosts() {
    let postsDiv = document.getElementById("posts");
    postsDiv.innerHTML = "";

    data.forEach((element, index) =>{
        let post = document.createElement("div");
        post.classList.add("post");
        let pic = document.createElement("img");
        pic.src = element.imgSrc;
        post.appendChild(pic);
    
        let postContent = document.createElement("p");
        postContent.innerHTML = element.postContent;
        postContent.id = 'content_' + index ;   
        post.appendChild(postContent);
    
        let postDate = document.createElement("div");
        postDate.classList.add("date");
        postDate.id = "date_" + index ;
        postDate.innerHTML = element.meta;
        post.appendChild(postDate);

        let DateBtn = document.createElement("input");
        DateBtn.classList.add("PostButtons");
        DateBtn.type = "button";
        DateBtn.value = "modifyDate";
        DateBtn.id = 'DateBtn_' + index ;
        post.appendChild(DateBtn);

        DateBtn.addEventListener("click", modifyDate);


        let PostBtn = document.createElement("input");
        PostBtn.classList.add("PostButtons");
        PostBtn.type = "button";
        PostBtn.value = "modifyPost";
        PostBtn.id = 'PostBtn_' + index ;
        post.appendChild(PostBtn);

        PostBtn.addEventListener("click", modifyPost);


        let DelPostBtn = document.createElement("input");
        DelPostBtn.classList.add("PostButtons");
        DelPostBtn.type = "button";
        DelPostBtn.value = "Kill" ;
        DelPostBtn.id = 'DelBtn_' + index ;
        post.appendChild(DelPostBtn);
        DelPostBtn.addEventListener("click", delPost);

    
        postsDiv.appendChild(post);
    });
}

function modifyDate(e){
    let dateId = e.target.id.split("_")[1];
    let dateEle = document.getElementById("date_" + dateId);
//藉由按鈕傳來的事件，找到ID，用來拼湊出目標ID

    let dateEdit = document.createElement("input");
    dateEdit.type = "text";
    dateEdit.id = "date_" + dateId;
    dateEdit.value = dateEle.innerText; //創造 input 元素(輸入框)

    dateEle.replaceWith(dateEdit); //將原本的Date內容，替換成可編輯的輸入框

    let btn = document.getElementById("DateBtn_" + dateId);

    btn.value = "save"; //變更原本Date按鈕的value，並移除原本的監聽器

    btn.removeEventListener("click" , modifyDate);

    btn.addEventListener("click", saveDate);//加上新的監聽器，導向saveDate()
}

function saveDate(e){
    let id = e.target.id.split("_")[1];
    data[id].meta = document.getElementById("date_" + id).value;
    displayPosts();
    //利用傳來的事件得出索引值，再利用索引去修改data物件的meta這個key的內容
    //把他替換成前面輸入框的內容(用date_ + id去找)
}


function modifyPost(e){
    let postId = e.target.id.split("_")[1];
    let postEle = document.getElementById("content_" + postId);

    let postEdit = document.createElement("textarea");
    //postEdit.type = "text";
    postEdit.id = "content_" + postId;
    postEdit.cols = 40;
    postEdit.rows = 5;
    postEdit.value = postEle.innerText;    

    postEle.replaceWith(postEdit);

    let btn = document.getElementById("PostBtn_" + postId);
    btn.value = "savePost";
    btn.removeEventListener("click" , modifyPost);
    btn.addEventListener("click", savePost);
}

function savePost(e){
    let id = e.target.id.split("_")[1];
    data[id].postContent = document.getElementById("content_" + id).value;
    displayPosts();
}

function delPost(e){
    let id = e.target.id.split("_")[1];
    data = data.filter(post => data.indexOf(post) != id);
    displayPosts();
}

//失敗的寫法，不知道怎麼同時把id跟index丟給 killPost()
// function delPost(e){  
//     let id = e.target.id.split("_")[1];
//     data = data.filter(killPost(id,index));
// }

// function killPost(post,index,id){
//      return index < 2;
// }



//displayPosts();

function addPost(e){
    e.preventDefault();
    let inputForm = document.getElementById("postAdd");
    let newPost = {
        "imgSrc":"pic/boat.jpg",
        "postContent":inputForm.elements["PostContent"].value,
        //"meta":Date.now();
        "meta":Date(),
    };

    data = [...data, newPost];

    displayPosts();
}



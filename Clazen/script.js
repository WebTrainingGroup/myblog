
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
        postContent.appendChild(DateBtn);

        DateBtn.addEventListener("click", modifyDate);


        let PostBtn = document.createElement("input");
        PostBtn.classList.add("PostButtons");
        PostBtn.type = "button";
        PostBtn.value = "modifyPost";
        PostBtn.id = 'PostBtn_' + index ;
        postContent.appendChild(PostBtn);

        // PostBtn.addEventListener("click", modifyPost);

    
        postsDiv.appendChild(post);
    });
}

function modifyDate(e){
    let dateId = e.target.id.split("_")[1];
    let dateEle = document.getElementById("date_" + dateId);

    let dateEdit = document.createElement("input");
    dateEdit.type = "text";
    dateEdit.id = "date_" + dateId;
    dateEdit.value = dateEle.innerText;

    dateEle.replaceWith(dateEdit);

    let btn = document.getElementById("DateBtn_" + dateId);
    btn.value = "save";
    btn.removeEventListener("click" , modifyDate);

    btn.addEventListener("click", saveDate);
}



function saveDate(e){
    let id = e.target.id.split("_")[1];
    data[id].meta = document.getElementById("date_" + id).value;
    displayPosts();
}



displayPosts();

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
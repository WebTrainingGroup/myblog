
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

    data.forEach(element =>{
        let post = document.createElement("div");
        post.classList.add("post");
        let pic = document.createElement("img");
        pic.src = element.imgSrc;
        post.appendChild(pic);
    
        let postContent = document.createElement("p");
        postContent.innerHTML = element.postContent;
        post.appendChild(postContent);
    
        let postDate = document.createElement("div");
        postDate.classList.add("date");
        postDate.innerHTML = element.meta;
        post.appendChild(postDate);
    
        postsDiv.appendChild(post);
    });
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
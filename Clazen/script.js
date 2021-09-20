
var data = [
    {"imgSrc":"pic/boat.jpg",
    "postContent":"Lorem ipsum dolor sit amet consectetur adipisicing elit.     Id provident quasi maiores. Perspiciatis, a alias ab id voluptates    ipsam sed aliquam accusamus molestiae voluptas autem iste nemo et     temporibus corrupti."
    },
    {
    "imgSrc":"pic/pexels-photo-2346.jpeg",
    "postContent":"Lorem ipsum dolor sit amet consectetur adipisicing elit.     Id provident quasi maiores. Perspiciatis, a alias ab id voluptates    ipsam sed aliquam accusamus molestiae voluptas autem iste nemo et     temporibus corrupti."
    },
    {
    "imgSrc":"pic/pexels-photo-1591373.jpeg",
    "postContent":"Lorem ipsum dolor sit amet consectetur adipisicing elit.     Id provident quasi maiores. Perspiciatis, a alias ab id voluptates    ipsam sed aliquam accusamus molestiae voluptas autem iste nemo et     temporibus corrupti."
    },
    {
    "imgSrc":"pic/pexels-photo-1660995.jpg",
    "postContent":"Lorem ipsum dolor sit amet consectetur adipisicing elit.     Id provident quasi maiores. Perspiciatis, a alias ab id voluptates    ipsam sed aliquam accusamus molestiae voluptas autem iste nemo et     temporibus corrupti."
    }
]

let postsDiv = document.getElementById("posts");

data.forEach(element =>{
    let post = document.createElement("div");
    post.classList.add("post");
    let pic = document.createElement("img");
    pic.src = element.imgSrc;
    post.appendChild(pic);

    let postContent = document.createElement("p");
    postContent.innerHTML = element.postContent;
    post.appendChild(postContent);

    postsDiv.appendChild(post);
});
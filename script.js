const body=document.getElementById("body");
const follower=document.getElementById("follower");

function move(details) {
    follower.style.left=details.clientX+"px";
    follower.style.top=details.clientY+"px";
    if (details.clientX>=800) {
        body.style.backgroundColor="lightblue";
        follower.style.backgroundColor="red";

    }
    else if (details.clientX<800) {
        body.style.backgroundColor="red";
        follower.style.backgroundColor="lightblue";
    }
}
body.addEventListener("mousemove",move);


const image=document.getElementById("image");
const heart=document.getElementsByClassName("heart")[0];

function timeout() {
    heart.style.transform="scale(0)";
}
function love() {
    heart.style.transform="scale(1)";
    setTimeout(timeout,800)
}
image.addEventListener("dblclick",love)
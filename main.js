const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const names = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(
  ".animated-bg-text"
);

function getData() {
  header.innerHTML = '<img src="book-image.jpg" alt="" />';
  title.innerHTML = "Lorem ipsum dolor sit amet";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odit recusandae quidem";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/19.jpg" alt="" />';
  names.innerHTML = "Felix Nigga";
  date.innerHTML = "Sept 15 2023";

  animated_bgs.forEach((bg) =>
    bg.classList.remove("animated-bg")
  );

  animated_bg_texts.forEach((bg) =>
    bg.classList.remove("animated-bg-text")
  );
}

setTimeout(getData, 2500);

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});

const userData = [
    "./images/user1.jpg",
    "./images/user2.jpg",
    "./images/user3.jpg",
    "./images/user4.jpg"
],
[
    " Really good . I couldn't have asked for more than this.I would like to personally thank you for your outstanding product.",

    "Needless to say we are extremely satisfied with the result . Carlos has completely suepassed our expectations. Really good . Thank you for making it painless, pleasant and most of all hassle free.",

    "Carlos has really helped our business. You won't regret it. I would like to personally thank you for your outstanding product. I am so pleased with this product.",

    "carlos is the real deal! I will refer everyone I know. I am so pleased with this product. I would like to personally thank you for your outstanding product."
],
[
    "Jared Warner",
    "Naomi Smith",
    "Sarah Johnson",
    "free Goldberg"
],
[
    "CEO of BeServer",
    "Developer at BeServer",
    "Content Creator",
    "CEO of Seone"
];
const pag = document.querySelectorAll(".pagination li");
const userImg = document.querySelector(".user-img");
const userText = document.querySelector(".user-text");
const userName = document.querySelector(".user-name");
const userTitle = document.querySelector(".user-title");

for(let i = 0; i < pag.length; i++) {
    pag[i].addEventListener("click", () => {
        for(let j = 0; j < pag.length; j++) {
            pag[j].classList.remove("pag-active");
        }
        pag[i].classList.add("pag-active");
        userImg.src = userData[0][i];
        userText.innerHTML = userReviews[1][i];
        userName.innerHTML = userNames[2][i];
        userTitle.innerHTML = userTitles[3][i];
    });
}

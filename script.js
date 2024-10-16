const socialsCard = document.getElementById("socials-card")
const shareBtn = document.getElementById("share-btn")
let viewPortWidth = window.innerWidth || document.documentElement.clientWidth
shareBtn.onclick = function buttonView() {
    if (socialsCard.style.display === "none" || socialsCard.style.display === "") {
        socialsCard.style.display = "block"
    } else {
        socialsCard.style.display = "none"
    }
};
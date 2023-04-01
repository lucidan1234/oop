let showHeroesBtn = document.querySelector(".show-heroes");
// console.log(showHeroesBtn);
let heroesContainer = document.querySelector(".heroes-container");
// console.log(heroesContainerBtn);
let startFightBtn = document.querySelector(".start-fight");
// console.log(startFightBtn);

let wHero = document.querySelector(".w-hero");
let wHeroAvatar = document.querySelector(".w-hero-avatar");
let wDetails = document.querySelector(".w-details");
let wHeroShow = document.querySelector(".w-hero-show");

let cHero = document.querySelector(".c-hero");
let cHeroAvatar = document.querySelector(".c-hero-avatar");
let cDetails = document.querySelector(".c-details");
let cHeroShow = document.querySelector(".c-hero-show");

let bHero = document.querySelector(".b-hero");
let bHeroAvatar = document.querySelector(".b-hero-avatar");
let bDetails = document.querySelector(".b-details");
let bHeroShow = document.querySelector(".b-hero-show");

let aHero = document.querySelector(".a-hero");
let aHeroAvatar = document.querySelector(".a-hero-avatar");
let aDetails = document.querySelector(".a-details");
let aHeroShow = document.querySelector(".a-hero-show");

let fHero = document.querySelector(".f-hero");
let fHeroAvatar = document.querySelector(".f-hero-avatar");
let fDetails = document.querySelector(".f-details");
let fHeroShow = document.querySelector(".f-hero-show");

showHeroesBtn.addEventListener("click", showHeroesFunc);

function showHeroesFunc() {
  heroesContainer.classList.add("d-flex");
  showHeroesBtn.classList.add("d-none");
  startFightBtn.classList.add("d-block");
}

wHero.addEventListener("click", showHeroDetailsW);
cHero.addEventListener("click", showHeroDetailsC);
bHero.addEventListener("click", showHeroDetailsB);
aHero.addEventListener("click", showHeroDetailsA);
fHero.addEventListener("click", showHeroDetailsF);

function showHeroDetailsW() {
  wHeroAvatar.classList.add("d-none");
  wDetails.classList.add("d-block");
  wHeroShow.classList.add("d-block");
}

function showHeroDetailsB() {
  bHeroAvatar.classList.add("d-none");
  bDetails.classList.add("d-block");
  bHeroShow.classList.add("d-block");
}

function showHeroDetailsC() {
  cHeroAvatar.classList.add("d-none");
  cDetails.classList.add("d-block");
  cHeroShow.classList.add("d-block");
}

function showHeroDetailsA() {
  aHeroAvatar.classList.add("d-none");
  aDetails.classList.add("d-block");
  aHeroShow.classList.add("d-block");
}

function showHeroDetailsF() {
  fHeroAvatar.classList.add("d-none");
  fDetails.classList.add("d-block");
  fHeroShow.classList.add("d-block");
}

wHeroShow.addEventListener("click", showHeroAvatarW);
cHeroShow.addEventListener("click", showHeroAvatarC);
bHeroShow.addEventListener("click", showHeroAvatarB);
aHeroShow.addEventListener("click", showHeroAvatarA);
fHeroShow.addEventListener("click", showHeroAvatarF);

function showHeroAvatarW() {
  wHeroAvatar.classList.remove("d-none");
  wDetails.classList.remove("d-block");
  wHeroShow.classList.remove("d-block");
}

function showHeroAvatarB() {
  bHeroAvatar.classList.remove("d-none");
  bDetails.classList.remove("d-block");
  bHeroShow.classList.remove("d-block");
}

function showHeroAvatarC() {
  cHeroAvatar.classList.remove("d-none");
  cDetails.classList.remove("d-block");
  cHeroShow.classList.remove("d-block");
}

function showHeroAvatarA() {
  aHeroAvatar.classList.remove("d-none");
  aDetails.classList.remove("d-block");
  aHeroShow.classList.remove("d-block");
}

function showHeroAvatarF() {
  fHeroAvatar.classList.remove("d-none");
  fDetails.classList.remove("d-block");
  fHeroShow.classList.remove("d-block");
}

startFightBtn.addEventListener("click", () => {
  alert(epicFight.findWinner());
});

// function myFunction() {
//   document.getElementById("btn start-fight").innerHTML =
//     "Durion is the Winner!!";
//   onclick = "Mesaj()";
// }

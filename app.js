const logos = [
  { src: "img/specialized.jpg", name: "specialized" },
  { src: "img/GT Bicycles.jpg", name: "gt" },
  { src: "img/rock shox.jpg", name: "rock shox" },
  { src: "img/Cannondale Bicycle.jpg", name: "cannondale" },
  { src: "img/SRAM.jpg", name: "sram" },
  { src: "img/marzocchi.jpg", name: "marzocchi" },
  { src: "img/mavic.jpg", name: "mavic" },
  { src: "img/rockMachine.jpg", name: "rock machine" },
];

const getLogos = () => {
  return [...logos, ...logos].sort(() => Math.random() - 0.5);
};
const boardGenerator = () => {
  const board = document.createDocumentFragment();
  const section = document.querySelector("section");
  section.classList.add("card-board");
  // section.setAttribute("tabindex", 0);
  let cardLogos = getLogos();
  cardLogos.forEach((logo) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("img");
    // card.setAttribute("tabindex", 0);
    card.classList.add("card");
    card.setAttribute("id", logo.name);
    face.classList.add("face");
    face.setAttribute("alt", logo.name);
    back.classList.add("back");
    back.setAttribute("alt", "card back");
    face.src = logo.src;
    back.src = "img/back.jpg";
    card.appendChild(face);
    card.appendChild(back);
    section.appendChild(card);
  });
  section.appendChild(board);
};
boardGenerator(); //TODO: this func will start by button "start game"

const cardBoard = document.querySelector(".card-board");
const cards = document.querySelectorAll(".card");
// const flippedCards = [];
let isBoardFrezed = false;

const getFlipCard = ({ target }) => {
  if (target.nodeName === "IMG") {
    if (isBoardFrezed) return;
    const card = target.parentElement;
    card.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    if (flippedCards.length === 2) {
      isBoardFrezed = true;
      console.log(flippedCards);
      if (flippedCards[0].id === flippedCards[1].id) {
        setTimeout(() => {
          flippedCards.forEach((card) => {
            card.classList.add("hidden"), card.classList.remove("flipped");
          });
        }, 1000);
        isBoardFrezed = false;
        console.log(flippedCards);
      } else {
        setTimeout(() => {
          flippedCards.forEach((card) => {
            card.classList.remove("flipped");
          }, 1000);
          isBoardFrezed = false;
          console.log(flippedCards);
        });
      }
    }
    const allHiddenCards = document.querySelectorAll(".hidden");
    console.log(allHiddenCards);
  }
};

cardBoard.addEventListener("click", getFlipCard);

// TODO:  select card by arrows and flip by space
const switchElementsFocus = (event) => {
  let target = event.target;
  let nextSibling = target.nextSibling;
  switch (event.code) {
    case "ArrowUp":
      break;
    case "ArrowDown":
      break;
    case "ArrowRight":
      target.setAttribute("tabindex", -1);
      nextSibling.focus();
      // console.log(target.nextSibling);
      break;
    case "ArrowLeft":
      break;
    case "Space":
      // console.log(target.nodeName);
      // flippingCard(event);
      break;
  }
};

cardBoard.addEventListener("keydown", switchElementsFocus);

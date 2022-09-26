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
// TODO:  allow select/open card by tab key

const getLogos = () => {
  return [...logos, ...logos].sort(() => Math.random() - 0.5);
};
const boardGenerator = () => {
  const board = document.createDocumentFragment();
  const section = document.querySelector("section");
  section.classList.add("card-board");
  section.setAttribute("tabindex", 0);
  let cardLogos = getLogos();
  cardLogos.forEach((logo) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("img");
    // card.setAttribute("tabindex", -1);
    card.classList.add("card");
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
boardGenerator();

const cardBoard = document.querySelector(".card-board");
const cards = document.querySelectorAll(".card");
console.log(cards);

const flippingCard = (event) => {
  // console.log(
  //   event.target.nodeName,
  //   event.target.innerText,
  //   event.target.clasName,
  //   event.target.parentNode
  // );
  let parent = event.target.parentNode;
  if (event.target.nodeName === "IMG") {
    parent.classList.add("flip");
  }
};
cardBoard.addEventListener("click", flippingCard);

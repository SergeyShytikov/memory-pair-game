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
// TODO: set alt atribute and allow select/open card by tab key
const section = document.querySelector("section");

const getLogos = () => {
  return [...logos, ...logos].sort(() => Math.random() - 0.5);
};
const boardGenerator = () => {
  const board = document.createDocumentFragment();
  section.classList.add("card-board");
  section.setAttribute("tabindex", 0);
  let cardLogos = getLogos();
  cardLogos.forEach((logo) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("img");
    card.classList.add("card");
    card.setAttribute("tabindex", -1);
    face.classList.add("face");
    back.classList.add("back");
    face.src = logo.src;
    // back.src = "img/back.jpg";
    card.appendChild(face);
    card.appendChild(back);
    section.appendChild(card);
  });
  section.appendChild(board);
  main.appendChild(section);
};
boardGenerator();

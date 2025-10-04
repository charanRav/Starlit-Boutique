const items = [
  {name: "Luna Dress", type: "dress"},
  {name: "Starry Hat", type: "hat"},
  {name: "Moon Bag", type: "bag"},
  {name: "Twinkle Shoes", type: "shoes"}
];
const themes = [
  {name: "Starry Gala", required: "dress"},
  {name: "Moonlight Runway", required: "hat"},
  {name: "Casual Picnic", required: "shoes"},
  {name: "Galaxy Party", required: "bag"}
];
let currentTheme = null;
let score = 0;

const itemsDiv = document.getElementById("items");
items.forEach(it => {
  let el = document.createElement("div");
  el.className = "item";
  el.draggable = true;
  el.innerText = it.name;
  el.dataset.type = it.type;
  el.ondragstart = ev => ev.dataTransfer.setData("type", it.type);
  itemsDiv.appendChild(el);
});

const dropzone = document.getElementById("dropzone");
dropzone.ondragover = ev => ev.preventDefault();
dropzone.ondrop = ev => {
  ev.preventDefault();
  const type = ev.dataTransfer.getData("type");
  dropzone.innerText = type.toUpperCase();
  if(type === currentTheme.required){
    score += 10;
    alert("Perfect Match! +10");
  } else {
    score += 3;
    alert("Nice try! +3");
  }
  document.getElementById("score").innerText = score;
};

function newTheme(){
  currentTheme = themes[Math.floor(Math.random()*themes.length)];
  document.getElementById("theme").innerText = currentTheme.name;
  clearSlot();
}
function clearSlot(){
  dropzone.innerText = "Drop Outfit Here";
}
newTheme();

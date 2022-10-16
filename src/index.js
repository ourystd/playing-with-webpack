import join from "lodash/join";

import "./style.css";
import CarImage from "./car.webp";
import printMe from "./print";

function components() {
  const element = document.createElement("h1");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = join(["Hello", "webpack"], " ");

  const img = new Image(500);
  img.src = CarImage;

  // element.appendChild(img);

  const btn = document.createElement("button");
  btn.textContent = "Click here and check the console";

  btn.onclick = printMe;

  return [element, img, btn];
}
const App = document.createElement("div");
App.id = "app-root";

App.append(...components());

document.body.appendChild(App);

const CLASS_CURRENT = "viewing-type-current";
const DATA_VIEWING_TYPE = "viewingType";
const DATA_VIEWING_TYPE_CSS = "viewing-type";
const BUTTON_CLASS = "viewing-type-link";
const DEFAULT_VIEWING_TYPE = "tile";

let buttons = getButtons();
createViewFromUrl(buttons);
createButtonsHandler(buttons);

function createViewFromUrl(buttons) {
  let urlParams = new URLSearchParams(window.location.search);

  let type = urlParams.get("view") ?? DEFAULT_VIEWING_TYPE;
  console.log(type);

  let buttonsWithType = getButtonsWithType(type);
  console.log(buttonsWithType);
  if (buttonsWithType) {
    deleteClassCurrent(buttons);

    buttonsWithType.forEach(button => {
      changeView(button);
    });
  }
}

function getButtons() {
  let buttonClass = "." + BUTTON_CLASS;
  return document.querySelectorAll(buttonClass);
}
function getButtonsWithType(type) {
  let buttonClass = "." + BUTTON_CLASS + "[data-" + DATA_VIEWING_TYPE_CSS + "=" + type + "]";
  console.log(buttonClass);
  return document.querySelectorAll(buttonClass);
}

function createButtonsHandler(buttons) {
  buttons.forEach(button => {
    button.onclick = function (event) {
      event.preventDefault();

      deleteClassCurrent(buttons);
      changeView(button);
      changeUrl(button);

      return false;
    };
  });
}

function deleteClassCurrent(buttons) {
  buttons.forEach(button => {
    button.classList.remove(CLASS_CURRENT);
  });
}

function changeView(button) {
  button.classList.add(CLASS_CURRENT);

  const type = button.dataset[DATA_VIEWING_TYPE];
  let hotelList = document.querySelector("#hotels-list");

  if (type && hotelList) {
    hotelList.dataset[DATA_VIEWING_TYPE] = type;
  }
}

function changeUrl(button) {
  const url = button.getAttribute("href");
  window.history.pushState({}, "", url);
}

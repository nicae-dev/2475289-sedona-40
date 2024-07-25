// let buttonInc = document.querySelectorAll(".input-number-plus");

// buttonInc.forEach(button => {
//   button.onclick = function (param) {
//     let parent = this.closest(".input-number-wrapper");
//     let input = parent.querySelectorAll("input[type='number']");
//     input[0].value++;
//   };
// });


inputControl("input-number-plus", true);
inputControl("input-number-minus", false);

function inputControl(className, inc) {
  let buttonInc = document.querySelectorAll("." + className);
  console.log(buttonInc);

  buttonInc.forEach(button => {
    button.onclick = function (param) {
      let parent = this.closest(".input-number-wrapper");
      //только первый попавшийся
      let input = parent.querySelector("input[type='number']");
      console.log(input);
      let value = parseInt(input.value);
      const max = input.getAttribute("max");
      const min = input.getAttribute("min");
      if (inc) {
        value++;
      } else {
        value--;
      }
      if ((max === undefined || value <= max) && (min === undefined ||value >= min)) {
        input.value = value;
      }

    };
  });
}

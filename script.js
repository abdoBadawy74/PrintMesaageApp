let body = document.body;

let box = document.querySelector(".box");

let input = document.querySelector("[type='text']");

let btn = document.querySelector("button");

let msg = document.querySelector("p");

box.style.cssText =
  " width: 600px;padding: 20px 15px;border: 1px solid #6f6f6f;background-color: #f6f6f6;";

body.style.cssText =
  "  background-color: brown;height: 100vh;display: flex;justify-content: center;align-items: center;";

input.style.cssText =
  " width: 100%;height: 40px;padding: 5px;margin-bottom: 10px;";

btn.style.cssText =
  " width: 100%;height: 40px;padding: 5px;margin-bottom: 10px;  background-color: brown;color: #fff;font-size: 20px;cursor: pointer;border: 0;";

btn.onclick = function (e) {
  let inputValue = input.value;
  if (inputValue !== "") {
    msg.innerHTML = inputValue;
    // format padding after adding elment to box
    msg.style.cssText =
      "padding : 5px ;background-color: #2f4858;color: #fff;font-size: 20px;margin: 5px 0 0 0;text-align: center;";

    input.value = "";
  }
};

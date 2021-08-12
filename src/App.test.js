import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header";
import { readText } from "clipboard";
import {
  getByRole,
  getByTestId,
  fireEvent,
  waitFor,
  render,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "@jest/globals";

it("renders Heading without crashing", () => {
  const div2 = document.createElement("div");
  ReactDOM.render(<Header />, div2);
});
it("renders emoji list succesfully when the page loads", () => {
  render(<App />);
  //emoji satırlarını kapsayan divi seçtim. ve o divin 20 tane çocuğu olmalı dedim.
  const emojiListesiKapsayici = screen.getByTestId("all-emojis-cont");
  expect(emojiListesiKapsayici.childNodes.length === 20);
});
it("rerenders when new filtering operation done", () => {
  render(<App />);

  //input alanına "love" yazdırdım ve ekrana Dört Yapraklı Yonca emojisi gelmiş mi diye kontrol ettim.
  const myInput = document.getElementsByTagName("input");
  userEvent.type(myInput[0], "love");
  expect(screen.getByText("Four Leaf Clover"));
});
it("checks whether an emoji copied when clicked on it", () => {
  render(<App />);

  // tiklanacak elementi seçiyorum (bu örnekte 100 emojisi)
  const itemToBeClicked = screen.getByTestId("all-emojis-cont").firstChild;

  // tiklanacak elementin metin içeriğini seçiyorum,
  // biraz sonra karşılaştırma yaparken kullanacağım.
  // const myText = itemToBeClicked.dataset.clipboardText;

  // ilk sıradaki emoji div'ine tıklıyorum ve
  // bir kopyalama işlemi gerçekleşip gerçekleşmediğni test ediyorum
  document.execCommand = jest.fn();
  userEvent.click(itemToBeClicked);
  expect(document.execCommand).toHaveBeenCalledWith("copy");
});

// sayfadaki input alanını seçiyorum
// const pastingarea = screen.getByTestId("cp");

// // kopyalanan datayı input alanına yapıştırıyorum
// userEvent.paste(pastingarea, "100");
// console.log(pastingarea.value);

// navigator.clipboard.readText().then(text => pastingarea.value = text);

// pastingarea.addEventListener("paste", (e) => {
//   const myNewValue = e.clipboardData.getData("text");
//   this._reactInternalFiber.child.child.child.stateNode.setAttribute(
//     "love",
//     myNewValue
//   );
//   console.log(this._reactInternalFiber.child.child.child.stateNode);
//   console.log(e.clipboardData.getData("text"));
// });
// userEvent.click(pastingarea);
// pastingarea.dispatchEvent(
//   new KeyboardEvent("keydown", {
//     key: "v",
//     ctrlKey: true,
//     bubbles: true,
//     metaKey: true,
//   })
// );
// expect(document.execCommand).toHaveBeenCalledWith("paste");
// console.log(pastingarea.value);
// console.log(pastingarea.outerHTML);

// expect(pastingarea.value).toEqual(myText);
// // yapıştırılan metnin, yukarıdaki "myText" ile aynı olmasını bekliyorum
// expect(pastingarea.value).toEqual(myText);

// const myroot = screen.getByTestId("appdiv");

// expect(document.execCommand).toHaveBeenCalled("paste");

// test('Pasting data from the clipboard correctly', async () => {

//   let random = '100';

//   Object.assign(navigator, {
//       clipboard: {
//           readText: () => random
//       }
//   });

//   await render(<App />);

//   document.dispatchEvent(
//       new KeyboardEvent("keydown", {
//           key: "v",
//           ctrlKey: true,
//           bubbles: true,
//           metaKey: true
//       })
//   );

//   await waitFor(() => expect(screen.getByText('100')).toBeInTheDocument());

// });

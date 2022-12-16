import './main.scss';
import example from "./images/logo.svg";
import example2 from "./images/image.png";
import { test } from './exampl'

function component(text) {
  const element = document.createElement('h1');
  element.textContent = text;
  return element;
}

test('hello, TS файл работает');

document.body.prepend(component(`Проект собран на Webpack и посмотри console.log`));
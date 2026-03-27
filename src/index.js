import "./style.css";

import {pageLoad} from "./page-load.js";
pageLoad();

import {menuPageLoad} from "./menu-page.js";

import {aboutPageLoad} from "./about-page.js";

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');

homeButton.addEventListener('click', () => {
    const mainDiv = document.getElementById('content');
    mainDiv.textContent = '';
    pageLoad();
})

menuButton.addEventListener('click', () => {
    
    menuPageLoad();
})

aboutButton.addEventListener('click', () => {
    aboutPageLoad();
})
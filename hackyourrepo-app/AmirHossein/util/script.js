"use strict";

import elements from './elements.js'
import addrepoNames from './addRepoName.js';
window.onload = main;

import {fetchData} from './fetchData.js';

function main() {
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100'; // The repositories API
  const myElements = elements();
  fetchData(url)
    .then(data => addrepoNames(data, myElements.select, myElements.cardName, myElements.card, myElements.container, myElements.pagination))
    .catch(error => {
      console.log(error)
    })

}













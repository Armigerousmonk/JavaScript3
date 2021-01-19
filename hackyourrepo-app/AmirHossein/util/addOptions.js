import elFactory from './elfactory.js';

import elements from './elements.js'
const myElements2 = elements();
console.log(myElements2)

export default function addOption(data) {
    data.forEach(element => {
    const option = elFactory('option', {value: ''})
    option.innerHTML = element.name;
    option.value = element.name;
    // let x = myElements2.select
    x.appendChild(option);
    console.log(x)

})};
/*function getData(url) {
    fetch(url)
      .then(response => response.json)
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }

  getData('https://randomfox.ca/floof/');



async function getData(url) {
    try {
        const response = await fetch(url);
        return console.log(response)
    }
    catch(error) {
        console.log(error);
    };

}
getData('https://randomfox.ca/floof/')*/


const arrayOfWords = ['apple', 'tomatos', 'avocado'];

// const makeAllCaps = array => {
//   return new Promise((resolve, reject) => {
//     let capsArray = array.map(word => {
//       if (typeof word === 'string') {
//         return word.toUpperCase();
//       } else {
//         reject('Error: Not all items in the array are strings!');
//       }
//     });
//     resolve(capsArray);
//   });
// };

async function makeAllCaps(array) {
    try {
        let capsArray = await array.map(word => {
            if (typeof word === 'string') {
                return word.toUpperCase();
            }else {
                reject(error);
            }
        })
        return capsArray

    }
    catch(error) {
        return console.log('Error: Not all items in the array are strings!')
    }
}
makeAllCaps(arrayOfWords)
  .then(result => console.log(result))
  .catch(error => console.log(error));
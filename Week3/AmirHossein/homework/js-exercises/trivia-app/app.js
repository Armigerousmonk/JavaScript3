const elFactory = (type, attributes, ...children) => {    // Function for creating elements
    const el = document.createElement(type);
    let key;
    for (key in attributes) {
      el.setAttribute(key, attributes[key]);
    };

    children.forEach(child => {
      if (typeof child === 'string') {
        el.appendChild(document.createTextNode(child));
      } else {
        el.appendChild(child);
      }
    });

    return el
  };

  const container = elFactory('div', {class: 'container'},
    elFactory('h1',{}, 'Let\'s play some Trivia!'),
    elFactory('h3', {}, 'Try your best to figure out the answer. If you really have no clue, click on the question to reveal the answer.'));

console.log(container)

const list = elFactory('div', {id: 'list'})


document.body.appendChild(container);

const url = 'https://opentdb.com/api.php?amount=5'

function addTrivia(response) {

  response.results.forEach(element => {
    console.log(element)
    const list = elFactory('div', {id: 'list'},
                  elFactory('p', {class: 'question'},
                    elFactory('p', {class: 'answer'})))
    const questions = list.querySelector('.question');
    const answer = list.querySelector('.answer');
    questions.innerHTML = element.question;
    answer.innerHTML = element.correct_answer;
    list.appendChild(questions);
    list.appendChild(answer);
    container.appendChild(list);

})

}

function getData1() {
  fetch(url)
    .then(result => result.json())
    .then(response => {
      addTrivia(response)
      }
      )

}
getData1();



// async function getData(url) {
//     const fetchData = await fetch(url);
//     const jsonData = fetchData.json();

//     console.log(jsonData)


// }

// getData(url);

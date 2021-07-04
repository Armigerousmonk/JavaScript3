import elFactory from './elfactory.js';

// import addOption from './addOptions.js'
// import {runPagination} from './pagination.js'


function addrepoNames(data, select, cardName, card, container, pagination) {
    data.forEach(element => {
        const option = elFactory('option', {value: ''})
        option.innerHTML = element.name;
        option.value = element.name;
        select.appendChild(option);
    });
    // addOption(data);

    // Function to fetch data for items in select elemen.
    select.addEventListener('change', () => {
      document.querySelector('#left-side').style.display = 'block';
      document.querySelector('#contributor').style.display = 'block';
      cardName.innerHTML = ''
      // IF the value of option is equal to element name this function will work.
      // Despite showing error this section still works! I don't know how should I fix it.
      data.forEach(element => {
        if(select.value == element.name) {
          // Adding items to description part
          const repoDescription = card.querySelector('.rep-description');
          const repoName = card.querySelector('.repo-link');
          const forks = card.querySelector('.rep-fork');
          const update = card.querySelector('.rep-update');
          repoDescription.innerHTML = element.description;
          repoName.innerHTML = element.name;
          repoName.href = element.html_url;
          forks.innerHTML = element.forks;
          update.innerHTML = element.updated_at;

          const contributorsUrl = element.contributors_url;   // URL of contributors
          fetch(contributorsUrl)
          .then(response => response.json())

          // Creat and adding contributors name to the right side of the page.
          .then(data2 => {
            data2.forEach(element2 => {
              console.log(element2)
            let current_page = 1;
            const rows = 5;
            function displayList(items, cardName, rows_per_page, page) {
              cardName.innerHTML = '';
              page--;
              let start = rows_per_page * page;
              let end = start + rows_per_page;
              let paginatedItems = items.slice(start, end);

              for(let i = 0; i < paginatedItems.length; i++) {
                const smallCard = elFactory('div', {class: 'card small-card'},
                elFactory('img', {src: '', class: 'userPhoto', width: '50px'}),
                elFactory('a', {href: '', class: 'userName'}, ''),
                elFactory('div', {class: 'badge'}, ''));
                const userName = smallCard.querySelector('.userName');
                const image = smallCard.querySelector('img');
                const badge = smallCard.querySelector('.badge');
                let item = paginatedItems[i];
                image.src = item.avatar_url;
                userName.innerHTML = item.login;
                userName.href = item.html_url;
                badge.innerHTML = item.contributions;
                document.getElementById('error').style.display = 'none';
                cardName.appendChild(smallCard)

              }
            }

            function setUpPagination(items, cardName, rows_per_page) {
                cardName.innerHTML = "";
                let page_count = Math.ceil(items.length / rows_per_page);
                for (let i = 1; i < page_count +1 ; i++) {
                let btn = paginationButton(i);
                cardName.appendChild(btn);
                }
            }

            function paginationButton(page) {
                let button = document.createElement('button');
                button.innerText =  page;
                if (current_page == page) button.classList.add('active');
                button.addEventListener('click', function () {
                  current_page = page;
                  displayList(data2, cardName, rows, current_page)
                  let current_btn = document.querySelector('.pagenumbers button.active');
		              current_btn.classList.remove('active');
		              button.classList.add('active');
                })
                return button;
            }

            displayList(data2, cardName, rows, current_page)
            setUpPagination(data2, pagination,rows)
            });
            })
            .catch(error => {
              document.getElementById('error').innerHTML = error;
              console.log(error)
              document.getElementById('error').style.display = 'block';
            })
            console.log(container)
        }
      })
    })
  };

  export default addrepoNames;
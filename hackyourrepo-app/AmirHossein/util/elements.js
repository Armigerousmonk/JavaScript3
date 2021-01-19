import elFactory from './elfactory.js'

function elements() {
    const container = elFactory('div', { class: 'container' });
    const header = elFactory('section', { id: 'header' },
      elFactory('p', {}, 'HYF Repositories'),
      elFactory('select', { class: 'selectMenu' }
      ));
    const bottomBox = elFactory('div', { class: 'bottom-box' });
    const errorBox = elFactory('div', { id: 'error' });
    const leftSide = elFactory('section', { id: 'left-side' });
    const card = elFactory('div', { class: 'card' },
      elFactory('table', {},
        elFactory('tr', {},
          elFactory('td', { class: 'col-left' }, 'Repositories: '),
          elFactory('td', { class: 'col-right rep-text' }, elFactory('a', { href: '#', class: 'repo-link' }))),
        elFactory('tr', {},
          elFactory('td', { class: 'col-left' }, 'Description: '),
          elFactory('td', { class: 'col-right rep-description' }, '')),
        elFactory('tr', {},
          elFactory('td', { class: 'col-left' }, 'Forks: '),
          elFactory('td', { class: 'col-right rep-fork' }, '')),
        elFactory('tr', {},
          elFactory('td', { class: 'col-left' }, 'Update: '),
          elFactory('td', { class: 'col-right rep-update' }, ''))));

    const rightSide = elFactory('section', { id: 'right-side' },
      elFactory('div', { id: 'contributor' }, 'Contributors'));
    const select = header.querySelector('select');
    const cardName = elFactory('div', { id: 'cardNameBox' });
    const pagination = elFactory('div', {class: 'pagenumbers', id: 'pagination'});

    container.appendChild(header);
    container.appendChild(errorBox);
    bottomBox.appendChild(leftSide);
    bottomBox.appendChild(rightSide);
    leftSide.appendChild(card);
    rightSide.appendChild(cardName);
    rightSide.appendChild(pagination);
    container.appendChild(bottomBox);
    document.body.appendChild(container)
    return {leftSide, rightSide, card, select, cardName, container, pagination}

  }

  export default elements;

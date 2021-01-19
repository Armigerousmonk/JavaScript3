import elFactory from './elfactory.js';
function runPagination() {
    const list_element = document.querySelector('#cardNameBox');
    console.log(list_element)

    let current_page = 1;
    const rows = 5;

    function displayList(items, wrapper, rows_per_page, page) {
        wrapper.innerHTML = '';
        page--;

        let start = rows_per_page * page;
        let end = start + rows_per_page;
        let paginatedItems = items.slice(start, end);

        for(let i = 0; i < paginatedItems.length; i++) {
            let item = paginatedItems[i];

            let item_element = document.createElement('div');
            item_element.classList.add('item');
            item_element.innerText = item;
            // console.log(item_element)
            // wrapper.appendChild(item_element)
            console.log(wrapper)
        }
    }

    function setUpPagination(items, wrapper, rows_per_page) {
        wrapper.innerHTML = "";

        let page_count = Math.ceil(items.length / rows_per_page);
        for (let i = 1; i < page_count; i++) {
        let btn = paginationButton(i);
        wapper.appendChild(btn);
        }
    }

    function paginationButton(page) {
        let button = document.createElement('button');
        button.innerText =  page;

        if (current_page == page) button.classList.add('active');

        return button;
    }

    displayList(data2, list_element, rows, current_page)
    setUpPagination(data2, pagination_element,rows)

}



export {runPagination}

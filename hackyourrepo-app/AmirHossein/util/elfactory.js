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


  export default elFactory;


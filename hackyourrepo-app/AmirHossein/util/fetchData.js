
// const errorBox = elFactory('div', {id: 'error'});
async function fetchData(url) {
  const getData = await fetch(url);
  return getData.json();
}

  export {fetchData}
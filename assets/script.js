const section = document.querySelector('section');


let requestURL = 'http://yuchachamaru.html.xdomain.jp/gu/assets/data.json';
// let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function()
{
  const itemLists = request.response;
  showLists(itemLists);
}

function showLists(obj)
{
  // const lists = obj['carList'];
  // for (let i = 0; i < lists.length; i++)
  // {
  //   const modelWrapper = document.createElement('div').classList.add('model_wrapper');
  //   const model = document.createElement('p');
    
  // }
}


import 'normalize.css';
import './menu.scss';


export default function (array, className) {
    var menu = document.createElement("ul");
    menu.className = 'menu';
    var listItems = '';

    array.forEach(function(item) {
        listItems += '<li>'+ item + '</li>';
    })

    menu.innerHTML= listItems;
    return menu;
}


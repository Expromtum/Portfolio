import 'normalize.css';
import './index.scss';
import createMenu from '../../components/menu/menu';

var menu = createMenu(['Главная', 'Блог', 'Мои работы', 'Тест', 'Тест5'], 'menu');
document.body.appendChild(menu);

console.log('in index.js');
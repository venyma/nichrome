import { addTab, getTabs, setActiveTab, getActiveIndex } from '../tabs/tabs.js';


const urlBar = document.querySelector('.url-bar');
const tabBar = document.querySelector('.tab-bar');
const newTabBtn = document.querySelector('.new-tab-btn');


function renderTabs() {
const tabs = getTabs();
const active = getActiveIndex();


tabBar.innerHTML = '';


tabs.forEach((t, i) => {
const div = document.createElement('div');
div.className = 'tab' + (i === active ? ' active' : '');
div.textContent = t.title;


div.addEventListener('click', () => {
setActiveTab(i);
window.electronAPI.switchTab(i);
renderTabs();
});


tabBar.appendChild(div);
});


tabBar.appendChild(newTabBtn);
}


newTabBtn.addEventListener('click', () => {
addTab('New Tab');
window.electronAPI.newTab('https://nodlock.neocities.org/');
renderTabs();
});


urlBar.addEventListener('keydown', e => {
if (e.key === 'Enter') window.electronAPI.navigate(urlBar.value);
});


renderTabs();

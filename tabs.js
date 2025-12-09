let tabs = [];
let activeIndex = 0;


export function addTab(title) {
tabs.push({ title, url: '' });
activeIndex = tabs.length - 1;
}


export function getTabs() { return tabs; }
export function setActiveTab(i) { activeIndex = i; }
export function getActiveIndex() { return activeIndex; }

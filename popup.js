
let checkAll = document.getElementById('checkAll');
let uncheckAll = document.getElementById('uncheckAll');

checkAll.onclick = function(element) {
 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   chrome.tabs.executeScript(
       tabs[0].id,
       {code: 'var x = document.querySelector(".field-selection-list");if ( x ){var y = x.querySelectorAll("input");if ( y ) {[].forEach.call(y, function(itm) {if (itm.checked==false){itm.click()}});}}'});        

 });
};

uncheckAll.onclick = function(element) {
 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   chrome.tabs.executeScript(
       tabs[0].id,
       {code: 'var x = document.querySelector(".field-selection-list");if ( x ){var y = x.querySelectorAll("input");if ( y ) {[].forEach.call(y, function(itm) {if (itm.checked==true){itm.click()}});}}'});   
 });
};
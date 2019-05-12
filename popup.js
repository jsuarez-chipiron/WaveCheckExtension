let checkAll = document.getElementById('checkAll');
let uncheckAll = document.getElementById('uncheckAll');

checkAll.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'var x = document.querySelector(".field-selection-list");if ( x ){var y = x.querySelectorAll("input");if ( y ) {[].forEach.call(y, function(itm) {itm.checked=true;});}}'});        
  });
};

uncheckAll.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'var x = document.querySelector(".field-selection-list");if ( x ){var y = x.querySelectorAll("input");if ( y ) {[].forEach.call(y, function(itm) {itm.checked=false;});}}'});        
  });
};


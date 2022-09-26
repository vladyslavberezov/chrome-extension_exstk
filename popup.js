// chrome.runtime.sendMessage({method:"getWord"},function(response){
//     //here response will be the word you want
//     console.log(response);
//   });

//   document.addEventListener('DOMContentLoaded', function () {
//     console.log('hello from background')
//     var bg = chrome.extension.getBackgroundPage();
//      var myURL = bg.myURL;
//    alert(myURL)
 
//  });

// chrome.runtime.onMessage.addEventListener(function(response, sender, sendResponse){
//     alert(response);

// })
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    alert('hello')
});
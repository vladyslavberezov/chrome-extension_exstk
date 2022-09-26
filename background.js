// // let myURL = 'myasdasdya'
// // chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
// //   if(message.method == "getWord"){
// //     //depending on how the word is stored you can do this in one of several ways
// //     // 1. If it is a global variable, we can just return it directly
// //     sendResponse(word);
// //     // 2. It needs to be retrieved asynchronously, in that case we do this
// //     getWord(sendResponse);
// //     return true;
// //     // This passes the ability to reply to the function where we get the info
// //     // Once we have the info we can just use sendResponse(word); like before
// //   }
// // });
// chrome.runtime.sendMessage('hello popup');
// chrome.tabs.sendMessage('hello popup from back')
// console.log('extension go')
// // chrome.tabs.query({}, function (tabs) {
// //     tabs.forEach((tab) => {
// //       chrome.tabs.sendMessage( 
// //         tab.id,
// //         youtPayload, 
// //         function (response) {
// //          // do something here if you want
// //         }
// //       );
// //     });
// //   });


// const replaceConfigs = [
//     {
//         textToReplace: 'Cat',
//         replaceVariants: ['Dog', 'Rat', 'bat'],
//     },
//     {
//         textToReplace: 'Helo',
//         replaceVariants: ['hello', 'Help', 'Hell'],
//     },
//     {
//         textToReplace: 'heldp',
//         replaceVariants: ['help', 'held', 'hello'],
//     },
// ]
// const inputSelectors = ['input[type=text]', 'div[contenteditable=true]', 'textarea']

// ///////////////
// // Popup manage
// const popUp = null

// function cleanerPopup() {
//     // popUp.innerHTML = ''
// }
// function showPopup() {
//     // popUp.style.display = 'block'
//     // window.open("popup.html", "extension_popup", "width=300,height=400,status=no,scrollbars=yes,resizable=no");
// }
// function hidePopup() {
//     // popUp.style.display = 'none'
// }
// function addButtonToPopup(button) {
//     // popUp.append(button)
// }
// ///////////////
// function handleInputChange(e) {
//     console.log('handleInputChange')
//     console.log(e)
//     const { inputValue, input } = getInputProsFromEvent(e)
//     replaceConfigs.forEach(({ textToReplace, replaceVariants }) => {
//       // + " " cause it mean end of the word
//       if (inputValue.contains(textToReplace)) {
//         handleReplaceWordFound(input, textToReplace, replaceVariants)
//       }
//     })
// }
// // Bind on inputs
// chrome.runtime.onMessage.addEventListener(
//     'keydown',
//     function (event) {
//         // if (event.defaultPrevented) {
//         //   return // Do nothing if the event was already processed
//         // }

//         switch (event.key) {
//             case 'ArrowDown':
//             case 'ArrowUp':
//             case 'ArrowLeft':
//             case 'ArrowRight':
//             case 'Space':
//             case 'Escape':
//                 handleInputFinished(event)
//             default:
//                 return // Quit when this doesn't handle the key event.
//         }

//         // Cancel the default action to avoid it being handled twice
//         // event.preventDefault()
//     },
//     true
// )
// inputSelectors.forEach((selector) => {
//     console.log('Bind on all elements by selector:', selector)
//     document.querySelectorAll(selector).forEach((input) => {
//         console.log('Bind on element:', input)
//         input.addEventListener('change', handleInputChange)
//     })
// })

// function handleReplaceWordFound(input, textToReplace, replaceVariants) {
//     showPopup()
//     cleanerPopup()

//     replaceVariants.forEach((text) => {
//         // create button and add to popup
//         const button = document.createElement('button')
//         button.innerHTML = text
//         button.addEventListener('click', (e) => {
//             // input.value.replace(textToReplace, text)
//             input.value = input.value.replace(textToReplace, text)
//             hidePopup()
//         })
//         addButtonToPopup(button)
//     })
// }

// // function handleInputChange(e) {
// //   const { inputValue, input } = getInputProsFromEvent(e)

// //   replaceConfigs.forEach(({ textToReplace, replaceVariants }) => {
// //     // + " " cause it mean end of the word
// //     if (inputValue.trim().endsWith(textToReplace)) {
// //       handleReplaceWordFound(input, textToReplace, replaceVariants)
// //     }
// //   })
// // }
// function getInputProsFromEvent(e) {
//     const input = e.target
//     console.log('Something changed in input:', input)
//     const inputValue = input.value
//     console.log('New value is :', inputValue)
//     return { inputValue, input }
// }

chrome.runtime.sendMessage("message", function (response));
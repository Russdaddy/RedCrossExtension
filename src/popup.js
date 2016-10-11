chrome.runtime.onMessage.addListener(function(request, sender) {
  // if (request.action == "getSource") {
  //   message.innerText = request.source;
  //   var documentContent = request.source;
    
  // }
});

function onWindowLoad() {

  // var message = document.querySelector('#message');

  // chrome.tabs.executeScript(null, {
  //   file: "getPagesSource.js"
  // }, function() {
  //   // If you try and inject into an extensions page or the webstore/NTP you'll get an error
  //   if (chrome.runtime.lastError) {
  //     message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
  //   }
  // });

}

function handleMessage(request,sender,sendResponse){
  console.log("message from the content script: " + request.price);
  document.getElementById('message').innerHTML = "Donation opportunity found! " + request.price;
}

chrome.browserAction.onClicked.addListener(function(tab) { 
   // chrome.tabs.executeScript(null, {file: "myscript.js"});
   chrome.runtime.sendMessage(
    {action:'findPrices'}
   )
});

chrome.runtime.onMessage.addListener(handleMessage);

// window.onload = onWindowLoad;
// setInterval(function(){
// 	if (window.location.pathname.indexOf("/gp/buy/spc/handlers/display.html")){
// 		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 		  chrome.tabs.sendMessage(tabs[0].id, {location: "amazon"}, function(response) {
// 		    console.log(response.farewell);
// 		  });
// 		});
// 	}
// },1500)

//listen for messages from content script
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){

	sendResponse({status:'completed donation'})
})
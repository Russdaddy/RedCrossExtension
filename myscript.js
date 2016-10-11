console.log(document);

window.onload = function(){
	getPrices();
}

function getPrices(){
	var price = document.getElementsByClassName('grand-total-price')[0].textContent;
	chrome.runtime.sendMessage(
		{price:price},
		handleResponse
	)
}

// chrome.runtime.onMessage.addListener(handleMessage);


function handleResponse(message){
	console.log(message);
}
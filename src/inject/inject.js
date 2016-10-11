$(document).ready(function(){
		
})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch (request.location){
			case "amazon":
				amazonCheckout();
				break;
			case "www.macys.com":
				console.log("visited macys");
				break;
		}
});

function amazonCheckout(){
	if(!document.getElementById("red-cross-button")){
		var image = document.createElement("img");
		image.src = chrome.extension.getURL("icons/48.png");
		var checkoutButton = $.find(".place-your-order-button")[0];
		if(checkoutButton){
			var btnHtml = "<div id=\"red-cross-button\"></div>"
			$(btnHtml).insertAfter($(".spc-right-us-legal-message").find(".a-spacing-micro")[0])
			$('#red-cross-button').prepend(image);
		}
	}
}
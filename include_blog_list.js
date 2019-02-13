const xhr = new XMLHttpRequest();
xhr.onload = function() {
  let emptyDiv = document.getElementById("empty-div");
  let body = this.responseXML.body;
  emptyDiv.innerHTML = this.responseXML.body.innerHTML;
}
xhr.open("GET", "/mattle24_blog/public/index.html");
xhr.responseType = "document";
xhr.send();

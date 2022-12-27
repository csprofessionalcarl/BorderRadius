function myFunction(){
  
  const r = document.querySelector('.rcorners');
  var b1 = (document.getElementById("bordersT1").value).concat("px");
  var b2 = (document.getElementById("bordersT2").value).concat("px");
  var b3 = (document.getElementById("bordersT3").value).concat("px");
  var b4 = (document.getElementById("bordersT4").value).concat("px");
  var b1a = document.getElementById("bordersT1a").value;
  var b2b = document.getElementById("bordersT2b").value;
  var b3c = document.getElementById("bordersT3c").value;
  var b4d = document.getElementById("bordersT4d").value;
  r.style.setProperty("--borders1", b1);
  r.style.setProperty("--borders2", b2);
  r.style.setProperty("--borders3", b3);
  r.style.setProperty("--borders4", b4);
  r.style.setProperty("--borders1a", b1a);
  r.style.setProperty("--borders2b", b2b);
  r.style.setProperty("--borders3c", b3c);
  r.style.setProperty("--borders4d", b4d);
}

function test(){
	var client = new XMLHttpRequest();
	client.open('GET', '/foo.txt');
	client.onreadystatechange = function() {
    alert(client.responseText);
}
client.send();
}
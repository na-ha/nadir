document.getElementById("more").addEventListener("click", function () {
  document.getElementById("details").style.display = "inline-block";
  document.getElementById("more").style.display = "none";
  document.getElementById("less").style.display = "inline-block";
});

document.getElementById("less").addEventListener("click", function () {
  document.getElementById("details").style.display = "none";
  document.getElementById("more").style.display = "inline-block";
  document.getElementById("less").style.display = "none";
});

document.getElementById("get").addEventListener("click", function () {
  document.getElementById("currency").style.display = "block";
  document.getElementById("get").style.display = "none";
});

const request = new Request('https://api.kraken.com/0/public/Ticker?pair=XETHZEUR', {
  method: 'GET',
 });

request.json().then(function(data) {
  console.log(data)
});

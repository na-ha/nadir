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

const axios = require('axios');

axios.get('https://api.kraken.com/0/public/Ticker?pair=XETHZEUR')
  .then(function (response) {
    document.getElementById("ticker").innerText = response[result][XETHZEUR][a][0].toFixed(0);
    console.log(response);
  })
  .catch(function (error) {
    document.getElementById("ticker").innerText = "xxx";
    console.log(error);
  })
  .then(function () {
     console.log(data);
  });


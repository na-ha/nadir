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


async function tick () {
  axios.get('https://api.kraken.com/0/public/Ticker?pair=XETHZEUR')
  .then(function (response) {
    document.getElementById("ticker").innerText = (response["data"]["result"]["XETHZEUR"]["l"][0]/10).toFixed(2);
    console.log(response);
  })
  .catch(function (error) {
    document.getElementById("ticker").innerText = "xxx";
   console.log(error);
  });
}

setInterval(tick, 1000);

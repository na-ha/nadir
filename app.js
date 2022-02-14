document.getElementById("desc").addEventListener("click", function () {
  document.getElementById("description").style.display = "inline-block";
  document.getElementById("origins").style.display = "none";
  document.getElementById("scarcity").style.display = "none";
});

document.getElementById("ori").addEventListener("click", function () {
  document.getElementById("description").style.display = "none";
  document.getElementById("origins").style.display = "inline-block";
  document.getElementById("scarcity").style.display = "none";
});

document.getElementById("sca").addEventListener("click", function () {
  document.getElementById("description").style.display = "none";
  document.getElementById("origins").style.display = "none";
  document.getElementById("scarcity").style.display = "inline-block";
});

document.getElementById("get").addEventListener("click", function () {
  document.getElementById("currency").style.display = "block";
  document.getElementById("get").style.display = "none";
});


async function tick () {
  axios.get('https://api.kraken.com/0/public/Ticker?pair=XETHZEUR')
  .then(function (response) {
    document.getElementById("ticker").innerText = (response["data"]["result"]["XETHZEUR"]["c"][0]/10).toFixed(2);
    console.log(response);
  })
  .catch(function (error) {
    document.getElementById("ticker").innerText = "xxx";
   console.log(error);
  });
}

setInterval(tick, 1000);

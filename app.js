document.getElementById("more").addEventListener("click", function () {
  document.getElementById("details").style.display = "inline";
  document.getElementById("more").style.display = "none";
  document.getElementById("less").style.display = "inline";
});

document.getElementById("less").addEventListener("click", function () {
  document.getElementById("details").style.display = "none";
  document.getElementById("more").style.display = "inline";
  document.getElementById("less").style.display = "none";
});

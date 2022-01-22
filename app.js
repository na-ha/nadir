document.getElementById("more").addEventListener("click", function () {
  document.getElementById("details").style.display = "block";
  document.getElementById("more").style.display = "none";
  document.getElementById("less").style.display = "block";
});

document.getElementById("less").addEventListener("click", function () {
  document.getElementById("details").style.display = "none";
  document.getElementById("more").style.display = "block";
  document.getElementById("less").style.display = "none";
});

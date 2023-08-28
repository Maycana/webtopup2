const harga = document.getElementById("total")
const total = document.getElementById("total1")
const pay = document.getElementById("pembayaran")
let wallet = document.querySelectorAll("p.wallet3")


function tp1(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 11.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 11.500";
  }
}
function tp2(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 22.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 22.500";
  }
}
function tp3(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 50.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 50.500";
  }
}
function tp4(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 97.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 97.500";
  }
}
function tp5(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 290.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 290.500";
  }
}
function tp6(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 485.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 485.500";
  }
}
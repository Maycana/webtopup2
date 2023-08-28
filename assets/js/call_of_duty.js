const harga = document.getElementById("total")
const total = document.getElementById("total1")
const pay = document.getElementById("pembayaran")
let wallet = document.querySelectorAll("p.wallet3")


function tp1(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 6.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 6.500";
  }
}
function tp2(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 10.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 10.500";
  }
}
function tp3(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 19.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 19.500";
  }
}
function tp4(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 47.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 47.500";
  }
}
function tp5(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 93.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 93.500";
  }
}
function tp6(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 185.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 185.500";
  }
}
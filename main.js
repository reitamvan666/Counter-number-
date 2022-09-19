para1 = document.querySelector(".para1");
minNum = document.querySelector(".decrease");
addNum = document.querySelector(".increase");
zeroNum = document.querySelector(".reset");

function decreased() {
  if (para1.textContent > 0) {
    para1.textContent--;
  }
}

minNum.addEventListener("click", decreased);

function increased() {
  if (para1.textContent) {
    para1.textContent++;
  }
}

addNum.addEventListener("click", increased);

function reset() {
  if (para1.textContent) {
    para1.textContent = 0;
  }
}

zeroNum.addEventListener("click", reset);

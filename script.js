//your code here!
const list = document.getElementById("infi-list");

for (let i = 1; i <= 10; i++) {
  const li = document.createElement("li");
  li.innerText = "Item " + i;
  list.appendChild(li);
}

let count = 10;

list.addEventListener("scroll", function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    for (let i = 1; i <= 2; i++) {
      count++;
      const li = document.createElement("li");
      li.innerText = "Item " + count;
      list.appendChild(li);
    }
  }
});

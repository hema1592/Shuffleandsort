window.onload = function () {
  var list = document.getElementById("shuffleSort"),
  sortArray = document.getElementById("sort");

  function shuffle(items) {
    var existingItem = items.slice(0),
      temp,
      i = existingItem.length,
      randNumber;
    while (--i) {
      randNumber = Math.floor(i * Math.random());
      temp = existingItem[randNumber];
      existingItem[randNumber] = existingItem[i];
      existingItem[i] = temp;
    }
    return existingItem;
  }

  function shuffleItems() {
    var nodes = list.children,
      i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
    while (i < nodes.length) {
      list.appendChild(nodes[i]);
      ++i;
    }
  }
  document.getElementById("shuffle").onclick = shuffleItems;

  function sortItems() {
    var  sorting = true;
    while (sorting) {
      sortArray = list.getElementsByTagName("li");
      for (var i = 0; i < sortArray.length - 1; i++) {
        if (sortArray[i].innerHTML > sortArray[i + 1].innerHTML) {
          break;
        }
      }
      sortArray[i].parentNode.insertBefore(sortArray[i + 1], sortArray[i]);
    }
  }

  document.getElementById("sort").onclick = sortItems;
};

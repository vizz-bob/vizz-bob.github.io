window.onload = function () {
    var collection = document.getElementsByClassName('p-item');
    var w_collection = document.getElementsByClassName('w-item');
    var len = collection.length;
    var w_len = w_collection.length;
    var overlay = document.getElementsByClassName('l-overlay')[0];
     var close_button = document.getElementsByClassName('l-cb')[0];
    var p_img = document.getElementById('p-img');
    var p_desc = document.getElementById('p-desc');
    var p_price = document.getElementById('p-price');
    for (var x = 0; x < len; x++) {
      collection[x].addEventListener("click", function () {
        overlay.style.setProperty("display", "flex");
        var desc = this.getAttribute('data-desc');
        var price = this.children[2].children[1].innerHTML;
        var url = this.children[1].children[0].src;
        p_img.src = url;
        p_desc.innerHTML = desc;
        p_price.innerHTML = price;
      });
    }
    for (var x = 0; x < w_len; x++) {
      w_collection[x].addEventListener("click", function () {
        overlay.style.setProperty("display", "flex");
        var desc = this.getAttribute('data-desc');
        var price = this.children[2].children[1].innerHTML;
        var url = this.children[1].children[0].src;
        w_img.src = url;
        w_desc.innerHTML = desc;
        w_price.innerHTML = price;
      });
    }
    close_button.addEventListener("click", function () {
      overlay.style.setProperty("display", "none", "important");
    });
    overlay.addEventListener("click", function (e) {
      if (e.target == overlay) {
        overlay.style.setProperty("display", "none", "important");
      }
    });
  };

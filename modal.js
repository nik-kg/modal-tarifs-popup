window.onload = function(){ 

  var modal = document.getElementById('myModal');

  var tariffs = document.getElementsByClassName("tarif");

  var close = document.getElementsByClassName("close")[0];

  for (var i = 0; i < tariffs.length; i++) {
    var tariff = tariffs[i];
    tariff.addEventListener('click', function(event) {
      tariff_click(this);
    });
  }

  function tariff_click(tt) { 
        console.log(tt);
        var clone = tt.cloneNode(true);
        modal.style.display = "block";
        modal.getElementsByClassName('tarif-modal')[0].innerHTML = clone.outerHTML;
  }

  close.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
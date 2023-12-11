let nuqtaIshlatildi = 0;

function ekranaYaz(btn) {
  let val = btn.innerHTML;
  let ohirgiVal =
    document.getElementsByClassName("current-operand")[0].innerHTML;
  ohirgiVal = ohirgiVal[ohirgiVal.length - 1];
  if (val !== "+" && val !== "-" && val !== "*" && val !== "/" && val !== ".") {

    document.getElementsByClassName("current-operand")[0].innerHTML += val;
  } else if (
    ohirgiVal !== "+" &&
    ohirgiVal !== "-" &&
    ohirgiVal !== "*" &&
    ohirgiVal !== "/" &&
    ohirgiVal !== "."
  ) {
    if (val == "." && nuqtaIshlatildi == 0) {
      nuqtaIshlatildi = 1;
      document.getElementsByClassName("current-operand")[0].innerHTML += val;
    }
    if (val == "+" || val == "-" || val == "*" || val == "/") {
      document.getElementsByClassName("current-operand")[0].innerHTML += val;
      nuqtaIshlatildi = 0;
    }
  }
}

function birniOchir() {
  let val = document.getElementsByClassName("current-operand")[0].innerHTML;
  val = val.slice(0, val.length - 1);
  document.getElementsByClassName("current-operand")[0].innerHTML = val;
}
function toliqOchir() {
  document.getElementsByClassName("current-operand")[0].innerHTML = "";
}

function hisobla() {
  let ekran = document.getElementsByClassName("current-operand")[0].innerHTML;
  document.getElementsByClassName("current-operand")[0].innerHTML = eval(ekran);
}

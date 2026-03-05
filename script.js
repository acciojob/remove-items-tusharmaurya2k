//your JS code here. If required.
const btn = document.querySelector('input[type="button"]');

btn.onclick = function () {
  const select = document.getElementById("colorSelect");
  select.remove(select.selectedIndex);
};
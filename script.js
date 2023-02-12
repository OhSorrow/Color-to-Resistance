// Define arrays that store the color and value of the resistor bands
const bandColor = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "gray",
  "white",
  "transparent",
];
const bandValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ""];
const band4value = ["", "0", "00", "K", "0 K", "00 K", "M", "0 M", "00 M", "G"];
const bandTlorans = ["brown", "red", "gold", "silver"];
const bandTloransValue = [1, 2, 5, 10];

// select bands
const selectBand1 = document.querySelector(".band1 select");
const selectBand2 = document.querySelector(".band2 select");
const selectBand3 = document.querySelector(".band3 select");
const selectBand4 = document.querySelector(".band4 select");
const selectBand5 = document.querySelector(".band5 select");

//select picture bands
const pic_band1 = document.querySelector(".res-sym-b1");
const pic_band2 = document.querySelector(".res-sym-b2");
const pic_band3 = document.querySelector(".res-sym-b3");
const pic_band4 = document.querySelector(".res-sym-b4");
const pic_band5 = document.querySelector(".res-sym-b5");

const realTime = (value1, value2, value3, value4, value5) => {
  const first3value = calcRes(value1, value2, value3);
  if (first3value != 0) {
    resistorValue.textContent = first3value + band4value[value4];
    tloransValue.textContent = `  Ω ±${bandTloransValue[value5]}%`;
  } else {
    resistorValue.textContent = 0;
    tloransValue.textContent = "";
  }
};

// Change the color of the band images based on the selected option
// band 1
selectBand1.addEventListener("click", function (e) {
  const selectoption = e.target.options.selectedIndex;
  pic_band1.style.backgroundColor = bandColor[selectoption];
  // calc real
  const value2 = selectBand2.options.selectedIndex;
  const value3 = selectBand3.options.selectedIndex;
  const value4 = selectBand4.options.selectedIndex;
  const value5 = selectBand5.options.selectedIndex;
  realTime(selectoption, value2, value3, value4, value5);
});
// band 2
selectBand2.addEventListener("click", function (e) {
  const selectoption = e.target.options.selectedIndex;
  pic_band2.style.backgroundColor = bandColor[selectoption];
  // calc real
  const value1 = selectBand1.options.selectedIndex;
  const value3 = selectBand3.options.selectedIndex;
  const value4 = selectBand4.options.selectedIndex;
  const value5 = selectBand5.options.selectedIndex;
  realTime(value1, selectoption, value3, value4, value5);
});
// band 3
selectBand3.addEventListener("click", function (e) {
  const selectoption = e.target.options.selectedIndex;
  pic_band3.style.backgroundColor = bandColor[selectoption];

  if (selectoption == 10) {
    pic_band3.style.display = "none";
  } else if (selectoption != 10) {
    pic_band3.style.display = "block";
  }

  // calc real
  const value1 = selectBand1.options.selectedIndex;
  const value2 = selectBand2.options.selectedIndex;
  const value4 = selectBand4.options.selectedIndex;
  const value5 = selectBand5.options.selectedIndex;
  realTime(value1, value2, selectoption, value4, value5);
});
// band 4
selectBand4.addEventListener("click", function (e) {
  const selectoption = e.target.options.selectedIndex;
  pic_band4.style.backgroundColor = bandColor[selectoption];
  const value1 = selectBand1.options.selectedIndex;
  const value2 = selectBand2.options.selectedIndex;
  const value3 = selectBand3.options.selectedIndex;
  const value5 = selectBand5.options.selectedIndex;
  realTime(value1, value2, value3, selectoption, value5);
});
// band 5
selectBand5.addEventListener("click", function (e) {
  const selectoption = e.target.options.selectedIndex;
  pic_band5.style.backgroundColor = bandTlorans[selectoption];
  const value1 = selectBand1.options.selectedIndex;
  const value2 = selectBand2.options.selectedIndex;
  const value3 = selectBand3.options.selectedIndex;
  const value4 = selectBand4.options.selectedIndex;
  realTime(value1, value2, value3, value4, selectoption);
});
// select resistance value
const resistorValue = document.querySelector(".resitor-value");
const tloransValue = document.querySelector(".tlorans-value");
// calc resistance
const calcRes = (value1, value2, value3) => {
  if (value3 == 10) {
    return value1 * 10 + value2;
  } else if (value3 != 10) {
    return value1 * 100 + value2 * 10 + value3;
  }
};

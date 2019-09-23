const TextChart = require("../dist");

const barChart = new TextChart.BarChart();
barChart.setData([["apples", 15], ["oranges", 3], ["bananas", 12]]);
console.log(barChart.render());
/*
 apples | ■■■■■■■■■■■■■■■ 15
oranges | ■■■ 3
bananas | ■■■■■■■■■■■■ 12
*/

const histogram = new TextChart.Histogram().setProperties({
    min: 0,
    max: 70,
    interval: 10,
    width: 20,
    barCharacter: TextChart.BarCharacters.WhiteSquare
});
const histogramData = [];
for (let i = 0; i < 1000; i++) {
    histogramData.push(Math.random() * 60);
}
for (let i = 0; i < 1000; i++) {
    histogramData.push(40 + Math.random() * 25);
}
histogram.setData(histogramData);
console.log(histogram.render());
/* 
 0 - 10 | □□□□□ 163
10 - 20 | □□□□□ 158
20 - 30 | □□□□□ 164
30 - 40 | □□□□□□ 176
40 - 50 | □□□□□□□□□□□□□□□□□□□□ 602
50 - 60 | □□□□□□□□□□□□□□□□□□□ 557
60 - 70 | □□□□□□ 180
*/

const histogramDefault = new TextChart.Histogram().setProperties({
    width: 20,
});
const histogramDefaultData = [];
for (let i = 0; i < 1000; i++) {
    histogramDefaultData.push(Math.random() * 60);
}
for (let i = 0; i < 1000; i++) {
    histogramDefaultData.push(40 + Math.random() * 25);
}
histogramDefault.setData(histogramDefaultData);
console.log(histogramDefault.render());
/*
  0.21 - 6.69 | ■■■■■■ 110
 6.69 - 13.17 | ■■■■■■ 106
13.17 - 19.64 | ■■■■■■ 107
19.64 - 26.12 | ■■■■■■ 116
 26.12 - 32.6 | ■■■■■ 97
 32.6 - 39.08 | ■■■■■■ 114
39.08 - 45.56 | ■■■■■■■■■■■■■■■■■■■ 348
45.56 - 52.04 | ■■■■■■■■■■■■■■■■■■■■ 372
52.04 - 58.51 | ■■■■■■■■■■■■■■■■■■■ 352
58.51 - 64.99 | ■■■■■■■■■■■■■■■ 278
*/
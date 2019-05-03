import { BarCharacters, BarChart, Histogram } from "../index";

const barChart = new BarChart();
barChart
    .setProperties({
        width: 10 // Set maximum width
    })
    .setData([["apples", 15], ["oranges", 3], ["bananas", 12]]);
console.log(barChart.render());
/*
 apples | ■■■■■■■■■■■■■■■ 15
oranges | ■■■ 3
bananas | ■■■■■■■■■■■■ 12
*/

const histogram = new Histogram().setProperties({
    min: 0,
    max: 70,
    interval: 10,
    width: 20,
    barCharacter: BarCharacters.WhiteSquare // Set bar appearance
});
const histogramData: number[] = [];
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

const histogramDefault = new Histogram().setProperties({
    width: 20,
    barCharacter: BarCharacters.WhiteSquare
});
const histogramDefaultData: number[] = [];
for (let i = 0; i < 1000; i++) {
    histogramDefaultData.push(Math.random() * 60);
}
for (let i = 0; i < 1000; i++) {
    histogramDefaultData.push(40 + Math.random() * 25);
}
histogramDefault.setData(histogramDefaultData);
console.log(histogramDefault.render());
/*
  0.02 - 6.52 | □□□□□ 97
 6.52 - 13.01 | □□□□□□ 109
13.01 - 19.51 | □□□□□□ 118
19.51 - 26.01 | □□□□□ 97
26.01 - 32.51 | □□□□□□ 108
32.51 - 39.01 | □□□□□□ 120
 39.01 - 45.5 | □□□□□□□□□□□□□□□□□□ 345
    45.5 - 52 | □□□□□□□□□□□□□□□□□□□ 365
    52 - 58.5 | □□□□□□□□□□□□□□□□□□□□ 379
    58.5 - 65 | □□□□□□□□□□□□□□ 262
*/
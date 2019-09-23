import { BarCharacters, BarChart, Histogram } from "../src";

const barChart = new BarChart();
barChart.setData([["apples", 15], ["oranges", 3], ["bananas", 12]]);
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
    barCharacter: BarCharacters.WhiteSquare
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
    width: 20, // Limit chart's max width
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
  0.01 - 6.51 | ■■■■■■ 106
 6.51 - 13.01 | ■■■■■ 103
13.01 - 19.51 | ■■■■■■ 117
19.51 - 26.01 | ■■■■■ 102
 26.01 - 32.5 | ■■■■■■■ 125
    32.5 - 39 | ■■■■■ 101
    39 - 45.5 | ■■■■■■■■■■■■■■■■■ 320
    45.5 - 52 | ■■■■■■■■■■■■■■■■■■■ 353
    52 - 58.5 | ■■■■■■■■■■■■■■■■■■■■ 381
 58.5 - 64.99 | ■■■■■■■■■■■■■■■ 292
*/

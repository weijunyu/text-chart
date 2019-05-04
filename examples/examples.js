const TextChart =  require("../dist");

const barChart = new TextChart.BarChart();
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

const histogram = new TextChart.Histogram().setProperties({
    min: 0,
    max: 70,
    interval: 10,
    width: 20,
    barCharacter: TextChart.BarCharacters.WhiteSquare // Set bar appearance
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
    barCharacter: '*'
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
  0.52 - 6.97 | ****** 117
 6.97 - 13.42 | ***** 100
13.42 - 19.86 | ****** 105
19.86 - 26.31 | ****** 108
26.31 - 32.76 | ****** 117
32.76 - 39.21 | ***** 102
39.21 - 45.66 | ****************** 339
 45.66 - 52.1 | ******************* 355
 52.1 - 58.55 | ******************** 375
   58.55 - 65 | *************** 282
*/
import { BarChart, Histogram } from "../index"; // Can also use default export; see index.ts
import { BarCharacters } from "../interfaces";

const barChartNonScaled = new BarChart();
console.log("Non-scaled bar chart:");
console.log(barChartNonScaled
    .setData([
        ["apples", 15],
        ["oranges", 3],
        ["bananas", 12],
    ])
    .render());

const barChartScaled = new BarChart();
console.log("Scaled bar chart:");
console.log(barChartScaled
    .setProperties({
        barCharacter: BarCharacters.WhiteSquare,
        width: 10,
    })
    .setData([
        ["apples", 15],
        ["oranges", 32],
        ["strawberries", 98],
    ])
    .render());

const histogramDefault = new Histogram();
const histogramDefaultData = [];
for (let i = 0; i < 100; i++) {
    histogramDefaultData.push(Math.random() * 100);
}
console.log('Default histogram:');
console.log(histogramDefault
    .setData(histogramDefaultData)
    .render());

const histogramScaled = new Histogram();
const histogramData = [];
for (let i = 0; i < 1000; i++) {
    histogramData.push(Math.random() * 1000);
}
console.log('Scaled histogram:');
console.log(histogramScaled
    .setProperties({
        width: 20,
    })
    .setData(histogramData)
    .render());

const histogramSmallScale = new Histogram();
const histogramSmallData = [];
for (let i = 0; i < 10000; ++i) {
    histogramSmallData.push(Math.random());
}
console.log("Small scale histogram:")
console.log(histogramSmallScale
    .setProperties({
        width: 20,
    })
    .setData(histogramSmallData)
    .render());

const customHistogram = new Histogram();
const customHistogramData = [];
for (let i = 0; i < 10000; ++i) {
    customHistogramData.push(Math.random() * 100);
}
console.log("Histogram with all options");
console.log(customHistogram
    .setProperties({
        min: 0,
        max: 100,
        interval: 10,
        width: 30,
    })
    .setData()
    .render());
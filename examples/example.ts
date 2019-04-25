import { BarChart, Histogram } from "../index"; // Can also use default export; see index.ts
import { BarCharacters } from "../interfaces";

const barChartNonScaled = new BarChart();
console.log("Non-scaled bar chart:");
console.log(barChartNonScaled.setData([
    ["apples", 15],
    ["oranges", 3],
    ["bananas", 12],
]).render());

const barChartScaled = new BarChart();
console.log("Scaled bar chart:");
console.log(barChartScaled.setProperties({
    barCharacter: BarCharacters.MediumShade,
    scale: 10,
}).setData([
    ["apples", 10],
    ["oranges", 30],
    ["strawberries", 100],
]).render());

const histogramNonScaled = new Histogram();
const histogramData = [];
for (let i = 0; i < 1000; i++) {
    histogramData.push(Math.random() * 1000);
}
console.log(histogramNonScaled.setProperties({
    barCharacter: BarCharacters.BlackSquare,
}).setData(histogramData).render());

import { BarChart } from "./index"; // Can also use default export; see index.ts
import { BarCharacters } from "./interfaces";

const barChartNonScaled = new BarChart();
barChartNonScaled.setData([
    ["apples", 15],
    ["oranges", 3],
    ["bananas", 12],
]);
console.log("Non-scaled bar chart:");
console.log(barChartNonScaled.render());

const barChartScaled = new BarChart();
barChartScaled.setProperties({
    barCharacter: BarCharacters.DiagonalCrosshatchFillSquare,
    scale: 10,
});
barChartScaled.setData([
    ["apples", 10],
    ["oranges", 30],
    ["strawberries", 100],
]);
console.log("Scaled bar chart:");
console.log(barChartScaled.render());

import { BarChart } from "./index"; // Can also use default export; see index.ts
import { BarCharacters } from "./interfaces";

const barChart = new BarChart();
barChart.setProperties({
    barCharacter: BarCharacters.BlackRectangle,
    scale: 10,
});
barChart.setData({
    data: [
        ["apples", 10],
        ["oranges", 30],
        ["strawberries", 100],
    ],
});
console.log(barChart.render());

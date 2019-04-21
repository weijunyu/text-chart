import { BarChart } from "./index"; // Can also use default export; see index.ts
import { BarCharacters } from "./interfaces";

const barChart = new BarChart();
barChart.setProperties({
    scale: 10,
    barCharacter: BarCharacters.WhiteSquare,
});
barChart.setData({
    data: [
        ["apples", 1],
        ["oranges", 3],
        ["strawberries", 6],
    ],
});
console.log(barChart.render());

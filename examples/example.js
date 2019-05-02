const TextChart = require("../dist/index");
const barChartNonScaled = new TextChart.BarChart();
console.log("Non-scaled bar chart:");
console.log(
    barChartNonScaled
        .setData([["apples", 15], ["oranges", 3], ["bananas", 12]])
        .render()
);

console.log(
    barChartNonScaled
        .setData([["apples", 15], ["oranges", 3], ["bananas", 12]])
        .setProperties({
            width: 10,
            barCharacter: TextChart.BarCharacters.WhiteSquare
        })
        .render()
);

const barChartScaled = new TextChart.BarChart();
console.log(
    barChartScaled
        .setProperties({
            barCharacter: TextChart.BarCharacters.WhiteSquare,
            width: 10
        })
        .setData([["apples", 15], ["oranges", 32], ["strawberries", 98]])
        .render()
);

const histogramDefault = new TextChart.Histogram();
const histogramDefaultData = [];
for (let i = 0; i < 100; i++) {
    histogramDefaultData.push(Math.random() * 100);
}
console.log(histogramDefault.setData(histogramDefaultData).render());
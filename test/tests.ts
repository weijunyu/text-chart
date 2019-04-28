import chai from "chai";
import { roundToDecimalPlace } from "../lib";
import { BarChart, Histogram } from "../index"; // Can also use default export; see index.ts
import { BarCharacters } from "../interfaces";
import TextChart from "../TextChart";
const expect = chai.expect;

describe("lib.ts roundToDecimalPlace", function() {
    it("Can round a float to nearest given decimal place", function() {
        expect(roundToDecimalPlace(1.35, 1)).to.equal(1.4);
        expect(roundToDecimalPlace(1.2245, 2)).to.equal(1.22);
    });
});
describe("Bar Chart generation", function() {
    it("Can generate a simple bar chart with default properties", function() {
        const barChart = new BarChart();
        const chart = barChart
            .setData([
                ["apples", 15],
                ["oranges", 3],
                ["bananas", 12],
            ])
            .render();
        const lines = chart.split('\n').map(line => line.trim());
        expect(lines).to.have.lengthOf(3);
        expect(lines[0].startsWith("apples")).to.be.true;
        expect(lines[1].startsWith("oranges")).to.be.true;
        expect(lines[2].startsWith("bananas")).to.be.true;
    })

    it("Can generate a bar chart with a max width", function() {
        const barChart = new BarChart();
        const chart: string = barChart
            .setProperties({
                width: 10,
            })
            .setData([
                ["apples", 11],
                ["oranges", 33],
                ["strawberries", 111],
            ])
            .render();
        const lines = chart.split('\n').map(line => line.trim());
        lines.forEach((line) => {
            let firstBarIndex = line.indexOf(TextChart.DefaultBarCharacter);
            let lastBarIndex = line.lastIndexOf(TextChart.DefaultBarCharacter);
            expect(firstBarIndex).to.not.equal(-1);
            expect(lastBarIndex - firstBarIndex).to.be.at.most(10);
        })
    })

    // const histogramScaled = new Histogram();
    // const histogramData = [];
    // for (let i = 0; i < 1000; i++) {
    //     histogramData.push(Math.random() * 1000);
    // }
    // console.log(histogramScaled.setProperties({
    //     barCharacter: BarCharacters.BlackSquare,
    //     width: 20,
    // }).setData(histogramData).render());

    // const histogramSmallScale = new Histogram();
    // const histogramSmallData = [];
    // for (let i = 0; i < 1000; ++i) {
    //     histogramSmallData.push(Math.random());
    // }
    // console.log(histogramSmallScale.setProperties({
    //     width: 20,
    // }).setData(histogramSmallData).render());
})
describe("Histogram generation", function() {
    it("can generate a histogram with default options and auto-calculates intervals", function() {
        const histogramDefault = new Histogram();
        const histogramDefaultData = [];
        for (let i = 1; i <= 100; i++) {
            histogramDefaultData.push(i);
        }
        const chart = histogramDefault
            .setData(histogramDefaultData)
            .render();
        const lines: string[] = chart.split('\n').map(line => line.trim());
        expect(lines).to.have.lengthOf(10); // 10 bins by default
        lines.forEach((line) => {
            let firstBarIndex = line.indexOf(TextChart.DefaultBarCharacter);
            let lastBarIndex = line.lastIndexOf(TextChart.DefaultBarCharacter);
            expect(firstBarIndex).to.not.equal(-1);
            expect(lastBarIndex - firstBarIndex).to.equal(9);
        })
    })
})

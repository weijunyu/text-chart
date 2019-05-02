import chai from "chai";
import { BarChart, Histogram } from "../index"; // Can also use default export; see index.ts
import { roundToDecimalPlace } from "../src/lib";
import TextChart from "../src/TextChart";
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
            .setData([["apples", 15], ["oranges", 3], ["bananas", 12]])
            .render();
        console.log(chart);
        const lines = chart.split("\n").map(line => line.trim());
        expect(lines).to.have.lengthOf(3);
        expect(lines[0].startsWith("apples")).to.be.true;
        expect(lines[1].startsWith("oranges")).to.be.true;
        expect(lines[2].startsWith("bananas")).to.be.true;
    });

    it("Can generate a bar chart with a max width", function() {
        const barChart = new BarChart();
        const chart: string = barChart
            .setProperties({
                width: 10
            })
            .setData([["apples", 11], ["oranges", 33], ["strawberries", 111]])
            .render();
        console.log(chart);
        const lines = chart.split("\n").map(line => line.trim());
        lines.forEach(line => {
            let firstBarIndex = line.indexOf(TextChart.DefaultBarCharacter);
            let lastBarIndex = line.lastIndexOf(TextChart.DefaultBarCharacter);
            expect(firstBarIndex).to.not.equal(-1);
            expect(lastBarIndex - firstBarIndex).to.be.at.most(10);
        });
    });

    it("Throws an error if render is called without setting data", function() {
        const barChart = new BarChart();
        expect(barChart.render.bind(barChart)).to.throw(/Couldn't render bar chart/);
    })
});
describe("Histogram generation", function() {
    it("Can generate a histogram with default options and auto-calculates intervals", function() {
        const histogramDefault = new Histogram();
        const histogramDefaultData = [];
        for (let i = 1; i <= 100; i++) {
            histogramDefaultData.push(i);
        }
        const chart = histogramDefault.setData(histogramDefaultData).render();
        console.log(chart);
        const lines: string[] = chart.split("\n").map(line => line.trim());
        expect(lines).to.have.lengthOf(10); // 10 bins by default
        lines.forEach(line => {
            let firstBarIndex = line.indexOf(TextChart.DefaultBarCharacter);
            let lastBarIndex = line.lastIndexOf(TextChart.DefaultBarCharacter);
            expect(firstBarIndex).to.not.equal(-1);
            expect(lastBarIndex - firstBarIndex).to.equal(10 - 1);
        });
    });
    it("Can render a histogram with given width, min, max and interval values", function() {
        const customHistogram = new Histogram();
        const customHistogramData = [];
        for (let i = 0; i < 10000; ++i) {
            customHistogramData.push(Math.random() * 100);
        }
        const chart = customHistogram
            .setProperties({
                min: 0,
                max: 110,
                interval: 20,
                width: 30
            })
            .setData(customHistogramData)
            .render();
        console.log(chart);
        const lines: string[] = chart.split("\n").map(line => line.trim());
        expect(lines).to.have.lengthOf(6);
        let lastBar = lines[lines.length - 1];
        expect(lastBar[lastBar.length - 1]).to.equal("0");
        let longestBarLength = lines.reduce(
            (longestBarLength: number, currentLine: string) => {
                let currentBarLength =
                    currentLine.lastIndexOf(TextChart.DefaultBarCharacter) -
                    currentLine.indexOf(TextChart.DefaultBarCharacter);
                return Math.max(longestBarLength, currentBarLength);
            },
            0
        );
        expect(longestBarLength).to.equal(30 - 1);
    });
    it("Can generate a one-sided histogram", function() {
        const customHistogram = new Histogram();
        const customHistogramData = [];
        for (let i = 0; i < 100; ++i) {
            customHistogramData.push(Math.random() * 40);
        }
        for (let i = 0; i < 100; ++i) {
            customHistogramData.push(Math.random() * 80);
        }
        customHistogram.setProperties({
            width: 20,
            min: 0,
            max: 150,
            interval: 30
        });
        const chart = customHistogram.setData(customHistogramData).render();
        console.log(chart);
        const lines: string[] = chart.split("\n").map(line => line.trim());
        expect(lines).to.have.lengthOf(5);
        let lastBar = lines[lines.length - 1];
        let secondLastBar = lines[lines.length - 2];
        expect(lastBar[lastBar.length - 1]).to.equal("0");
        expect(secondLastBar[secondLastBar.length - 1]).to.equal("0");
    });

    it("Throws an error when render is called without setting data", function() {
        const histogram = new Histogram();
        expect(histogram.render.bind(histogram)).to.throw(/Couldn't render histogram/)
    })
});

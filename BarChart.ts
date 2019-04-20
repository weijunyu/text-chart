import { BarChartData } from "./interfaces";
import TextChart from "./TextChart";
export default class BarChart extends TextChart {
    private data: Array<[string, number]> = [];
    public setData(chartData: BarChartData) {
        this.data = chartData.data;
    }
    public render() {
        console.log(`Rendering Bar chart!`);
        let maxLabelLength = 0;
        for (let [label, value] of this.data) {
            let labelLength = label.length;
            maxLabelLength = Math.max(maxLabelLength, labelLength);
        }
        let chart = '';
        for (let [label, value] of this.data) {
            let row = label;
            while (row.length < maxLabelLength) {
                row = ' ' + row;
            }
            let bars = '';
            while (bars.length < value) {
                bars += this.getProperties().barCharacter;
            }
            chart += `${row} | ${bars} ${value}\n`;
        }
        return chart;
    }
}

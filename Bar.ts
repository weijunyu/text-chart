import { BarChartData } from "./interfaces";
import TextChart from "./TextChart";
export default class Bar extends TextChart {
    private data: Array<[string, number]> = [];
    public setData(chartData: BarChartData) {
        this.data = chartData.data;
    }
    public render() {
        console.log(`Rendering Bar chart!`);
        let maxLabelLength = 0;
        for (let row of this.data) {
            let labelLength = row[0].length;
            maxLabelLength = Math.max(maxLabelLength, labelLength);
        }
        let chart = '';
        for (let row of this.data) {
            let label = row[0];
            let value = row[1];
            chart += label;

        }
        return ``;
    }
}

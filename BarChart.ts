import { BarChartData } from "./interfaces";
import TextChart from "./TextChart";
export default class BarChart extends TextChart {
    private data: Array<[string, number]> = [];
    public setData(chartData: BarChartData) {
        this.data = chartData.data;
    }
    public render() {
        console.log(`Rendering Bar chart!`);
        const properties = this.getProperties();
        let maxLabelLength = 0;
        let maxAbsoluteValue = 0;
        for (const [label, value] of this.data) {
            const labelLength = label.length;
            maxLabelLength = Math.max(maxLabelLength, labelLength);

            maxAbsoluteValue = Math.max(Math.abs(value), maxAbsoluteValue);
        }
        if (properties.scale) {
            return "max abs value is:" + maxAbsoluteValue;
        } else {
            let chart = "";
            for (const [label, value] of this.data) {
                let row = label;
                while (row.length < maxLabelLength) {
                    row = " " + row;
                }
                let bars = "";
                while (bars.length < value) {
                    bars += this.getProperties().barCharacter;
                }
                chart += `${row} | ${bars} ${value}\n`;
            }
            return chart;
        }
    }
}

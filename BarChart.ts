import { BarCharacters, BarChartData, ChartProperties } from "./interfaces";
import TextChart from "./TextChart";
export default class BarChart extends TextChart {
    private data: Array<[string, number]> = [];
    public setData(chartData: BarChartData) {
        this.data = chartData.data;
    }
    public render() {
        console.log(`Rendering Bar chart!`);
        const chartProperties: ChartProperties = this.getProperties();
        let maxLabelLength: number = 0;
        let maxAbsoluteValue: number = 0;
        for (const [label, value] of this.data) {
            const labelLength = label.length;
            maxLabelLength = Math.max(maxLabelLength, labelLength);

            maxAbsoluteValue = Math.max(Math.abs(value), maxAbsoluteValue);
        }
        if (chartProperties.scale && maxAbsoluteValue > chartProperties.scale) {
            const scaleDownFactor = chartProperties.scale / maxAbsoluteValue;
            const scaledData = this.data.map(([label, value]): [string, number] => {
                return [label, Math.round(scaleDownFactor * value)];
            });
            return generateBarChartFromData(scaledData, maxLabelLength, chartProperties.barCharacter);
        }
        return generateBarChartFromData(this.data, maxLabelLength, chartProperties.barCharacter);
    }
}

function generateBarChartFromData(
    data: Array<[string, number]>,
    maxLabelLength: number,
    barCharacter: string | BarCharacters) {
    let chart = "";
    for (const [label, value] of data) {
        let row = label;
        while (row.length < maxLabelLength) {
            row = " " + row;
        }
        let bars = "";
        while (bars.length < value) {
            bars += barCharacter;
        }
        chart += `${row} | ${bars} ${value}\n`;
    }
    return chart;
}

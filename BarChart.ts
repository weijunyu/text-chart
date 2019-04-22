import { ChartProperties } from "./interfaces";
import TextChart from "./TextChart";
export default class BarChart extends TextChart {
    private data: Array<[string, number]> = [];
    public setData(data: Array<[string, number]>) {
        this.data = data;
    }
    public render() {
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
            // scaled data point: label, original value, scaled value
            const scaledData: Array<[string, number, number]> = this.data
                .map(([label, value]): [string, number, number] => {
                    return [label, value, Math.round(scaleDownFactor * value)];
                });
            return this.generateBarChartFromScaledData(scaledData, maxLabelLength);
        }
        return this.generateBarChartFromData(this.data, maxLabelLength);
    }

    private generateBarChartFromScaledData(
        scaledData: Array<[string, number, number]>,
        maxLabelLength: number,
    ) {
        let chart = "";
        for (const [label, originalValue, scaledValue] of scaledData) {
            let row = label;
            while (row.length < maxLabelLength) {
                row = " " + row;
            }
            let bars = "";
            while (bars.length < scaledValue) {
                bars += this.getProperties().barCharacter;
            }
            chart += `${row} | ${bars} ${originalValue}\n`;
        }
        return chart;
    }

    private generateBarChartFromData(
        data: Array<[string, number]>,
        maxLabelLength: number,
    ) {
        let chart = "";
        for (const [label, value] of data) {
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
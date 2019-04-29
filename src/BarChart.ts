import { ChartProperties } from "./interfaces";
import { generateBarChartFromData, generateBarChartFromScaledData } from "./lib";
import TextChart from "./TextChart";
export default class BarChart extends TextChart {
    private data: Array<[string, number]> = [];
    public setData(data: Array<[string, number]>): BarChart {
        this.data = data;
        return this;
    }
    public setProperties(chartProperties: ChartProperties): BarChart {
        super.setProperties(chartProperties);
        return this;
    }
    public render(): string {
        if (!this.data || this.data.length === 0) {
            throw new Error("Couldn't render bar chart because no data has been set for it!");
        }
        const chartProperties: ChartProperties = this.getProperties();
        let maxLabelLength: number = 0;
        let maxAbsoluteValue: number = 0;
        for (const [label, value] of this.data) {
            const labelLength = label.length;
            maxLabelLength = Math.max(maxLabelLength, labelLength);
            maxAbsoluteValue = Math.max(Math.abs(value), maxAbsoluteValue);
        }
        if (chartProperties.width && maxAbsoluteValue > chartProperties.width) {
            const scaleDownFactor = chartProperties.width / maxAbsoluteValue;
            // scaled data point: label, original value, scaled value
            const scaledData: Array<[string, number, number]> = this.data
                .map(([label, value]): [string, number, number] => {
                    return [label, value, Math.round(scaleDownFactor * value)];
                });
            return generateBarChartFromScaledData(scaledData, maxLabelLength, chartProperties);
        }
        return generateBarChartFromData(this.data, maxLabelLength, chartProperties);
    }
}

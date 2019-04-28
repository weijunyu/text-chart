import { ChartProperties, HistogramProperties } from "./interfaces";
import { generateBarChartFromData ,generateBarChartFromScaledData, roundToDecimalPlace } from "./lib";
import TextChart from "./TextChart";
export default class Histogram extends TextChart {
    private data: number[] = [];
    public setData(data: number[]) {
        this.data = data;
        return this;
    }
    public setProperties(histogramProperties: HistogramProperties): Histogram {
        super.setProperties(histogramProperties);
        return this;
    }
    public render(): string {
        if (!this.data || this.data.length === 0) {
            throw new Error("Couldn't render histogram because no data has been set for it!");
        }
        const min = Math.min(...this.data);
        const max = Math.max(...this.data);
        const bins: number[] = [];
        const numberOfBins = 10;
        const interval: number = (max - min) / numberOfBins;
        for (const value of this.data) {
            let binIndex: number = 0;
            if (interval > 0) {
                binIndex = Math.floor((value - min) / interval);
                if (binIndex === numberOfBins) { // If value === max
                    binIndex--;
                }
            }
            if (!bins[binIndex]) {
                bins[binIndex] = 0;
            }
            bins[binIndex]++;
        }
        const labels: string[] = [];
        let lower: number = min;
        let upper: number = 0;
        for (let i = 0; i < numberOfBins; ++i) {
            upper = lower + interval;
            if (interval > 1 && !Number.isInteger(interval)) {
                labels[i] = `${roundToDecimalPlace(lower, 2)} - ${roundToDecimalPlace(upper, 2)}`;
            } else if (interval < 1) {
                // eg: if scale is 0.01 - 0.099..., log10 yields -2.
                // precision is abs(-2) + 1 = 3 decimal places
                const scale = Math.floor(Math.log10(interval)); // Negative
                const precision = Math.abs(scale) + 1;
                labels[i] = `${roundToDecimalPlace(lower, precision)} - ${roundToDecimalPlace(upper, precision)}`;
            } else {
                labels[i] = `${lower} - ${upper}`;
            }
            lower = upper;
        }

        const graphData: Array<[string, number]> = [];
        // Merge labels with bins
        labels.forEach((label, index) => {
            graphData.push([label, bins[index]]);
        });

        const chartProperties: ChartProperties = this.getProperties();
        let maxLabelLength: number = 0;
        let maxAbsoluteValue: number = 0;
        for (const [label, value] of graphData) {
            const labelLength = label.length;
            maxLabelLength = Math.max(maxLabelLength, labelLength);
            maxAbsoluteValue = Math.max(Math.abs(value), maxAbsoluteValue);
        }
        if (chartProperties.width && maxAbsoluteValue > chartProperties.width) {
            const scaleDownFactor = chartProperties.width / maxAbsoluteValue;
            // scaled data point: label, original value, scaled value
            const scaledData: Array<[string, number, number]> = graphData
                .map(([label, value]): [string, number, number] => {
                    return [label, value, Math.round(scaleDownFactor * value)];
                });
            return generateBarChartFromScaledData(scaledData, maxLabelLength, chartProperties);
        }
        return generateBarChartFromData(graphData, maxLabelLength, chartProperties);
    }
}

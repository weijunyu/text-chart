import { HistogramProperties } from "./interfaces";
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
    public render() {
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
        let labels: string[] = [];
        let lower: number = min;
        let upper: number = 0;
        for (let i = 0; i < numberOfBins; ++i) {
            upper = lower + interval;
            labels[i] = `${lower} - ${upper}`;
            lower = upper;
        }
        let output = labels.map((label, index) => {
            return `${label} | ${bins[index]}`;
        }).join('\n')
        return output;
    }
}

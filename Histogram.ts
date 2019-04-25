import { ChartProperties } from "./interfaces";
import TextChart from "./TextChart";
export default class Histogram extends TextChart {
    private data: number[] = [];
    public setData(data: number[]) {
        this.data = data;
        return this;
    }
    public setProperties(chartProperties: ChartProperties): Histogram {
        super.setProperties(chartProperties);
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
        return bins.toString();
    }
}

import { HistogramChartData } from "./interfaces";
import TextChart from "./TextChart";
export default class Histogram extends TextChart {
    private data: number[] = [];
    public setData(chartData: HistogramChartData) {
        this.data = chartData.data;
    }
    public render() {
        return `Rendering histogram! data is: ${this.getProperties().barCharacter}${JSON.stringify(this.data)}${this.getProperties().barCharacter}`;
    }
}

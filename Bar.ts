import { BarChartData } from "./interfaces";
import TextChart from "./TextChart";
export default class Bar extends TextChart {
    private data: Array<[string, number]> = [];
    public setData(chartData: BarChartData) {
        this.data = chartData.data;
    }
    public render() {
        return `Rendering bar chart! data is: ${this.getProperties().barCharacter}${JSON.stringify(this.data)}${this.getProperties().barCharacter}`;
    }
}

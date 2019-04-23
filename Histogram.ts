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
        return this.data.toString();
    }
}

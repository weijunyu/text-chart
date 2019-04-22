import TextChart from "./TextChart";
export default class Histogram extends TextChart {
    private data: Array<[number, number]> = [];
    public setData(data: Array<[number, number]>) {
        this.data = data;
    }
    public render() {
        return this.data.toString();
    }
}

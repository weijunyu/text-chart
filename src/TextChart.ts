import { BarCharacters, ChartProperties } from "./interfaces";
export default abstract class TextChart {
    static DefaultBarCharacter: string = BarCharacters.BlackSquare;
    private properties: ChartProperties = {
        barCharacter: TextChart.DefaultBarCharacter,
    };
    constructor(properties: ChartProperties | void) {
        if (properties) {
            Object.assign(this.properties, properties);
        }
    }
    public getProperties(): ChartProperties {
        return this.properties;
    }
    public setProperties(properties: ChartProperties): void {
        Object.assign(this.properties, properties);
    }
    public abstract render(): string;
}

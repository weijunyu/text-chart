import { BarCharacters, ChartProperties } from "./interfaces";
export default abstract class TextChart {
    private properties: ChartProperties = {
        barCharacter: BarCharacters.Medium,
        scale: 10,
    };
    constructor(properties: ChartProperties | void) {
        if (properties) {
            Object.assign(this.properties, properties);
        }
    }
    public getProperties(): ChartProperties {
        return this.properties;
    }
    public setProperties(properties: ChartProperties) {
        Object.assign(this.properties, properties);
    }
    public abstract render(): string;
}

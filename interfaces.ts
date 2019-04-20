export enum ChartType {
    Bar = "bar",
    Histogram = "histogram",
}

export enum BarCharacters {
    Light = "░",
    Medium = "▒",
    Dark = "▓",
}

export interface ChartProperties {
    barCharacter?: string | BarCharacters;
    scale?: number;
}

export interface BarChartData {
    data: Array<[string, number]>;
}

export interface HistogramChartData {
    data: number[];
}

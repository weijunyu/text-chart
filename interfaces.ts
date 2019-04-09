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
}

export interface BarChartData {
    data: Array<[string, number]>;
}

export interface HistogramChartData {
    data: number[];
}

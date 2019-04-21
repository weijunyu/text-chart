export enum ChartType {
    Bar = "bar",
    Histogram = "histogram",
}

export enum BarCharacters {
    LightShade = "░",
    MediumShade = "▒",
    DarkShade = "▓",
    BlackSquare = "■",
    WhiteSquare = "□",
    BlackRectangle = "▮",
    WhiteRectangle = "▯",
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

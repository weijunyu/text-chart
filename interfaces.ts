export enum ChartType {
    Bar = "bar",
    Histogram = "histogram",
}

/**
 * // Chars:
 * ▓ (U+2593) dark shade,
 * ▒ (U+2592) medium shade,
 * ░ (U+2591) light shade,
 * *, =, #, anything really. Add on here.
 */
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

export enum ChartType {
    Bar = "bar",
    Histogram = "histogram",
}

export enum BarCharacters {
    LightShade = "░", // ░ U+2591 Light Shade
    MediumShade = "▒", // ▒ U+2592 Medium Shade
    DarkShade = "▓", // ▓ U+2593 Dark Shade
    BlackSquare = "■", // ■	U+25A0 Black Square
    WhiteSquare = "□", // □	U+25A1 White Square
    BlackRectangle = "▮", // ▮ U+25AE Black Vertical Rectangle
    WhiteRectangle = "▯", // ▯ U+25AF White Vertical Rectangle
    HorizontalFillSquare = "▤", // ▤ U+25A4 Square with Horizontal Fill
    VerticalFillSquare = "▥", // ▥ U+25A5 Square with Vertical Fill
    OrthogonalCrosshatchFillSquare = "▦", // ▦ U+25A6 Square with Orthogonal Crosshatch Fill
    UpperLeftToLowerRightFillSquare = "▧", // ▧ U+25A7 Square with Upper Left to Lower Right Fill
    UpperRightToLowerLeftFillSquare = "▨", // ▨ U+25A8 Square with Upper Right to Lower Left Fill
    DiagonalCrosshatchFillSquare = "▩", // ▩ U+25A9 Square with Diagonal Crosshatch Fill
    // Add on as desired
}

export interface ChartProperties {
    barCharacter: string | BarCharacters;
    scale?: number;
}

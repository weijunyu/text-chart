import { ChartProperties } from "./interfaces";

export function generateBarChartFromScaledData(
    scaledData: Array<[string, number, number]>,
    maxLabelLength: number,
    chartProperties: ChartProperties
): string {
    let chart = "";
    scaledData.forEach(([label, originalValue, scaledValue], index) => {
        let row = label;
        while (row.length < maxLabelLength) {
            row = " " + row;
        }
        let bars = "";
        while (bars.length < scaledValue) {
            bars += chartProperties.barCharacter;
        }
        chart +=
            index !== scaledData.length - 1
                ? `${row} | ${bars} ${originalValue}\n`
                : `${row} | ${bars} ${originalValue}`;
    });
    return chart;
}

export function generateBarChartFromData(
    data: Array<[string, number]>,
    maxLabelLength: number,
    chartProperties: ChartProperties
): string {
    let chart = "";
    data.forEach(([label, value], index) => {
        let row = label;
        while (row.length < maxLabelLength) {
            row = " " + row;
        }
        let bars = "";
        while (bars.length < value) {
            bars += chartProperties.barCharacter;
        }
        chart +=
            index !== data.length - 1
                ? `${row} | ${bars} ${value}\n`
                : `${row} | ${bars} ${value}`;
    });
    return chart;
}

export function roundToDecimalPlace(num: number, precision: number): number {
    return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
}

export function isInteger(value: any): boolean {
    return (
        typeof value === "number" &&
        isFinite(value) &&
        Math.floor(value) === value
    );
}

export function log10(value: number): number {
    return Math.log(value) / Math.log(10);
}

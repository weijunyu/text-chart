export function roundToDecimalPlace(num: number, precision: number): number {
    return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
}

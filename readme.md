# Text Charts

[![npm](https://img.shields.io/npm/v/text-chart.svg)](https://www.npmjs.com/package/text-chart)
[![CircleCI](https://circleci.com/gh/weijunyu/text-chart.svg?style=shield)](https://circleci.com/gh/weijunyu/text-chart)

Generate text-based bar charts and histograms.

## Usage - basic

### Bar charts

#### TypeScript

```typescript
import { BarChart } from "text-chart";

const barChart = new BarChart();
barChart.setData([["apples", 15], ["oranges", 3], ["bananas", 12]]);
console.log(barChart.render());
/*
 apples | ■■■■■■■■■■■■■■■ 15
oranges | ■■■ 3
bananas | ■■■■■■■■■■■■ 12
*/
```

#### Node.js

```javascript
const TextChart = require("text-chart");
const barChart = new TextChart.BarChart();
barChart.setData([["apples", 15], ["oranges", 3], ["bananas", 12]]);
console.log(barChart.render());
/*
 apples | ■■■■■■■■■■■■■■■ 15
oranges | ■■■ 3
bananas | ■■■■■■■■■■■■ 12
*/
```

### Histograms

#### TypeScript

```typescript
import { Histogram } from "text-chart";
const histogramDefault = new Histogram().setProperties({
    width: 20, // Limit chart's max width
});
const histogramDefaultData: number[] = [];
for (let i = 0; i < 1000; i++) {
    histogramDefaultData.push(Math.random() * 60);
}
for (let i = 0; i < 1000; i++) {
    histogramDefaultData.push(40 + Math.random() * 25);
}
histogramDefault.setData(histogramDefaultData);
console.log(histogramDefault.render());
/*
  0.01 - 6.51 | ■■■■■■ 106
 6.51 - 13.01 | ■■■■■ 103
13.01 - 19.51 | ■■■■■■ 117
19.51 - 26.01 | ■■■■■ 102
 26.01 - 32.5 | ■■■■■■■ 125
    32.5 - 39 | ■■■■■ 101
    39 - 45.5 | ■■■■■■■■■■■■■■■■■ 320
    45.5 - 52 | ■■■■■■■■■■■■■■■■■■■ 353
    52 - 58.5 | ■■■■■■■■■■■■■■■■■■■■ 381
 58.5 - 64.99 | ■■■■■■■■■■■■■■■ 292
*/
```

#### Node.js

```javascript
const TextChart = require("text-chart");
const histogramDefault = new TextChart.Histogram().setProperties({
    width: 20,
});
const histogramDefaultData = [];
for (let i = 0; i < 1000; i++) {
    histogramDefaultData.push(Math.random() * 60);
}
for (let i = 0; i < 1000; i++) {
    histogramDefaultData.push(40 + Math.random() * 25);
}
histogramDefault.setData(histogramDefaultData);
console.log(histogramDefault.render());
/*
  0.21 - 6.69 | ■■■■■■ 110
 6.69 - 13.17 | ■■■■■■ 106
13.17 - 19.64 | ■■■■■■ 107
19.64 - 26.12 | ■■■■■■ 116
 26.12 - 32.6 | ■■■■■ 97
 32.6 - 39.08 | ■■■■■■ 114
39.08 - 45.56 | ■■■■■■■■■■■■■■■■■■■ 348
45.56 - 52.04 | ■■■■■■■■■■■■■■■■■■■■ 372
52.04 - 58.51 | ■■■■■■■■■■■■■■■■■■■ 352
58.51 - 64.99 | ■■■■■■■■■■■■■■■ 278
*/
```

## Instance methods

### (BarChart) `setData(data: Array<[string, number]>): BarChart;`

`data` is an array of arrays with each sub-array's first element being the bar's label (string) and second element being the value of that bar.

### (Histogram) `setData(data: number[]): Histogram`

`data` is an array of numbers.

### (Histogram, BarChart) `setProperties(properties): BarChart | Histogram`

`properties.width` (optional):
Sets maximum width (number of characters) of chart. If not given, bars will be rendered according to values in `setData`.

`properties.barCharacter` (optional):
Character used to render bars.

`properties.min`, `properties.max`, `properties.interval` (optional, histogram only): Set minimum, maximum and interval values for histogram. If left out, estimates will be calculated from the data.

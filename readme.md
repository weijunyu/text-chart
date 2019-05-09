# Text Charts
[![npm](https://img.shields.io/npm/v/text-chart.svg)](https://www.npmjs.com/package/text-chart)
[![CircleCI](https://circleci.com/gh/weijunyu/text-chart.svg?style=shield)](https://circleci.com/gh/weijunyu/text-chart)

Generate text-based bar charts and histograms.

## Usage (TypeScript)
### Bar charts
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
### Histogram with all options
```typescript
import { BarCharacters, Histogram } from "text-chart";
const histogram = new Histogram().setProperties({
    min: 0,
    max: 70,
    interval: 10,
    width: 20,
    barCharacter: BarCharacters.WhiteSquare
});
const histogramData: number[] = [];
for (let i = 0; i < 1000; i++) {
    histogramData.push(Math.random() * 60);
}
for (let i = 0; i < 1000; i++) {
    histogramData.push(40 + Math.random() * 25);
}
histogram.setData(histogramData);
console.log(histogram.render());
/* 
 0 - 10 | □□□□□ 163
10 - 20 | □□□□□ 158
20 - 30 | □□□□□ 164
30 - 40 | □□□□□□ 176
40 - 50 | □□□□□□□□□□□□□□□□□□□□ 602
50 - 60 | □□□□□□□□□□□□□□□□□□□ 557
60 - 70 | □□□□□□ 180
*/
```

### Histogram with default options
There will be 10 intervals by default, from which values for minimum/maximum/interval size will be estimated.

```typescript
import { Histogram } from "text-chart";
const histogramDefault = new Histogram().setProperties({
    width: 20,
    barCharacter: "*"
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
  0.52 - 6.97 | ****** 117
 6.97 - 13.42 | ***** 100
13.42 - 19.86 | ****** 105
19.86 - 26.31 | ****** 108
26.31 - 32.76 | ****** 117
32.76 - 39.21 | ***** 102
39.21 - 45.66 | ****************** 339
 45.66 - 52.1 | ******************* 355
 52.1 - 58.55 | ******************** 375
   58.55 - 65 | *************** 282
*/
```

## Usage (JavaScript)
See `examples.js`

### Instance methods
#### `setData(data: Array<[string, number]>): BarChart;`
`data`: array of `[label(string), value(number)]` arrays that corresponds to each bar. Must be called before `render()`!

#### `setProperties(properties)`
`properties.width` (optional): 
Sets maximum width (number of characters) of chart. If not given, bars will be rendered according to values in `setData`.

`properties.barCharacter` (optional): 
Character used to render bars.

`properties.min`, `properties.max`, `properties.interval` (optional, histogram only): Set minimum, maximum and interval values for histogram. If left out, estimates will be calculated from the data.

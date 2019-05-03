# Text Charts
Generate text-based bar charts and histograms.

## Usage - see examples.ts
```typescript
import { BarChart } from "text-chart";

const barChart = new BarChart();
barChart
    .setProperties({
        width: 10 // Set maximum width
    })
    .setData([["apples", 15], ["oranges", 3], ["bananas", 12]]);
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
    barCharacter: BarCharacters.WhiteSquare // Set bar appearance
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
 0 - 10 | □□□□□□ 174
10 - 20 | □□□□□ 153
20 - 30 | □□□□□□ 175
30 - 40 | □□□□□□□ 189
40 - 50 | □□□□□□□□□□□□□□□□□□□□ 573
50 - 60 | □□□□□□□□□□□□□□□□□□□ 541
60 - 70 | □□□□□□□ 195
*/
```

### Histogram with default options
There will be 10 intervals by default, from which values for minimum/maximum/interval size will be estimated.

```typescript
import { BarCharacters, Histogram } from "text-chart";
const histogramDefault = new Histogram().setProperties({
    width: 20,
    barCharacter: BarCharacters.WhiteSquare
});
const histogramDefaultData: number[] = [];
for (let i = 0; i < 1000; i++) {
    histogramDefaultData.push(Math.random() * 250);
}
for (let i = 0; i < 1000; i++) {
    histogramDefaultData.push(50 + Math.random() * 50);
}
histogramDefault.setData(histogramDefaultData);
console.log(histogramDefault.render());
/*
 0.31 - 10.28 | □□□□□□□ 118
10.28 - 20.25 | □□□□□□ 95
20.25 - 30.22 | □□□□□□ 97
30.22 - 40.19 | □□□□□□ 96
40.19 - 50.15 | □□□□□□□ 107
50.15 - 60.12 | □□□□□□□□□□□□□□□□□□□ 300
60.12 - 70.09 | □□□□□□□□□□□□□□□□□□□ 296
70.09 - 80.06 | □□□□□□□□□□□□□□□□□□ 282
80.06 - 90.03 | □□□□□□□□□□□□□□□□□□ 289
90.03 - 99.99 | □□□□□□□□□□□□□□□□□□□□ 320
*/
```
# Text Charts
Generate text-based bar charts and histograms.

## Usage
```typescript
import { BarCharacters, BarChart, Histogram } from 'text-chart';

// Basic usage
const bar = new BarChart();
bar.setData([
    ["apples", 15],
    ["oranges", 3],
    ["bananas", 12],
])
const chart: string = bar.render();
/*
 apples | ■■■■■■■■■■■■■■■ 15
oranges | ■■■ 3
bananas | ■■■■■■■■■■■■ 12
*/

// Use setData and setProperties (chainable) to control the output
const chartWithMaxWidth: string = bar
    .setData([
        ["apples", 15],
        ["oranges", 3],
        ["bananas", 12],
    ])
    .setProperties({
        width: 10, // Set maximum width
        barCharacter: BarCharacters.WhiteSquare, // Set bar appearance
    })
    .render();
/* 
 apples | □□□□□□□□□□ 15
oranges | □□ 3
bananas | □□□□□□□□ 12
*/

const histogram = new Histogram()
```
## Graph properties
### Bar Chart


## Default histogram label rounding
### Interval >= 1
Round non-integer labels to nearest 2 decimal places

### Interval < 1
| interval | log(interval) | round to nearest decimal places |
| --- | --- | --- |
| 0.99 to 0.1 | 0 to -1 | 2 |
| 0.099 to 0.01 | -1 to -2 | 3 |
| ... | -(n - 1) to -n | n + 1 |
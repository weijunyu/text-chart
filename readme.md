```typescript
import TextChart from 'text-chart';

// Bar charts have gaps, historgram doesn't
const myBarChart: TextChart = new TextChart({
    type: 'bar', // 'bar' or 'histogram'
    data: [
        // BarChartData interface
        {
            label: 'first',
            value: 1
        },
        {
            label: 'second',
            value: 2
        }
    ],
    // Chars: ▓ (U+2593) dark shade, ▒ (U+2592) medium shade, ░ (U+2591) light shade, *, =, #, anything really
    barCharacter: TextChart.BarCharacters.Dark
})

const chart: string = myBarChart.render();
```
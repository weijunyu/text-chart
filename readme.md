# Text Charts

## Default histogram label rounding
### Interval >= 1
Round non-integer labels to nearest 2 decimal places

### Interval < 1
| interval | log(interval) | round to nearest decimal places |
| --- | --- | --- |
| 0.99 to 0.1 | 0 to -1 | 2 |
| 0.099 to 0.01 | -1 to -2 | 3 |
| ... | -(n - 1) to -n | n + 1 |
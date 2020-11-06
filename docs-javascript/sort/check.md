```
Loop-i= 0 < 5 <-[i = 0] < Length = 5
Loop-j= 0 < 5 <-[n-i-1]
Loop-j= 1 < 5
Check item pertama : 85 > 3 <- Next Item[index+1]
Current : 85
Loop-j= 2 < 5
Check item pertama : 85 > 10 <- Next Item[index+1]
Current : 85
Loop-j= 3 < 5
Check item pertama : 85 > 1 <- Next Item[index+1]
Current : 85
Loop-j= 4 < 5
Check item pertama : 85 > 4 <- Next Item[index+1]
Current : 85
Loop-i= 1 < 5 <- [i = 1] < Length = 5
Loop-j= 0 < 4
Loop-j= 1 < 4
Loop-j= 2 < 4
Check item pertama : 10 > 1 <- Next Item[index+1]
Current : 10
Loop-j= 3 < 4
Check item pertama : 10 > 4 <- Next Item[index+1]
Current : 10
Loop-i= 2 < 5 <- [i = 2] < Length = 5
Loop-j= 0 < 3
Loop-j= 1 < 3
Check item pertama : 3 > 1 <- Next Item[index+1]
Current : 3
Loop-j= 2 < 3
Loop-i= 3 < 5 <- [i = 3] < Length = 5
Loop-j= 0 < 2
Check item pertama : 2 > 1 <- Next Item[index+1]
Current : 2
Loop-j= 1 < 2
Loop-i= 4 < 5 <- [i = 4] < Length = 5
Loop-j= 0 < 1 <-[n-i-1] // 5-4-1 = 0
```

**inputArr** = [2, 85, 3, 10, 1, 4];
**bubble sort :** 1 2 3 4 10 85

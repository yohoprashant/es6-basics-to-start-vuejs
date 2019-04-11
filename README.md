# JavaScript Array Functions


#MAP
Often, we find ourselves needing to take an array and modify every element in it in exactly the same way. Typical examples of this are squaring every element in an array of numbers, retrieving the name from a list of users, or running a regex against an array of strings.

map is a method built to do exactly that. It's defined on Array.prototype, so you can call it on any array, and it accepts a callback as its first argument. 

Under the hood, map passes three arguments to your callback:

- The current item in the array
- The array index of the current item
- The entire array you called map on 

#FILTER
It does exactly what it sounds like: It takes an array, and filters out unwanted elements. 

Like map, filter is defined on Array.prototype. It's available on any array, and you pass it a callback as its first argument. filter executes that callback on each element of the array, and spits out a new array containing only the elements for which the callback returned true. Basically, if the callback function returns true, the current element will be in the resulting array and if it returns false, it won’t be.

Also like map, filter passes your callback three arguments:

- The current item 
- The current index
- The array you called filter on


#REDUCE
map creates a new array by transforming every element in an array, individually. filter creates a new array by removing elements that don't belong. reduce, on the other hand, takes all of the elements in an array, and reduces them into a single value.

Just like map and filter, reduce is defined on Array.prototype and so available on any array, and you pass a callback as its first argument. But it also takes an optional second argument: the value to start combining all your array elements into. 

reduce passes your callback four arguments:

- The current value
- The previous value 
- The current index
- The array you called reduce on


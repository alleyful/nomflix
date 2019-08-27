
# Day2
> 오늘의 강의: #1.6 ~ #1.8   
> 오늘의 과제: 위의 강의들을 시청하신 후, 아래 코드 챌린지를 제출하면 됩니다.

<br/>

[[멤버십] 초보를 위한 React JS](https://academy.nomadcoders.co/courses/436641/lectures/8467057)
- 1.6 Array.map
- 1.7 Array.filter
- 1.8 .forEach .includes .push

<br/>

---

<br/>

## Lecture Summery
강의에서 소개된 Array 메소드를 간단히 정리한 후 소개되지 않은 메소드들도 함께 정리해보자.

<br/>

### 1.6 Array.map
`map()` 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 **새로운 배열을 반환**합니다.

```javascript
const days = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' ];
const addNumber = (day, index) => `#${index + 1} ${day}`;
const smileDays = days.map(addNumber);
```

<br/>

### 1.7 Array.filter
`filter()` 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 **새로운 배열로 반환**합니다.

```javascript
let posts = [ 'Hi', 'Hello', 'Bye' ];

posts = posts.filter(post => post !== 'Bye');
```

<br/>

### 1.8 .forEach .includes .push
`forEach()` 메서드는 주어진 함수를 배열 요소 **각각에 대해 실행**합니다.  
`includes()` 메서드는 배열이 특정 요소를 포함하고 있는지 판별 후 **boolean**값을 반환합니다.
`push()` 메서드는 **배열의 끝에 하나 이상의 요소를 추가**하고, 배열의 새로운 **길이를 반환**합니다.

```javascript
let posts = [ 'Hi', 'Hello', 'Bye' ];

posts.forEach(post => console.log(post));

posts.push('new');

if(posts.includes('Howdy')){
  posts.push('Howdy');
}
```

<br/>

---

<br/>

## JavaScript 배열 메소드 ( Array method ) 

<br/>

### 변경자 메서드
변경자 메서드는 **배열을 수정**합니다.

<br/>

#### copyWithin()   
메서드는 배열의 일부를 얕게 복사한 뒤, 동일한 배열의 다른 위치에 덮어쓰고 그 배열을 반환합니다. 이 때, 크기(배열의 길이)를 수정하지 않고 반환합니다.
```javascript
const array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]
```

<br/>
    
#### fill()   
배열 안의 시작 인덱스부터 끝 인덱스까지의 요소값을 지정된 정적 값으로 채웁니다.

```javascript
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]
```
    
<br/>

#### pop()   
배열에서 마지막 요소를 뽑아내고, 그 요소를 반환합니다.

```javascript
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

```

<br/>

#### push()   
배열의 끝에 하나 이상의 요소를 추가하고, 변경된 배열의 길이를 반환합니다.

```javascript
const animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));
// expected output: 4

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]
```
    
<br/>

#### reverse()   
배열의 요소 순서를 반전시킵니다. - 첫 번째가 마지막이 되고 마지막이 첫 번째가 됩니다. 원본 배열도 변경됩니다.

```javascript
const array1 = ['one', 'two', 'three'];
console.log('array1: ', array1);
// expected output: Array ['one', 'two', 'three']

const reversed = array1.reverse(); 
console.log('reversed: ', reversed);
// expected output: Array ['three', 'two', 'one']

/* Careful: reverse is destructive. It also changes
the original array */ 
console.log('array1: ', array1);
// expected output: Array ['three', 'two', 'one']
```
 
<br/>
   
#### shift()   
배열에서 첫 번째 요소를 삭제하고 그 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.

```javascript
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
```
   
<br/>
 
#### sort()   
배열의 요소를 정렬하고 그 배열을 반환합니다. 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.

```javascript
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
// expected output: Array [1, 100000, 21, 30, 4]

const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);  // [1, 2, 3, 4, 5]
numbers.sort((a, b) => b - a);  // [5, 4, 3, 2, 1]
```
    
<br/>

#### splice()   
메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.

```javascript
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']
```

<br/>
    
#### unshift()   
배열의 앞에 하나 이상의 요소를 추가하고 새로운 길이를 반환합니다.

```javascript
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
```

<br/>

<br/>

### 접근자 메서드
접근자 메서드는 **배열을 수정하지 않고 배열 일부를 반환**합니다.

<br/>

#### concat()   
배열과, 인자로 주어진 배열/값을 결합해 새로운 배열을 만들고, 이 새 배열을 반환합니다.
- 기존배열을 변경하지 않습니다. 
- 추가된 새로운 배열을 반환합니다.

```javascript
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

<br/>
    
#### includes()   
배열에 특정 요소가 포함돼있는지 알아내어 true 또는 false를 적절히 반환합니다.

```javascript
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true
```

<br/>
    
#### indexOf()   
배열에서 지정한 값과 같은 요소의 첫 인덱스를 반환합니다. 없으면 -1을 반환합니다.

```javascript
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
```

<br/>
    
#### join()   
배열의 모든 요소를 문자열로 변환하여 합칩니다.

```javascript
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```

<br/>
    
#### lastIndexOf()   
배열에서 지정한 값과 같은 요소의 마지막 인덱스를 반환합니다. 없으면 -1을 반환합니다.

```javascript
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3
```

<br/>
    
#### slice()   
메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 수정되지 않습니다.

```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
```

<br/>
    
#### toString()   
배열과 요소를 반환하는 문자열을 반환합니다. Object.prototype.toString() 메서드를 재정의합니다.

```javascript
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"
``` 

<br/>

<br/>

### 순회 메서드
배열을 처리하는 동안, 각각의 배열요소에 대해 (인자로 주어진) 콜백 함수를 호출하는 메서드가 몇 개 있습니다.   
이러한 메서드들은 메서드의 호출시점에 배열의 길이를 확인한 후, 그 길이까지의 배열요소에 대해서만 콜백을 수행하며, 콜백 중에 추가된 배열 요소(메서드 호출시점에 확인된 길이보다 더 큰 인덱스값을 갖는 요소들)에 대해서는 콜백을 수행하지 않습니다.   
만약 이런 메서드를 이용해 배열을 변경해야한다면, 원본 배열 대신 새로운 배열로 값을 복사하는 방식으로 처리하세요.

<br/>

#### entries()   
메서드는 배열의 각 인덱스에 대한 키/값 쌍을 가지는 새로운 `Array Iterator` 객체를 반환합니다.

```javascript
const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]
```

<br/>
    
#### every()   
만약 배열의 모든 요소가 제공된 검사 함수를 만족하면 true를 반환합니다.(빈배열에서 호출하면 무조건 true 반환)

```javascript
function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
```

<br/>
    
#### filter()   
주어진 필터링 함수의 값의 결과가 참인 경우의 배열 요소들만으로 새로운 배열을 생성하여 반환합니다

```javascript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

<br/>
    
#### find()   
주어진 테스팅 함수의 요구조건을 만족하는 배열 요소를 반환합니다. 그러한 배열 요소가 없으면  undefined를 반환합니다.

```javascript
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12
```

<br/>
    
#### findIndex()   
주어진 테스트 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 그렇지 않으면 -1이 리턴됩니다.

```javascript
const array1 = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
  return element > 13;
}

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```

<br/>
    
#### forEach()   
메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.배열의 각각의 요소에 함수를 호출합니다.

```javascript
const array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

<br/>
    
#### keys()   
배열의 각 인덱스에 대한 key들을 가지는 새로운 `Array Iterator` 객체를 반환합니다.

```javascript
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys(); 
  
for (let key of iterator) {
  console.log(key); // expected output: 0 1 2
}
```

<br/>
    
#### map()   
배열 내의 모든 요소 각각에 대하여  제공된 함수(callback)를 호출하고, 그 결과를 모아서  만든 새로운 배열을 반환합니다.

```javascript
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

<br/>
    
#### reduce()   
메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.

```javascript
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```

<br/>
    
#### reduceRight()   
메서드는 누적기에 대해 함수를 적용하고 배열의 각 값 (오른쪽에서 왼쪽으로)은 값을 단일 값으로 줄여야합니다.

```javascript
const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
  (accumulator, currentValue) => accumulator.concat(currentValue)
);

console.log(array1);
// expected output: Array [4, 5, 2, 3, 0, 1]
```

<br/>
    
#### some()   
배열중의 적어도 한 요소가 테스팅 함수를 만족시킨 다면 true를 반환합니다.(빈배열에서 호출시 무조건 false 반)

```javascript
const array = [1, 2, 3, 4, 5];

const even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true
```

<br/>
    
#### values()   
배열의 요소값들에 대한 Array Iterator 객체를 반환합니다.

```javascript
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value); // expected output: "a" "b" "c"
}
```
 
<br/>    

<br/>

### Reference
- [MDN Array](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

<br/>

## Homework 
```javascript
class ArrayUtilities {
  /* Your magic here */
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
```
<br/>

### Constraints
Complete the "ArrayUtilities" class with the following functions:

- **addZeros**: Add zeros to all the numbers. Return an array of **numbers**.
- **moreThanFifty**: Remove the numbers that are **not** more than 50. Return an array of **numbers**.
- **removeFirst**: Remove the first element of the array. Return an array of **numbers**.
- **sumAll**: Sum all the elements of the array. Return **ONE** number.
- **divide**: Take a number and divide it into an array.

<br/>

### Output
This is the desired output.
```
▶ [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
▶ [60, 70, 80, 90, 100]
▶ [70, 80, 90, 100]
340
▶ ["3", "4", "0"]
```

<br/>

### Hint
- Use arrow functions
- Not everything is on the videos, research!

<br/>

### Submit

`My Answer`
[Day2 CodeSandbox](https://codesandbox.io/s/day-two-blueprint-8zzqh)

```javascript 
class ArrayUtilities {
  static addZeros = numbers => numbers.map(number => Number(`${number}0`));
  static moreThanFifty = numbers => numbers.filter(number => number > 50);
  static removeFirst = numbers => numbers.slice(1);
  static sumAll = numbers =>
    numbers.reduce((target, number) => target + number, 0);
  static divide = number => [...String(number)];
}
```

<br/>

`Correct`
```javascript

```

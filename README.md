# React 2주 챌린지

---

<br/>

<br/>

# Day1
> - 오늘의 강의: #1.0 ~ #1.5
> - 오늘의 과제: 위의 강의들을 시청하신 후, 아래 코드 챌린지를 제출하면 됩니다.

<br/>

---

<br/>

## Lecture Summery

### 1.1 Arrow Functions
화살표 함수(Arrow function)는 function 키워드 대신 (=>)를 사용하여 보다 간략한 함수를 선언할 수 있다.

- 기본 문법

```
// 매개변수 지정 방법
    () => { ... } // 매개변수가 없을 경우
     x => { ... } // 매개변수가 한 개인 경우, 소괄호를 생략할 수 있다.
(x, y) => { ... } // 매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다.

// 함수 몸체 지정 방법
x => { return x * x }  // single line block
x => x * x             // 함수 몸체가 한줄의 구문이라면 중괄호를 생략할 수 있으며 암묵적으로 return된다. 위 표현과 동일하다.

() => { return { a: 1 }; }
() => ({ a: 1 })  // 위 표현과 동일하다. 객체 반환시 소괄호를 사용한다.

() => {           // multi line block.
  const x = 10;
  return x * x;
};
```

- 사용 방법
```javascript
function sayHello(name = "Alley") {
  return "Hello" + name;
}

// arrow Function
const sayHello = (name = "Alley") => "Hello" + name;
```

- 화살표 함수 Vs 일반함수  
    1. 화살표 함수는 항상 바인딩 된 this를 갖는다.(Lexical this)
    2. 화살표 함수는 생성자로 사용할 수 없다(constructor, prototype 없음)
    3. arguments를 지원하지 않음.

- 화살표 함수를 사용해서는 안되는 경우
    1. 메소드: 메소드를 호출한 객체를 가리키지 않고 상위 컨택스트를 가리킨다. => ES6 축약 메소드 표현 사용
    2. prototype: 위와 같은 문제가 발생하여 일반 함수를 할당하게 된다. 
    3. 생성자 함수: 화살표 함수는 prototype 프로퍼티를 가지고 있지 않기때문에 프로토타입 객제의 constructor를 사용할 수 없다.

- Reference
    - [#1.1 Arrow Functions](https://academy.nomadcoders.co/courses/436641/lectures/8467057)
    - [화살표 함수](https://poiemaweb.com/es6-arrow-function)
    - [화살표 함수와 메소드 정의](http://webframeworks.kr/tutorials/translate/arrow-function/)
    - [MDN 화살표 함수와](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)
    
<br/>

### 1.2 Template Literals
```javascript
const sayHello = (name = "Alley") => `Hello ${name}`;
```

<br/>

### 1.3 Object Destructuring
```javascript
const human = {
  name: "Alley",
  lastName: "Kim",
  nation: "Korea",
  favFood: {
    breakfast: "egg",
    lunch: "bread",
    dinner: "meat"
  }
};

const name = human.name;
const lastName = human.lastName;
const difNation = human.nation;
const dinner = human.favFood.dinner;

//Destructuring
const { name, lastName, nation: difNation, favFood: { dinner } } = human;
```

<br/>

### 1.4 Spread Operator
```javascript
// Array
const days = [ 'Mon', 'Tues', 'Wed' ];
const otherDays = [ 'Thu', 'Fri', 'Sat' ];

const allDays = [ ...days, ...otherDays, 'Sun' ];
```

```javascript
// Obj
const ob = {
  first: 'hi',
  second: 'hello'
};

const ab = {
  thrid: 'bye bye'
};

const two = { ...ob, ...ab }
```

<br/>

### 1.5 Classes
```javascript
class Human {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

class Baby extends Human {
  cry() {
    console.log('Waaaaaa');
  }
  sayName() {
    console.log(`My Name is ${this.name}`)
  }
}

const myBaby = new Baby('mini', 'me');
console.log(myBaby.cry(), myBaby.sayName());
```

<br/>

---

<br/>

## Homework 
```javascript
class ObjectUtilities {
  /* Your magic here */
}

const objA = {
  name: "Nicolas",
  favFood: "Kimchi"
};

const objB = {
  password: "12345"
};

const user = ObjectUtilities.mergeObjects(objA, objB);
console.log(user);

const cleanUser = ObjectUtilities.removePassword(user);
console.log(cleanUser);

const frozenUser = ObjectUtilities.freezeObj(cleanUser);

const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
console.log(onlyValues);

const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
console.log(onlyProperties);

frozenUser.name = "Hello!"; // This should show an error
```
<br/>

### Constraints
Complete the "**ObjectUtilities**" class with the following functions.
- **mergeObjects**: Merge two objects. Return an object.
- **removePassword**: Remove the 'password' key on an object. Return an object.
- **freezeObj**: Freezes an object. Returns the frozen object.
- **getOnlyValues**: Returns an array of all the values inside of an object.
- **getOnlyProperties**: Returns an array of all the properties inside of an object.  
 Changing the '**name**' of the '**frozenUser**' SHOULD throw an error.

<br/>

### Output
This is the desired output.
```
▶ Object {name: "Nicolas", favFood: "Kimchi", password: "12345"}
▶ Object {name: "Nicolas", favFood: "Kimchi"}
▶ ["Nicolas", "Kimchi"]
▶ ["name", "favFood"]
Error in sandbox: 
▶ TypeError: Cannot assign to read only property 'name' of object '#<Object>'
```

<br/>

### Condition
- The output of the program must be EXACTLY like on the image above.
- Place your functions INSIDE of 'ObjectUtilities'
- DO NOT edit ANYTHING OUTSIDE of 'ObjectUtiliies'.
- Don't give up!

<br/>

### Hint
- Use arrow functions
- Use spread and rest operators

<br/>

### Submit

![Day1 CodeSandbox](https://codesandbox.io/s/day-one-blueprint-hrvg2)

```javascript
class ObjectUtilities {
  // 주어진 조건에서 instance 생성을 하지 않으므로 static methid 이용.

  static mergeObjects = (objA, objB) => ({ ...objA, ...objB });

  static removePassword = ({ password, ...user }) => ({ ...user });

  static freezeObj = cleanUser => Object.freeze(cleanUser);

  static getOnlyValues = frozenUser => Object.keys(frozenUser).map(k => frozenUser[k]);

  static getOnlyProperties = frozenUser => Object.keys(frozenUser).map(k => k);
}
```
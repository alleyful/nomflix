# React 2주 챌린지

---

# Day1
- 오늘의 강의: #1.0 ~ #1.5
- 오늘의 과제: 위의 강의들을 시청하신 후, 아래 코드 챌린지를 제출하면 됩니다.

<br/>

## Lecture Summery

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
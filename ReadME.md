## Random String or Token Generator

| How to use the function

```JavaScript
 import randomToken from "rantoken";

  let token= randomToken() // it is taking default an object {length:16,charset:"alphabetic"}

  // you can change the value
  /*
  {
    lenght:any number <= 100
    charset:"numeric" or ["numetic","alphabatic","!@"]
  }
  */
 console.log(token);
 // output "ieieetbfiafaiccu"
```
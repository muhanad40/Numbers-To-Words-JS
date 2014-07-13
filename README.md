# Numbers to Words (JavaScript)

A personal JavaScript challenge I wanted to take on. This was coded using Test/Behaviour Driven Development ([JasmineJS](https://github.com/pivotal/jasmine))

## NOTE
You can add more words to the **WORDS** property in the initializer method to extend the size of numbers the script can handle.

I wrote this script in [Python](https://github.com/muhanad40/Numbers-To-Words-Python) and [Ruby](https://github.com/muhanad40/Numbers-To-Words-Ruby)

## Demo
http://numberstowords.heroku.com/js

## Usage
```
<script src="Numbers-To-Words-Js/lib/numbers_to_words.js"></script>
<script>
  n2w = new NumberToWords();
  phrase = n2w.convert("4264");
  $(body).html(phrase);
</script>
```

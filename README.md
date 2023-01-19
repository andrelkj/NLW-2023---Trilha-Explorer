# 1. Summary

- [1. Summary](#1-summary)
- [2. Notes](#2-notes)
- [3. HTML](#3-html)
  - [3.1. What is HTML?](#31-what-is-html)
    - [3.1.1. Hypertext](#311-hypertext)
    - [3.1.2. Markup](#312-markup)
  - [3.2. Tag syntax](#32-tag-syntax)
  - [3.3. Atributes](#33-atributes)
  - [3.4. SVG](#34-svg)
- [4. CSS](#4-css)
  - [4.1. What is CSS?](#41-what-is-css)
  - [4.2. Declarations](#42-declarations)
  - [4.3. Specificity](#43-specificity)
  - [4.4. Box Model](#44-box-model)
- [5. JavaScript](#5-javascript)
  - [5.1. Instructions/declarations](#51-instructionsdeclarations)
  - [5.2. Syntax](#52-syntax)
  - [5.3. Variables and types of data](#53-variables-and-types-of-data)
    - [5.3.1. Variables](#531-variables)
    - [5.3.2. Data types](#532-data-types)
    - [Arrays](#arrays)
  - [5.4. Functions](#54-functions)
  - [5.5. Objects](#55-objects)
  - [5.6. DOM](#56-dom)
    - [5.6.1. Document](#561-document)
- [Important links](#important-links)

---

# 2. Notes

Here we're going to develop a web application to manage habits and daily activities

---

# 3. HTML

Hypertext Makerup Language

HTML receive this name because of the linking utility to redirect to other pages.

## 3.1. What is HTML?

HTML is used to create text structures, links, images, videos and other page elements.

### 3.1.1. Hypertext

Hypertext refers to texts that contém links. Which mean that they can relate elements from different places.

### 3.1.2. Markup

Markup refers to the tags that'll identify those different elements which will be related to each other.

## 3.2. Tag syntax

Tags are written elements used to serve a specific purpose. For example: images, large texts, link, paragraph and so on...

- How to write HTML tags?

```html
<p>Conteúdo</p>
<!-- Here's a comment -->
```

## 3.3. Atributes

Atributes give the configuration and/or information needed from those tags.

- How to write atributes?

```html
<a href="https://rocketseat.com.br">See page</a> <img src="image.jpg" />
```

**HTML Example:**

```html
<h1>Titles</h1>

<p>Paragraf outside the title</p>

<a href="https://google.com" target="_blank">Link</a>
```

We can use emmet to call the basic HTML elements by typing !

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

- All HTML configuration properties are added inside the head division, for example this meta tags informing all necessary configuration for the HTML to run properly.

- All visible information that will be displayed inside the page are added inside the body division

## 3.4. SVG

Is a kind of html used here to import our body element's properties from Figma.

# 4. CSS

Cascading Style Sheets

## 4.1. What is CSS?

CSS refers to all the style implemented to the HTML. It follows a cascading order, which means that all components and properties will consider the last element (unless there are elements of greater calculated value within the list).

## 4.2. Declarations

Declarations dictates which properties and values should be applied to defined HTML element. They declarations that contain properties and values. In order to work they expect a selector that identify where they'll be applied.

**Example:**

```css
body {
  background-color: #09090a;
  /* color: white; This will be ignored */
}

h1 {
  color: blue;
}
```

Obs.: To use hexadecimal color we need to use # before the identificator.

## 4.3. Specificity

Each selector have a score which adds to each other.

While applying the style CSS cascating order will first consider those selector's score to define which declaration should have priority.

**Obs.:** it's important to note that this score will be consider prior to the standard cascating priority order. Other example of ways to break cascating is the !import statement which, for instance, also ignore score as well.

**Selector score examples:**

```css
#id {
  /* peso 100 */
}
```

```css
.class {
  /* peso 10 */
}
```

```css
element {
  /* peso 1 */
}
```

## 4.4. Box Model

CSS logic is that everything is a box. This means that all HTML elements will be considered boxes that'll have they're own properties (content, width, height, border, padding - inner space, spacing - outer space).

![CSS Box Model](Screenshots/boxmodel.png)

# 5. JavaScript

JavaScript is a programming language interpreted and executed by navigators. It uses algorithms, programming logic and sintax to teach the computer. JS is the inteligence of the web triad (CSS, HTML, JS).

JavaScript can be used for web, desktop (Electron), and mobile (React Native).

```JS
const mensagem = "Bom te ver aqui! "

alert(mensagem + (10 * 100) + " abraços")

// Bom te ver aqui! 1000 abraços
```

JavaScript can be executed in:

- Web Devtools
- Online platforms:
  - [fronteditor.dev](https://www.fronteditor.dev)
  - [codepen.io](https://codepen.io/)
- Project inside a computer

**OBS.:** In order to use JS in a project he needs to be imported inside the HTML file:

```HTML
<!-- em um arquivo index.html -->
<!-- importamos um arquivo .js no .html -->
<script src="./script.js"></script>
```

## 5.1. Instructions/declarations

It relates to the orders given to the computer. Differently from other programming languages, JS have reserved words that have a specific instruction meaning. For example the variable `const` that specifies the creation of a constant.

## 5.2. Syntax

Specifies the way, order, indentation in short the syntax will tell how to write the code properly.

## 5.3. Variables and types of data

### 5.3.1. Variables

Boxes used to store a defined type of data which can be used later on.

**Important:** variables name cannot:
- start with numbers
- have space between
- use special caracters

The most common use to writting variables is by using the **camelCase** format.

### 5.3.2. Data types

There can be different types of data used inside JS like texts, numbers, booleans (conditions/logic values: true or false), or structured data.

```JS
// declare and assign value
let boasVindas = 'Fala, Dev!';

// reassing value
boasVindas = `Fala, Dev! Tudo beleza?!`;

// constant cannot change the value, it's alread a declaration
const serHumano = true;
serHumano = false // Erro!
```

**Obs.:** differently from const, let will declare a variable that can be changed throughout the code. The original value is considered as standard if no other value is used.

### Arrays
Is a more complex grouping of data that will receive more can one value inside.

**Example:**
```JS
// here the array run, located inside the variable data, assumes 3 different values

const data = {
  run: ['01-01', '01-02', '01-06']
}
```

**Obs.:** instead of the values, arrays can also accept variables inside of it.

## 5.4. Functions

Used to group up and reuse code, there can be lots of fuctions inside a programming language, and they create mini programs inside a bigger program.

```JS
// using a function
alert('Fala, Dev!')

// creating a function
function alert(text) {
	return text
}
```

We can call specific properties inside a function by doing this:

```JS
const celular = {
  color: 'preto',
  call: function() {
    const message = "Calling"
    alert(message)
  }
}

// It will return the celular color property
celular.color
```

We can also call the function in order to execute it by entering:

```JS
// It will execute the function call inside celular variable
celular.call()
```

By calling this function we now have a method

## 5.5. Objects

Almost everything is an object:

- Atributes - means the properties of an object
- Methods - related to the functionality of an object

```JS
// creating an object
const celular = {
	cor: 'preto',
	ligar: function() {}
}

// using an object
celular.cor // black
celular.ligar() // execute function
```

**Obs.:** everything that is before . is an object. Celular, in the example above, is the object.

## 5.6. DOM

Document Object Model is resposible for modeling all our HTML elements to JS objects.

### 5.6.1. Document

We can manage and control the page and all HTML documents though JavaScript's object - document.

```JS
document // object that exists inside all navigators
.querySelector('a') // selects 'a' tag
.click() // gives the order to click in the 'a' tag
```

# Important links

- [NLW Setup - Library](https://maykbrito.github.io/libs/NLWSetup/documentation/NLWSetup.html)

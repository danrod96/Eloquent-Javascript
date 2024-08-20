import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* JSX provides a cool way to define CSS. */

/* JSX style is not the same thing: first of all, instead of 
 * accepting a string containing CSS properties, the JSX style 
 * attribute only accepts an object. This means you define properties 
 * in an object: */

var divStyle = {
  color: 'red'
};

/* JSX is a technology that was introduced by React.

Although React can work completely fine without using JSX, it’s an ideal technology to work with components, so React benefits a lot from JSX.

At first, you might think that using JSX is like mixing HTML and JavaScript (and as you’ll see CSS).

But this is not true, because what you are really doing when using JSX syntax is writing a declarative syntax of what a component UI should be. */

/* Here is how you define a h1 tag containing a string in JSX */

const element = <h1>Hello, world !</h1>

/* Inside a JSX expression, attributes can be inserted very easily: */

const myId = 'test';

const element2 = <h1 id={myId}>Hello World !</h1>

const Button = props => {
  return <button>{props.text}</button>
}

const SubmitButton = () => {
  return <Button text="Submit"/>
}

const LoginButton = () => {
  return <Button text="Login"/>
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);
root.render(element2);

/* JSX accepts any kind of JavaScript mixed into it.
 * Whenever you need to add some JS, just put it inside curly braces 
 * {}. For example here's how to use a constant value defined 
 * elsewhere: */

const paragraph2 = 'A Paragraph';

root.render(
  <div id="test">
    <h1>A title 2</h1>
    <p>{paragraph2}</p>
  </div>
);

/* This is a basic example. Curly braces accept any JS code: */

const rows = ["French Fries", "Poutine"];

root.render(
  <table>
    {rows.map((row, i) => {
      return <tr>{row}</tr>
    })}
  </table>,
);

/* Here’s a JSX snippet that wraps two components into a div tag: */

root.render(<div style={divStyle}>
  <h2>Chilis  !</h2>
  <LoginButton />
  <SubmitButton />
</div>,
document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

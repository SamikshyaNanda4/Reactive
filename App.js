import React from "react";
import ReactDOM from "react-dom/client";
// nester structures
const parent=React.createElement(
    "div", 
    { id:"parent"},[
    React.createElement("div", { id:"child"}, 
       [React.createElement("h1",{id:"h1tag"},"This is Samikshya Nanda btw"),
        React.createElement("h2", {id:"h1tag"}, "Another H2 Tag (sibling) some random stuffs over here for eduvational purpose")
       ]), React.createElement("div", {id:"child"}, 
        [React.createElement("h1",{id:"h1tag"},"I am H1 Tag"),
         React.createElement("h2", {id:"h1tag"}, "Another H2 Tag (sibling)")
        ])]
)

const number ="This is a localhost being used for learning purposes 2000"

const num1=500;
const num2=600;

const element=<h5>{num1+num2}</h5>

//Component Composition
const JsxHeading=()=><h3>Hello World from Reactive <br></br> {element}</h3>

const JsxHeading2=()=>{
       return(
             
              <h1>
                      {JsxHeading()}
                      <JsxHeading/>
                  Hello World from Reactive!<br></br>
                  {num1+num2+num2}<br></br>{console.log("xyz")}{number}
              </h1>
       )
}
    


    
// const head=React.createElement("h1", 
//     {id:"heading"}, 
//     "Hello World from Reactive!" ) 
//  {} is the place above where you give attibutes to you Tags
       const container= document.getElementById("root")
       const root=ReactDOM.createRoot(container);
//        root.render(head) 
       root.render(<JsxHeading2/>)

        
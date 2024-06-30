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

    
// const head=React.createElement("h1", 
//     {id:"heading"}, 
//     "Hello World from Reactive!" )
//  {} is the place above where you give attibutes to you Tags
       const container= document.getElementById("root")
       const root=ReactDOM.createRoot(container);
//        root.render(head) 
       root.render(parent)
       
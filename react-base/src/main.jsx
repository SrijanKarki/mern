import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import Projects from './Projects';
import Users from './Users';
import Products from './Products';
import Counter from './Counter';

/* let projects = [
  {
    title: "Git",
    price: "1000",
    date: "2024"
  },
  {
    title: "React",
    price: "2500",
    date: "2024"
  }, {
    title: "JavaScript",
    price: "3000",
    date: "2024"
  }, {
    title: "Node",
    price: "2000",
    date: "2024"
  }, {
    title: "Tailwind",
    price: "1500",
    date: "2024"
  },

]; */


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Users/> */}
   {/* <Projects/> */}
   <Counter/>
   {/* <Products/> */}
  </React.StrictMode>,
)

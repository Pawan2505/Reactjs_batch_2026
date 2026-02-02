import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = ()=>{

return(
  <div>
    {/* <p>Welcome to the App Component</p> */}
    <h1>App File</h1>
    <Navbar/>
    <Hero/>
    <Footer/>
  </div>
)

}

export default App;


//what is component in react?

//A component in React is a reusable piece of code that represents a part of the user interface. 
// Components can be functional or class-based (old version) and can accept inputs called "props" to customize their behavior and appearance. They help in breaking down the UI into smaller, manageable pieces, making it easier to develop, maintain, and reuse code across the application.

//Types of Components in React

//1. Functional Components: These are JavaScript functions that return JSX. They are simple and easy to write, especially with the introduction of hooks that allow them to manage state and side effects.
//2. Class Components: These are ES6 classes that extend the React.Component class. They have a render method that returns JSX and can manage their own state and lifecycle methods.
//In modern React development, functional components are preferred due to their simplicity and the power of hooks.
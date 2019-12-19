# ASSESSMENT 4: REACT ASSESSMENT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1. Correctable True/False: Mark the following TRUE or FALSE. If FALSE, correct the statement to be TRUE.

- React is a modern, efficient answer to complex UI applications (true/false)
- React will only render on the server using Node.js (false)
- react renders onto the server using terminal command yarn start.
- React is a full stack framework for modern web applications (true)
- React is a flexible library that plays the role of V in an MVC framework (true)
- You should always update a component's state directly using this.state (false)
you can update a components state by using this.setState
- React is made up of encapsulated components that manage their own state (false)
- React is an open-source JavaScript Library for building User Interfaces. These interfaces are thought of being made up of atomic reusable components that can be re-used on different or same sections or pages.
- React components render HTML (true)


2. What are "smart" and "dumb" components? Explain the difference and also add why we bother to make the distinction between them.

  Your answer:
  
  "smart" or parent components are components that hold state and "dumb" or child componens dont hold state. we make a distinction between them because smart componend holds most of the data that is passed down to the dumb component.

  Researched answer:

  Smart components are app level components that perform functions and manage data while dumb components focus solely on the UI


3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

  Your answer: 
  
  it installs a package

  Researched answer:
 
  yarn install is used to install all dependencies for a project. This is most commonly used when you have just checked out code for a project, or when another developer on the project has added a new dependency that you need to pick up



4. What is the difference between component state and props? Your answer should include a short explanation of both.

  Your answer:
  
  state is used in the parent component where state is defined. 
  props is state imported from the parent component to the child component where there is no state and is used by calling props in the constructor and the super.

  Researched answer:
  
  Basically, the difference is that state is something like attributes in OOP : it's something local to a class (component), used to better describe it. Props are like parameters - they are passed to a component from the caller of a component (the parent) : as if you called a function with certain parameters.



5. How would you explain state to a friend who doesn't know code?

  Your answer:
  
  state is something in an app that can be manipulated by classes
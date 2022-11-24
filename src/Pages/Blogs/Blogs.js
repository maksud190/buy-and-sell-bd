import React from 'react';

const Blogs = () => {
    return (
        <div className="flex flex-col w-full my-20">
            <div className="grid h-auto card bg-base-300 rounded-box p-7">
                <h4 className='text-2xl font-bold mb-3'>What are the different ways to manage a state in a React application?</h4>
                <p><span className='font-bold text-green-500'>Answer: </span>Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.
                    <br /> The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:
                    <li>Hooks</li>
                    <li>React Context API</li>
                    <li>Apollo Link State</li>
                </p>
            </div>
            <div className="divider"></div>
            <div className="grid h-auto card bg-base-300 rounded-box p-7">
                <h4 className='text-2xl font-bold mb-3'>How does Prototypical inheritance work?</h4>
                <p><span className='font-bold text-green-500'>Answer: </span>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div className="divider"></div>
            <div className="grid h-auto card bg-base-300 rounded-box p-7">
                <h4 className='text-2xl font-bold mb-3'>What is Unit Test? Why should we write Unit Test?</h4>
                <p><span className='font-bold text-green-500'>Answer: </span>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."</p>
            </div>
            <div className="divider"></div>
            <div className="grid h-auto card bg-base-300 rounded-box p-7">
                <h4 className='text-2xl font-bold mb-3'>React vs Angular vs Vue ?</h4>
                <p><span className='font-bold text-green-500'>Answer: </span>Angular vs. React vs. Vue is one of primary choices in every web development process. The frontend framework you select influences almost everything: speed, and, therefore, cost of development, compatibility with other technologies, app speed and performance, and so on.
                <br />The variety of technology available is enormous. That’s why we’ve decided to prepare a series of articles comparing the most popular technologies for different purposes.
                    <br />We’re starting with frontend frameworks because they are responsible for what users see in their browser.
                    <br />Attention! This article is written based on our own experiences using these JavaScript frameworks for various web development projects. Some subjective conclusions may be included, but they are all supported by real-life examples. So, let’s dive in!</p>
            </div>
        </div>
    );
};

export default Blogs;
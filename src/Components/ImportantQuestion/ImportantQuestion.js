import React from 'react';
import './ImportantQuestion.css'
const ImportantQuestion = () => {
    return (
        <div className='query'>
            <h1>How Reacts Works?</h1>
            <p>React has virtual DOM.When we do any changes in code virtual dom automatically change it.In traditional js DOM code changes as normal way.here easier to Component Writing,high performance,supports reuseable Java Components.</p>

            <h1>How useState works?</h1>
            <p>useState () is a built-in function that comes with the React library.useState() should only be used inside a functional Component.useState allows us to track state in a function component.</p>
        </div>
    );
};

export default ImportantQuestion;
import React from 'react';
function Message() {
    const name = 'khan';
    if (name)
    // JSX: JS XML - gets converted to JS, its not HTML 
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;
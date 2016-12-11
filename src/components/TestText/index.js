import React from 'react';

const TestText = (props) => {
  return (
    <h2 className="temporary-header">
      Content for this {props.children} page!
    </h2>
  );
}

export default TestText;

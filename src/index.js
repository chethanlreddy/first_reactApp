import React from 'react';
import ReactDom  from 'react-dom';


function FirstComponent() {
  return <h4>Hello welcome to first first componet</h4>;
}


ReactDom.render(<FirstComponent />, document.getElementById('root'));
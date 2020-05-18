import React from 'react'

const withRainbow = (WrappedComponent) => {
  const colors = ['red','pink','blue','green','yellow','orange'];
  const randomColor = colors[Math.floor(Math.random()*5)];
  const className = randomColor + '-text';
  
  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  }
}

export default withRainbow;
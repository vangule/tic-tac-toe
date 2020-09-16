import React from 'react';

function Cross(props) {
  const size = props.size || 100
  return(
    <svg width={size} height={size} viewBox="0 0 94 85" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 5C37.804 34.2893 89 80 89 80M89 5C89 5 37.804 50.7107 5 80" stroke="black" strokeWidth="10" strokeLinecap="round"/>
    </svg>    
);
}

export default Cross;
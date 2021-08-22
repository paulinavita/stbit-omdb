import React from 'react';

export default function Container(props) {
  const getGrid = () => {
    return props?.wide ? 'justify-items-stretch text-center' : 'grid-cols-3 gap-4'
  }
  return <div className={`container mx-auto grid ${getGrid()} px-5 py-5`}>{props.children}</div>
}

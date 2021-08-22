import React from 'react';

export default function Rating(props) {
  const { Source, Value } = props.rating
  return (<div data-testid="rating" className="rating border rounded border-black border-solid my-4 p-2">
  <div className="font-light">
    {Source}
  </div>
  <div className="score font-sans font-extrabold">
    {Value}
  </div>
</div>)
}

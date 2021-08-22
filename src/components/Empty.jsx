import React from 'react';
export default function Empty ({ msg }) {
  return ( 
    <div data-testid="empty-comp" className="empty w-full tracking-wide font-sans font-light"> { msg } </div>
   )
}

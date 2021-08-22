import React from 'react'

export default function NotFound404({ text }) {
  return (
    <div data-testid="not-found" className="h-screen flex justify-center items-center block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      <div className>{ text } Not Found</div>
    </div>
  )
}

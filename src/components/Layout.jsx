import React from 'react';
import Footer from './Footer.jsx'

export default function Layout({ children }) {
  return (
    <>
      <div data-testid="layout" className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
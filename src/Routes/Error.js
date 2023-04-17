import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

const Error = () => {
  return (
    <div>
      <Header/>
      <main>
      <h1>An error Ocurred</h1>
      <p>Could not find this page</p>
      </main>
      <Footer/>
    </div>
  )
}

export default Error

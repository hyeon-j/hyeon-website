import React from 'react'
import { Link } from 'react-router-dom'

export default function main() {
  return (
    <>
      <h1>MAIN</h1>
      <Link to='/sort'>to sort</Link>

      <br></br>

      <Link to='/path'>to path</Link>
    </>
  )
}

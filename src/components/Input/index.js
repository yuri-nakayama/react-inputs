import React, { useState, useEffect } from 'react'

const Input = ({addItem}) => {

  const [input, setInput] = useState('')

  useEffect(() => {
    if (input === "hello") {
      console.log("goodbye")
    }
  }, [input])

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addItem(input)
    setInput('')

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleChange}/>
      <input type="submit" value="Add Item"/>
    </form>
  )
}

export default Input

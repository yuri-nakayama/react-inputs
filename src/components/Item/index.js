import React, { useState } from 'react';

import Input from '../Input'

const Item = () => {

  const [list, setList] = useState([])

  const addItem = (item) => {
    const toSet = [...list]
    toSet.push(item)
    setList(toSet)
  }

  const delItem = (event) => {
    event.preventDefault()
    const toSet = [...list]
    toSet.pop()
    setList(toSet)
  }

  return (
    <React.Fragment>
      {
        list.map((el, i) => {
          return (
            <p>Item {i + 1}: {el}</p>
          )
        })
      }
      <Input addItem={addItem}/>
      <form onSubmit={delItem}>
        <input type="submit" value="Del Item"/>
      </form>
    </React.Fragment>
  )
}

export default Item;

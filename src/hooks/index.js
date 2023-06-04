import { useState } from "react"

export const useField = (name) => {
  const [value, setValue] = useState('')

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const reset = () => {
    setValue('')
  }

  return{
    form:{
    name,
    value,
    onChange, 
    },
    reset
  }

}
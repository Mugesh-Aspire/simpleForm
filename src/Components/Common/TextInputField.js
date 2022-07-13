import React, { useState, useRef } from 'react'

export default function TextInputField({
  name,
  placeholder,
  value,
  onChange,
  errorMsg = '',
  containerClassName = 'd-flex justify-content-center',
  inputClassName = ''
}) {
  const [validate, setValidate] = useState(false)
  const inputRef = useRef()

  const checkFieldValidation = () => {
    if (!value) {
      setValidate(true)
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
  }
  const updateInputField = (e) => {
    if (e.target.value) {
      setValidate(false)
    }
    onChange(e)
  }
  return (
    <div className={containerClassName}>
      <input
        ref={inputRef}
        type={'text'}
        className={inputClassName}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={updateInputField}
        onBlur={checkFieldValidation}
      />
      <div className='p-1'>
        {validate && <span className='text-danger'>{errorMsg}</span>}
      </div>
    </div>
  )
}

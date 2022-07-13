import React, { useState, useEffect } from 'react'
import { isInvalidEmail } from './Functions'

export default function TextInputField({
  name,
  placeholder,
  value,
  onChange,
  errorMsg = '',
  containerClassName = '',
  inputClassName = '',
  errorFieldName
}) {
  const [validate, setValidate] = useState(false)

  useEffect(() => {
    if (errorFieldName && errorFieldName === name) {
      checkFieldValidation()
    } else {
      setValidate(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorFieldName])

  const checkFieldValidation = () => {
    if (!value) {
      setValidate(true)
    }else if(value&&name==='email'&&isInvalidEmail(value) ){
      setValidate(true)
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

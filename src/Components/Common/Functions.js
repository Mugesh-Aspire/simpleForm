import _isEmpty from 'lodash/isEmpty'


export const simpleFormValidation =(userObj)=>{
    let validationObj = { isValid: true, fieldName: '' }
    if (isBlank(userObj.firstName)) {
        validationObj = { isValid: false, fieldName: 'firstName' }
    }else if (isBlank(userObj.lastName)) {
        validationObj = { isValid: false, fieldName: 'lastName' }
    } else if (isBlank(userObj.email)) {
        validationObj = { isValid: false, fieldName: 'email' }
    } else if (isInvalidEmail(userObj.email)) {
        validationObj = { isValid: false, fieldName: 'email' }
    }
    return validationObj
}

export const isBlank = (value) => {
    if (typeof value === 'object' && _isEmpty(value)) {
        return true
    } else if (value==='') {
        return true
    } else {
        return false
    }
}
export const isInvalidEmail = (value) => {
  const emailPattern = /\S+@\S+\.\S+/
  if(emailPattern.test(value)){
    return false
  }else {
    return true
  }
}
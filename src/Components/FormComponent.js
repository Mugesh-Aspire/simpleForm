import React, { useState } from 'react'

import TextInputField from './Common/TextInputField'
import { validationMessages } from '../Constants/strings'
import { simpleFormValidation } from './Common/Functions'


export default function FormComponent() {

    const [selectedFile, setSelectedFile] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [errorFieldName, setErrorFieldName] = useState('')


    const onChangeInputText = (updateStateName, value) => {
        updateStateName(value)
    }
    const onSubmitForm = (e) => {
        let userObj = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
        }

        const { isValid, fieldName } = simpleFormValidation(userObj)
        if (isValid) {
            //Do actions here.
            let requParams = {
                files: selectedFile
            } // For api req params. 
            console.log('asd',requParams)
        }
        setErrorFieldName(fieldName)
    }

    return (
        <div className='p-4'>
            <h3> Sample Form</h3>
            <div className='p-2'>
                <div className='d-flex'>
                    <div className='px-2'>
                        <span>First Name</span>
                        <TextInputField
                            name={'firstName'}
                            value={firstName}
                            errorFieldName={errorFieldName}
                            errorMsg={validationMessages.FIRST_NAME_REQUIRED}
                            onChange={(e) => onChangeInputText(setFirstName, e.target.value)}
                        />
                    </div>
                    <div className='px-2'>
                        <span>Last Name</span>
                        <TextInputField
                            name={'lastName'}
                            value={lastName}
                            errorFieldName={errorFieldName}
                            errorMsg={validationMessages.LAST_NAME_REQUIRED}
                            onChange={(e) => onChangeInputText(setLastName, e.target.value)}
                        />
                    </div>
                </div>
                <div className='p-2 w-100'>
                    <span>Email</span>
                    <TextInputField
                        inputClassName={'w-100'}
                        name={'email'}
                        value={email}
                        errorFieldName={errorFieldName}
                        errorMsg={email ? validationMessages.ENTER_VALID_EMAIL : validationMessages.EMAIL_REQUIRED}
                        onChange={(e) => onChangeInputText(setEmail, e.target.value)}
                    />
                </div>
                <div className='p-2 w-100 '>
                    <span className=''>Upload Image</span>
                    <div className='d-flex justify-content-start py-1'>
                        <input
                            type="file"
                            onChange={(e) => setSelectedFile(e.target.files[0])}
                            accept=".jpg, .jpeg, .png"
                        />
                    </div>
                </div>
                <div className='d-flex justify-content-center p-3'>
                    <button type="button" className="btn btn-success" onClick={onSubmitForm}>Submit</button>
                </div>
            </div>
        </div>
    )
}

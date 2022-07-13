import React, { useState } from 'react'

import TextInputField from './Common/TextInputField'
import { validationMessages } from '../Constants/strings'


export default function FormComponent() {

    const [selectedFile, setSelectedFile] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')


    const onChangeInputText = (updateStateName, value) => {
        updateStateName(value)
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
                            errorMsg={validationMessages.FIRST_NAME_REQUIRED}
                            onChange={(e) => onChangeInputText(setFirstName, e.target.value)}
                        />
                    </div>
                    <div className='px-2'>
                        <span>Last Name</span>
                        <TextInputField
                            name={'lastName'}
                            value={lastName}
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
                        errorMsg={email ? validationMessages.ENTER_VALID_EMAIL : validationMessages.EMAIL_REQUIRED}
                        onChange={(e) => onChangeInputText(setEmail, e.target.value)}
                    />
                </div>
                <div className='p-2 w-100'>
                    <span>Upload Image</span>
                    <div>
                        <input
                            type="file"
                            value={selectedFile}
                            onChange={(e) => setSelectedFile(e.target.files[0])}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

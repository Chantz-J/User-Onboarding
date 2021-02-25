import React, { useState, useEffect} from 'react'
import schema from './formSchema'
import styled from 'styled-components'


const FormSection = styled.section``

export default function Form(){

    const [disabled, setDisabled] = useState(true)
    const [users, setUsers] = useState([])
    const [form, setForm] = useState({username: '', email: '', password: '', ToS: false})
    const [errors, setErrors] = useState({username: '', email: '', password: '', ToS: false})
    
    const onChange = e => {
        const { checked, name, type, value } = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        setForm({...form, [name]: valueToUse})
    }

    useEffect(() => {
        schema.isValid(form).then(valid => setDisabled(!valid))
    }, [form]) 

    return (
        <FormSection>
            <form style={{display: 'flex', flexDirection: 'column'}}>
                <label>Name
                    <input onChange={onChange} value={form.username} name='username' type="text" />
                </label>
                <label>Email 
                    <input onChange={onChange} value={form.email} name='email' type="text" />
                </label>
                <label>Password
                    <input onChange={onChange} value={form.password} name='password' type="text" />
                </label>
                <label>Terms of Service
                    <input onChange={onChange} checked={form.ToS}  name='ToS' type="checkbox"/>
                </label>
                <button disabled={disabled}>Submit</button>
            </form>
        </FormSection>
    )
}
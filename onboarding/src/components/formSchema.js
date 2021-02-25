import * as yup from 'yup'

const schema = yup.object().shape({
    username: yup.string().required('Username is required').min(6, 'Username needs to be 6 characters minimum'),
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is requried'),
    ToS: yup.boolean().oneOf([true], 'You must agree to the Terms of Service')
})

export default schema
import React, { useRef,useContext } from 'react'
import AuthContext from '../Shop/auth-context'

const PasswordForm = () => {
    const newPasswordInputRef = useRef()
    const authCtx = useContext(AuthContext)

    const submitHandler=(e)=>{
        e.preventDefault()
        const enteredPassword = newPasswordInputRef.current.value
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=[API_KEY]',{
            method: 'POST',
            body: JSON.stringify({
                idToken: authCtx.token,
                password: enteredPassword,
                returnSecureToken : false,
            }),
            headers: {
                'Contetn-Type': 'application/json'
            }
        }).then(res=>{

        })
    }
  return (
    <form onSubmit={submitHandler}>
        <label htmlFor='new-password' minLength='7' ref={newPasswordInputRef}>New Password:</label>
        <input  type='password' id='new-password'/>
       <button>Change Password</button>
    </form>
  )
}

export default PasswordForm

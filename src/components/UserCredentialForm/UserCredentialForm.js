import { useImperativeHandle, useState, forwardRef } from 'react'
import { Button } from '../Button/Button'
import { Space } from '../Space/Space'
import classes from './UserCredentialForm.module.css'

const UserCredentialForm = forwardRef(
  ({ onSubmit, isUsedForRegister = false }, ref) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useImperativeHandle(ref, () => ({
      clearForm() {
        setName('')
        setEmail('')
        setPassword('')
      },
    }))

    return (
      <form
        className={classes.form}
        onSubmit={(e) => {
          e.preventDefault()

          onSubmit(
            isUsedForRegister
              ? {
                  name,
                  email,
                  password,
                }
              : {
                  email,
                  password,
                },
          )
        }}
      >
        {isUsedForRegister ? (
          <>
            <div className={classes.field}>
              <label htmlFor="name">Name</label>
              <Space height="4px" />
              <input
                value={name}
                name="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <Space height="10px" />
          </>
        ) : null}

        <div className={classes.field}>
          <label htmlFor="email">Email</label>
          <Space height="4px" />
          <input
            value={email}
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <Space height="10px" />

        <div className={classes.field}>
          <label htmlFor="password">Password</label>
          <Space height="4px" />
          <input
            value={password}
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Space height="32px" />

        <div className={classes.field}>
          <Button>Submit</Button>
        </div>
      </form>
    )
  },
)

export { UserCredentialForm }

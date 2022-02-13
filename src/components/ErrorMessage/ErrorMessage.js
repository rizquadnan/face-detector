import React from 'react'

export function ErrorMessage(props) {
  return (
    <p style={{ color: "red" }}>{props.label}</p>
  )
}

import React from 'react'
import styles from "./ReusableInput.module.css"

interface ReusableInputProps {
    placeholder?: string
    text?: string
    label?: string
}

const ReusableInput = (props: ReusableInputProps) => {
    const {placeholder, text, label} = props

  return (
    <div>
        <label className={styles.label}>{label}</label>
        <input type={text} placeholder={placeholder} />
    </div>
  )
}


export default ReusableInput
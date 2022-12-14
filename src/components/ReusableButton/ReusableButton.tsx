import React from 'react'
import styles from "../../components/ReusableButton/ReusableButton.module.css"


interface ReusableButtonProps {
    text?: string
}

const ReusableButton = (props: ReusableButtonProps) => {
    const {text} = props
  return (
    <>
        <button className={styles.button}>{text}</button>
    </>
  )
}

export default ReusableButton
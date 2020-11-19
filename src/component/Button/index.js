import React from 'react'
import { Link } from "react-router-dom";
import styles from './styles.css'

function Button(props) {
    return (
        <div className={styles.container}>
            <Link to={props.link}>
                {props.title}
            </Link>
        </div>
    )
}

export default Button

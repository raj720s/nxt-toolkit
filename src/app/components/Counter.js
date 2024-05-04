"use client"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../../styles/cuonter.module.css'
import { add, addAsync, countState, increment, sub } from '../redux/slices/counter'
export default function Counter() {
    const count = useSelector(countState)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState('2')
    return (
        <>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(add())}
                >
                    add +
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(sub())}
                >
                    sub   -
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />
                <button
                    className={styles.button}
                    onClick={() =>
                        dispatch(add(Number(amount) || 0))
                    }
                >
                    Add Amount
                </button>
                <button
                    className={styles.asyncButton}
                    onClick={() => dispatch(addAsync(Number(amount) || 0))}
                >
                    Add Async
                </button>
            </div>
        </>
    )
}

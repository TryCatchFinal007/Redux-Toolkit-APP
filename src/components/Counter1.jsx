import React from 'react'
import { useDispatch } from 'react-redux'
import { depositInSBH } from '../features/bankSlice';

const Counter1 = () => {
  const dispatch = useDispatch();

  return (
    <div className="card text-bg-success text-center mb-3">
      <div className="card-header">Counter 1</div>
      <div className="card-body">
        <h5 className="card-title">Add $50</h5>
        <p className="card-text">This the place where you need to deposit $50</p>
        <div className="btn btn-primary" onClick={() => dispatch(depositInSBH(50))}>+ $50</div>
      </div>
    </div>
  )
}

export default Counter1

import React from 'react'
import { useDispatch } from 'react-redux'
import { withdrawInSBH } from '../features/bankSlice';

const Counter2 = () => {
  const dispatch = useDispatch();

    return (
        <div className="card text-bg-danger text-center mb-3">
          <div className="card-header">Counter 2</div>
          <div className="card-body">
            <h5 className="card-title">Withdraw $50</h5>
            <p className="card-text">This the place where you need to withdraw $50</p>
            <div className="btn btn-primary" onClick={() => dispatch(withdrawInSBH(50))}>- $50</div>
          </div>
        </div>
    )
}

export default Counter2

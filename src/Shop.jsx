import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from './state/index';

function Shop() {
  const dispatch = useDispatch();
  const {withdrawmoney,depositemoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <>
    <div>
        <h2>Diposit/Withdrow Money</h2><br/>
        <button className="btn btn-primary mx-2" onClick={()=>{withdrawmoney(100)}}>-</button> 
        <button className="btn btn-primary">Update Balance</button> 
        <button className="btn btn-primary mx-2" onClick={()=>{depositemoney(100)}}>+</button> 
    </div>
    </>
  )
}

export default Shop
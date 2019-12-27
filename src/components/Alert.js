import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export const Alert = connect(({ alert }) => ({ alert }))(({ alert, dispatch }) =>
  <TransitionGroup>
    {alert
      ? <CSSTransition key={0} timeout={200} classNames='fade'>
        <div className='alert'>
          {alert.value}
          {alert.x ? <a className='upper-right status-x text-small' onClick={() => {
            dispatch({
              type: 'alert',
              value: null
            })
          }}>✕</a> : null}
        </div>
      </CSSTransition>
    : null}
  </TransitionGroup>
)

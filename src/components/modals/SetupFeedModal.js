import React, { useContext } from 'react'
//Router
import { Link } from 'react-router-dom'
//Context
import { GraphContext } from '../../contexts/Graph'

function SetupFeedModal({ parameterForm }) {
  //Context
  const data = useContext(GraphContext)
  console.log('Inside SetupFeed', data)

  return (
    <div className="VerifyModalContainer">
      <h1 className="VerifyModalTitle">Confirmation</h1>
      <p className="VerifyModalMessage">
        Confirming the funding of your feed will take three (3) separate
        transactions.
      </p>
      <h4 className="VerifyModalSubtitle">Verify your parameters:</h4>
      <div className="VerifyParameters">
        <p>
          Tip Amount:{' '}
          <span className="bolded">{`${parameterForm.tipAmountNumber}.${parameterForm.tipAmountDecimal} TRB`}</span>
        </p>
        <p>
          Window:{' '}
          <span className="bolded">{`${parameterForm.windowAmount} ${parameterForm.windowType}`}</span>
        </p>
        <p>
          Interval:{' '}
          <span className="bolded">{`${parameterForm.durationAmount} ${parameterForm.durationType}`}</span>
        </p>
        <p>
          Starting:{' '}
          <span className="bolded">{`${parameterForm.startDay}/${parameterForm.startMonth}/${parameterForm.startYear} at ${parameterForm.startHourFirst}${parameterForm.startHourSecond}:${parameterForm.startMinuteFirst}${parameterForm.startMinuteSecond} ${parameterForm.timezone}`}</span>
        </p>
      </div>
      <Link to="/approve" className="VerifyModalButton">
        setup feed
      </Link>
    </div>
  )
}

export default SetupFeedModal

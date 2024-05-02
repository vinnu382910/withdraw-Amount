// Write your code here
import './index.css'

const DenominationItem = props => {
  const {withDrawDetails, withdrawAmt} = props
  const {value} = withDrawDetails
  const withDraw = () => {
    withdrawAmt(value)
  }
  return (
    <li>
      <button type="button" className="withdraw-button" onClick={withDraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

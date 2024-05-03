// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  withdrawAmt = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    console.log(denominationsList)
    const {amount} = this.state
    const name = 'Sarah Williams'
    const logo = name.slice(0, 1)
    return (
      <div className="main-cont">
        <div className="user-cont">
          <div className="circle-container">
            <span>{logo}</span>
          </div>
          <h1 className="user-name">{name}</h1>
        </div>
        <div className="money-cont">
          <p className="balance">Your Balance</p>
          <div>
            <p className="show-balance">{amount}</p>
            <p className="balance">In Ruppes</p>
          </div>
        </div>
        <div>
          <p className="show-balance">Withdraw</p>
          <p className="balance">CHOOSE SUM (IN RUPEES)</p>
        </div>
        <ul className="Withdraw-cont">
          {denominationsList.map(eachVal => (
            <DenominationItem
              withDrawDetails={eachVal}
              key={eachVal.id}
              withdrawAmt={this.withdrawAmt}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal

import agentIncomeHistory from './agentIncomeHistory'
import message from './message'
import customer from './customer'
import mine from './mineRouter'
import consumerList from './consumerList'
let routes = [].concat(agentIncomeHistory, message, customer, mine, consumerList)

export default routes

import TurnTheCard from '../views/Customer/TurnTheCard'
import InStock from '../views/Customer/InStock'
import Reflect from '../views/Customer/Reflect'
import WithdrawalHistory from '../views/Customer/WithdrawalHistory'

export default [
  {
    path: '/turn_the_card/:id',
    component: TurnTheCard
  },
  {
    path: '/in_stock',
    component: InStock
  },
  {
    path: '/reflect',
    component: Reflect
  },
  {
    path: '/withdrawal_history',
    component: WithdrawalHistory
  }
]

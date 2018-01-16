import Message from '../views/Message'
import Detail from '../views/Message/Detail'

export default [
  {
    path: '/message',
    component: Message
  },
  {
    path: '/message/detail/:id',
    component: Detail
  }
]

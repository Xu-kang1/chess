
import PersonalInformation from '../views/Mine/PersonalInformation/index'
import roomNotice from '../views/Mine/roomNotice/roomNotice'
import myChessRoom from '../views/Mine/myChessRoom/myChessRoom'
import roomName from '../views/Mine/roomName/roomName'
import Authentication from '../views/Mine/Authentication/Authentication'
import ChangeIdCard from '../views/Mine/changeIdCard/changeIdCard'
import Setting from '../views/Mine/setting/setting'
import RePassword from '../views/Mine/rePassword/rePassword'
let arr = [
  {
    path: '/PersonalInformation',
    component: PersonalInformation
  },
  {
    path: '/roomNotice',
    component: roomNotice
  },
  {
    path: '/myChessRoom',
    component: myChessRoom
  },
  {
    path: '/roomName',
    component: roomName
  },
  {
    path: '/Authentication',
    component: Authentication
  },
  {
    path: '/changeIdCard',
    component: ChangeIdCard
  },
  {
    path: '/setting',
    component: Setting
  },
  {
    path: '/rePassword',
    component: RePassword
  }

]
export default arr

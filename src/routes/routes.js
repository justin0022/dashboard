import { Home, AccountCircle } from '@material-ui/icons'
import Grades from '../containers/Grades'
import Assignments from '../containers/Assignments'

const Routes = [
  {
    path: '/Grades',
    sidebarName: 'Grades',
    icon: Home,
    component: Grades
  },
  {
    path: '/Assignments',
    sidebarName: 'Assignments',
    icon: AccountCircle,
    component: Assignments
  }
]

export default Routes

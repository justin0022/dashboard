import { Home, Assessment, Grade } from '@material-ui/icons'

const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    icon: Home
  },
  {
    path: '/Student',
    sidebarName: 'Student',
    icon: Grade
  },
  {
    path: '/Instructor',
    sidebarName: 'Instructor',
    icon: Assessment
  }
]

export default Routes

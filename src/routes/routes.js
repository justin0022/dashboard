import { Home, Assessment, Grade } from '@material-ui/icons'

const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    icon: Home
  },
  {
    path: '/Grades',
    sidebarName: 'Grades',
    icon: Grade
  },
  {
    path: '/Assignments',
    sidebarName: 'Assignments',
    icon: Assessment
  }
]

export default Routes

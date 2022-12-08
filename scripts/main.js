import signup from './signup'
import index from './index.js'
import tarefas from './tarefas.js'

if (
  location.pathname === '/signup.html'
  || location.pathname === '/Checkpoint2-To-do/signup.html'
) {
  signup()
} else if (
  location.pathname === '/index.html' 
  || location.pathname === '/' 
  || location.pathname === '/Checkpoint2-To-do/index.html' 
  || location.pathname === '/Checkpoint2-To-do/'
) {
  index()
} else if (
  location.pathname === '/tarefas.html'
  || location.pathname === '/Checkpoint2-To-do/tarefas.html'
) {
  tarefas()
}


import signup from './signup.js'
import index from './index.js'
import tarefas from './tarefas.js'

if (
  location.pathname === '/cadastro.html'
  || location.pathname === '/Checkpoint2-To-do/cadastro.html'
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


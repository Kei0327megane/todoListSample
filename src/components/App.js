import React from 'react'
import Header from './Header'
import Footer from './Footer'
import InputArea from './InputArea'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <Header />
    <InputArea />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
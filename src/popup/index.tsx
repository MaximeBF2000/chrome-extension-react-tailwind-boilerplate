import React from 'react'
import { createRoot } from 'react-dom/client'
import '../assets/tailwind.css'
import Popup from './popup'

function init() {
  const appContainer = document.createElement('div')
  appContainer.style.width = '100%'
  appContainer.style.height = '100%'
  document.body.appendChild(appContainer)
  if (!appContainer) {
    throw new Error('Can not find AppContainer')
  }
  const root = createRoot(appContainer)
  console.log(appContainer)
  root.render(<Popup />)
}

init()

import React from 'react'
import { createRoot } from 'react-dom/client'
import { CountDown } from './component'

createRoot(document.querySelector('#here') as HTMLElement).render(
  <React.StrictMode>
    <CountDown />
  </React.StrictMode>
)

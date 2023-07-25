import { Guard } from 'middleware/Guard'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from 'routing/Router'

function App() {
  return (
    <Guard>
      <RouterProvider router={router} />
    </Guard>
  )
}

export default App

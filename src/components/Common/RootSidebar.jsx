import React from 'react';
import Sidebar, { ItemsSidebar } from './Sidebar';

function RootSidebar({ children }) {
  return (
    <div className='flex'>
      <Sidebar>
        <ItemsSidebar />
      </Sidebar>
      <main className="">{children}</main>
    </div>
  )
}

export default RootSidebar;
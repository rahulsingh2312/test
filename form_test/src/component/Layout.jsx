import React from 'react'
import Steppers from './common/Stepper'
import DataIndicater from './DataIndicater';

function Layout({ children, activeTab }) {
    return (
      <div style={{ width: '50%' }}>
        <Steppers activeTab={activeTab} />
        <DataIndicater/>
        {children}
      </div>
    );
  }

export default Layout

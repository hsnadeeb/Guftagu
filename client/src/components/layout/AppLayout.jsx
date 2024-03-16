import React from 'react'
const AppLayout = ()=> WarppedComponent => {
  return (props)=>{
    return(
        <div>
            <div>Header</div>
            <WarppedComponent {...props}/>
            <div>Footer</div>
        </div>
    )
  }
}

export default AppLayout
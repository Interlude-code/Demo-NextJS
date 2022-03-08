import { FC } from "react"

const DarkLayout :FC = ({children}) => {
  return (
    <div className="dark-layout">
    
        <h3>dark</h3> 
        <div>
            {children}
        </div>
     
     </div>
  )
}

export default DarkLayout
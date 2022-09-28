import React from 'react'
import './Commonbox.scss'
 const CommonBox = ({Title,icon}) => {
  return (
    <div className='Container'>
    <div className='Uppercontainer'>
    <div className='Title'>
    {Title}
    
    </div>
    <div className='Iconwarpper'>
    {icon && <img src={icon} className="icon" />}
    
    </div>
    </div>
    <div className='descripation'>
    {blist.map((data) => {
      return (
          <Grid item xs={6}>
              <img src={Dot} />
              <div className='statements'>{data.desc}</div>
          </Grid>
      )
  })}
    
    </div>
    
   </div>
  )
}
export default CommonBox;
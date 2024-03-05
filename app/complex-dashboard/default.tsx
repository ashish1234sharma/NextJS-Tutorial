const ComplexDashboard = ({children,analytics,notification}:any) => {
    return (
      <>
      <div>{children}</div>
      <div style={{width:'100%',display:'flex'}}>
          <div style={{width:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}>{analytics}</div>
          <div style={{width:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}>{notification}</div>
  
      </div>
     
      </>
    )
  }
  
  export default ComplexDashboard
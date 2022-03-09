export const depositMoney = (amout) => {
    return (dispatch)=>{
        dispatch({
            type:'deposit',
            payload:amout,
        })
    }
 }

 export const withdrawMoney = (amout) => {
     return (dispatch)=>{
dispatch({
    type:'withdraw',
    payload:amout,
})
     }
  }
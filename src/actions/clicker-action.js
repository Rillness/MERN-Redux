function addAction(state){

  console.log('ADDED')

  return{
    type : 'ADD_NUM',
    payload : 1
  }

}

function minusAction(state){

  console.log('SUBTRACTED')

  return{
    type : 'MINUS_NUM',
    payload : -1
  }

}

module.exports = {
  addAction : addAction,
  minusAction : minusAction
}



function ClickReducer(state = 0, action){

  switch (action.type) {

    case 'ADD_NUM':

      return state + action.payload;

    case 'MINUS_NUM':

      return state + action.payload;

  }

  return state;

}

module.exports = ClickReducer;

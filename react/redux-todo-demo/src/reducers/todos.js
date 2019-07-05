const todos = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TODO':
           return [
               ...state,
               {
                   id: action.id,
                   text:action.text,
                   complated:false
               }
           ]
    
        case 'TOGGLE_TODO':
            return state.map((todo) => 
                (todo.id === action.id) 
                ? {...todo,complated:!todo.complated}
                :todo
            )
        default:
            return state
    }
}

export default todos
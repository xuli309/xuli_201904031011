import { connect } from 'react-redux'
import { toggleTodo } from '../../actions'
import TodoList from '../TodoList';
import { VisibilityFilters } from '../../actions'

const getVisableTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case VisibilityFilters.SHOW_ALL:
            return todos;
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    todos: getVisableTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispath => ({
    toggleTodo: id => dispath(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
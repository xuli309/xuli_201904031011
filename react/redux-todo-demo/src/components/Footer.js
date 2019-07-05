import React from 'react'
import FileLink  from './containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
    <div>
        <span>Show:</span>
        <FileLink filter={VisibilityFilters.SHOW_ALL}>All</FileLink>
        <FileLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FileLink>
        <FileLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FileLink>
    </div>
)

export default Footer
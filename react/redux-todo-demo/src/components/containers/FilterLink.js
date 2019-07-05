import { connect } from 'react-redux'
import { setVistbilityFiter } from '../../actions';
import Link from '../Link';


const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.setVistbilityFiter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVistbilityFiter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
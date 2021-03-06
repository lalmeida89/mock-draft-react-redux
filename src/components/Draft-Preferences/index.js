import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {draftPageSubmit} from '../../actions/draftPreferencesAction';
import DraftPageContainer from './DraftPageContainer'

const mapStateToProps = state => ({
  teamCount: state.draftPreferencesReducer.teamCount
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    draftPageSubmit
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DraftPageContainer)

import { bindActionCreators } from 'redux';
import * as AppActions from './App.actions';

export const mapStateToProps = state => ({
  isFetching: state.app.isFetching,
  waterTests: state.app.data
});

export const mapDispatchToProps = dispatch => bindActionCreators(AppActions, dispatch);

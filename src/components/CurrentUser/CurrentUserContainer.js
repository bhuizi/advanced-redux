import { connect } from 'react-redux';
import { CurrentUser } from './CurrentUser';

const MapStateToProps = (state) => {
  const currentUser = state.get('currentUser');
  return {
    name: currentUser.get('name'),
    status: currentUser.get('status'),
    id: currentUser.get('id'),
  }
};

const MapDispatchToProps = (dispatch) => {
  return {
    updateStatus: ({target: {value}}) => {
      console.log('updatind status', value);
    }
  }
};

export const CurrentUserContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(CurrentUser);

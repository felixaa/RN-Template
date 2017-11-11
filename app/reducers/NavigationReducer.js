import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation';
import AppNavigator from '../HelloWorldNavigator.js';
// import { REHYDRATE } from 'redux-persist/constants'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Loading'));


function navigation(state = initialState, action) {
  /* UNCOMMENT IF YOU WANT TO PERSIST USER-AUTH */
   // let nextState;
   //  if (REHYDRATE) {
   //    let payload = action.payload
   //    if (payload) {
   //      if (payload.user != null) {
   //        if (payload.user.isLoggedIn) {
   //          return AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));
   //        } else {
   //          return AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Signin'));
   //        }
   //      } else {
   //        return AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Signin'));
   //      }
   //    }
   //  }

    switch (action.type) {
      case 'SIGNED_IN':
        nextState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));
        break;
      case 'back':
        nextState = AppNavigator.router.getStateForAction(
           NavigationActions.back(),
           state
         ); break;
      default:
        nextState = AppNavigator.router.getStateForAction(action, state);
        break;
    }

  return nextState || state;
}

module.exports = navigation;

import ActionTypes from '~/store/app/types';
import { checkOnboardingState } from '~/store/onboarding/actions';
import { checkTrustState } from '~/store/trust/actions';
import { initializeWallet, burnWallet } from '~/store/wallet/actions';

import {
  checkSafeState,
  initializeSafe,
  resetSafe,
} from '~/store/safe/actions';

export function initializeApp() {
  return async dispatch => {
    dispatch({
      type: ActionTypes.APP_INITIALIZE,
    });

    // Connect to Blockchain via middleware
    dispatch({
      type: ActionTypes.APP_CONNECT,
    });

    // Initialize and gather important app states (auth etc.)
    await dispatch(initializeWallet());
    dispatch(initializeSafe());
    await dispatch(checkAppState());

    dispatch({
      type: ActionTypes.APP_INITIALIZE_READY,
    });
  };
}

export function checkAppState() {
  return async dispatch => {
    await dispatch(checkSafeState());
    await dispatch(checkTrustState());
    await dispatch(checkOnboardingState());
  };
}

export function burnApp() {
  return async dispatch => {
    await dispatch(burnWallet());
    await dispatch(resetSafe());

    window.location.reload();
  };
}

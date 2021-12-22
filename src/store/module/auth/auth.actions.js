// noinspection JSUnresolvedFunction

import authApi from "../../../api/service/auth.service";
import router from '../../../router/router';

/**
 * Auth module actions list.
 */
export default {
  /**
   * Sending a request to the server to receive and save the data of an
   * authorized user.
   *
   * @param commit module mutation data.
   * @return {Promise<void>} for further processing if needed.
   */
  async getCurrentUser({commit}) {
    try {
      const {data} = await authApi.getUser();
      commit('setCurrentUser', data);
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  /**
   * Sending a request to the server for user authorization by email and password.
   * Obtaining an authentication token and writing it to localStorage.
   * If authorization failed, then displaying a window with an error.
   *
   * @param commit module mutation data.
   * @param loginRequestData authorization data.
   * @return {Promise<void>} for further processing if needed.
   */
  async login({commit}, loginRequestData) {
    try {
      const {data} = await authApi.login(loginRequestData);
      localStorage.setItem("jwt-token", data.message);
      router.go(0);
    } catch (err) {
      commit(
          'setOptionsNotification', {
            color: 'error',
            text: err.response.data.message,
            show: true,
            i18n: false
          },
          {root: true}
      );
    }
  },
  /**
   * User registration according to the data passed to the method. If registration is not successful, then a window with an error will be displayed.
   *
   * @param commit module mutation data.
   * @param registerRequestData registration data.
   * @return {Promise<void>} for further processing if needed.
   */
  async register({commit}, registerRequestData) {
    try {
      const response = await authApi.register(registerRequestData);
      commit(
          'setOptionsNotification',
          {
            color: 'success',
            text: response.data.message,
            show: true,
            i18n: true
          },
          {root: true}
      );

      return Promise.resolve(response);
    } catch (error) {
      if (error.response.data.error) {
        return Promise.reject(error);
      } else {
        commit(
            'setOptionsNotification',
            {
              color: 'error',
              text: error.response.data.message,
              show: true,
              i18n: true
            },
            {root: true}
        );
      }
    }
  },
  /**
   * Verification of the email specified by the user during registration
   * by sending a confirmation token to the server for verification.
   *
   * @param commit module mutation data.
   * @param verifyToken verification token.
   * @return {Promise<void>} for further processing if needed.
   */
  async confirmEmail({commit}, verifyToken) {
    let notification = {
      color: "success",
      text: "",
      show: true,
      i18n: true,
    };
    try {
      const {data} = await authApi.confirmEmail(verifyToken);
      if (!data.data) {
        notification.text = data.message;
      } else {
        return Promise.reject(data);
      }
    } catch (e) {
      notification.color = "error";
      notification.text = e.response.data.message;
      notification.i18n = false;
    }

    commit(
        'setOptionsNotification',
        notification,
        {root: true}
    );
  },
  /**
   * Sending a new email verification token to the mail to replace the expired
   * one.
   *
   * @param commit module mutation data.
   * @param expiredToken expired token.
   * @return {Promise<void>} for further processing if needed.
   */
  async reSendVerificationTokenEmail({commit}, expiredToken) {
    const {data} = await authApi.reSendVerificationTokenEmail(expiredToken);
    commit(
        'setOptionsNotification',
        {color: 'success', text: data.message, show: true, i18n: true},
        {root: true}
    );
  },
  /**
   * Logging out the user and redirecting to the login page.
   *
   * @param commit module mutation data.
   */
  async callLogout({commit}) {
    await authApi.logout();
    commit('setCurrentUser', null);
    localStorage.removeItem("jwt-token");
    router.go(0);
  },
};
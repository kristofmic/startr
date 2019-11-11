import hookActionFactory from './hookActionFactory';

export const ACTION = 'ACTION';

export function doAction(payload) {
  return {
    type: ACTION,
    payload,
  };

  // return dispatch => {
  //   dispatch({
  //     type: ACTION_REQUEST
  //     payload,
  //   });

  //   return api
  //     .ping(payload)
  //     .then(res =>
  //       dispatch({
  //         type: ACTION_SUCCESS
  //         payload: res,
  //       })
  //     )
  //     .catch(err =>
  //       dispatch({
  //         type: ACTION_ERROR
  //         payload: err.response.data.errors[0],
  //       })
  //     );
  // };
}
export const useDoAction = hookActionFactory(doAction);

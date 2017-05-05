export default function ({ dispatch }) {
  return next => (action) => {
    // If the action doeas not have payload
    // or the payload is not Promise
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    action.payload.then((response) => {
      const newAction = { ...action, payload: response.data };
      dispatch(newAction);
    });
  };
}

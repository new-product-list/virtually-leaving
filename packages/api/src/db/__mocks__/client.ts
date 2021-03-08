export const awsSdkPromiseResponse = jest
  .fn()
  .mockReturnValue(Promise.resolve(true));

const funcWithPromise = jest
  .fn()
  .mockImplementation(() => ({ promise: awsSdkPromiseResponse }));

const getFuncWithPromise = jest
  .fn()
  .mockImplementation(() => ({ promise: awsSdkPromiseResponse }));

const queryFuncWithPromise = jest
  .fn()
  .mockImplementation(() => ({ promise: awsSdkPromiseResponse }));

export const db = {
  put: funcWithPromise,
  get: getFuncWithPromise,
  query: queryFuncWithPromise,
};

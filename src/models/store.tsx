import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import { groceries } from './groceries';

export const models = {
  groceries,
};

export const store = init({
  models,
});

export type RootState = RematchRootState<typeof models>;
export type RootDispatch = RematchDispatch<typeof models>;

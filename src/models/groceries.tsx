import { getLocalStorage } from '../utils';

export const groceries: { state: any[]; reducers: any } = {
  state: getLocalStorage(),
  reducers: {
    addGrocery(
      state: { id: string; name: string }[],
      payload: { id: string; name: string }
    ) {
      return [...state, { id: payload.id, name: payload.name }];
    },
    dellGrocery(state: { id: string; name: string }[], payload: string) {
      return state.filter((el) => el.id !== payload);
    },
    editGrocery(
      state: { id: string; name: string }[],
      payload: { id: string; name: string }
    ) {
      return state.map((item) =>
        item.id === payload.id ? { ...item, name: payload.name } : item
      );
    },
    clearGrocery() {
      return [];
    },
  },
};

// import { Models, createModel } from '@rematch/core';
// interface RootModel extends Models<RootModel> {
//   groceries: typeof groceries;
// }
// export const groceries = createModel<RootModel>()({
//   state: [{ id: '', name: '' }],
//   reducers: {
//     addGrocery(
//       state: { id: string; name: string }[],
//       payload: { id: string; name: string }
//     ) {
//       return [...state, { id: payload.id, name: payload.name }];
//     },
//     dellGrocery(state: { id: string; name: string }[], payload: string) {
//       return state.filter((el) => el.id !== payload);
//     },
//     clearGrocery() {
//       return [];
//     },
//   },
// });

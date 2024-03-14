import { createSlice } from '@reduxjs/toolkit';

type UIState = {
  modal: {
    toggle: boolean;
  };
};

const initialState: UIState = {
  modal: {
    toggle: false,
  },
};

const toggleModalFn = (state: UIState) => {
  state.modal.toggle = !state.modal.toggle;
};

const UIStateSlice = createSlice({
  name: 'uistate',
  initialState,
  reducers: {
    toggleModal: toggleModalFn,
  },
});

export const { toggleModal } = UIStateSlice.actions;
export default UIStateSlice.reducer;

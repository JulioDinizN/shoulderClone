import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { currentLanguage } from '../../../localization/services';

export const languageSlice = createSlice({
  name: 'language',
  initialState: currentLanguage(),
  reducers: {
    setAppLanguage(state, action: PayloadAction<string>) {
      
      return action.payload;
    },
  },
});

export const {setAppLanguage} = languageSlice.actions;
export default languageSlice.reducer;

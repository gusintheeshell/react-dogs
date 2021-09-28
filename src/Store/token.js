import createAsyncSlice from './Helper/createAsyncSlice';
import { TOKEN_POST } from '../Services/api';

const slice = createAsyncSlice({
  name: 'token',
  initialState: {
    data: {
      token: localStorage.getItem('token') || null,
    },
  },
  fetchConfig: (user) => TOKEN_POST(user),
});

export const fetchToken = slice.asyncAction;
export const { resetState: resetTokenState } = slice.actions;

export default slice.reducer;

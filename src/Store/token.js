import createAsyncSlice from './Helper/createAsyncSlice';
import { TOKEN_POST } from '../Services/api';

const slice = createAsyncSlice({
  name: 'token',
  fetchConfig: (user) => TOKEN_POST(user),
});

export const fetchToken = slice.asyncAction;

export default slice.reducer;

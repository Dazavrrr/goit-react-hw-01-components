import user from '../user.json';
import { Profile } from './profile/Profile';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <Profile items={user} />
      

      <GlobalStyle />
    </div>
  );
};
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../redux/userSlice';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const logIn = useSelector(state => state.user.login);
  return (
    <div>
      {logIn}
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};

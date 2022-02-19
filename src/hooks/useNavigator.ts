import { CommonActions } from '@react-navigation/native';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useNavigator = (navigation) => {
  const navigate = (name): void => {
    navigation.navigate(name);
  };

  const resetAndNavigateTo = (name): void => {
    const action = CommonActions.reset({
      index: 0,
      routes: [{ name }],
    });
    navigation.dispatch(action);
  };

  return {
    navigate,
    resetAndNavigateTo,
  };
};

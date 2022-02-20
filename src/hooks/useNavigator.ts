import { CommonActions } from '@react-navigation/native';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useNavigator = (navigation) => {
  return {
    ...navigation,
    resetAndNavigateTo: (name): void => {
      const action = CommonActions.reset({
        index: 0,
        routes: [{ name }],
      });
      navigation.dispatch(action);
    },
  };
};

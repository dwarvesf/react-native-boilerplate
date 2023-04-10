import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export const useNavigator = () =>
  useNavigation<StackNavigationProp<ParamListBase, string, undefined>>();

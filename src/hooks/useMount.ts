import {useEffect} from 'react';

export const useMount = (handler: () => any) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handler, []);
};

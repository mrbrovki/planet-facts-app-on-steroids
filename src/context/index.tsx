import { createContext, useReducer, FC, ReactNode } from 'react';

//types
import { ContextProps, ReducerFn, State } from '../lib/Types';



const initState = {};
export const Context = createContext<ContextProps>({state: initState, dispatch: () => {}});

const AppContext:FC<{children: ReactNode}> = ({children}) => {
 const reducer:ReducerFn<State> = (state, action) => {
  const {type, payload} = action;
  switch(type){
   default:
    return{...state};
  }
 };
 const [state, dispatch] = useReducer(reducer, initState);
 return (
    <Context.Provider value={{state, dispatch}}>
     {children}
    </Context.Provider>
  );
};

export default AppContext;
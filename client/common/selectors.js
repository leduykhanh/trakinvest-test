import { createSelector } from 'reselect'
export const getAutosuggests = (state) => state.autoSuggest
export const getPaginations = (state) => state.pagination
export const paginationSelectorFactory=(key) =>{
     return createSelector(
          [getPaginations],
          (paginations) => {
              return paginations[key]
          }
      );
}

export const keySelectorFactory=(stateSelector,key) =>{
     return createSelector(
          [stateSelector],
          (state) => {
              if(state)
                return state[key]
              else
                  return undefined;
          }
      );
}

export const paginatedStateSelectorFactory=(stateSelector,pagination) =>{

  return createSelector(
      [stateSelector,pagination],
      (state,pagination) => {

          if(pagination && pagination.ids) {

              let data = [];
              pagination.ids.map((id)=>{
                  let obj = state[id]
                  if(obj)
                      data = data.concat(obj);
              })
              return data;
          }
          return [];
      }
  );
};
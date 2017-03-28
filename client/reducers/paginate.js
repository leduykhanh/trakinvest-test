import union from 'lodash/union'

const initial = {
    isFetching: false,
    nextPageUrl: undefined,
    page: 0,
    pageSize: 9,
    count: 0,
    ids: []
  }
// Creates a reducer managing pagination, given the action types to handle,
// and a function telling how to extract the key from an action.
const paginate = ({ types, mapActionToKey }) => {
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected types to be an array of three elements.')
  }
  if (!types.every(t => typeof t === 'string')) {
    throw new Error('Expected types to be strings.')
  }
  if (typeof mapActionToKey !== 'function') {
    throw new Error('Expected mapActionToKey to be a function.')
  }

  const [ requestType, successType, failureType ] = types

  const updatePagination = (state = initial, action) => {

    switch (action.type) {
      case requestType:
            return Object.assign({},state,{isFetching: true})
    case successType:
        return Object.assign({},state,{
          count: action.payload.result.count,
          isFetching: false,
          ids:  action.payload.result.page>1?union(state.ids, action.payload.result.data):action.payload.result.data,
          page: action.payload.result.page,
          pageSize: action.payload.result.pageSize,
          nextPageUrl: action.payload.result.next,
        })
      case failureType:
        return Object.assign({},state,{isFetching: false})
      default:
        return state
    }
  }

  return (state = initial, action) => {
    // Update pagination by key
    switch (action.type) {
      case requestType:
      case successType:
      case failureType:
        const key = mapActionToKey(action)
        if (typeof key !== 'string') {
          throw new Error('Expected key to be a string.')
        }

        let data =  updatePagination(state, action);

        return Object.assign({},state,data)
      default:
        return state
    }
  }
}

export default paginate
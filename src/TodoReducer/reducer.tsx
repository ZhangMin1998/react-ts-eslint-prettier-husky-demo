import type { TodoType } from './store'

export type ActionType= {
  type: string
  payload?:any // 附加的内容
}

export default function reducer(state: TodoType[], action: ActionType) {
  switch(action.type) {
    case 'add':
      return state.concat(action.payload)
    case 'delete':
      return state.filter(item => item.id !== action.payload)
    default:
      throw new Error()
  }
}
import { errorOn } from "./actions"
import { COMMENT_CREATE } from "./types"

const badWords = ["fuck", "dick", "хвойда"]

const spamFilter = (store) => {
  return function(next) {
      return function(action) {
          if (action.type === COMMENT_CREATE) {
              const hasBadWords = badWords.some(res => action.data.text.includes(res))
              if (hasBadWords) {
                return store.dispatch(errorOn("Your comment include bad words"))
              }
          }
          return next(action)
      }
  }
}

export default spamFilter
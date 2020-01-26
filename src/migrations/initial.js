import { store } from '../store.js'

// util
import {
  ROOT_TOKEN,
  SCHEMA_ROOT,
} from '../constants.js'

// util
import {
  getThought,
  hashContext,
  syncRemote,
} from '../util.js'

// change root → __ROOT__
export const initial = state => {

  console.info('Migrating contextIndex...')

  // keyRaw is firebase encoded
  const contextIndexUpdates = Object.keys(value.thoughtIndex).reduce((accum, keyRaw) => {

    const key = keyRaw === EMPTY_TOKEN ? '' : firebaseDecode(keyRaw)
    const thought = value.thoughtIndex[keyRaw]

    return Object.assign({}, accum, (thought.contexts || []).reduce((parentAccum, parent) => {

      if (!parent || !parent.context) return parentAccum
      const contextEncoded = hashContext(parent.context)

      return Object.assign({}, parentAccum, {
        [contextEncoded]: (parentAccum[contextEncoded] || accum[contextEncoded] || [])
          .concat({
            key,
            rank: parent.rank,
            lastUpdated: thought.lastUpdated
          })
      })
    }, {}))
  }, {})

  console.info('Syncing thoughtIndex...')

  sync({}, contextIndexUpdates, {
    updates: { schemaVersion: SCHEMA_CONTEXTCHILDREN }, forceRender: true, callback: () => {
      console.info('Done')
    }
  })
}
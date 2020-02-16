export default (state, { newState }) => ({
  isLoading: false,
  cursor: newState.cursor,
  cursorBeforeEdit: newState.cursorBeforeEdit,
  schemaVersion: newState.schemaVersion,
  thoughtIndex: {
    ...state.thoughtIndex,
    ...newState.thoughtIndex
  },
  contextBindings: {
    ...state.contextBindings,
    ...newState.contextBindings
  },
  contextIndex: {
    ...state.contextIndex,
    ...newState.contextIndex,
  },
  contextViews: {
    ...state.contextViews,
    ...newState.contextViews
  },
  expanded: {
    ...state.expanded,
    ...newState.expanded
  },
  recentlyEdited: [
    ...state.recentlyEdited,
    ...newState.recentlyEdited
  ]
})

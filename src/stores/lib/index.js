export function actionSwitch(map, state, {payload, type}) {
  return state.withMutations((state) => {
    return (map[type] || (() => state))(state, payload);
  });
}

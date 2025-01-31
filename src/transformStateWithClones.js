'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const addP = 'addProperties';
  const rmvP = 'removeProperties';
  const clrP = 'clear';
  
  let res = [];
  let dummy;

  for (const action in actions) {
    switch (action.type) {
      case addP :
        Object.assign(state, action.extraData);
        break;
      case rmvP :
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;
      case clrP :
        Object.keys(state).forEach(key => delete state[key]);
        break;
      default:
        break;
    }
    res.push(structuredClone(state));
 }
  
  return res;
}

module.exports = transformStateWithClones;

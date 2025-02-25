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
  let dummy = structuredClone(state);

  for (const action of actions) {
    switch (action.type) {
      case addP :
        Object.assign(dummy, action.extraData);
        break;
      case rmvP :
        for (const key of action.keysToRemove) {
          delete dummy[key];
        }
        break;
      case clrP :
        Object.keys(dummy).forEach(key => delete dummy[key]);
        break;
      default:
        break;
    }
    res.push(dummy);
 }

  return res;

}

module.exports = transformStateWithClones;

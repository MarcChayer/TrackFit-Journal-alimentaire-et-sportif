import { combineReducers } from 'redux';
import user from './user';
// fonction qui agrège (combine) tous les sous-reducer que l'ont va importer
// on place dans une propriété de l'objet state global la valeur de ces sous-reducers
// comme un reducer retourne toujours un state, on agrège ainsi les sous-state à notre state global
export default combineReducers({
  user,
});

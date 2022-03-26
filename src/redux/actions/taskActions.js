export const INSERT_TASK = 'INSERT_TASK';

export const TASK_SELECTED = 'TASK_SELECTED';

export const TASK_REMOVE = 'TASK_REMOVE';

export const CLEAN_ALL = 'CLEAN_ALL';

export const EDIT = 'EDIT';

export const UPDATE_TASK = 'UPDATE_TASK';

export const actionInsert = (state) => ({ type: INSERT_TASK, state });

export const actionTaskSelected = (state) => ({ type: TASK_SELECTED, state });

export const actionTaskRemove = { type: TASK_REMOVE };

export const actionCleanAll = { type: CLEAN_ALL };

export const actionEdit = (state) => ({ type: EDIT, state });

export const actionUpdate = (state) => ({ type: UPDATE_TASK, state });

import { createTypes, async } from 'redux-action-types';

export default createTypes('common/',
  async('LOAD_SUGGESTIONS'),
  "SET_DIALOG_DATA",
  "LEAVE_PAGE_CONFIRM",
  "ONLEAVE_HOOK",
    "SET_FORM_STATE",
  "SET_MAP_LOCATION",
  async("GEOCODING"),

)

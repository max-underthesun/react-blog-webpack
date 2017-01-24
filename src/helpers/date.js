import moment from 'moment';

import {
  DEFAULT_DATE_FORMAT_MOM,
  DEFAULT_DATE_FORMAT_JS
} from 'constants/Date';

export function dateFormattedMoment(
  dateStringISO,
  format = DEFAULT_DATE_FORMAT_MOM
) {
  return moment(dateStringISO).format(format);
}

export function dateFormattedJS(
  dateStringISO,
  format = DEFAULT_DATE_FORMAT_JS,
  locale = 'en-US'
) {
  return (
    dateStringISO  && new Date(dateStringISO).toLocaleString(locale, format)
  );
}

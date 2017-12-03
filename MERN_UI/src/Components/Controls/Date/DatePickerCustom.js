/**
 * Created by svs on 10/10/17.
 */
import React from 'react';

import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


class DatePickerCustom extends React.Component {

  modifyDate = (value) => {
    this.props.onDayChange({
      target: {
        name: this.props.targetName,
        value
      }
    });
  };

  render() {
    const formattedDate = (this.props.value) ? moment(this.props.value).format('DD/MM/YYYY') : '';
    return (
      <div>
        <DayPickerInput
          className="form-input form-datepicker"
          placeholder="DD/MM/YYYY"
          onDayChange={this.modifyDate}
          value={formattedDate}
        />
      </div>
    );
  }

}

export default DatePickerCustom;

import { useState } from "react";
// import DatePicker from 'react-date-picker';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import DayPickerInput from 'react-day-picker/DayPickerInput';

const SearchFilter = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState(new Date());
  return (
    <div className="sideWidget">
      <h3>
        <span>
          <img src="images/caricon.png" />
          <i></i>
        </span>
        Search Filters
      </h3>
      <div className="widgetContent">
        <form>
          <h5>
            <span>-</span>From Date
          </h5>
          <div className="fields">
              <FontAwesomeIcon
                fixedWidth
                icon={faCalendar}
                color="#4F504D"
                className="calendar-icon-style position-absolute"
                style={{  marginTop:'10px', right: '10px' }}
              />
              <DayPickerInput 
              // classNames={ { display: 'd-block'  } }
              onDayChange={day => console.log(day)}
              dayPickerProps={{
                fromMonth: new Date(),
              }}
              />
          </div>
          <h5>
            <span>-</span>To Date
          </h5>
          <div className="fields">
            <FontAwesomeIcon
              fixedWidth
              icon={faCalendar}
              color="#4F504D"
		      	  className="position-absolute"
              style={{ marginTop:'10px', right:'10px' }}
            />
   <DayPickerInput
    // classNames={ { display: 'd-block'  } }
   onDayChange={day => console.log(day)} />
          </div>
          <h5>
            <span>-</span>Time
          </h5>
          <div className="fieldset">
          <div className="fields">
          <select className="datepicker">
				  <option>12:00</option>
				  <option>13:00</option>
				  <option>14:00</option>
				  <option>15:00</option>
				  <option>16:00</option>
				  <option>17:00</option>
				  <option>18:00</option>
				  <option>19:00</option>
				  <option>20:00</option>
				  <option>21:00</option>
				  <option>22:00</option>
			  </select>
            </div>
            <div className="fields">
         <select className="datepicker">
				  <option>12:00</option>
				  <option>13:00</option>
				  <option>14:00</option>
				  <option>15:00</option>
				  <option>16:00</option>
				  <option>17:00</option>
				  <option>18:00</option>
				  <option>19:00</option>
				  <option>20:00</option>
				  <option>21:00</option>
				  <option>22:00</option>
			  </select>
            </div>
          </div>
          <h4>Filter by Price</h4>
          <input type="hidden" className="slider-input" value="23" />
          <button className="filter-btn">Apply filters</button>
        </form>
      </div>
    </div>
  );
};

export default SearchFilter;

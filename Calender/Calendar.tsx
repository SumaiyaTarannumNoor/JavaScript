import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import './Calendar.css';

interface CalendarProps {
  value: string;
  onChange: (field: string, value: string) => void;
  error?: string;
}

const Calendar: React.FC<CalendarProps> = ({ value, onChange, error }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(value ? new Date(value) : null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = format(date, 'yyyy-MM-dd');
      onChange('deadline', formattedDate);
    } else {
      onChange('deadline', '');
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <DatePicker
          id="calendar"
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          placeholderText="Select deadline"
          wrapperClassName="w-full"
          className={`w-full px-3 py-2 bg-white/10 border rounded-lg text-white 
            placeholder-white/50 focus:outline-none focus:ring-2 
            ${error 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-white/30 focus:ring-accent-light'
            } transition-all duration-300`}
          popperClassName="custom-datepicker-popper"
          popperPlacement="bottom-start"
          showPopperArrow={false}
        />
        <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-white/50 pointer-events-none" />
      </div>
      {error && (
        <p className="text-sm text-red-400 mt-1">{error}</p>
      )}
    </div>
  );
};

export default Calendar;
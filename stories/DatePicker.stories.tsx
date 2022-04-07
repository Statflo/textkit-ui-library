import React from "react";
import DatePicker from '../src/components/DatePicker/DatePicker';

export default { title: "Date Picker" };

export const Default = () => {
    return <div className="tk-w-96">
        <DatePicker 
            id="date-picker"
            onDateChange={() => null}
        />
    </div>
    
};
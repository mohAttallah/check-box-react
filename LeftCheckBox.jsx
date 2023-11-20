import React from 'react';

function LeftSection(props) {
    return (
        <div className='checkbox1'>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1"> I have a bike</label><br />
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label htmlFor="vehicle2"> I have a car</label><br />
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label htmlFor="vehicle3"> I have a boat</label><br />
        </div>
    );
}

export default LeftSection;
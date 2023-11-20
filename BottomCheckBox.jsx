import React from 'react';

function BottomSection(props) {
    return (

        <div className='checkbox4'>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1"> I have a bike</label><br />
            <input type="checkbox" id="vehicle1" name="vehicle2" value="Car" />
            <label htmlFor="vehicle2"> I have a car</label><br />
            <input type="checkbox" id="vehicle1" name="vehicle3" value="Boat" />
            <label htmlFor="vehicle3"> I have a boat</label><br />
        </div>

    );
}

export default BottomSection;
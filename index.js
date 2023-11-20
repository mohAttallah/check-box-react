import React, { createContext, useContext, useState, useEffect } from 'react';

const SelectContext = createContext();

const TopSelectProvider = ({ children }) => {
    const [top, setTop] = useState(false);

    const toggleTop = async (value) => {
        setTop(value);
        // try {
        //     // Make an API request to toggle the top value
        //     const response = await fetch('/api/toggleTop', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ top: !top }),
        //     });

        //     if (response.ok) {
        //         // If the API call is successful, update the state

        //     } else {
        //         console.error('Failed to toggle top value');
        //     }
        // } catch (error) {
        //     console.error('Error occurred during API call:', error);
        // }
    };

    // Fetch initial top value from the server when the component mounts
    // useEffect(() => {
    //     const fetchTopValue = async () => {
    //         try {
    //             const response = await fetch('/api/getTop');
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 setTop(data.top);
    //             } else {
    //                 console.error('Failed to fetch top value');
    //             }
    //         } catch (error) {
    //             console.error('Error occurred during API call:', error);
    //         }
    //     };

    //     fetchTopValue();
    // }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <SelectContext.Provider value={{ top, toggleTop }}>
            {children}
        </SelectContext.Provider>
    );
};

export { SelectContext, TopSelectProvider };

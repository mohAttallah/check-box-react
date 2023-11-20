import React, { useContext, useEffect, useState } from 'react';
import { SelectContext } from '../context/Selector';

const boxData = [
    { name: "left" },
    { name: "right" },
    { name: "top" }
];

function TopSection(props) {
    const selectContext = useContext(SelectContext);
    const [boxs, setBoxs] = useState([
        { name: "left", isChecked: false },
        { name: "right", isChecked: false },
        { name: "top", isChecked: false }
    ]);



    const handleChange = (e) => {
        const { name, checked } = e.target;

        if (name === "allSelect") {
            let tempBoxs = boxs.map((box) => ({
                ...box,
                isChecked: checked
            }));
            setBoxs(tempBoxs);
        } else {

            let tempBoxs = boxs.map((box) =>
                box.name === name ? { ...box, isChecked: checked } : box
            );
            setBoxs(tempBoxs);
        }
    };


    useEffect(() => {
        for (const box of boxs) {
            console.log(box);
            if (box.isChecked === false) selectContext.toggleTop(false);
        }
    }, [boxs]);

    useEffect(() => {
        if (selectContext.top) {
            let tempBoxs = boxs.map((box) => ({
                ...box,
                isChecked: true
            }));
            setBoxs(tempBoxs);
        }
        // } else {
        //     let tempBoxs = boxs.map((box) => ({
        //         ...box,
        //         isChecked: false
        //     }));
        //     setBoxs(tempBoxs);
        // }
    }, [selectContext.top]);

    return (
        <div className='checkbox3'>
            {boxData.map((box) => (
                <div key={box.name}>
                    <input
                        type="checkbox"
                        name={box.name}
                        checked={boxs.find(b => b.name === box.name)?.isChecked || false}
                        onChange={handleChange}
                    />
                    <label htmlFor={box.name}>{box.name}</label><br />
                </div>
            ))}
        </div>
    );
}

export default TopSection;

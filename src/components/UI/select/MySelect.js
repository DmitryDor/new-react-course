import React from 'react';

export const MySelect = (props) => {
    return (
        <select
            style={{display: "flex", justifyContent: "flex-start"}}
            value={props.value} onChange={e => props.onChange(e.currentTarget.value)}
        >
            <option value="" disabled>{props.defaultValue}</option>
            {props.options.map(option =>
                <option value={option.value} key={option.value}>{option.name}</option>
            )}
        </select>
    );
};


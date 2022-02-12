import React from 'react';

import './custom-button.styles.scss';
//import FormInput from '../form-input/form-input.component';

const CustomButton = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
);

export default CustomButton;
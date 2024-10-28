import React from 'react';
import { StepIconProps } from '@mui/material/StepIcon';

const CustomStepIcon = (props: StepIconProps) => {
  const { active, completed } = props;

  return (
    <div
      style={{
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: completed ? '#32ABF2' : 'transparent',
        border: `2px solid ${active ? '#32ABF2' : '#5D7FA3'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',        
      }}
    >      
    </div>
  );
};

export default CustomStepIcon;

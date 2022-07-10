import React from 'react';
import './tooltip.scss';
import { Tooltip } from 'reactstrap';
import type { Placement } from '@popperjs/core';

interface CustomTooltipProps {
    target: string,
    tooltip: string,
    placement: Placement
}

export const CustomTooltip = (props: CustomTooltipProps) => {
  const { target, tooltip, placement } = props;

  const [tooltipOpen, setTooltipOpen] = React.useState<boolean>(false);

  return (
    <Tooltip className='custom-tooltip' placement="right-start" isOpen={tooltipOpen} target={target} toggle={() => setTooltipOpen(!tooltipOpen)} innerClassName='custom-tooltip-inner'>
      {tooltip}
    </Tooltip>
  );
};

export default CustomTooltip;
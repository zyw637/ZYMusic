import React, { memo } from 'react'

import { DivideLineWrapper } from "./style";
export default memo(function DivideLine(props) {
    const {title,more=""} = props;
    return (
        <DivideLineWrapper>
            <div className="wrap-v1 test">
                <h3 className="title">{title}</h3>
                <a herf="#" className="more">{more}</a>
            </div>
        </DivideLineWrapper>
    )
})

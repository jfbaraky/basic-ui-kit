import React from 'react';
import { withTheme } from 'styled-components'
let SVG = (props) => {
    return (
        <svg className={props.className} viewBox={props.viewBox || "0 0 70 70"}>
            <path stroke='#eee' strokeWidth='2' fill={props.theme.primaryDark || 'black'} d="M26.474 70a6.972 6.972 0 0 1-5.557-2.764L3.049 43.639a6.971 6.971 0 0 1 11.116-8.414l11.752 15.518L55.474 3.285a6.977 6.977 0 0 1 9.604-2.232 6.969 6.969 0 0 1 2.23 9.602l-34.916 56.06A6.967 6.967 0 0 1 26.474 70z" />
        </svg>
    )
}

export default withTheme(SVG);
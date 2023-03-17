import React from 'react'
import {Slider, SliderProps} from '@mui/material'

type SuperRangeType = SliderProps & {

}

const SuperRange: React.FC<SuperRangeType> = (props) => {
    return (
        <Slider

            sx={{
                width: 147, height: 4, color: '#00CC22',

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)

        />
    )
}

export default SuperRange

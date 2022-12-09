import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'
// * 1 - понять (и простить) SuperInputText
// * 2 - в зависимости от типа и дизэйбла прицепить нужный класс в SuperButton.tsx (строка 21)
// * 3 - дописать onChangeCallback в SuperCheckbox.tsx чтоб оба чекбокса работали на стенде
// * 4 ?- сделать стили в соответствии с дизайном
// * */

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = s.button
        + (disabled
                ? s.disabled
                : xType === 'red'
                    ? s.red : '')
        + (className ? ' ' + className : '')// задачка на смешивание классов



   // const testClassName = `${s.button}${disabled ? s.disabled: ''}${xType === 'red' ?  s.red : ''}${className ? className : ''}`

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            //className={testClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton

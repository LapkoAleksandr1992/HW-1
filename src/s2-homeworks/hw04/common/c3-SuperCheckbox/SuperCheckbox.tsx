import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
} from 'react'
import s from './SuperCheckbox.module.css'
// * 1 - понять (и простить) SuperInputText
// * 2 - в зависимости от типа и дизэйбла прицепить нужный класс в SuperButton.tsx (строка 21)
// * 3 - дописать onChangeCallback в SuperCheckbox.tsx чтоб оба чекбокса работали на стенде
// * 4 ?- сделать стили в соответствии с дизайном
// * */


// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>
type SuperCheckboxPropsType = Omit<DefaultInputPropsType, 'type'> & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string

}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        onChange,
        onChangeChecked,
        className,
        spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC
        id,

        ...restProps // все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // задачка на написание онченджа
        onChangeChecked && onChangeChecked( e.currentTarget.checked)
       // onChangeChecked?.(e.currentTarget.checked)
        onChange && onChange(e)
    }

    const finalInputClassName = s.checkbox
        + (className ? ' ' + className : '')

    return (
        <label className={s.label}>
            <input
                id={id}
                type={'checkbox'}
                onChange={onChangeCallback}
                className={finalInputClassName}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
            />
            {children && (
                <span
                    id={id ? id + '-span' : undefined}
                    className={s.spanClassName}
                >
                    {children}
                </span>
            )}
        </label> // благодаря label нажатие на спан передастся в инпут
    )
}

export default SuperCheckbox

import React, {DetailedHTMLProps, InputHTMLAttributes, ReactNode, useState} from 'react'
import SuperInputText from '../../../hw04/common/c1-SuperInputText/SuperInputText'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута, кроме type
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
export type SuperDebouncedInputPropsType = Omit<DefaultInputPropsType, 'type'> & {
    // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: ReactNode
    spanClassName?: string
} // илм экспортировать тип SuperInputTextPropsType
    & { // плюс специальный пропс SuperPagination
    onDebouncedChange?: (value: string) => void
}

const SuperDebouncedInput: React.FC<SuperDebouncedInputPropsType> = (
    {
        onChangeText,
        onDebouncedChange,

        ...restProps // все остальные пропсы попадут в объект restProps
    }
) => {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    //console.log('timerId=> ', timerId)

//* 1 - дописать функцию onChangeTextCallback в SuperDebouncedInput
    const onChangeTextCallback = (value: string) => {
       // console.log('calling onChangeTextCallback')
        onChangeText?.(value)
       // console.log(value)
        if (onDebouncedChange) {
            //console.log('if onDebouncedChange ')
            // делает студент
            const id = +setTimeout(() => {
                //console.log('setTimeout FN')
                onDebouncedChange(value)
                //console.log('FN timerId => ', timerId)

            }, 1500)
            clearTimeout(timerId)
         //   console.log(id)
            //console.log('setTimerId ID => ', id)
            setTimerId(id)
            // остановить предыдущий таймер
            // запустить новый на 1500ms, в котором вызовется функция

            //
        }
    }
   // console.log('RENDER')
    return (
        <SuperInputText onChangeText={onChangeTextCallback} {...restProps}/>
    )
}

export default SuperDebouncedInput

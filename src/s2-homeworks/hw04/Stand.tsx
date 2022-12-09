import React, {useState} from 'react'
import s from './Stand.module.css'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import SuperButton from './common/c2-SuperButton/SuperButton'


/*
* 1 - понять (и простить) SuperInputText
* 2 - в зависимости от типа и дизэйбла прицепить нужный класс в SuperButton.tsx (строка 21)
* 3 - дописать onChangeCallback в SuperCheckbox.tsx чтоб оба чекбокса работали на стенде
* 4 ?- сделать стили в соответствии с дизайном
* */

const Stand = () => {
    const [stateForAllInputs, setValue] = useState<string>('')
    const [error, setError] = useState<string>('')

    const [stateForAllCheckboxes, setChecked] = useState<boolean>(false)

    return (
        <div id={'hw4-stand'} className={s.stand}>
            <div className={s.inputs}>
                {/*совместим со старым кодом:*/}
                <div>


                    {/*//----STARTTT INNNPUUTTTT-----*/}
                    <SuperInputText
                        id={'hw4-super-input-like-old'}
                        value={stateForAllInputs}
                        onChange={(e) => setValue(e.currentTarget.value)}
                    />
                </div>
                {/*инпут с ошибкой:*/}
                <div>
                    <SuperInputText
                        id={'hw4-super-input-with-error'}
                        value={stateForAllInputs}
                        onChangeText={setValue}
                        error={error}
                        onEnter={() => {
                            setError(
                                stateForAllInputs.trim()
                                    ? ''
                                    : 'Error'
                            )
                            setValue('')
                        }}
                    />
                </div>
            </div>

            {/*//----ENNNDDDD INNNPUUTTTT-----*/}


            {/*//----STARTTT BUUUUTTTOOONNN-----*/}


            <div className={s.buttons}>
                {/*обычная кнопка:*/}
                <div>
                    <SuperButton id={'hw4-super-button-default'}
                                 className={'default'}
                    >
                        default
                    </SuperButton>
                </div>

                {/*красная кнопка:*/}
                <div>
                    <SuperButton id={'hw4-super-button-red'} xType={'red'}
                    >
                        red
                    </SuperButton>
                </div>


                {/*задизэйбленная кнопка:*/}
                <div>
                    <SuperButton
                        id={'hw4-super-button-disabled'}
                        xType={'red'}
                        disabled
                    >
                        disabled
                    </SuperButton>
                </div>
                {/*задизэйбленная кнопка:*/}


                <div>
                    <SuperButton
                        id={'hw4-super-button-secondary'}
                        xType={'secondary'}
                        className={'secondary'}
                    >
                        secondary
                    </SuperButton>
                </div>

            </div>

            {/*-------ENNNDDDD BUUUUTTTOOONNN-----*/}


            {/*//----STARTTT CHEEXXXBBOOOXX-----*/}
            <div className={s.checkboxes}>
                {/*чекбокс с текстом:*/}
                <div>
                    <SuperCheckbox
                        id={'hw4-super-checkbox-with-text'}
                        checked={stateForAllCheckboxes}
                        onChangeChecked={setChecked}
                    >
                        some text
                    </SuperCheckbox>
                </div>
                {/*совместим со старым кодом:*/}
                <div>
                    <SuperCheckbox

                        id={'hw4-super-checkbox-like-old'}
                        checked={stateForAllCheckboxes}
                        onChange={(e) => setChecked(e.currentTarget.checked)}

                    />
                </div>


                {/*-------ENNNDDDD CHEEXXXBBOOOXX-----*/}

            </div>
        </div>
    )
}

export default Stand

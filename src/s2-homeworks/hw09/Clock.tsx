import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {

    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    //const [show, setShow] = useState<boolean>(false)
    const [dissableButton, SetdissableButton] = useState<boolean>(false)
    const [showOnMouseEnter, SetshowOnMouseEnter] = useState<boolean>(false)
    const current = new Date()
    let hours=current.getHours()
    let minutes=current.getMinutes()
    let seconds=current.getSeconds()

    const time=(hours:number,minutes:number,seconds:number) => {
        return`${hours}:${minutes}:${seconds}`
    }
    let currentTime=time(hours,minutes,seconds)
    const [timerId, setTimerId] = useState<any>(currentTime)//add TYpe!!!
    console.log(timerId)
    let monthNumber = current.getMonth()
    const monthName = (monthNumber: number) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        return monthNames[monthNumber];
    }
    let dayNumber = current.getDay()
    const dayNames = (day: number) => {
        const daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return daysName[day];
    }




    const start = () => {
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
       let timerId = +setInterval(() => {
           setDate(new Date())
       }, 1000);
        setTimerId(timerId)
        SetdissableButton(!dissableButton)
    }

    const stop = () => {
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)

       clearTimeout(timerId)
        setTimerId(undefined)
        SetdissableButton(!dissableButton)
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка

        SetshowOnMouseEnter(!showOnMouseEnter)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        SetshowOnMouseEnter(!showOnMouseEnter)
    }

    const stringTime =  date.toLocaleTimeString('ru-RU')|| <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = monthName(monthNumber) || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = dayNames(dayNumber) || <br/> //День недели!!!!!!
    const stringMonth = current.toLocaleDateString('de-DE', {
        day: 'numeric',
        month: '2-digit',
        year: 'numeric'
    }) || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >

                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {showOnMouseEnter ? (
                        <>
                            <span id={'hw9-month'}>{stringDate }</span>,{' '}
                            <span id={'hw9-date'}>{stringMonth}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton className={dissableButton?s.disable:''}
                    id={'hw9-button-start'}
                    disabled={dissableButton} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton className={!dissableButton?s.disable:''}
                    id={'hw9-button-stop'}
                    disabled={!dissableButton} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock

import { useCountDown } from "../../../hooks";
import { useEffect } from "react";

export const TimeCounter = (props) => {

    useEffect(() => {
        setCountDown(props.remainSeconds)
    }, [props]);


    const [hours, minutes, seconds, setCountDown] = useCountDown(props.remainSeconds);

    if (hours + minutes + seconds > 0) {
        return <div>{timeFormat(hours)} : {timeFormat(minutes)} : {timeFormat(seconds)}</div>
    } else {
        return ''
    }


}

const timeFormat = (unit) => {
    return unit >= 10? unit : '0' + unit;
}

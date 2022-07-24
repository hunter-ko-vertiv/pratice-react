import { useCountDown } from "../../../hooks";

export const TimeCounter = (props) => {
    const [hours, minutes, seconds] = useCountDown(props.remainSeconds);

    if (hours + minutes + seconds > 0) {
        return <div>{timeFormat(hours)} : {timeFormat(minutes)} : {timeFormat(seconds)}</div>
    } else {
        return ''
    }


}

const timeFormat = (unit) => {
    return unit >= 10? unit : '0' + unit;
}

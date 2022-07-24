import { useEffect, useState } from "react";

export const useCountDown = (remainSecond) => {
    const [countDown, setCountDown] = useState(remainSecond);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(prevSecond => {
                return prevSecond - 1
            })
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [remainSecond]);
    return getReturnValue(countDown);
}

const getReturnValue = (countDown) => {
    const hours = Math.floor(countDown / (60 * 60));
    const minutes = Math.floor((countDown % (60 * 60)) / 60);
    const seconds = Math.floor(countDown % 60);
    return [hours, minutes, seconds];
}

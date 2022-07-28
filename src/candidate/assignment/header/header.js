import styles from './header.module.css';
import { useEffect, useState } from "react";
import { TimeCounter } from "../time-counter/time-counter";
import { Link } from "react-router-dom";


export const Header = (props) => {
    const [candidateName, setCandidateName] = useState('');
    const [remainSec, setRemainSec] = useState(10);
    useEffect(
        () => {
            fetch('/backend/assignment',).then(res => res.json()).then(
                res => {
                    setCandidateName(res.candidate_name);
                    setRemainSec(+res.time);
                }
            )
        }
    , [])


    return (
        <>
            <div className={styles.headerLayout}>
                <Link to='/' className={styles.leftHeader}>
                    Alacrity
                </Link>
                <div className={styles.middleHeader}>{candidateName}</div>
                <div className={styles.rightHeader}>
                    <div className={styles.countdownGroup}>
                        <div>
                            Count Down
                        </div>
                        {remainSec >= 0?
                            <TimeCounter remainSeconds={remainSec}></TimeCounter>:
                            ""
                        }

                    </div>
                    <div onClick={props.submitEvent} className={styles.submitBtn}>
                        Submit
                    </div>
                </div>
            </div>
        </>
    )
}



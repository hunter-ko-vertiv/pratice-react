import { forwardRef, useImperativeHandle, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@mui/material";

import styles from "./tip-dalog.module.css";

export const TipsDialog = forwardRef((props, ref) => {
    const [Open, setOpen] = useState(false);
    const navigate = useNavigate();


    useImperativeHandle(ref, () => ({
        handleOpen: () => {
            setOpen(true)
        }
    }));

    const handleClose = () => {
        setOpen(false);
    }

    const handleNavigate = () => {
        navigate('assignment')
    }

    return (
        <>
            <Dialog open={Open} onClose={handleClose}>
                <div className={styles.dialogLayout}>
                    <div className={styles.header}>Before the Test</div>
                    <div className={styles.content}>
                    The purpose of this test is to access programing competence. Where possible, implement
                your solution in your chosen language.If this is not possible, describe your approach to creating the solution.
                        <br/><br/>
                        Choose only <span className={styles.strong}>one</span> problem to answer, and you'll have <span className={styles.strong}> 1 hour</span> to complete the test.
                    </div>
                    <div className={styles.footer} onClick={handleNavigate}>
                        <div className={styles.startBtn}>Start</div>
                    </div>
                </div>
            </Dialog>
        </>

    );
});

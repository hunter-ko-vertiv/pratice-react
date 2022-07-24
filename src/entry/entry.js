import { useNavigate } from "react-router-dom";
import styles from './entry.module.css';
import { Button } from "@mui/material";

export const Entry = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/candidate');
    }


    return (
        <div className={styles.layout}>
            <div className={styles.group}>
                <div className={styles.title}>Alacrity Coding Test</div>
                <Button
                    onClick={handleNavigate}
                    className={styles.linkBtn}
                    variant="contained"
                >Candidate</Button>
            </div>
        </div>
    )
}

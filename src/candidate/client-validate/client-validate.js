import { useForm } from "react-hook-form";
import { useRef } from "react";
import { TipsDialog } from "./tips-dialogs";
import styles from './client-validate.module.css'

export const ClientValidate = () => {
    const tipsRef = useRef();

    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        criteriaMode: "all"
    });


    const onSubmit = async (e) => {
        try {
            await fetch('/backend/', {
                method: "POST",
                body: JSON.stringify(e)
            }).then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw res
                }
            }).then(() => {
                if (tipsRef.current?.handleOpen) {
                    tipsRef.current.handleOpen();
                }
            })
        } catch(err) {
            console.log(err);
            setError("candidate_account", {type: "confirmFail", message: "Please enter valid number"});
        }


    }

    return <div className={styles.layout}>
        <div className={styles.group}>
            <div className={styles.title}>Alacrity Coding Test</div>
            <form className={styles.confirmForm} onSubmit={handleSubmit(onSubmit)}>
                <label className={styles.label}>Candidate</label>
                <div className={styles.candidateField}>
                    <input type="text"
                           className={styles.confirmInput + ' ' + (errors.candidate_number? styles.confirmInputError: '') }
                           {...register("candidate_number", {required: "This field is required"})}
                           placeholder={`${errors.candidate_number? '': 'Please input your candidate number'}`} />
                    {errors.candidate_number &&
                        <div className={styles.errorMessage}>
                            {errors.candidate_number.message}
                        </div>}
                </div>
                <button type="submit" className={styles.submitBtn}>Confirm</button>
            </form>
        </div>
        <TipsDialog ref={tipsRef}></TipsDialog>
    </div>
}

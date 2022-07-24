import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from './file-upload.module.css'

export const FileUpload = forwardRef((props, ref) => {
    const fileUploadRef =useRef(null);
    const fileUploadNameRef = useRef(null);

    const handleUpload = () => {
        fileUploadRef.current.click();
    }

    const handleFileChange = (e) => {
        fileUploadNameRef.current.value = e.target.files[0].name;

    }

    useImperativeHandle(ref, () => ({
        uploadFile: () => {
            const formBody = new FormData();
            formBody.append("assignment_file", fileUploadRef.current.files[0]);

            fetch('assignment', {
                method: "POST",
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: formBody
            })
        }
    }));
    return (
        <div className={styles.uploadLayout}>
            <div className={styles.uploadTitle}>Please upload your file here(in .zip format)</div>
            <div className={styles.uploadGroup}>
                <input className={styles.uploadFileName} onClick={handleUpload} disabled={true} ref={fileUploadNameRef} type="text"/>
                <button className={styles.uploadFileBtn} onClick={handleUpload}>Upload</button>
                <input onChange={handleFileChange} className={styles.uploadInput} type="file" ref={fileUploadRef} />
            </div>
            <div className={styles.uploadTips}>
                <div>
                    File name format:
                </div>
                <div className={styles.rightTips}>
                    question number-candidate number <br/>
                    (for example: <span className={styles.strong}>1-CA561212.zip</span>)
                </div>

            </div>
        </div>
    )
});

import { Header } from "./header";
import { AssignmentViewer } from "./assignment-viewer";
import { FileUpload } from "./file-upload";
import { useRef } from "react";

export const Assignment = () => {
    const fileUploadRef = useRef();

    const submitEvent = () => {
        if (fileUploadRef.current?.uploadFile) {
            fileUploadRef.current.uploadFile();
        }
    }
    return <>
        <Header submitEvent={submitEvent}></Header>
        <AssignmentViewer></AssignmentViewer>
        <FileUpload ref={fileUploadRef}></FileUpload>
    </>
}

import { mockAssignment } from "./mock-assignment";
import styles from "./assignment-viewer.module.css"
import { useState } from "react";
import { QuestionOne } from "./questions/question-one";
import { QuestionTwo } from "./questions/question-two";
import { QuestionThree } from "./questions/question-three";

export const AssignmentViewer = () => {
    const [selectQuestion, setSelectQuestion] = useState('question1')

    const handleTabSwitch = (e) => {
        setSelectQuestion(e.target.value);
    }

    return <>
        <div className={styles.assignmentContent}>
            <ul className={styles.assignmentTabList}>
                {mockAssignment.map((item, index) => {
                    return (
                        <li key={item.id}>
                            <input type="radio"
                                   id={item.id}
                                   value={item.id}
                                   defaultChecked={item.checked}
                                   checked={item.id === selectQuestion}
                                   onChange={handleTabSwitch}
                            />
                            <label htmlFor={item.id} >
                                <img alt="icon" className={styles.icon} src="/assets/ico/assignment.ico" />
                                <span>{ item.name }</span>
                            </label>
                        </li>)})
                }
            </ul>
            {selectQuestion === 'question1'? <QuestionOne></QuestionOne>:''}
            {selectQuestion === 'question2'? <QuestionTwo></QuestionTwo>:''}
            {selectQuestion === 'question3'? <QuestionThree></QuestionThree>:''}
        </div>
        </>
}

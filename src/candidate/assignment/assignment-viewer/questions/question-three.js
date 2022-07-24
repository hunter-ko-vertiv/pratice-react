import styles from "./question.module.css";

export const QuestionThree = () => {

    return ( <div className={styles.questionLayout}>
            <div className={styles.title}>3. Two Sum</div>
            <div className={styles.description}>
                Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.
                <br/>
                You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.
                <br/>
                You can return the answer in any order.
            </div>
            <div className={styles.questionTitle}>Example 1</div>
            <pre>
                <strong>Input:</strong> nums = [2,7,11,15], target = 9 <br/>
                <strong>Output:</strong> [0,1]<br/>
                <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].<br/>
            </pre>

            <div className={styles.questionTitle}>Example 2</div>
            <pre>
                <strong>Input:</strong> nums = [2,7,11,15], target = 9 <br/>
                <strong>Output:</strong> [0,1]<br/>
                <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].<br/>
            </pre>

            <div className={styles.questionTitle}>Example 3</div>
            <pre>
                <strong>Input:</strong> nums = [2,7,11,15], target = 9 <br/>
                <strong>Output:</strong> [0,1]<br/>
                <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].<br/>
            </pre>
        </div>
    )
}

import styles from './ExampleAtom.module.scss'
export function ExampleAtom ({text = "Default ExampleAtom Text"}){
    return <div className={styles.ExampleAtom}><p>{text}</p></div>
}
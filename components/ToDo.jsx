import styles from '@/styles/ToDo.module.css';

export default function ToDo({ 
    toDo, 
    index, 
    completeToDo, 
    removeToDo 
}) {
  const handleCompleteClick = () => {
    completeToDo(index);
  };

  const handleRemoveClick = () => {
    removeToDo(index);
  };

  return (
    <div 
        className={styles.toDo}
        >
      <span 
        className={toDo.completed ? styles.completed : ''}
        >
            {toDo.text}
            </span>
      <div>
        <button 
        className={styles.completeBtn} 
        onClick={handleCompleteClick}
        >
            Complete
            </button>
        <button 
        className={styles.removeBtn} 
        onClick={handleRemoveClick}
        >
            x
            </button>
      </div>
    </div>
  );
}
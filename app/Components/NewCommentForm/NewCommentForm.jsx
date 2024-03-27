import { useState } from 'react'
import Styles from '@/app/Components/NewCommentForm/NewCommentForm.module.css'

export const NewCommentForm = (props) => {
    const [body, setBody] = useState('')
    // console.log(body)

    const validateComment = (text) => {
        // Разбиваем текст на слова
        const words = text.trim().split(/\s+/)
        
        // Проверяем количество слов
        const wordCount = words.length;
        if (wordCount < 3) {
            alert("Комментарий должен содержать не менее трех слов.")
            return 
        }
    
        // Проверяем количество символов
        const charCount = text.trim().length;
        if (charCount > 1000) {
            alert("Комментарий не должен превышать 1000 символов.")
            return 
        }
    
        // Если все условия выполнены, возвращаем true (валидный комментарий)
        return true;
    }

    const handleChange = (e) => {
      setBody(e.target.value)
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateComment(body)) {
          props.onAddComment({ 
            id: props.user.id,
            body: body,
            created_at: new Date(),
            author: props.user
         });
        }
        setBody('')
      }

  return (
    <form className={Styles['new-comment__form']} onSubmit={handleSubmit}>
      <textarea
        name="comment"
        placeholder="Добавить новый коммент"
        className={Styles['new-comment__text']}
        onChange={handleChange}
      ></textarea>
      <button type="submit" className={Styles['new-comment__btn']}>
        Отправить
      </button>
    </form>
  );
};

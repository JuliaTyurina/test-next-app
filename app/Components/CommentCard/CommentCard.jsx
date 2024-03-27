import Styles from '@/app/Components/CommentCard/CommentCard.module.css'

export const CommentCard = (props) => {

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };

  return (
    <div className={Styles["comment-card"]}>
      <div className={Styles["author-info"]}>
        <img src={props.author.avatar} alt={props.author.name} className="avatar" />
        <div className={Styles["author-details"]}>
          <div>
            <h4>{props.author.name}</h4>
            <p>{props.author.company}</p>
          </div>
          <p className={Styles["comment-date"]}>{formatDate(props.created_at)}</p>
        </div>
      </div>
      <div className={Styles["comment-content"]}>
        <p className={Styles["comment-text"]}>{props.body}</p>
      </div>
    </div>
  );
}
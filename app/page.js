'use client';

import React, { useEffect, useState } from 'react';
import { getData, isResponseOk } from '@/app/api/api-utils';
import { endpoints } from '@/app/api/config';
import { CommentCard } from '@/app/Components/CommentCard/CommentCard';
import { NewCommentForm } from '@/app/Components/NewCommentForm/NewCommentForm';
import { Pagination } from '@/app/Components/Pagination/Pagination';

export default function Home() {
  const [comments, setComments] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // инфа для пагинации
  const commentsPerPage = 20
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage
  const currentComments = comments ? comments.slice(indexOfFirstComment, indexOfLastComment) : []
  const totalPages = comments && Math.ceil(comments.length / commentsPerPage)

  function handlePageChange (page) {
    setCurrentPage(page)
  }

  const user = {
    id: 16,
    name: "John Doe",
    avatar: "http://placeimg.com/640/480/business",
    company: "BigCountry"
  }

  function addNewComment (newComment) {
    setComments([newComment, ...comments]);
  }

  useEffect(() => {
    async function fetchData() {
      const commentsData = await getData(endpoints.comments)
      isResponseOk(commentsData) ? setComments(commentsData) : setComments(null)
    }
    fetchData()
  }, [])

  return (
    <main>
      <h2 className="test__title">Тестовый проект</h2>
      <div className="test__content">
        <NewCommentForm user={user} onAddComment={addNewComment} />
        <div className='comments'>
          {currentComments.length > 0 ? (
            currentComments.map((item, index) => (
              <CommentCard key={index} {...item} />
            ))
          ) : (
            <p>Комментарии отсутствуют</p>
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
}

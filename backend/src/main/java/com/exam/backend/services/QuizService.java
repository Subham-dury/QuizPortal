package com.exam.backend.services;

import com.exam.backend.entity.Category;
import com.exam.backend.entity.Quiz;

import java.util.Set;

public interface QuizService {

    public Quiz addQuiz(Quiz quiz);

    public Quiz updateQuiz(Quiz quiz);

    public Set<Quiz> getAllQuiz();

    public Quiz getQuiz(Long id);

    public Set<Quiz> getQuizzesByCategory(Category category);

    public Set<Quiz> getActiveQuizzes(Boolean active);

    public Set<Quiz> getActivedQuizzesByCategory(Category category, Boolean active);

    public void deleteQuiz(Long id);
}

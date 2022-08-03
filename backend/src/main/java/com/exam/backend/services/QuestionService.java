package com.exam.backend.services;

import com.exam.backend.entity.Question;
import com.exam.backend.entity.Quiz;

import java.util.Set;

public interface QuestionService {

    public Question addQuestion(Question question);

    public Question updateQuestion(Question Question);

    public Set<Question> getAllQuestion();

    public Question getQuestion(Long id);

    public Set<Question> getQuestionByQuiz(Quiz quiz);

    public void deleteQuestion(Long id);

    public Question get(Long id);

}

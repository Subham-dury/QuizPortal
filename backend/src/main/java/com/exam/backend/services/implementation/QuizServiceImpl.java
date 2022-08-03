package com.exam.backend.services.implementation;

import com.exam.backend.entity.Category;
import com.exam.backend.entity.Quiz;
import com.exam.backend.repository.QuizRepository;
import com.exam.backend.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class QuizServiceImpl implements QuizService {

    @Autowired
    private QuizRepository quizRepository;

    @Override
    public Quiz addQuiz(Quiz quiz) {
        return this.quizRepository.save(quiz);
    }

    @Override
    public Quiz updateQuiz(Quiz quiz) {
        return this.quizRepository.save(quiz);
    }

    @Override
    public Set<Quiz> getAllQuiz() {
        return new HashSet<>(this.quizRepository.findAll());
    }

    @Override
    public Quiz getQuiz(Long id) {
        return this.quizRepository.findById(id).get();
    }

    @Override
    public Set<Quiz> getQuizzesByCategory(Category category) {
        return this.quizRepository.findBycategory(category);
    }

    @Override
    public Set<Quiz> getActiveQuizzes(Boolean active) {
        return this.quizRepository.findByActive(active);
    }

    @Override
    public Set<Quiz> getActivedQuizzesByCategory(Category category, Boolean active) {
        return this.quizRepository.findByCategoryAndActive(category, active);
    }

    @Override
    public void deleteQuiz(Long qid) {
        this.quizRepository.deleteById(qid);

    }
}

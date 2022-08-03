package com.exam.backend.services.implementation;

import com.exam.backend.entity.Question;
import com.exam.backend.entity.Quiz;
import com.exam.backend.repository.QuestionRepository;
import com.exam.backend.services.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public Question addQuestion(Question question) {
        return this.questionRepository.save(question);
    }

    @Override
    public Question updateQuestion(Question Question) {
        return this.questionRepository.save(Question);
    }

    @Override
    public Set<Question> getAllQuestion() {
        return new HashSet<>(this.questionRepository.findAll());
    }

    @Override
    public Question getQuestion(Long id) {
        return this.questionRepository.findById(id).get();
    }

    @Override
    public Set<Question> getQuestionByQuiz(Quiz quiz) {
        return this.questionRepository.findByQuiz(quiz);
    }

    @Override
    public void deleteQuestion(Long id) {
//        Question question = new Question();
//        question.setQuesId(id);
//        this.questionRepository.delete(question);
            this.questionRepository.deleteById(id);
    }

    @Override
    public Question get(Long id) {
        return this.questionRepository.getOne(id);
    }
}

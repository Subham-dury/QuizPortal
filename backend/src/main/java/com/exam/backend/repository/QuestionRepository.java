package com.exam.backend.repository;

import com.exam.backend.entity.Question;
import com.exam.backend.entity.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Set<Question> findByQuiz(Quiz quiz);
}

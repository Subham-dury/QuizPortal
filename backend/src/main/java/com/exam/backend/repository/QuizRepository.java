package com.exam.backend.repository;

import com.exam.backend.entity.Category;
import com.exam.backend.entity.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface QuizRepository extends JpaRepository<Quiz, Long> {

    Set<Quiz> findBycategory(Category category);

    Set<Quiz> findByActive(Boolean active);

    Set<Quiz> findByCategoryAndActive(Category category,Boolean b);
}

package com.exam.backend.controllers;

import com.exam.backend.entity.Category;
import com.exam.backend.entity.Quiz;
import com.exam.backend.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }

    @PutMapping("/update")
    public ResponseEntity<?> update(@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
    }

    @GetMapping("/get-all")
    public ResponseEntity<?> getallquiz(){
        return ResponseEntity.ok(this.quizService.getAllQuiz());
    }

    @GetMapping("/get/{id}")
    public Quiz getquiz(@PathVariable("id") Long id){
        return this.quizService.getQuiz(id);
    }

    @GetMapping("/get/category/{cid}")
    public ResponseEntity<?> getQuizzesForCategory(@PathVariable("cid") Long cid){
        Category category = new Category();
        category.setCid(cid);
        return ResponseEntity.ok(this.quizService.getQuizzesByCategory(category));
    }

    @GetMapping("get-all/active")
    public ResponseEntity<?> getActiveQuizzes(){
        return ResponseEntity.ok(this.quizService.getActiveQuizzes(true));
    }

    @GetMapping("/get/category/active/{cid}")
    public ResponseEntity<?> getActiveQuizzesByCategory(@PathVariable("cid") Long cid){
        Category category = new Category();
        category.setCid(cid);
        return ResponseEntity.ok(this.quizService.getActivedQuizzesByCategory(category, true));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteQuiz(@PathVariable("id") Long id){
        this.quizService.deleteQuiz(id);
    }

}

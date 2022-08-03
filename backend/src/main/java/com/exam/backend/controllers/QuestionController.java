package com.exam.backend.controllers;

import com.exam.backend.entity.Question;
import com.exam.backend.entity.Quiz;
import com.exam.backend.services.QuestionService;
import com.exam.backend.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @Autowired
    private QuizService quizService;

    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody Question question){
        return ResponseEntity.ok(this.questionService.addQuestion(question));
    }

    @PutMapping("/update")
    public ResponseEntity<?> update(@RequestBody Question question){
        return ResponseEntity.ok(this.questionService.updateQuestion(question));
    }

    @GetMapping("/quiz/{id}")
    public ResponseEntity<?> getQuestionQfQuiz(@PathVariable("id") Long id){
        Quiz quiz = this.quizService.getQuiz(id);
        Set<Question> questions = quiz.getQuestions();
        List<Question> questionList = new ArrayList(questions);
        if(questionList.size() > quiz.getNumberOfQuestions()){
            questionList.subList(0, (int) (quiz.getNumberOfQuestions()+1));
        }

        questionList.forEach(q -> q.setAnswer(""));
        Collections.shuffle(questionList);
        return ResponseEntity.ok(questionList);
    }

    @GetMapping("/quiz/all/{id}")
    public ResponseEntity<?> getAllQuestionQfQuiz(@PathVariable("id") Long id){
        Quiz quiz = new Quiz();
        quiz.setQid(id);
        Set<Question> questionSet = this.questionService.getQuestionByQuiz(quiz);
        return ResponseEntity.ok(questionSet);
    }

    @GetMapping("/get/{id}")
    public Question getQuiz(@PathVariable("id") Long id){
        return this.questionService.getQuestion(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteQuestion(@PathVariable("id") Long id){
        this.questionService.deleteQuestion(id);
    }

    @PostMapping("/evaluate")
    public ResponseEntity<?> evaluateQuiz(@RequestBody Set<Question> questions){
            int marksGot = 0;
            int numberOfQuestionsAttempted = 0;
            int numberOfCorrectAnswers = 0;
            int maxMarks = Math.toIntExact(questions.stream().findFirst().get().getQuiz().getMaxmarks());
            double singleQuestionMarks = (double) maxMarks / questions.size();

        for(Question q : questions){

            Question question =this.questionService.get(q.getQuesId());
            if(question.getAnswer().equals(q.getSelectedanswer())){
                numberOfCorrectAnswers++;
                marksGot += singleQuestionMarks;

            }
            if(q.getSelectedanswer() != null ){
                numberOfQuestionsAttempted++;
            }
        }
        Map<String, Object> res= Map.of("marksGot", marksGot, "correctAnswers", numberOfCorrectAnswers, "attempted",numberOfQuestionsAttempted);
        return ResponseEntity.ok(res);
    }
}

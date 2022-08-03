package com.exam.backend.controllers;

import com.exam.backend.entity.Category;
import com.exam.backend.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;


    @PostMapping("/add")
    public ResponseEntity<?> addCategory(@RequestBody Category category){
        Category local = this.categoryService.addCategory(category);
        return ResponseEntity.ok(local);
    }

    @GetMapping("/get/{id}")
    public Category getCategory(@PathVariable("id") Long id){
        return this.categoryService.getCategory(id);
    }

    @GetMapping("/get-all")
    public ResponseEntity<?> getAllCategories(){
        return ResponseEntity.ok(this.categoryService.getCategories());
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateCategory(@RequestBody Category category){
        return ResponseEntity.ok(this.categoryService.updateCategory(category));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCategory(@PathVariable("id") Long id){
        this.categoryService.deleteCategory(id);
    }

}

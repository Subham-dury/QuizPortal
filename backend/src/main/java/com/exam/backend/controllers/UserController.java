package com.exam.backend.controllers;

import com.exam.backend.entity.Role;
import com.exam.backend.entity.User;
import com.exam.backend.entity.UserRole;
import com.exam.backend.services.implementation.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping(path = "/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    // creating user
    @PostMapping("/add")
    public User createPublicUser(@RequestBody User user) throws Exception {

        user.setProfile("default.png");
        user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));

        Role role = new Role("public");
        UserRole userRole = new UserRole(user,role);

        Set<UserRole> roleSet = new HashSet<>();
        roleSet.add(userRole);

        return this.userService.createUser(user,roleSet);
    }

    @GetMapping(path = "/find/{username}")
    public User getUser(@PathVariable("username") String username){
        return this.userService.getUser(username);
    }

    @DeleteMapping(path = "/delete/{username}")
    public void deleteUser(@PathVariable("username") String username){
        this.userService.deleteUser(username);
    }

    @PutMapping(path="/update/{username}")
    public User updateUser(@PathVariable("username") String username, @RequestBody User user) throws Exception {
        return this.userService.updateUser(username, user);
    }




}

package com.exam.backend.services;

import com.exam.backend.entity.User;
import com.exam.backend.entity.UserRole;

import java.util.Set;

public interface UserService {

    //create user
    public User createUser(User user, Set<UserRole> userRoleSet) throws Exception;


    //get User
    public User getUser(String username);

    //delete user
    public void deleteUser(String username);

    // update user
    public User updateUser(String username, User user) throws Exception;
}

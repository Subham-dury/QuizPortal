package com.exam.backend.services.implementation;

import com.exam.backend.entity.User;
import com.exam.backend.entity.UserRole;
import com.exam.backend.repository.RoleRepository;
import com.exam.backend.repository.UserRepository;
import com.exam.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public User createUser(User user, Set<UserRole> userRoleSet) throws Exception {
        User local = this.userRepository.findByUsername(user.getUsername());
        if(local != null){
            System.out.println("User already exists");
            throw new Exception("User already exists");
        }
        else {
            // add all roles
            for(UserRole role:userRoleSet){
                roleRepository.save(role.getRole());
            }
        }

        user.getUserRoleSet().addAll(userRoleSet);
        local = this.userRepository.save(user);
        return local;
    }

    @Override
    public User getUser(String username) {
        return this.userRepository.findByUsername(username);
    }

    @Override
    public void deleteUser(String username) {
        User user = this.userRepository.findByUsername(username);
        this.userRepository.delete(user);

    }

    @Override
    public User updateUser(String username, User user) throws Exception {
        User local = this.userRepository.findByUsername(username);
        // add all roles
        if(local == null){
            System.out.println("User does not exist");
            throw new Exception("User does not exist");
        }
        else {
            local.setUsername(user.getUsername()==null ? local.getUsername() : user.getUsername() );
            local.setFirstname(user.getFirstname()==null ? local.getFirstname() : user.getFirstname() );
            local.setMiddlename(user.getMiddlename()==null ? local.getMiddlename() : user.getMiddlename() );
            local.setLastname(user.getLastname()==null ? local.getLastname() : user.getLastname() );
            local.setEmail(user.getEmail()==null ? local.getEmail() : user.getEmail() );
            local.setPhone(user.getPhone()==null ? local.getUsername() : user.getUsername() );
            local.setPassword(user.getPassword()==null ? local.getPassword() : user.getPassword() );
            local.setProfile(user.getProfile()==null ? local.getProfile() : user.getProfile() );

            this.userRepository.save(local);


        }


        return local;


    }
}

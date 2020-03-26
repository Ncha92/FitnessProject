package com.ex.controller;

import com.ex.model.Person;
import com.ex.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class PersonController {

    @Autowired
    private PersonService personService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/users")
    public List<Person> getAllUser() {
        return personService.getAllUsers();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/users/{id}")
    public Optional<Person> getByUserId(@PathVariable("id") String id){
        return personService.getByUserId(id);
    }

    @PostMapping("/users")
    public void addUser(@RequestBody Person person){
        personService.addUser(person);
    }

    @PutMapping("/users/{id}")
    public void updateUser(@RequestBody Person person, @PathVariable("id") String id) {
        personService.updateUser(person, id);
    }

    @DeleteMapping("users/{id}")
    public void deleteUser(@PathVariable("id") String id) {

        personService.deleteUser(id);
    }
}

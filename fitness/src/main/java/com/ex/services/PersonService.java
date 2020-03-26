package com.ex.services;

import com.ex.model.Person;
import com.ex.model.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    public List<Person> getAllUsers() {
        List<Person> people = new ArrayList<>();
        personRepository.findAll()
                .forEach(people::add);
        return people;
    }

    public Optional<Person> getByUserId(String id) {
        return personRepository.findById(id);
    }

    public void addUser(Person person) {
        personRepository.save(person);
    }

    public void updateUser(Person person, String id) {
        personRepository.save(person);
    }

    public void deleteUser(String id) {
        personRepository.deleteById(id);
    }
}

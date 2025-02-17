package com.rocketseat.certification_nlw.modules.students.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rocketseat.certification_nlw.modules.students.entities.StudentEntity;

import java.util.Optional;


public interface StudentRepository extends JpaRepository<StudentEntity, UUID>{
  public Optional<StudentEntity> findByEmail(String email);
}

package com.rocketseat.certification_nlw.modules.students.repositories;

import java.util.UUID;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.rocketseat.certification_nlw.modules.students.entities.CertificationStudentEntity;

@Repository
public interface CertificationStudentRepository extends JpaRepository<CertificationStudentEntity, UUID> {
  @Query("SELECT c FROM certifications c INNER JOIN c.studentEntity std WHERE std.email = :email AND c.technology = :technology")

  List<CertificationStudentEntity> findByStudentEmailAndTechnology(String email, String technology);

  @Query("SELECT c FROM certifications c ORDER by c.grade DESC LIMIT 10")
  List<CertificationStudent> findTop10ByOrderByGradeDesc();

}

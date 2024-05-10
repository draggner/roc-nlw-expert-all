package com.rocketseat.certification_nlw.modules.students.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.rocketseat.certification_nlw.modules.students.controllers.dto.StudentCertificationAnswersDTO;
import com.rocketseat.certification_nlw.modules.students.controllers.dto.VerifyHasCertificationDTO;
import com.rocketseat.certification_nlw.modules.students.entities.CertificationStudentEntity;
import com.rocketseat.certification_nlw.modules.students.useCases.StudentCertificationAnswersUseCase;
import com.rocketseat.certification_nlw.modules.students.useCases.VerifyIfHasCertificationUseCase;

import jakarta.persistence.OneToMany;

@RestController
@RequestMapping("/students")
public class StudentController {
  
  @Autowired
  private VerifyIfHasCertificationUseCase verifyIfHasCertificationUseCase;

  @Autowired
  private StudentCertificationAnswersUseCase studentCertificationAnswersUseCase;

  @OneToMany(mappedBy = "studentEntity")
  @JsonBackReference
  private List<CertificationStudentEntity> certificationStudentEntity;

  @PostMapping("/verifyIfHasCertification")
  public String verifyIfHasCertification(@RequestBody VerifyHasCertificationDTO verifyHasCertificationDTO) {

    var result = this.verifyIfHasCertificationUseCase.execute(verifyHasCertificationDTO);
    if (result) {
      return "Usuário fez a prova!";
    }
    return "Usuário pode fazer a prova!";
  }

  @PostMapping("/certification/answer")
  public ResponseEntity<Object> certificationAnswer(
      @RequestBody StudentCertificationAnswersDTO studentCertificationAnswersDTO) {

    try {
      var result = studentCertificationAnswersUseCase.execute(studentCertificationAnswersDTO);
      return ResponseEntity.ok().body(result);
    } catch(Exception e){
      return ResponseEntity.badRequest().body(e.getMessage());
    }

    return studentCertificationAnswerUseCase.execute(studentCertificationAnswersDTO);
  }
}

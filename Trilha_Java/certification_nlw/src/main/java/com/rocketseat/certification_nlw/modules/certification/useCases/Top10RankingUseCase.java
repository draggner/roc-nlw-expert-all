package com.rocketseat.certification_nlw.modules.certification.useCases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rocketseat.certification_nlw.modules.students.repositories.CertificationStudentRepository;

@Service
public class Top10RankingUseCase {
  
  @Autowired
  private CertificationStudentRepository certificationStudentRepository;

  public void execute() {
    return this.certificationStudentRepository.findTop10ByOrderByGradeDesc();
  }
}

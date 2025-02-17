package com.rocketseat.certification_nlw.modules.certification;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rocketseat.certification_nlw.modules.certification.useCases.Top10RankingUseCase;
import com.rocketseat.certification_nlw.modules.students.entities.CertificationStudentEntity;

@RestController
@RequestMapping("/ranking")
public class RankController {
  
  @Autowired
  private Top10RankingUseCase top10RankingUseCase;

  @GetMapping("/top10")
  public List<CertificationStudentEntity> top10() {
    return this.top10RankingUseCase.execute();
  }
}

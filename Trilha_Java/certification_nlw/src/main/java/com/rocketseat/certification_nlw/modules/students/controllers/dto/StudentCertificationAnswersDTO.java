package com.rocketseat.certification_nlw.modules.students.controllers.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class StudentCertificationAnswersDTO {
  
  private String email;
  private String technology;
  private List<QuestionAnswerDTO> questionAnswers;
}

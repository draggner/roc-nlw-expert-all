package com.rocketseat.certification_nlw.modules.students.useCases;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rocketseat.certification_nlw.modules.questions.entities.QuestionEntity;
import com.rocketseat.certification_nlw.modules.questions.repositories.QuestionRepository;
import com.rocketseat.certification_nlw.modules.students.controllers.dto.StudentCertificationAnswersDTO;
import com.rocketseat.certification_nlw.modules.students.controllers.dto.VerifyHasCertificationDTO;
import com.rocketseat.certification_nlw.modules.students.entities.AnswerCertificationsEntity;
import com.rocketseat.certification_nlw.modules.students.entities.CertificationStudentEntity;
import com.rocketseat.certification_nlw.modules.students.repositories.CertificationStudentRepository;
import com.rocketseat.certification_nlw.modules.students.repositories.StudentRepository;

@Service
public class StudentCertificationAnswersUseCase {

  
  @Autowired
  private VerifyIfHasCertificationUseCase verifyIfHasCertificationUseCase;
  
  @Autowired
  private QuestionRepository questionRepository;
  
  @Autowired
  private CertificationStudentRepository certificationStudentRepository;

  public CertificationStudentEntity execute(StudentCertificationAnswersDTO dto) throws Exception
   {

    var hasCertification = this.verifyIfHasCertificationUseCase.execute(new VerifyHasCertificationDTO(dto.getEmail(), dto.getTechnology()));

    if(hasCertification) {
      throw new Exception("Você já tirou sua certificação")
    }

    List<QuestionEntity> questionEntity = questionRepository.findByTechnology(dto.getTechnology());
    
    List<AnswerCertificationsEntity> answerCertification = new ArrayList<>();
    
    AtomicInteger correctAnswers = new AtomicInteger(0);







    var student = studentRepository.findByEmail(dto.getEmail());
    if (student.isEmpty()) {
      throw new Exception("E-mail od estudante incorreto");
    }

    
    List<QuestionEntity> questionEntity = questionRepository.findByTechnology(dto.getTechnology());

    dto.getQuestionAnswers()
    .stream().forEach(questionAnswer -> {
      var question = questionsEntity.stream()
      .filter(q -> q.getId().equals(questionAnswer.getQuestionID())).findFirst().get();

      var findCorrectAlternative = question.getAlternatives().stream()
      .filter(alternative -> alternative.isCorrect()).findFirst().get();
    
      if (findCorrectAlternative.getId().equals(questionAnswer.getAlternativeId())) {
        questionAnswer.setCorrect(isCorrect:true);
        correctAnswers.incrementAndGet();
      } else {
        questionAnswer.setCorrect(isCorrect:false);
      }
    });

    var student = studentRepository.findByEmail(dto.getEmail());

    if(student.isEmpty()){
      var studentCreated = StudentEntity.builder().email(dto.getEmail()).build();
    
      studentCreated = studentRepository.save(studentCreated);
  
      studentId = studentCreated.getId();
    } else {
      studentId = student.get().getId();
    }

    List<AnswerCertificationsEntity> answersCertification = new ArratList<>();

    var answersCertificationEntity = AnswerCertificationsEntity.builder().answerID(questionAnswer.getAlternativeId()).questionId(questionAnswer.getQuestionId()).isCorrect(questionAnswer.isCorrect()).build();

    answerCertification.add(AnswerCertificationsEntity);

    
    var certificationStudentCreated = certificationStudentRepository.save(certificationStudentEntity);
    
    answerCertifications.stream().forEach(answerCertification -> {
      answerCertification.setCertificationID(certificationStudentEntity.getId());
      
      answerCertification.setCertificationStudentEntity(certificartionStudentEntity);
    });
    
    certificartionStudentEntity.setAnswerCertificationEntities(answerCertification);
    
    certificationStudentRepository.save(certificartionStudentEntity);
    
    CertificationStudentEntity certificationStudentEntity = CertificationStudentEntity.builder()
    .technology(dto.getTechnology())
    .studentId(studentId)
    .grade(correctAnswer.get())
    .build();

    return certificationStudentCreated;
  }
}

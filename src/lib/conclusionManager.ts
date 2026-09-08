import type {
    Conclusion,
    ConclusionQuestion,
  } from '../types/case'
  
  export type ConclusionResult = {
    score: number
    maxScore: number
    percentage: number
  }
  
  function calculateQuestionScore(
    question: ConclusionQuestion,
    answer: string | undefined,
  ): number {
    if (!answer) {
      return 0
    }
  
    const selectedOption = question.options.find(
      (option) => option.id === answer,
    )
  
    if (!selectedOption) {
      return 0
    }
  
    return selectedOption.correct ? 1 : 0
  }
  
  export function calculateConclusionResult(
    conclusion: Conclusion,
    answers: Record<string, string>,
  ): ConclusionResult {
    const questions = conclusion.questions
  
    const score = questions.reduce(
      (total, question) =>
        total +
        calculateQuestionScore(
          question,
          answers[question.id],
        ),
      0,
    )
  
    const maxScore = questions.length
  
    const percentage =
      maxScore === 0
        ? 0
        : Math.round((score / maxScore) * 100)
  
    return {
      score,
      maxScore,
      percentage,
    }
  }
import type { Investigation } from './case'

export type CaseResult = {
  score: number
  maxScore: number
  percentage: number
  completedAt: string
}

export type CaseSave = {
  caseId: string
  status: 'new' | 'in-progress' | 'completed'
  difficulty: 'easy' | 'normal' | 'hard'

  conclusionAnswers: Record<string, string>
  conclusionFinalStatement: string

  investigationOpportunities: number
  completedInvestigations: string[]

  investigationResults: Investigation[]

  accessedDocuments: string[]

  notebook: {
    people: string
    places: string
    timeline: string
    notes: string
  }

  result: CaseResult | null

  startedAt: string | null
  completedAt: string | null
}
import type { CaseData } from '../../types/case'
import { case01 } from './case-01/case'
import { case02 } from './case-02/case'

export const cases: CaseData[] = [
  case01,
  case02,
]

export function getCaseById(caseId: string): CaseData | undefined {
  return cases.find((caseData) => caseData.id === caseId)
}
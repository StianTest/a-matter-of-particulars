import type { CaseSave } from '../types/save'

const SAVE_KEY_PREFIX = 'a-matter-of-particulars:case:'

function getSaveKey(caseId: string) {
  return `${SAVE_KEY_PREFIX}${caseId}`
}

export function loadCaseSave(
  caseId: string,
): CaseSave | null {
  const rawSave = localStorage.getItem(getSaveKey(caseId))

  if (!rawSave) {
    return null
  }

  try {
    const parsedSave = JSON.parse(rawSave) as Partial<CaseSave>

    return {
        ...parsedSave,
        caseId,
        difficulty:
  parsedSave.difficulty ?? 'normal',
        conclusionAnswers:
          parsedSave.conclusionAnswers ?? {},
        conclusionFinalStatement:
          parsedSave.conclusionFinalStatement ?? '',
        result: parsedSave.result ?? null,
      } as CaseSave
  } catch {
    console.error(
      `Could not load save for case "${caseId}".`,
    )

    return null
  }
}

export function saveCaseProgress(
  save: CaseSave,
): void {
  localStorage.setItem(
    getSaveKey(save.caseId),
    JSON.stringify(save),
  )
}

export function deleteCaseSave(
  caseId: string,
): void {
  localStorage.removeItem(getSaveKey(caseId))
}
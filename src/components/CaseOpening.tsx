import { useState } from 'react'
import type { CaseData } from '../types/case'

type Difficulty = 'easy' | 'normal' | 'hard'

type CaseOpeningProps = {
  caseData: CaseData
  onBack: () => void
  onOpenCaseFile: (difficulty: Difficulty) => void
}

function CaseOpening({
  caseData,
  onBack,
  onOpenCaseFile,
}: CaseOpeningProps) {
  const [difficulty, setDifficulty] =
    useState<Difficulty>('normal')

  return (
    <main className="case-opening">
      <div className="case-opening__content">

        <p className="case-opening__bureau">
          The Lennox Bureau
        </p>

        <p className="case-opening__label">
          {caseData.opening.label}
        </p>

        <h1>
          {caseData.opening.title}
        </h1>

        <p className="case-opening__location">
          {caseData.opening.location}
        </p>

        <div className="case-opening__divider" />

        {caseData.opening.text.map((paragraph) => (
          <p
            key={paragraph}
            className="case-opening__text"
          >
            {paragraph}
          </p>
        ))}

        <p className="case-opening__instruction">
          {caseData.opening.instruction}
        </p>

        <section className="case-opening__difficulty">
          <p className="case-opening__difficulty-label">
            Investigation Difficulty
          </p>

          <div className="case-opening__difficulty-options">
            <button
              type="button"
              className={
                difficulty === 'easy'
                  ? 'is-selected'
                  : ''
              }
              onClick={() =>
                setDifficulty('easy')
              }
            >
              Easy
            </button>

            <button
              type="button"
              className={
                difficulty === 'normal'
                  ? 'is-selected'
                  : ''
              }
              onClick={() =>
                setDifficulty('normal')
              }
            >
              Normal
            </button>

            <button
              type="button"
              className={
                difficulty === 'hard'
                  ? 'is-selected'
                  : ''
              }
              onClick={() =>
                setDifficulty('hard')
              }
            >
              Hard
            </button>
          </div>
        </section>

        <button
          className="case-opening__button"
          onClick={() =>
            onOpenCaseFile(difficulty)
          }
        >
          Open Case File
        </button>

        <button
          className="case-opening__back"
          onClick={onBack}
        >
          Return to Bureau
        </button>

      </div>
    </main>
  )
}

export default CaseOpening
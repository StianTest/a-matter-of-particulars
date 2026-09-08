import { useEffect, useState } from 'react'
import type { Conclusion as ConclusionData } from '../types/case'
import { loadCaseSave } from '../lib/saveManager'

type ConclusionProps = {
  caseId: string
  conclusion: ConclusionData
  onSubmit: (
    answers: Record<string, string>,
    finalStatement: string,
  ) => void
}

function Conclusion({
    caseId,
    conclusion,
    onSubmit,
  }: ConclusionProps) {
  const [answers, setAnswers] = useState<
    Record<string, string>
  >({})

  const [finalStatement, setFinalStatement] =
    useState('')

  useEffect(() => {
    const savedCase = loadCaseSave(caseId)

    if (savedCase) {
      setAnswers(
        savedCase.conclusionAnswers ?? {},
      )

      setFinalStatement(
        savedCase.conclusionFinalStatement ?? '',
      )
    }
  }, [caseId])

  const handleAnswerChange = (
    questionId: string,
    optionId: string,
  ) => {
    setAnswers((current) => ({
      ...current,
      [questionId]: optionId,
    }))
  }

  const handleSubmit = () => {
    onSubmit(answers, finalStatement)
  }

  const requiredQuestions =
    conclusion.questions.filter(
      (question) => question.required !== false,
    )

  const answeredRequiredQuestions =
    requiredQuestions.filter(
      (question) => answers[question.id],
    )

  const finalStatementRequired =
    conclusion.finalStatement !== undefined &&
    conclusion.finalStatement.required !== false

  const finalStatementComplete =
    !finalStatementRequired ||
    finalStatement.trim().length > 0

  const canSubmit =
    answeredRequiredQuestions.length ===
      requiredQuestions.length &&
    finalStatementComplete

  return (
    <main className="conclusion">
      <header className="conclusion__header">
        <p className="conclusion__bureau">
          The Lennox Bureau
        </p>

        <p className="conclusion__label">
          Investigator's Conclusion
        </p>

        <h1>Conclusion</h1>

        <p className="conclusion__intro">
          You have reviewed the particulars of the case.
          Record your conclusions carefully before submitting
          your findings.
        </p>
      </header>

      <section className="conclusion__questions">
        {conclusion.questions.map(
          (question, index) => (
            <fieldset
              className="conclusion__question"
              key={question.id}
            >
              <legend>
                <span className="conclusion__question-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span>
                  {question.question}
                </span>
              </legend>

              <div className="conclusion__options">
                {question.options.map((option) => (
                  <label
                    className="conclusion__option"
                    key={option.id}
                  >
                    <input
                      type="radio"
                      name={question.id}
                      value={option.id}
                      checked={
                        answers[question.id] ===
                        option.id
                      }
                      onChange={() =>
                        handleAnswerChange(
                          question.id,
                          option.id,
                        )
                      }
                    />

                    <span>
                      {option.text}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          ),
        )}
      </section>

      {conclusion.finalStatement && (
        <section className="conclusion__statement">
          <label
            htmlFor="final-statement"
            className="conclusion__statement-label"
          >
            Final Account
          </label>

          <p className="conclusion__statement-prompt">
            {conclusion.finalStatement.prompt}
          </p>

          <textarea
            id="final-statement"
            className="conclusion__statement-input"
            value={finalStatement}
            onChange={(event) =>
              setFinalStatement(
                event.target.value,
              )
            }
            placeholder="Record your final account of the case..."
          />
        </section>
      )}

      <footer className="conclusion__footer">
        <button
          className="conclusion__submit"
          disabled={!canSubmit}
          onClick={handleSubmit}
        >
          Submit Conclusion
        </button>
      </footer>
    </main>
  )
}

export default Conclusion
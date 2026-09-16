import type { CaseData } from '../types/case'

type ResultProps = {
  caseData: CaseData
  score: number
  maxScore: number
  percentage: number
  answers: Record<string, string>
  finalStatement: string
  onBack: () => void
}

function Result({
  caseData,
  score,
  maxScore,
  percentage,
  answers,
  finalStatement,
  onBack,
}: ResultProps) {
  return (
    <main className="result">
      <header className="result__header">
        <p className="result__bureau">
          The Lennox Bureau
        </p>

        <p className="result__label">
          Case Conclusion
        </p>

        <h1>{caseData.title}</h1>

        <p className="result__case-number">
          Case No. {String(caseData.caseNumber).padStart(2, '0')}
        </p>

        <p className="result__intro">
          Your investigation has been concluded.
          The particulars of your findings are recorded
          below.
        </p>
      </header>

      <section className="result__assessment">
        <div className="result__section-heading">
          <span className="result__section-number">
            I.
          </span>

          <div>
            <p className="result__section-label">
              Investigation Assessment
            </p>

            <h2>Your Investigation</h2>
          </div>
        </div>

        <div className="result__score">
          <div>
            <span className="result__score-label">
              Investigation Score
            </span>

            <strong className="result__score-value">
              {score} / {maxScore}
            </strong>
          </div>

          <span className="result__percentage">
            {percentage}%
          </span>
        </div>
      </section>

      <section className="result__findings">
        <div className="result__section-heading">
          <span className="result__section-number">
            II.
          </span>

          <div>
            <p className="result__section-label">
              Your Findings
            </p>

            <h2>Conclusion Questions</h2>
          </div>
        </div>

        <div className="result__questions">
          {caseData.conclusion.questions.map(
            (question, index) => {
              const selectedOptionId =
                answers[question.id]

              const selectedOption =
                question.options.find(
                  (option) =>
                    option.id === selectedOptionId,
                )

              const correctOption =
                question.options.find(
                  (option) => option.correct,
                )

              const isCorrect =
                selectedOption?.correct === true

              return (
                <article
                  className={`result__question ${
                    isCorrect
                      ? 'result__question--correct'
                      : 'result__question--incorrect'
                  }`}
                  key={question.id}
                >
                  <div className="result__question-header">
                    <span className="result__question-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span
                      className={`result__question-status ${
                        isCorrect
                          ? 'result__question-status--correct'
                          : 'result__question-status--incorrect'
                      }`}
                    >
                      {isCorrect
                        ? 'Correct'
                        : 'Incorrect'}
                    </span>
                  </div>

                  <h3>{question.question}</h3>

                  <div className="result__answer">
                    <span className="result__answer-label">
                      Your Answer
                    </span>

                    <p>
                      {selectedOption?.text ??
                        'No answer recorded.'}
                    </p>
                  </div>

                  {!isCorrect &&
                    correctOption && (
                      <div className="result__answer result__answer--correct">
                        <span className="result__answer-label">
                          Correct Answer
                        </span>

                        <p>
                          {correctOption.text}
                        </p>
                      </div>
                    )}
                </article>
              )
            },
          )}
        </div>
      </section>

      {caseData.conclusion.finalStatement && (
        <section className="result__statement">
          <div className="result__section-heading">
            <span className="result__section-number">
              III.
            </span>

            <div>
              <p className="result__section-label">
                Your Final Statement
              </p>

              <h2>Final Account</h2>
            </div>
          </div>

          <div className="result__statement-box">
            <p className="result__statement-prompt">
              {caseData.conclusion.finalStatement.prompt}
            </p>

            <div className="result__statement-text">
              {finalStatement.trim() ? (
                finalStatement
              ) : (
                <em>No final statement was recorded.</em>
              )}
            </div>
          </div>
        </section>
      )}

      {caseData.conclusion.resolution && (
        <section className="result__resolution">
          <div className="result__section-heading">
            <span className="result__section-number">
              IV.
            </span>

            <div>
              <p className="result__section-label">
                What Actually Happened
              </p>

              <h2>Case Resolution</h2>
            </div>
          </div>

          <div className="result__resolution-sections">
            {caseData.conclusion.resolution.sections.map(
              (section) => (
                <article
                  className="result__resolution-section"
                  key={section.title}
                >
                  <h3>{section.title}</h3>

                  <p>{section.text}</p>
                </article>
              ),
            )}
          </div>
        </section>
      )}

      <section className="result__disposition">
        <div className="result__section-heading">
          <span className="result__section-number">
            V.
          </span>

          <div>
            <p className="result__section-label">
              Case Disposition
            </p>

            <h2>Case Closed</h2>
          </div>
        </div>

        <div className="result__disposition-box">
          <p>
            The investigation has been concluded and
            the particulars of the case have been
            entered into the records of the Lennox Bureau.
          </p>

          <span>
            Westbridge City · {caseData.year}
          </span>
        </div>
      </section>

      <footer className="result__footer">
        <button
          className="result__back"
          onClick={onBack}
        >
          ← Return to Case File
        </button>
      </footer>
    </main>
  )
}

export default Result
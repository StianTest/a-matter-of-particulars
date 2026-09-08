import type { CaseData } from '../types/case'

type CaseFilesProps = {
  cases: CaseData[]
  onOpenCase: (caseId: string) => void
  onBack: () => void
}

function CaseFiles({
  cases,
  onOpenCase,
  onBack,
}: CaseFilesProps) {
  return (
    <main className="case-files">

      <header className="case-files__header">
        <p className="case-files__bureau">
          The Lennox Bureau
        </p>

        <p className="case-files__label">
          Case Archives
        </p>

        <h1>Case Files</h1>

        <div className="case-files__rule" />
      </header>

      <section className="case-files__list">

        {cases.map((caseData) => (
          <button
            key={caseData.id}
            className="case-files__item"
            onClick={() => onOpenCase(caseData.id)}
          >
            <div className="case-files__item-number">
              Case {String(caseData.caseNumber).padStart(2, '0')}
            </div>

            <div className="case-files__item-main">
              <h2>{caseData.title}</h2>

              <p>
                {caseData.location} · {caseData.year}
              </p>
            </div>

            <div className="case-files__item-status">
              {caseData.status === 'open'
                ? 'Open Investigation'
                : 'Closed'}
            </div>

            <span className="case-files__item-arrow">
              →
            </span>
          </button>
        ))}

      </section>

      {cases.length === 0 && (
        <p className="case-files__empty">
          No case files are currently available.
        </p>
      )}

      <button
        className="case-files__back"
        onClick={onBack}
      >
        ← Return to Bureau
      </button>

    </main>
  )
}

export default CaseFiles
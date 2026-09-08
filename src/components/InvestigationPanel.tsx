import type { Investigation } from '../types/case'

type InvestigationPanelProps = {
  investigations: Investigation[]
  investigationOpportunities: number
  completedInvestigations: string[]
  onInvestigate: (investigation: Investigation) => void
}

function InvestigationPanel({
  investigations,
  investigationOpportunities,
  completedInvestigations,
  onInvestigate,
}: InvestigationPanelProps) {
    const availableInvestigations = investigations.filter(
        (investigation) => {
          if (!investigation.unlocked) {
            return false
          }
      
          if (investigation.completed) {
            return false
          }
      
          if (completedInvestigations.includes(investigation.id)) {
            return false
          }
      
          if (
            investigation.requires &&
            !investigation.requires.every((requiredId) =>
              completedInvestigations.includes(requiredId),
            )
          ) {
            return false
          }
      
          return true
        },
      )

  return (
    <section className="investigation-panel">

      <header className="investigation-panel__header">

        <p className="investigation-panel__opportunities">
          Investigation Opportunities: {investigationOpportunities}
        </p>

        <p className="investigation-panel__label">
          Investigation
        </p>

        <h2>Matters Requiring Attention</h2>

        <p className="investigation-panel__description">
          Particulars uncovered during the investigation may
          require further attention.
        </p>

      </header>

      <div className="investigation-panel__list">

        {availableInvestigations.map((investigation) => (
          <button
            key={investigation.id}
            className="investigation-panel__item"
            onClick={() => onInvestigate(investigation)}
            disabled={investigationOpportunities === 0}
          >
            <span className="investigation-panel__item-title">
              {investigation.title}
            </span>

            <span className="investigation-panel__item-description">
              {investigation.description}
            </span>

            <span className="investigation-panel__item-action">
              Investigate →
            </span>
          </button>
        ))}

      </div>

      {availableInvestigations.length === 0 && (
        <p className="investigation-panel__empty">
          No further matters currently require attention.
        </p>
      )}

    </section>
  )
}

export default InvestigationPanel
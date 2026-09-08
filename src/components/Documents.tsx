import type { CaseData } from '../types/case'

type DocumentsProps = {
  caseData: CaseData
  onOpenDocument: (documentId: string) => void
  onBack: () => void
}

function Documents({
  caseData,
  onOpenDocument,
  onBack,
}: DocumentsProps) {
  return (
    <main className="documents">

      <header className="documents__header">
        <p className="documents__bureau">
          The Lennox Bureau
        </p>

        <p className="documents__case-number">
          Case {String(caseData.caseNumber).padStart(2, '0')}
        </p>

        <h1>Documents</h1>

        <p className="documents__case-title">
          {caseData.title}
        </p>
      </header>

      <section className="documents__list">

        <div className="documents__section-heading">
          <span>Case Documents</span>
          <span>{caseData.documents.length}</span>
        </div>

        <div className="documents__items">
          {caseData.documents.map((document, index) => (
            <button
              key={document.id}
              className="documents__item"
              onClick={() => onOpenDocument(document.id)}
            >
              <span className="documents__number">
                Document {String(index + 1).padStart(2, '0')}
              </span>

              <span className="documents__title">
                {document.title}
              </span>

              <span className="documents__type">
                {document.type}
              </span>
            </button>
          ))}
        </div>

      </section>

      <button
        className="documents__back"
        onClick={onBack}
      >
        ← Back to Case File
      </button>

    </main>
  )
}

export default Documents
import { useState } from 'react'
import type { CaseData } from '../types/case'

type DocumentViewerProps = {
  caseData: CaseData
  documentId: string | null
  onBack: () => void
}

function DocumentViewer({
  caseData,
  documentId,
  onBack,
}: DocumentViewerProps) {
  const [isImageExpanded, setIsImageExpanded] = useState(false)

  const document = caseData.documents.find(
    (item) => item.id === documentId,
  )

  return (
    <main className="document-viewer">

      <button
        className="document-viewer__back"
        onClick={onBack}
      >
        ← Back to Case File
      </button>

      {document ? (
        <div className="document-viewer__stage">

          {document.format === 'document' && (
            <article className="case-document">

              <header className="case-document__header">
                <p className="case-document__bureau">
                  THE LENNOX BUREAU
                </p>

                <p className="case-document__type">
                  {document.type}
                </p>
              </header>

              <div className="case-document__rule" />

              <div className="case-document__heading">
                <h1>{document.title}</h1>

                {document.date && (
                  <p>{document.date}</p>
                )}

                {document.author && (
                  <p>From: {document.author}</p>
                )}
              </div>

              <div className="case-document__content">
  {document.content.map((block, index) => {
    if (block.type === 'heading') {
      return (
        <h2 key={index}>
          {block.text}
        </h2>
      )
    }

    if (block.type === 'subheading') {
      return (
        <h3 key={index}>
          {block.text}
        </h3>
      )
    }

    if (block.type === 'signature') {
      return (
        <p
          key={index}
          className="case-document__signature"
        >
          {block.text}
        </p>
      )
    }

    return (
      <p key={index}>
        {block.text}
      </p>
    )
  })}
</div>

            </article>
          )}

          {document.format === 'transcript' && (
            <article className="case-transcript">

              <header className="case-transcript__header">
                <p className="case-transcript__bureau">
                  THE LENNOX BUREAU
                </p>

                <p className="case-transcript__type">
                  {document.type}
                </p>
              </header>

              <div className="case-transcript__rule" />

              <div className="case-transcript__heading">
                <h1>{document.title}</h1>

                {document.date && (
                  <p>{document.date}</p>
                )}

                {document.participants && (
                  <p>
                    Participants: {document.participants.join(' · ')}
                  </p>
                )}
              </div>

              <div className="case-transcript__content">
                {document.content.map((line, index) => (
                  <div
                    key={`${line.speaker}-${index}`}
                    className="case-transcript__line"
                  >
                    <span className="case-transcript__speaker">
                      {line.speaker}
                    </span>

                    <p>
                      {line.text}
                    </p>
                  </div>
                ))}
              </div>

            </article>
          )}

          {document.format === 'image' && (
            <>
              <article className="case-image">

                <div
                  className="case-image__frame"
                  onClick={() => setIsImageExpanded(true)}
                >
                  <img
                    src={document.image}
                    alt={document.title}
                  />
                </div>

                <div className="case-image__caption">
                  <h1>{document.title}</h1>

                  {document.caption && (
                    <p>{document.caption}</p>
                  )}
                </div>

              </article>

              {isImageExpanded && (
                <div
                  className="case-image__overlay"
                  onClick={() => setIsImageExpanded(false)}
                >
                  <button
                    className="case-image__close"
                    onClick={() => setIsImageExpanded(false)}
                    aria-label="Close enlarged image"
                  >
                    ×
                  </button>

                  <img
                    className="case-image__expanded"
                    src={document.image}
                    alt={document.title}
                    onClick={(event) => event.stopPropagation()}
                  />
                </div>
              )}
            </>
          )}

        </div>
      ) : (
        <div className="document-viewer__not-found">
          <h1>Document Not Found</h1>

          <p>
            The requested document could not be found.
          </p>
        </div>
      )}

    </main>
  )
}

export default DocumentViewer
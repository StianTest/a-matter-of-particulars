import { useState } from 'react'
import Notebook from './Notebook'

type GameShellProps = {
  children: React.ReactNode
  showNotebook?: boolean
  caseId?: string
}

function GameShell({
  children,
  showNotebook = false,
  caseId,
}: GameShellProps) {
  const [isNotebookOpen, setIsNotebookOpen] = useState(false)

  return (
    <div className="game-shell">
      <div className="game-shell__frame">
        {children}

        <div
          className={`game-shell__notebook-overlay ${
            isNotebookOpen ? 'is-open' : ''
          }`}
        >
          {caseId && (
            <Notebook
              caseId={caseId}
              onBack={() => setIsNotebookOpen(false)}
            />
          )}
        </div>

        {showNotebook && caseId && (
          <button
            className="game-shell__notebook-button"
            onClick={() => setIsNotebookOpen(true)}
          >
            Notebook
          </button>
        )}
      </div>
    </div>
  )
}

export default GameShell
import { useEffect, useState } from 'react'
import {
  loadCaseSave,
  saveCaseProgress,
} from '../lib/saveManager'

type NotebookTab =
  | 'people'
  | 'places'
  | 'timeline'
  | 'notes'

type NotebookProps = {
  caseId: string
  onBack: () => void
}

function Notebook({
  caseId,
  onBack,
}: NotebookProps) {
  const [activeTab, setActiveTab] =
    useState<NotebookTab>('people')

  const [people, setPeople] = useState('')
  const [places, setPlaces] = useState('')
  const [timeline, setTimeline] = useState('')
  const [notes, setNotes] = useState('')

  useEffect(() => {
    const savedCase = loadCaseSave(caseId)

    if (savedCase) {
      setPeople(savedCase.notebook.people)
      setPlaces(savedCase.notebook.places)
      setTimeline(savedCase.notebook.timeline)
      setNotes(savedCase.notebook.notes)
    } else {
      setPeople('')
      setPlaces('')
      setTimeline('')
      setNotes('')
    }
  }, [caseId])

  const updateNotebook = (
    field: NotebookTab,
    value: string,
  ) => {
    if (field === 'people') {
      setPeople(value)
    }

    if (field === 'places') {
      setPlaces(value)
    }

    if (field === 'timeline') {
      setTimeline(value)
    }

    if (field === 'notes') {
      setNotes(value)
    }

    const existingSave = loadCaseSave(caseId)

    saveCaseProgress({
      caseId,
      status: existingSave?.status ?? 'in-progress',
      difficulty:
  existingSave?.difficulty ?? 'normal',
conclusionAnswers:
  existingSave?.conclusionAnswers ?? {},
conclusionFinalStatement:
  existingSave?.conclusionFinalStatement ?? '',
      investigationOpportunities:
        existingSave?.investigationOpportunities ?? 8,
      completedInvestigations:
        existingSave?.completedInvestigations ?? [],
      investigationResults:
        existingSave?.investigationResults ?? [],
      accessedDocuments:
        existingSave?.accessedDocuments ?? [],
      notebook: {
        people:
          field === 'people'
            ? value
            : existingSave?.notebook.people ?? people,

        places:
          field === 'places'
            ? value
            : existingSave?.notebook.places ?? places,

        timeline:
          field === 'timeline'
            ? value
            : existingSave?.notebook.timeline ?? timeline,

        notes:
          field === 'notes'
            ? value
            : existingSave?.notebook.notes ?? notes,
      },
      startedAt:
        existingSave?.startedAt ??
        new Date().toISOString(),
        result:
  existingSave?.result ?? null,
      completedAt:
        existingSave?.completedAt ?? null,
    })
  }

  return (
    <main className="notebook">
      <header className="notebook__header">
        <button
          className="notebook__back"
          onClick={onBack}
        >
          ← Close Notebook
        </button>

        <p className="notebook__bureau">
          The Lennox Bureau
        </p>

        <p className="notebook__label">
          Investigator's
        </p>

        <h1>Notebook</h1>
      </header>

      <nav className="notebook__tabs">
        <button
          className="notebook__tab"
          data-active={activeTab === 'people'}
          onClick={() => setActiveTab('people')}
        >
          People
        </button>

        <button
          className="notebook__tab"
          data-active={activeTab === 'places'}
          onClick={() => setActiveTab('places')}
        >
          Places
        </button>

        <button
          className="notebook__tab"
          data-active={activeTab === 'timeline'}
          onClick={() => setActiveTab('timeline')}
        >
          Timeline
        </button>

        <button
          className="notebook__tab"
          data-active={activeTab === 'notes'}
          onClick={() => setActiveTab('notes')}
        >
          Notes
        </button>
      </nav>

      <section className="notebook__content">
        {activeTab === 'people' && (
          <div className="notebook__notes">
            <textarea
              className="notebook__notes-input"
              value={people}
              onChange={(event) =>
                updateNotebook(
                  'people',
                  event.target.value,
                )
              }
              placeholder="Record people, names, relationships, or anything you find significant..."
              aria-label="People notes"
            />
          </div>
        )}

        {activeTab === 'places' && (
          <div className="notebook__notes">
            <textarea
              className="notebook__notes-input"
              value={places}
              onChange={(event) =>
                updateNotebook(
                  'places',
                  event.target.value,
                )
              }
              placeholder="Record places, addresses, locations, or anything you find significant..."
              aria-label="Places notes"
            />
          </div>
        )}

        {activeTab === 'timeline' && (
          <div className="notebook__notes">
            <textarea
              className="notebook__notes-input"
              value={timeline}
              onChange={(event) =>
                updateNotebook(
                  'timeline',
                  event.target.value,
                )
              }
              placeholder="Record times, events, movements, or anything you find significant..."
              aria-label="Timeline notes"
            />
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="notebook__notes">
            <textarea
              className="notebook__notes-input"
              value={notes}
              onChange={(event) =>
                updateNotebook(
                  'notes',
                  event.target.value,
                )
              }
              placeholder="Write anything you consider important..."
              aria-label="Investigation notes"
            />
          </div>
        )}
      </section>
    </main>
  )
}

export default Notebook
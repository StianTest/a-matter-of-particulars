import { useEffect, useRef, useState } from 'react'
import type { Investigation } from './types/case'
import GameShell from './components/GameShell'
import CaseOpening from './components/CaseOpening'
import CaseFile from './components/CaseFile'
import CaseFiles from './components/CaseFiles'
import DocumentViewer from './components/DocumentViewer'
import Documents from './components/Documents'
import Notebook from './components/Notebook'
import Conclusion from './components/Conclusion'
import HowToPlay from './components/HowToPlay'
import Settings from './components/Settings'
import Result from './components/Result'
import { cases, getCaseById } from './data/cases'
import { DEFAULT_CASE_ID } from './data/cases/activeCase'
import {
  loadCaseSave,
  saveCaseProgress,
  deleteCaseSave,
} from './lib/saveManager'
import {
  calculateConclusionResult,
} from './lib/conclusionManager'

function App() {
  const [activeCaseId, setActiveCaseId] =
    useState(DEFAULT_CASE_ID)

    const audioRef = useRef<HTMLAudioElement | null>(null)

    const handleToggleMusic = () => {
      const audio = audioRef.current
    
      if (!audio) return
    
      if (musicEnabled) {
        audio.pause()
        setMusicEnabled(false)
        return
      }
    
      audio.volume = musicVolume
    
      audio.play()
        .then(() => {
          setMusicEnabled(true)
        })
        .catch(() => {
          setMusicEnabled(false)
        })
    }

    const [musicEnabled, setMusicEnabled] =
  useState(false)

  const [musicVolume, setMusicVolume] =
  useState(0.5)

  const musicAutoStartedRef = useRef(false)


  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = musicVolume
    }
  }, [musicVolume])

  useEffect(() => {
    const startMusic = () => {
      const audio = audioRef.current
  
      if (!audio || musicAutoStartedRef.current) return
  
      audio.volume = musicVolume
  
      audio.play()
        .then(() => {
          musicAutoStartedRef.current = true
          setMusicEnabled(true)
        })
        .catch(() => {})
    }
  
    window.addEventListener('click', startMusic)
  
    return () => {
      window.removeEventListener('click', startMusic)
    }
  }, [musicVolume])


    const [difficulty, setDifficulty] =
  useState<'easy' | 'normal' | 'hard'>('normal')

  const [showInvestigationChoice, setShowInvestigationChoice] =
  useState(false)

    const [
      investigationOpportunities,
      setInvestigationOpportunities,
    ] = useState(0)

  const [investigationResult, setInvestigationResult] =
    useState<Investigation | null>(null)

  const [
    completedInvestigations,
    setCompletedInvestigations,
  ] = useState<string[]>([])

  const [saveLoaded, setSaveLoaded] = useState(false)

  const [showConclusionConfirmation, setShowConclusionConfirmation] =
  useState(false)

  const [caseResult, setCaseResult] =
    useState<{
      score: number
      maxScore: number
      percentage: number
    } | null>(null)

    const [screen, setScreen] = useState<
    | 'menu'
    | 'case-files'
    | 'case-opening'
    | 'case-file'
    | 'documents'
    | 'document-viewer'
    | 'notebook'
    | 'conclusion'
    | 'how-to-play'
    | 'result'
    | 'settings'
  >('menu')

  const [selectedDocumentId, setSelectedDocumentId] =
    useState<string | null>(null)

    const [accessedDocuments, setAccessedDocuments] =
  useState<string[]>([])

  const activeCase = getCaseById(activeCaseId)

  const hasActiveInvestigation =
  loadCaseSave(activeCaseId)?.status === 'in-progress'

  useEffect(() => {
    const savedCase = loadCaseSave(activeCaseId)

    if (savedCase) {
      setDifficulty(savedCase.difficulty)
      if (savedCase.result) {
        setCaseResult(savedCase.result)
      }

      setInvestigationOpportunities(
        savedCase.investigationOpportunities,
      )

      setCompletedInvestigations(
        savedCase.completedInvestigations,
      )

      if (savedCase.investigationResults.length > 0) {
        setInvestigationResult(
          savedCase.investigationResults[
            savedCase.investigationResults.length - 1
          ],
        )
      }
    } else {
      if (activeCase) {
        setInvestigationOpportunities(
          activeCase.difficulty.normal.investigationOpportunities,
        )
      }
      setCompletedInvestigations([])
      setInvestigationResult(null)
      setCaseResult(null)
      setAccessedDocuments([])
    }

    setSaveLoaded(true)
  }, [activeCaseId])


  const handleOpenDocument = (
    documentId: string,
  ) => {
    if (!accessedDocuments.includes(documentId)) {
      const newAccessedDocuments = [
        ...accessedDocuments,
        documentId,
      ]
  
      setAccessedDocuments(newAccessedDocuments)
  
      const existingSave =
        loadCaseSave(activeCaseId)
  
      saveCaseProgress({
        caseId: activeCaseId,
        status: 'in-progress',
        difficulty,
        conclusionAnswers:
          existingSave?.conclusionAnswers ?? {},
        conclusionFinalStatement:
          existingSave?.conclusionFinalStatement ?? '',
        investigationOpportunities:
          existingSave?.investigationOpportunities ??
          investigationOpportunities,
        completedInvestigations:
          existingSave?.completedInvestigations ?? [],
        investigationResults:
          existingSave?.investigationResults ?? [],
        accessedDocuments:
          newAccessedDocuments,
        notebook:
          existingSave?.notebook ?? {
            people: '',
            places: '',
            timeline: '',
            notes: '',
          },
        result:
          existingSave?.result ?? null,
        startedAt:
          existingSave?.startedAt ??
          new Date().toISOString(),
        completedAt:
          existingSave?.completedAt ?? null,
      })
    }
  
    setSelectedDocumentId(documentId)
    setScreen('document-viewer')
  }


  const handleInvestigate = (
    investigation: Investigation,
  ) => {
    console.log(
      'Investigation selected:',
      investigation,
    )

    const newCompletedInvestigations = [
      ...completedInvestigations,
      investigation.id,
    ]

    const newInvestigationOpportunities =
      Math.max(
        0,
        investigationOpportunities - 1,
      )

    setInvestigationResult(investigation)

    setCompletedInvestigations(
      newCompletedInvestigations,
    )



    setInvestigationOpportunities(
      newInvestigationOpportunities,
    )

    const existingSave =
      loadCaseSave(activeCaseId)

    saveCaseProgress({
      caseId: activeCaseId,
      status: 'in-progress',
      difficulty,
      conclusionAnswers:
  existingSave?.conclusionAnswers ?? {},
conclusionFinalStatement:
  existingSave?.conclusionFinalStatement ?? '',
      investigationOpportunities:
        newInvestigationOpportunities,
      completedInvestigations:
        newCompletedInvestigations,
      investigationResults: [
        ...(existingSave?.investigationResults ?? []),
        investigation,
      ],
      accessedDocuments:
        existingSave?.accessedDocuments ?? [],
      notebook:
        existingSave?.notebook ?? {
          people: '',
          places: '',
          timeline: '',
          notes: '',
        },
      result:
        existingSave?.result ?? null,
      startedAt:
        existingSave?.startedAt ??
        new Date().toISOString(),
      completedAt:
        existingSave?.completedAt ?? null,
    })
  }

  const startNewInvestigation = () => {
    deleteCaseSave(activeCaseId)
  
    setDifficulty('normal')
    setInvestigationOpportunities(0)
    setCompletedInvestigations([])
    setInvestigationResult(null)
    setCaseResult(null)
    setSelectedDocumentId(null)
  
    setScreen('case-opening')
  }

  useEffect(() => {
    if (screen === 'document-viewer') {
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      })
    }
  }, [screen])

  if (!activeCase) {
    return (
      <GameShell>
        <main>
          <h1>Case Not Found</h1>
        </main>
      </GameShell>
    )
  }

  if (!saveLoaded) {
    return (
      <GameShell>
        <main>
          <p>Loading case...</p>
        </main>
      </GameShell>
    )
  }

  return (
    <GameShell
    showNotebook={
      screen === 'case-file' ||
      screen === 'documents' ||
      screen === 'document-viewer' ||
      screen === 'conclusion'
    }
      caseId={activeCaseId}

    >

<audio
  ref={audioRef}
  src="/audio/jazz-slower.mp3"
  loop
/>


      {screen === 'menu' && (
        <main className="main-menu">
          <div className="main-menu__inner">
            <div className="main-menu__corner main-menu__corner--top-left" />
            <div className="main-menu__corner main-menu__corner--top-right" />
            <div className="main-menu__corner main-menu__corner--bottom-left" />
            <div className="main-menu__corner main-menu__corner--bottom-right" />

            <p className="main-menu__established">
              EST. 1903
            </p>

            <h1>The Lennox Bureau</h1>

            <p className="main-menu__subtitle">
              Private Investigations
            </p>

            <div className="main-menu__divider" />

            <div className="main-menu__title-row">
              <span className="main-menu__ornament" />

              <p className="main-menu__title">
                A Matter of Particulars
              </p>

              <span className="main-menu__ornament" />
            </div>

            <div className="main-menu__divider main-menu__divider--small" />

            <nav className="main-menu__navigation">
            <button
  className="main-menu__primary"
  onClick={() => {
    if (hasActiveInvestigation) {
      setScreen('case-file')
      return
    }

    setScreen('case-opening')
  }}
>
  {hasActiveInvestigation
    ? 'Continue Investigation'
    : 'New Case'}
</button>

{hasActiveInvestigation && (
  <button
    onClick={() => {
      startNewInvestigation()
    }}
  >
    Start New Investigation
  </button>
)}

              <button
                onClick={() =>
                  setScreen('case-files')
                }
              >
                Case Files
              </button>

              <button
                onClick={() =>
                  setScreen('how-to-play')
                }
              >
                How to Play
              </button>

              <button
  onClick={() =>
    setScreen('settings')
  }
>
  Settings
</button>
            </nav>

            <div className="main-menu__location">
              <span>Westbridge City</span>
              <span>1929</span>
            </div>
          </div>
        </main>
      )}

      {screen === 'case-files' && (
        <CaseFiles
          cases={cases}
          onOpenCase={(caseId) => {
            setActiveCaseId(caseId)
            setScreen('case-opening')
          }}
          onBack={() => setScreen('menu')}
        />
      )}

      {screen === 'case-opening' && (
        <CaseOpening
        caseData={activeCase}
        onBack={() => setScreen('menu')}
        onOpenCaseFile={(difficulty) => {
          setDifficulty(difficulty)
          const existingSave = loadCaseSave(activeCaseId)
        
          saveCaseProgress({
            caseId: activeCaseId,
            status: 'in-progress',
            difficulty,
            investigationOpportunities:
              activeCase.difficulty[difficulty]
                .investigationOpportunities,
            completedInvestigations:
              existingSave?.completedInvestigations ?? [],
            investigationResults:
              existingSave?.investigationResults ?? [],
            accessedDocuments:
              existingSave?.accessedDocuments ?? [],
            notebook:
              existingSave?.notebook ?? {
                people: '',
                places: '',
                timeline: '',
                notes: '',
              },
            conclusionAnswers:
              existingSave?.conclusionAnswers ?? {},
            conclusionFinalStatement:
              existingSave?.conclusionFinalStatement ?? '',
            result:
              existingSave?.result ?? null,
            startedAt:
              existingSave?.startedAt ??
              new Date().toISOString(),
            completedAt:
              existingSave?.completedAt ?? null,
          })
        
          setInvestigationOpportunities(
            activeCase.difficulty[difficulty]
              .investigationOpportunities,
          )
        
          setScreen('case-file')
        }}
      />
      )}

      {screen === 'case-file' && (
        <CaseFile
          caseData={activeCase}
          caseCompleted={
            loadCaseSave(activeCaseId)?.status === 'completed'
          }

          investigationOpportunities={
            investigationOpportunities
          }
          completedInvestigations={
            completedInvestigations
          }
          accessedDocuments={accessedDocuments}
          investigationResult={investigationResult}
          onOpenConclusion={() =>
            setShowConclusionConfirmation(true)
          }
          onInvestigate={handleInvestigate}
          onOpenDocuments={handleOpenDocument}
          onBack={() =>
            setScreen('case-opening')
          }
        />
      )}

      {screen === 'documents' && (
        <Documents
          caseData={activeCase}
          onOpenDocument={(documentId) => {
            setSelectedDocumentId(documentId)
            setScreen('document-viewer')
          }}
          onBack={() =>
            setScreen('case-file')
          }
        />
      )}

      {screen === 'document-viewer' && (
        <DocumentViewer
          caseData={activeCase}
          documentId={selectedDocumentId}
          onBack={() =>
            setScreen('case-file')
          }
        />
      )}

      {screen === 'notebook' && (
        <Notebook
          caseId={activeCaseId}
          onBack={() =>
            setScreen('case-file')
          }
        />
      )}

      {screen === 'conclusion' && (
        <Conclusion
        caseId={activeCaseId}
        conclusion={activeCase.conclusion}
          onSubmit={(
            answers,
            finalStatement,
          ) => {
            const conclusionResult =
              calculateConclusionResult(
                activeCase.conclusion,
                answers,
              )

            setCaseResult(
              conclusionResult,
            )

            const existingSave =
              loadCaseSave(activeCaseId)

            const completedAt =
              new Date().toISOString()

            saveCaseProgress({
              caseId: activeCaseId,
              status: 'completed',
              difficulty,
              conclusionAnswers: answers,
              conclusionFinalStatement: finalStatement,
              investigationOpportunities:
                existingSave?.investigationOpportunities ??
                activeCase.difficulty.normal.investigationOpportunities,
              completedInvestigations:
                existingSave?.completedInvestigations ??
                [],
              investigationResults:
                existingSave?.investigationResults ??
                [],
              accessedDocuments:
                existingSave?.accessedDocuments ??
                [],
              notebook:
                existingSave?.notebook ?? {
                  people: '',
                  places: '',
                  timeline: '',
                  notes: '',
                },
              result: {
                ...conclusionResult,
                completedAt,
              },
              startedAt:
                existingSave?.startedAt ??
                completedAt,
              completedAt,
            })

            console.log(
              'Conclusion submitted:',
              answers,
              finalStatement,
            )

            console.log(
              'Conclusion result:',
              conclusionResult,
            )

            setScreen('result')
          }}
        />
      )}


{showConclusionConfirmation && (
  <div className="conclusion-confirmation">
    <div className="conclusion-confirmation__content">
      <h2>End Investigation?</h2>

      <p>
        You are about to proceed to the Conclusion.
      </p>

      <p>
        Once you continue, you will no longer be able
        to return to the Case File, review documents,
        or conduct further investigations.
      </p>

      <p>
        Your Notebook will remain available.
      </p>

      <p>
        Are you certain you are ready to submit
        your findings?
      </p>

      <div className="conclusion-confirmation__actions">
        <button
          onClick={() =>
            setShowConclusionConfirmation(false)
          }
        >
          Cancel
        </button>

        <button
          onClick={() => {
            setShowConclusionConfirmation(false)
            setScreen('conclusion')
          }}
        >
          Proceed to Conclusion
        </button>
      </div>
    </div>
  </div>
)}

{showInvestigationChoice && (
  <div className="investigation-choice">
    <div className="investigation-choice__content">
      <h2>Investigation in Progress</h2>

      <p>
        You already have an active investigation for this case.
      </p>

      <p>
        Would you like to continue your current investigation
        or begin a new one?
      </p>

      <div className="investigation-choice__actions">
        <button
          onClick={() => {
            setShowInvestigationChoice(false)
            setScreen('case-file')
          }}
        >
          Continue Investigation
        </button>

        <button
         onClick={() => {
          setShowInvestigationChoice(false)
          startNewInvestigation()
        }}
        >
          Start New Investigation
        </button>
      </div>

      <button
        className="investigation-choice__cancel"
        onClick={() =>
          setShowInvestigationChoice(false)
        }
      >
        Cancel
      </button>
    </div>
  </div>
)}

{screen === 'result' && (
  <Result
    caseData={activeCase}
    score={caseResult?.score ?? 0}
    maxScore={
      caseResult?.maxScore ?? 0
    }
    percentage={
      caseResult?.percentage ?? 0
    }
    answers={
      loadCaseSave(activeCaseId)
        ?.conclusionAnswers ?? {}
    }
    finalStatement={
      loadCaseSave(activeCaseId)
        ?.conclusionFinalStatement ?? ''
    }
    onBack={() =>
      setScreen('case-file')
    }
  />
)}

      {screen === 'how-to-play' && (
        <HowToPlay
          onBack={() =>
            setScreen('menu')
          }
        />
      )}

{screen === 'settings' && (
  <Settings
    onBack={() =>
      setScreen('menu')
    }
    musicEnabled={musicEnabled}
    onToggleMusic={handleToggleMusic}
    musicVolume={musicVolume}
    onVolumeChange={setMusicVolume}
  />
)}

    </GameShell>
  )
}

export default App
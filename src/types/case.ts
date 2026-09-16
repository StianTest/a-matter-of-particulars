export type CaseDocumentBase = {
  id: string
  title: string
  type: string
  date?: string
  author?: string
  requiresInvestigation?: string
}
  
  export type DocumentBlock =
    | {
        type: 'heading'
        text: string
      }
    | {
        type: 'subheading'
        text: string
      }
    | {
        type: 'paragraph'
        text: string
      }
    | {
        type: 'signature'
        text: string
      }
  
  export type TextDocument = CaseDocumentBase & {
    format: 'document'
    content: DocumentBlock[]
  }
  
  export type TranscriptLine = {
    speaker: string
    text: string
  }
  
  export type TranscriptDocument = CaseDocumentBase & {
    format: 'transcript'
    participants?: string[]
    content: TranscriptLine[]
  }
  
  export type ImageDocument = CaseDocumentBase & {
    format: 'image'
    image: string
    caption?: string
  }
  
  export type CaseDocument =
    | TextDocument
    | TranscriptDocument
    | ImageDocument
  
  export type CaseOpening = {
    label: string
    title: string
    location: string
    text: string[]
    instruction: string
  }
  
  export type CaseDifficulty = {
    easy: {
      investigationOpportunities: number
    }
    normal: {
      investigationOpportunities: number
    }
    hard: {
      investigationOpportunities: number
    }
  }
  
  export type Investigation = {
    id: string
    title: string
    description: string
    result: string
    unlocks?: string[]
    cost?: number
    unlocked: boolean
    completed: boolean
    requires?: string[]
  }
  
  export type ConclusionOption = {
    id: string
    text: string
    correct: boolean
    explanation?: string
  }
  
  export type ConclusionQuestion = {
    id: string
    question: string
    options: ConclusionOption[]
    required?: boolean
  }
  
  export type ConclusionResolutionSection = {
    title: string
    text: string
  }
  
  export type Conclusion = {
    questions: ConclusionQuestion[]
    finalStatement?: {
      prompt: string
      required?: boolean
    }
    resolution?: {
      sections: ConclusionResolutionSection[]
    }
  }


  export type CaseSuspect = {
    id: string
    name: string
    age?: number
    occupation?: string
    description: string
    motive: string
    method?: string
    alibi?: string
    guilty: boolean
  }
  
  export type CaseTimelineEvent = {
    id: string
    time: string
    title: string
    description: string
  }
  
  export type CaseTruth = {
    murderer: string
    motive: string
    method: string
    explanation: string
  }
  
  export type InvestigationPath = {
    id: string
    title: string
    description: string
    investigations: string[]
    conclusionClues: string[]
  }
  
  export type CaseDeadEnd = {
    id: string
    title: string
    description: string
    truth: string
  }
  
  export type CaseData = {
    id: string
    caseNumber: number
    title: string
    year: number
    date: string
    location: string
    status: 'open' | 'closed'
    difficulty: CaseDifficulty
    opening: CaseOpening
    report: {
      paragraphs: string[]
    }
    documents: CaseDocument[]
    investigations: Investigation[]
    conclusion: Conclusion
  }
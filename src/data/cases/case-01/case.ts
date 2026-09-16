import type { CaseData } from '../../../types/case'

export const case01: CaseData = {
  id: 'case-01',
  caseNumber: 1,
  title: 'The Death of Edmund Cooper',
  year: 1929,
  date: 'October 15, 1929',
  location: 'Westbridge City',
  status: 'open',

  difficulty: {
    easy: {
      investigationOpportunities: 12,
    },
    normal: {
      investigationOpportunities: 10,
    },
    hard: {
      investigationOpportunities: 8,
    },
  },

  opening: {
    label: 'A New Investigation',
    title: 'The Death of Edmund Cooper',
    location: 'Westbridge City · 1929',

    text: [
      'Edmund Cooper came to the Lennox Bureau yesterday morning.',
      'He believed someone had been following him.',
      'He also believed that someone had entered his house and moved an old family photograph.',
      'This morning, Edmund Cooper was found dead.',
    ],

    instruction:
      'Louise Bennett has assigned the matter to you. Find out what happened.',
  },

  report: {
    paragraphs: [
      'Edmund Cooper, aged fifty-two, was the owner of Cooper Textiles and a respected businessman in Westbridge City.',
      'He visited the Lennox Bureau at approximately nine o’clock yesterday morning. He reported that he had noticed the same person following him on several occasions and believed that someone had entered his residence without force.',
      'Nothing appeared to have been stolen. An old family photograph in Mr. Cooper’s working room had, however, been moved from its usual position.',
      'Mr. Cooper was due to return to the bureau this morning at nine o’clock. He did not appear.',
      'The Westbridge City Police have arrested Thomas Reed, a senior employee of Cooper Textiles, in connection with Mr. Cooper’s death.',
      'The circumstances surrounding the death, and the events preceding it, contain several particulars which warrant independent investigation.',
    ],
  },

  documents: [
    {
      id: 'case-brief',
      title: 'Lennox Bureau Case Brief',
      type: 'Bureau Correspondence',
      format: 'document',
      date: 'October 15, 1929',
      author: 'Louise Bennett',

      content: [
        {
          type: 'heading',
          text: 'CASE SUMMARY',
        },
        {
          type: 'subheading',
          text: 'SUBJECT: EDMUND COOPER',
        },
        {
          type: 'paragraph',
          text:
            'Edmund Cooper, aged fifty-two, owner of Cooper Textiles, visited the Lennox Bureau yesterday morning at approximately nine o’clock.',
        },
        {
          type: 'paragraph',
          text:
            'Mr. Cooper stated that he had noticed the same person following him on several occasions. He did not identify the person as either a man or a woman.',
        },
        {
          type: 'paragraph',
          text:
            'He further stated that someone had entered his residence without apparent force. Nothing had been taken, but an old family photograph in his working room had been moved.',
        },
        {
          type: 'paragraph',
          text:
            'Mr. Cooper was uncertain of the reason for either occurrence. He was due to return to the bureau this morning at nine o’clock.',
        },
        {
          type: 'paragraph',
          text:
            'He did not return.',
        },
        {
          type: 'paragraph',
          text:
            'The Westbridge City Police have arrested Thomas Reed, a senior employee of Cooper Textiles, following a serious disagreement between Mr. Reed and Mr. Cooper on the preceding day.',
        },
        {
          type: 'paragraph',
          text:
            'The original assignment was to determine who had been following Mr. Cooper. The circumstances have now changed.',
        },
        {
          type: 'paragraph',
          text:
            'The police believe they know who killed him.',
        },
        {
          type: 'paragraph',
          text:
            'See what you can do with it.',
        },
        {
          type: 'signature',
          text:
            '— Louise Bennett\nManaging Partner\nThe Lennox Bureau',
        },
      ],
    },

    {
      id: 'police-report',
      title: 'Preliminary Police Report',
      type: 'Police Report',
      format: 'document',
      date: 'October 15, 1929',
      author: 'Inspector Hale',

      content: [
        {
          type: 'heading',
          text: 'WESTBRIDGE CITY POLICE DEPARTMENT',
        },
        {
          type: 'subheading',
          text: 'PRELIMINARY REPORT — DEATH OF EDMUND COOPER',
        },
        {
          type: 'paragraph',
          text:
            'At approximately 7:15 this morning, Edmund Cooper, aged fifty-two, was discovered deceased in the working room of his residence.',
        },
        {
          type: 'paragraph',
          text:
            'Mr. Cooper was found beside his desk. A heavy iron fire poker was located on the floor near the body. There were no immediate indications that the residence had been entered by force.',
        },
        {
          type: 'paragraph',
          text:
            'The principal suspect is Thomas Reed, senior employee of Cooper Textiles.',
        },
        {
          type: 'paragraph',
          text:
            'Mr. Reed met with Mr. Cooper at Cooper Textiles at approximately ten o’clock yesterday morning. Witnesses confirm that the meeting became heated.',
        },
        {
          type: 'paragraph',
          text:
            'It has further been established that Mr. Reed had been pursuing a proposed expansion of Cooper Textiles without Mr. Cooper’s approval. Considerable company resources appear to have been committed to preparations for the proposal.',
        },
        {
          type: 'paragraph',
          text:
            'Mr. Reed initially described these preparations as preliminary and insignificant. Documents recovered from the company indicate that substantially more work had been undertaken than Mr. Reed first admitted.',
        },
        {
          type: 'paragraph',
          text:
            'Mr. Reed had legitimate access to the Cooper premises through his position and was familiar with the business affairs of the deceased.',
        },
        {
          type: 'paragraph',
          text:
            'Taken together, the disagreement, the unauthorized expenditure, Mr. Reed’s access and his subsequent attempt to minimize the matter provide sufficient grounds for arrest pending further inquiry.',
        },
        {
          type: 'paragraph',
          text:
            'No sign of forced entry has been identified.',
        },
        {
          type: 'signature',
          text:
            'Inspector Hale\nWestbridge City Police Department',
        },
      ],
    },

    {
      id: 'post-mortem',
      title: 'Post-Mortem Examination',
      type: 'Medical Report',
      format: 'document',
      date: 'October 15, 1929',
      author: 'Dr. Walter Finch',

      content: [
        {
          type: 'heading',
          text: 'POST-MORTEM EXAMINATION',
        },
        {
          type: 'paragraph',
          text:
            'The deceased, Edmund Cooper, aged fifty-two, was examined following his death at his residence.',
        },
        {
          type: 'paragraph',
          text:
            'The principal injury is a severe wound to the left side of the head consistent with a single heavy impact from a blunt iron object.',
        },
        {
          type: 'paragraph',
          text:
            'The injury is sufficient to account for death.',
        },
        {
          type: 'paragraph',
          text:
            'There is no indication that multiple blows were required.',
        },
        {
          type: 'paragraph',
          text:
            'The exact time of death cannot be established with complete certainty. It is considered likely to have occurred sometime after ten o’clock in the evening.',
        },
        {
          type: 'signature',
          text:
            'Dr. Walter Finch\nWestbridge City Medical Examiner',
        },
      ],
    },

    {
      id: 'thomas-reed-interview',
      title: 'Interview — Thomas Reed',
      type: 'Police Interview',
      format: 'transcript',
      date: 'October 15, 1929',
      author: 'Inspector Hale',
      requiresInvestigation: 'investigate-thomas-reed',
      participants: [
        'Inspector Hale',
        'Thomas Reed',
      ],

      content: [
        {
          speaker: 'Inspector Hale',
          text:
            'You met with Mr. Cooper yesterday morning?',
        },
        {
          speaker: 'Thomas Reed',
          text:
            'Yes, sir. At approximately ten.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'The meeting concerned your proposed expansion of the company?',
        },
        {
          speaker: 'Thomas Reed',
          text:
            'It concerned business matters.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'You had been told not to pursue the expansion.',
        },
        {
          speaker: 'Thomas Reed',
          text:
            'I had been told Mr. Cooper did not want to pursue it.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'Those are rather different things.',
        },
        {
          speaker: 'Thomas Reed',
          text:
            'Perhaps.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'How much company money had you committed to the proposal?',
        },
        {
          speaker: 'Thomas Reed',
          text:
            'Very little. Preparatory expenses only.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'The records suggest otherwise.',
        },
        {
          speaker: 'Thomas Reed',
          text:
            'I did what I believed was necessary to determine whether the proposal was viable.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'And Mr. Cooper disagreed?',
        },
        {
          speaker: 'Thomas Reed',
          text:
            'He was angry.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'Did he threaten to dismiss you?',
        },
        {
          speaker: 'Thomas Reed',
          text:
            'He said he might no longer require my services.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'When did you last see Mr. Cooper?',
        },
        {
          speaker: 'Thomas Reed',
          text:
            'At the office.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'You did not see him later that evening?',
        },
        {
          speaker: 'Thomas Reed',
          text:
            'No.',
        },
      ],
    },

    {
      id: 'expansion-proposal',
      title: 'Proposed Expansion — Cooper Textiles',
      type: 'Business Document',
      format: 'document',
      date: 'October 1929',
      author: 'Thomas Reed',
      requiresInvestigation: 'investigate-thomas-reed',

      content: [
        {
          type: 'heading',
          text: 'PROPOSED EXPANSION',
        },
        {
          type: 'subheading',
          text: 'COOPER TEXTILES',
        },
        {
          type: 'paragraph',
          text:
            'Prepared by Thomas Reed for preliminary consideration.',
        },
        {
          type: 'paragraph',
          text:
            'The proposal concerns the expansion of Cooper Textiles into several new regional markets where demand for quality textile goods has recently increased.',
        },
        {
          type: 'paragraph',
          text:
            'Preliminary correspondence has been opened with prospective customers. Samples have been prepared and transport arrangements investigated.',
        },
        {
          type: 'paragraph',
          text:
            'Additional production capacity would be required should the projected orders materialize.',
        },
        {
          type: 'paragraph',
          text:
            'The preliminary expenditure already incurred includes sample production, correspondence, travel and transport inquiries.',
        },
        {
          type: 'paragraph',
          text:
            'No final commitment should be made without Mr. Cooper’s approval.',
        },
        {
          type: 'paragraph',
          text:
            'The proposal represents an opportunity to expand the company’s business considerably if the projected demand proves accurate.',
        },
        {
          type: 'signature',
          text:
            'Thomas Reed\nSenior Employee\nCooper Textiles',
        },
      ],
    },

    {
      id: 'beatrice-interview',
      title: 'Interview — Beatrice Cooper',
      type: 'Witness Statement',
      format: 'transcript',
      date: 'October 15, 1929',
      author: 'Inspector Hale',
      requiresInvestigation: 'investigate-beatrice',
      participants: [
        'Inspector Hale',
        'Beatrice Cooper',
      ],

      content: [
        {
          speaker: 'Inspector Hale',
          text:
            'You were with your husband yesterday evening?',
        },
        {
          speaker: 'Beatrice Cooper',
          text:
            'Yes. We had dinner together.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'Did anything appear unusual?',
        },
        {
          speaker: 'Beatrice Cooper',
          text:
            'No. Edmund seemed tired, but nothing more than that.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'When did you last see him?',
        },
        {
          speaker: 'Beatrice Cooper',
          text:
            'Before I went out later that evening.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'Where did you go?',
        },
        {
          speaker: 'Beatrice Cooper',
          text:
            'To see Mr. Harrington.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'Your husband’s solicitor?',
        },
        {
          speaker: 'Beatrice Cooper',
          text:
            'Yes.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'Why did you see him privately?',
        },
        {
          speaker: 'Beatrice Cooper',
          text:
            'I had found some old papers belonging to Edmund. I was concerned about what they might mean.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'What sort of papers?',
        },
        {
          speaker: 'Beatrice Cooper',
          text:
            'Old business papers. From around 1902.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'Did you tell your husband?',
        },
        {
          speaker: 'Beatrice Cooper',
          text:
            'No.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'Why not?',
        },
        {
          speaker: 'Beatrice Cooper',
          text:
            'I did not know what I had found. I wanted advice before I frightened him unnecessarily.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'Did you return home afterward?',
        },
        {
          speaker: 'Beatrice Cooper',
          text:
            'Yes. Edmund was still alive and working.',
        },
      ],
    },

    {
      id: 'margaret-interview',
      title: 'Interview — Margaret Whitmore',
      type: 'Witness Statement',
      format: 'transcript',
      date: 'October 15, 1929',
      author: 'Inspector Hale',
      requiresInvestigation: 'investigate-margaret',
      participants: [
        'Inspector Hale',
        'Margaret Whitmore',
      ],

      content: [
        {
          speaker: 'Inspector Hale',
          text:
            'You met Mr. Cooper yesterday afternoon?',
        },
        {
          speaker: 'Margaret Whitmore',
          text:
            'Yes.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'What was the purpose of the meeting?',
        },
        {
          speaker: 'Margaret Whitmore',
          text:
            'The children’s home.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'Mr. Cooper had promised financial support?',
        },
        {
          speaker: 'Margaret Whitmore',
          text:
            'He had.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'And then withdrew it?',
        },
        {
          speaker: 'Margaret Whitmore',
          text:
            'Yes.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'How did you react?',
        },
        {
          speaker: 'Margaret Whitmore',
          text:
            'I begged him to reconsider.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'Did you threaten him?',
        },
        {
          speaker: 'Margaret Whitmore',
          text:
            'No.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'Was there an argument?',
        },
        {
          speaker: 'Margaret Whitmore',
          text:
            'There was an emotional conversation. Nothing violent.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'Why was the matter so important to you?',
        },
        {
          speaker: 'Margaret Whitmore',
          text:
            'Because I grew up in an orphanage. I know what those children need.',
        },
      ],
    },

    {
      id: 'harrington-interview',
      title: 'Interview — George Harrington',
      type: 'Witness Statement',
      format: 'transcript',
      date: 'October 15, 1929',
      author: 'Inspector Hale',
      requiresInvestigation: 'investigate-harrington',
      participants: [
        'Inspector Hale',
        'George Harrington',
      ],

      content: [
        {
          speaker: 'Inspector Hale',
          text:
            'Mrs. Cooper visited you last night?',
        },
        {
          speaker: 'George Harrington',
          text:
            'She did.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'Why is there no record of the appointment in your official book?',
        },
        {
          speaker: 'George Harrington',
          text:
            'I occasionally see clients privately outside ordinary office hours.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'What did Mrs. Cooper want?',
        },
        {
          speaker: 'George Harrington',
          text:
            'Legal advice concerning some old business papers belonging to her husband.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'What papers?',
        },
        {
          speaker: 'George Harrington',
          text:
            'Documents concerning a business competitor named Alfred Bellamy.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'Did Mrs. Cooper accuse her husband of anything?',
        },
        {
          speaker: 'George Harrington',
          text:
            'No.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'Did she say she believed he had ordered Bellamy’s death?',
        },
        {
          speaker: 'George Harrington',
          text:
            'No. She asked whether her husband might have been held responsible for something that happened in 1902.',
        },
        {
          speaker: 'Inspector Hale',
          text:
            'And your advice?',
        },
        {
          speaker: 'George Harrington',
          text:
            'That the papers alone did not establish responsibility. After nearly thirty years, the legal position would be difficult to assess.',
        },
      ],
    },

    {
      id: 'harrington-private-appointment',
      title: 'Harrington’s Private Appointment Book',
      type: 'Private Record',
      format: 'document',
      date: 'October 14, 1929',
      author: 'George Harrington',
      requiresInvestigation: 'investigate-harrington',

      content: [
        {
          type: 'heading',
          text: 'PRIVATE APPOINTMENTS',
        },
        {
          type: 'paragraph',
          text:
            '8:30 p.m. — Mrs. E. Cooper',
        },
        {
          type: 'paragraph',
          text:
            'No further particulars recorded.',
        },
        {
          type: 'paragraph',
          text:
            'The appointment does not appear in the official office appointment book.',
        },
      ],
    },

    {
      id: 'harrington-letters',
      title: 'Anonymous Letters to Beatrice Cooper',
      type: 'Private Correspondence',
      format: 'document',
      date: '1929',
      author: 'Unknown',
      requiresInvestigation: 'investigate-harrington',

      content: [
        {
          type: 'heading',
          text: 'PRIVATE CORRESPONDENCE',
        },
        {
          type: 'paragraph',
          text:
            'The letters are addressed to Mrs. Beatrice Cooper and contain expressions of personal admiration and affection.',
        },
        {
          type: 'paragraph',
          text:
            'None bears a signature.',
        },
        {
          type: 'paragraph',
          text:
            'Several expressions used in the letters resemble phrases found in correspondence written by George Harrington.',
        },
        {
          type: 'paragraph',
          text:
            'The handwriting also bears similarities to entries in Harrington’s private appointment book.',
        },
        {
          type: 'paragraph',
          text:
            'Neither similarity alone would establish authorship. Taken together, however, the evidence strongly suggests that Harrington wrote the letters.',
        },
      ],
    },

    {
      id: 'family-photograph',
      title: 'The Cooper Family Photograph',
      type: 'Evidence Photograph',
      requiresInvestigation: 'investigate-photograph',
      format: 'image',
      image: '/test-document.jpg',
      caption:
        'An old family photograph recovered from Edmund Cooper’s working room. The photograph itself is undamaged. A faint mark in the dust indicates that it had recently been moved from its usual position.',
    },

    {
      id: 'beatrice-private-papers',
      title: 'Papers Found Among Edmund Cooper’s Private Records',
      type: 'Private Business Papers',
      format: 'document',
      date: '1902–1929',
      author: 'Various',
      requiresInvestigation: 'investigate-beatrice',

      content: [
        {
          type: 'heading',
          text: 'PRIVATE BUSINESS PAPERS',
        },
        {
          type: 'subheading',
          text: 'ALFRED BELLAMY',
        },
        {
          type: 'paragraph',
          text:
            'Several pieces of old correspondence concern Alfred Bellamy, an established textile businessman in Westbridge City.',
        },
        {
          type: 'paragraph',
          text:
            'The correspondence concerns competition for an important textile contract with The Grand Continental Hotel Company.',
        },
        {
          type: 'paragraph',
          text:
            'Bellamy was considered the stronger candidate for the contract due to his established position in the industry.',
        },
        {
          type: 'paragraph',
          text:
            'Bellamy died shortly before the contract was awarded to Cooper Textiles.',
        },
        {
          type: 'paragraph',
          text:
            'The papers contain no direct admission that Edmund Cooper arranged Bellamy’s death.',
        },
        {
          type: 'subheading',
          text: 'ACCOUNTING ENTRY',
        },
        {
          type: 'paragraph',
          text:
            'March 17, 1902 — J. Mercer — £250 — Miscellaneous',
        },
        {
          type: 'paragraph',
          text:
            'The entry appears in an old Cooper Textiles accounting record. No explanation accompanies the payment.',
        },
      ],
    },

    {
      id: 'police-register-james-mercer',
      title: 'Police Register — James Mercer',
      type: 'Police Register',
      format: 'document',
      date: '1902',
      author: 'Westbridge City Police',
      requiresInvestigation: 'investigate-mercer-payment',

      content: [
        {
          type: 'heading',
          text: 'POLICE REGISTER',
        },
        {
          type: 'subheading',
          text: 'JAMES MERCER',
        },
        {
          type: 'paragraph',
          text:
            'Known associate of a local criminal group commonly referred to as The Mercer Gang.',
        },
        {
          type: 'paragraph',
          text:
            'Previous associations include theft, extortion and assault.',
        },
        {
          type: 'paragraph',
          text:
            'Mercer was identified as a person of interest in the investigation into the death of Alfred Bellamy in March 1902.',
        },
        {
          type: 'paragraph',
          text:
            'No sufficient evidence was obtained to establish his responsibility for the death.',
        },
      ],
    },

    {
      id: 'bellamy-police-record',
      title: 'Police File — Alfred Bellamy',
      type: 'Police Record',
      format: 'document',
      date: 'March 1902',
      author: 'Westbridge City Police',
      requiresInvestigation: 'investigate-1902-records',

      content: [
        {
          type: 'heading',
          text: 'ALFRED BELLAMY — DEATH',
        },
        {
          type: 'paragraph',
          text:
            'Alfred Bellamy, an established textile businessman, was shot outside his office near the Westbridge waterfront.',
        },
        {
          type: 'paragraph',
          text:
            'The police suspected involvement by members of The Mercer Gang.',
        },
        {
          type: 'paragraph',
          text:
            'The investigation established no satisfactory evidence as to who ordered the killing.',
        },
        {
          type: 'paragraph',
          text:
            'Bellamy had recently been competing with Edmund Cooper for an important contract with The Grand Continental Hotel Company.',
        },
        {
          type: 'paragraph',
          text:
            'Bellamy’s death occurred shortly before the contract was awarded to Cooper Textiles.',
        },
        {
          type: 'paragraph',
          text:
            'The matter remained unresolved.',
        },
      ],
    },

    {
      id: 'henry-cooper-drowning-record',
      title: 'Record of Presumed Drowning — Henry Cooper',
      type: 'Historical Record',
      format: 'document',
      date: '1902',
      author: 'Westbridge City Authorities',
      requiresInvestigation: 'investigate-henry-cooper',

      content: [
        {
          type: 'heading',
          text: 'PRESUMED DROWNING',
        },
        {
          type: 'subheading',
          text: 'HENRY COOPER',
        },
        {
          type: 'paragraph',
          text:
            'Henry Cooper was reported missing following the death of Alfred Bellamy.',
        },
        {
          type: 'paragraph',
          text:
            'Clothing believed to belong to Cooper was recovered near the river.',
        },
        {
          type: 'paragraph',
          text:
            'No body was recovered.',
        },
        {
          type: 'paragraph',
          text:
            'Henry Cooper is therefore presumed drowned.',
        },
        {
          type: 'paragraph',
          text:
            'No further confirmed sightings were recorded after the disappearance.',
        },
      ],
    },

    {
      id: 'cooper-family-record',
      title: 'Cooper Family Record',
      type: 'Family Record',
      format: 'document',
      date: '1900–1903',
      author: 'Private Family Papers',
      requiresInvestigation: 'investigate-family-records',

      content: [
        {
          type: 'heading',
          text: 'COOPER FAMILY RECORD',
        },
        {
          type: 'paragraph',
          text:
            'The record identifies Henry Cooper as Edmund Cooper’s brother.',
        },
        {
          type: 'paragraph',
          text:
            'Henry was working in the vicinity of the Westbridge waterfront in 1902.',
        },
        {
          type: 'paragraph',
          text:
            'Following the death of Alfred Bellamy, Henry disappeared and was subsequently presumed drowned.',
        },
        {
          type: 'paragraph',
          text:
            'No later family correspondence records contact with Henry.',
        },
      ],
    },

    {
      id: 'robert-hale-boarding-record',
      title: 'Boarding House Register — Robert Hale',
      type: 'Accommodation Record',
      format: 'document',
      date: '1929',
      author: 'Private Boarding House',
      requiresInvestigation: 'investigate-robert-hale',

      content: [
        {
          type: 'heading',
          text: 'BOARDING HOUSE REGISTER',
        },
        {
          type: 'paragraph',
          text:
            'Name: Robert Hale',
        },
        {
          type: 'paragraph',
          text:
            'Occupation: Travelling Sales Representative',
        },
        {
          type: 'paragraph',
          text:
            'Purpose of stay: Business',
        },
        {
          type: 'paragraph',
          text:
            'The guest arrived in Westbridge City during 1929 in connection with his employment.',
        },
        {
          type: 'paragraph',
          text:
            'The register contains no indication that Robert Hale has previously lived in Westbridge City.',
        },
      ],
    },

    {
      id: 'robert-hale-investigation',
      title: 'Inquiry into Robert Hale',
      type: 'Investigation Record',
      format: 'document',
      date: 'October 1929',
      author: 'The Lennox Bureau',
      requiresInvestigation: 'investigate-robert-hale',

      content: [
        {
          type: 'heading',
          text: 'ROBERT HALE',
        },
        {
          type: 'paragraph',
          text:
            'Public records and old newspaper reports establish that Robert Hale has been travelling in connection with commercial work for several years.',
        },
        {
          type: 'paragraph',
          text:
            'His age is consistent with that of Henry Cooper, who disappeared in 1902.',
        },
        {
          type: 'paragraph',
          text:
            'No confirmed record places Robert Hale in Westbridge City before 1929.',
        },
        {
          type: 'paragraph',
          text:
            'A newspaper report concerning the 1902 death of Alfred Bellamy contains a detail about the waterfront that Robert Hale was able to describe without consulting the report.',
        },
        {
          type: 'paragraph',
          text:
            'The connection is not conclusive by itself.',
        },
      ],
    },

    {
      id: 'henry-robert-connection',
      title: 'The Cooper Family Connection',
      type: 'Historical Investigation',
      format: 'document',
      date: 'October 1929',
      author: 'The Lennox Bureau',
      requiresInvestigation: 'investigate-henry-robert',

      content: [
        {
          type: 'heading',
          text: 'HENRY COOPER / ROBERT HALE',
        },
        {
          type: 'paragraph',
          text:
            'Several independent details connect Henry Cooper, presumed drowned in 1902, with Robert Hale, a travelling sales representative residing in Westbridge in 1929.',
        },
        {
          type: 'paragraph',
          text:
            'Their ages correspond closely.',
        },
        {
          type: 'paragraph',
          text:
            'Robert Hale possesses knowledge of the old Cooper family and of the Westbridge waterfront that would be difficult for an unrelated visitor to acquire by chance.',
        },
        {
          type: 'paragraph',
          text:
            'The Cooper family photograph provides an additional connection. A person familiar with the photograph would recognize both Edmund Cooper and the man who was once his brother.',
        },
        {
          type: 'paragraph',
          text:
            'The combined evidence strongly indicates that Robert Hale is Henry Cooper, who survived his presumed drowning and returned to Westbridge under a new identity.',
        },
      ],
    },

    {
      id: 'cooper-residence',
      title: 'Examination of the Cooper Residence',
      type: 'Investigation Record',
      format: 'document',
      date: 'October 1929',
      author: 'The Lennox Bureau',
      requiresInvestigation: 'investigate-residence',

      content: [
        {
          type: 'heading',
          text: 'COOPER RESIDENCE',
        },
        {
          type: 'paragraph',
          text:
            'No signs of forced entry are present at the residence.',
        },
        {
          type: 'paragraph',
          text:
            'The working room appears to have been disturbed only in a limited manner.',
        },
        {
          type: 'paragraph',
          text:
            'A small drawer in the working room contains evidence that it has been searched recently.',
        },
        {
          type: 'paragraph',
          text:
            'The drawer normally contains old family papers and household documents.',
        },
        {
          type: 'paragraph',
          text:
            'A spare key to the residence was kept in the drawer. The key is missing.',
        },
        {
          type: 'paragraph',
          text:
            'The missing key provides a plausible explanation for entry without force.',
        },
      ],
    },

    {
      id: 'photograph-investigation',
      title: 'Examination of the Family Photograph',
      type: 'Investigation Record',
      format: 'document',
      date: 'October 1929',
      author: 'The Lennox Bureau',
      requiresInvestigation: 'investigate-photograph',

      content: [
        {
          type: 'heading',
          text: 'THE FAMILY PHOTOGRAPH',
        },
        {
          type: 'paragraph',
          text:
            'The photograph depicts Edmund Cooper, his wife and their children.',
        },
        {
          type: 'paragraph',
          text:
            'The photograph is old but undamaged.',
        },
        {
          type: 'paragraph',
          text:
            'A faint area in the dust on the surface beneath it shows where the frame had previously stood.',
        },
        {
          type: 'paragraph',
          text:
            'Beatrice Cooper confirms that the photograph had remained in the same position in Edmund’s working room for many years.',
        },
        {
          type: 'paragraph',
          text:
            'The photograph therefore appears to have been deliberately handled and moved by the person who entered the house.',
        },
      ],
    },

    {
      id: 'photograph-person',
      title: 'The Unknown Person in the Photograph',
      type: 'Investigation Record',
      format: 'document',
      date: 'October 1929',
      author: 'The Lennox Bureau',
      requiresInvestigation: 'investigate-photograph-person',

      content: [
        {
          type: 'heading',
          text: 'THE UNKNOWN PERSON',
        },
        {
          type: 'paragraph',
          text:
            'The original photograph contains a family member whose identity is not immediately obvious from the available family records.',
        },
        {
          type: 'paragraph',
          text:
            'Further comparison with older family records establishes that the man pictured beside the younger Edmund Cooper is Henry Cooper, Edmund’s brother.',
        },
        {
          type: 'paragraph',
          text:
            'Henry Cooper was presumed drowned in 1902.',
        },
        {
          type: 'paragraph',
          text:
            'The photograph therefore provides a possible reason why someone interested in the Cooper family would enter the house and handle it.',
        },
      ],
    },

    {
      id: 'robert-following',
      title: 'Robert Hale and Edmund Cooper',
      type: 'Investigation Record',
      format: 'document',
      date: 'October 1929',
      author: 'The Lennox Bureau',
      requiresInvestigation: 'investigate-robert-following',

      content: [
        {
          type: 'heading',
          text: 'ROBERT HALE',
        },
        {
          type: 'paragraph',
          text:
            'Robert Hale was seen in the vicinity of Edmund Cooper on several occasions before Cooper’s death.',
        },
        {
          type: 'paragraph',
          text:
            'The appearances do not resemble professional surveillance. Hale appears to have been observing Cooper out of personal curiosity.',
        },
        {
          type: 'paragraph',
          text:
            'Hale had reason to be interested in Edmund Cooper after recognizing him in Westbridge City.',
        },
        {
          type: 'paragraph',
          text:
            'The evidence indicates that Hale had been following Cooper, but does not by itself establish an intention to kill him.',
        },
      ],
    },

    {
      id: '1902-newspaper',
      title: 'Newspaper Report — Alfred Bellamy',
      type: 'Historical Newspaper',
      format: 'document',
      date: 'March 1902',
      author: 'Westbridge Chronicle',
      requiresInvestigation: 'investigate-1902-records',

      content: [
        {
          type: 'heading',
          text: 'TEXTILE MANUFACTURER SHOT AT WATERFRONT',
        },
        {
          type: 'paragraph',
          text:
            'Alfred Bellamy, a well-known textile manufacturer, was shot outside his office yesterday evening.',
        },
        {
          type: 'paragraph',
          text:
            'Police believe the killing may have been connected with criminal elements operating in the waterfront district.',
        },
        {
          type: 'paragraph',
          text:
            'Bellamy had recently been involved in negotiations concerning a major contract with The Grand Continental Hotel Company.',
        },
        {
          type: 'paragraph',
          text:
            'The contract was subsequently awarded to Cooper Textiles.',
        },
        {
          type: 'paragraph',
          text:
            'A witness was believed to have fled the scene, although no reliable account of the witness was obtained.',
        },
      ],
    },

    {
      id: 'grand-continental-correspondence',
      title: 'Grand Continental Contract Correspondence',
      type: 'Business Correspondence',
      format: 'document',
      date: '1902',
      author: 'The Grand Continental Hotel Company',
      requiresInvestigation: 'investigate-1902-records',

      content: [
        {
          type: 'heading',
          text: 'GRAND CONTINENTAL HOTEL COMPANY',
        },
        {
          type: 'paragraph',
          text:
            'Correspondence concerning the proposed supply of bed linen and related textile goods.',
        },
        {
          type: 'paragraph',
          text:
            'Alfred Bellamy was considered a strong candidate due to his established position in the textile trade.',
        },
        {
          type: 'paragraph',
          text:
            'Following Bellamy’s death, negotiations with Cooper Textiles proceeded and the contract was awarded to Edmund Cooper’s company.',
        },
        {
          type: 'paragraph',
          text:
            'The correspondence establishes the commercial importance of the contract but contains no indication of criminal involvement.',
        },
      ],
    },
  ],

  investigations: [
    {
      id: 'investigate-photograph',
      title: 'Examine the Family Photograph',
      description:
        'Investigate the old photograph Edmund mentioned during his visit to the bureau.',
      result:
        'The photograph was deliberately moved. Beatrice confirms that it had remained in the same place for years, and the dust beneath it shows its original position.',
      unlocks: [
        'investigate-photograph-person',
      ],
      cost: 1,
      unlocked: true,
      completed: false,
    },

    {
      id: 'investigate-photograph-person',
      title: 'Identify the Person in the Photograph',
      description:
        'Determine who the unidentified family member in the old photograph was.',
      result:
        'The person is Henry Cooper, Edmund’s brother, who was presumed drowned in 1902.',
      unlocks: [
        'investigate-henry-cooper',
      ],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-photograph',
      ],
    },

    {
      id: 'investigate-henry-cooper',
      title: 'Investigate Henry Cooper',
      description:
        'Look into the disappearance and presumed drowning of Edmund Cooper’s brother.',
      result:
        'Henry Cooper disappeared shortly after the murder of Alfred Bellamy in 1902. His clothing was found near the river, but no body was recovered. He was presumed drowned.',
      unlocks: [
        'investigate-robert-hale',
      ],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-photograph-person',
      ],
    },

    {
      id: 'investigate-robert-hale',
      title: 'Investigate Robert Hale',
      description:
        'Look into the background of the travelling sales representative staying in Westbridge.',
      result:
        'Robert Hale arrived in Westbridge in 1929 for work and has no confirmed local history before then. His age is consistent with Henry Cooper, and further inquiry reveals knowledge of the Cooper family and the old waterfront that is difficult to explain.',
      unlocks: [
        'investigate-henry-robert',
      ],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-henry-cooper',
      ],
    },

    {
      id: 'investigate-henry-robert',
      title: 'Establish the Identity of Robert Hale',
      description:
        'Compare the evidence concerning Henry Cooper and Robert Hale.',
      result:
        'Several independent clues establish that Robert Hale is Henry Cooper, Edmund Cooper’s brother, who survived his presumed drowning and returned to Westbridge under a new identity.',
      unlocks: [
        'investigate-robert-following',
        'investigate-1902-records',
      ],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-robert-hale',
      ],
    },

    {
      id: 'investigate-robert-following',
      title: 'Trace the Following',
      description:
        'Determine whether Robert Hale was the person Edmund believed had been following him.',
      result:
        'Robert Hale had indeed been observing Edmund repeatedly. He had recognized his brother and was trying to understand what had become of him. His initial motive was curiosity rather than murder.',
      unlocks: [],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-henry-robert',
      ],
    },

    {
      id: 'investigate-1902-records',
      title: 'Investigate the Bellamy Case',
      description:
        'Examine the old records surrounding Alfred Bellamy’s death.',
      result:
        'Alfred Bellamy was shot outside his office at the waterfront in 1902. Police suspected The Mercer Gang but never established who had ordered the killing. Bellamy had been competing with Cooper Textiles for the Grand Continental contract, which later went to Edmund Cooper.',
      unlocks: [
        'investigate-mercer-payment',
      ],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-henry-robert',
      ],
    },

    {
      id: 'investigate-mercer-payment',
      title: 'Trace the Mercer Payment',
      description:
        'Investigate the unexplained £250 payment recorded in Cooper Textiles’ old accounts.',
      result:
        'The entry dated March 17, 1902 reads: J. Mercer — £250 — Miscellaneous. A police register identifies James Mercer as a known associate of The Mercer Gang and a person of interest in the Bellamy investigation.',
      unlocks: [
        'investigate-confrontation',
      ],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-1902-records',
      ],
    },

    {
      id: 'investigate-confrontation',
      title: 'Reconstruct the Confrontation',
      description:
        'Compare the evidence surrounding Edmund’s past, Robert Hale’s identity and the events before the murder.',
      result:
        'The evidence indicates that Robert Hale, formerly Henry Cooper, confronted Edmund about Alfred Bellamy’s death. Edmund did not provide a complete confession, but his words and reactions were sufficient for Henry to understand that his suspicions were correct.',
      unlocks: [],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-mercer-payment',
      ],
    },

    {
      id: 'investigate-residence',
      title: 'Examine the Cooper Residence',
      description:
        'Investigate how someone could have entered the residence without leaving signs of forced entry.',
        result:
        'There are no signs of forced entry. A spare key normally kept in a small drawer in Edmund’s working room is missing. The drawer also appears to have been searched. Edmund had already reported that someone entered the residence before his death, making it likely that the missing key was taken during that earlier entry.',
      unlocks: [
        'investigate-drawer',
      ],
      cost: 1,
      unlocked: true,
      completed: false,
    },

    {
      id: 'investigate-drawer',
      title: 'Search the Working Room Drawer',
      description:
        'Investigate the drawer where Edmund kept old family papers and the spare house key.',
        result:
        'The drawer had been searched. The spare key is missing, and several old family papers had been disturbed. The evidence suggests that the person who entered the house earlier searched the drawer, took the spare key and looked through the family records. Because the residence showed no signs of forced entry when Edmund was killed, the same key provides a plausible means for that person to return later.',
      unlocks: [
        'investigate-family-records',
      ],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-residence',
      ],
    },

    {
      id: 'investigate-family-records',
      title: 'Examine the Old Family Records',
      description:
        'Look through the older Cooper family material disturbed in the working room.',
      result:
        'The records confirm Henry Cooper was Edmund’s brother and disappeared after Alfred Bellamy’s death in 1902. They provide another link between the family photograph and the person who had been searching the room.',
      unlocks: [],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-drawer',
      ],
    },

    {
      id: 'investigate-thomas-reed',
      title: 'Investigate Thomas Reed',
      description:
        'Look further into Thomas Reed and his dispute with Edmund Cooper.',
      result:
        'Thomas had been pursuing a company expansion without Edmund’s approval and had already spent more company money than he initially admitted. His argument with Edmund was serious enough to provide a plausible motive.',
      unlocks: [
        'investigate-expansion',
      ],
      cost: 1,
      unlocked: true,
      completed: false,
    },

    {
      id: 'investigate-expansion',
      title: 'Examine the Expansion Proposal',
      description:
        'Determine what Thomas Reed had actually been doing with company resources.',
      result:
        'Thomas had invested substantial time and company money into a proposed expansion involving new customers, transport arrangements, samples and increased production. He had acted without Edmund’s approval, but the proposal itself was a legitimate business venture.',
      unlocks: [],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-thomas-reed',
      ],
    },

    {
      id: 'investigate-beatrice',
      title: 'Investigate Beatrice Cooper',
      description:
        'Look further into Mrs. Cooper’s movements and the information she withheld from the police.',
      result:
        'Beatrice found old papers among Edmund’s private records and became concerned about what they might mean. She met George Harrington privately at 8:30 in the evening to ask for legal advice. She returned home later that night while Edmund was still alive.',
      unlocks: [
        'investigate-harrington',
        'investigate-1902-private-papers',
      ],
      cost: 1,
      unlocked: true,
      completed: false,
    },

    {
      id: 'investigate-harrington',
      title: 'Investigate George Harrington',
      description:
        'Examine the lawyer’s private meeting with Beatrice Cooper.',
      result:
        'Harrington kept the meeting out of his official appointment book. His private book records “8:30 p.m. — Mrs. E. Cooper”. His secretary confirms that he occasionally keeps private appointments outside the official book.',
      unlocks: [
        'investigate-harrington-letters',
      ],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-beatrice',
      ],
    },

    {
      id: 'investigate-harrington-letters',
      title: 'Examine the Anonymous Letters',
      description:
        'Investigate the anonymous romantic letters received by Beatrice Cooper.',
      result:
        'The letters were written by George Harrington. The conclusion rests on several small similarities in handwriting and phrasing rather than a single decisive piece of evidence. Harrington concealed the correspondence to protect his professional reputation.',
      unlocks: [],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-harrington',
      ],
    },

    {
      id: 'investigate-1902-private-papers',
      title: 'Examine Edmund’s 1902 Papers',
      description:
        'Investigate the old business papers Beatrice found among Edmund’s private records.',
      result:
        'The papers connect Edmund’s business interests to Alfred Bellamy and the Grand Continental contract. An old Cooper Textiles accounting entry records a £250 payment to “J. Mercer” on March 17, 1902.',
      unlocks: [
        'investigate-james-mercer',
      ],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-beatrice',
      ],
    },

    {
      id: 'investigate-james-mercer',
      title: 'Identify J. Mercer',
      description:
        'Determine who received the unexplained payment recorded in the old accounts.',
      result:
        'The initials correspond to James Mercer, a known associate of The Mercer Gang who was investigated in connection with Alfred Bellamy’s death.',
      unlocks: [],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-1902-private-papers',
      ],
    },

    {
      id: 'investigate-margaret',
      title: 'Investigate Margaret Whitmore',
      description:
        'Look further into Margaret Whitmore’s dispute with Edmund Cooper.',
      result:
        'Margaret had a genuine reason to be distressed. Edmund had withdrawn promised support from the charity project she cared deeply about, and she begged him to reconsider. There is no evidence of violence or a plan to harm him.',
      unlocks: [],
      cost: 1,
      unlocked: true,
      completed: false,
    },
  ],

  conclusion: {
    questions: [
      {
        id: 'who-killed-edmund',
        question:
          'Who was responsible for Edmund Cooper’s death?',
        options: [
          {
            id: 'thomas-reed',
            text: 'Thomas Reed',
            correct: false,
            explanation:
              'Thomas had a serious dispute with Edmund and concealed unauthorized business expenditure, but the evidence does not connect him to the murder.',
          },
          {
            id: 'margaret-whitmore',
            text: 'Margaret Whitmore',
            correct: false,
            explanation:
              'Margaret had an emotional dispute with Edmund, but there is no evidence that she intended him harm.',
          },
          {
            id: 'george-harrington',
            text: 'George Harrington',
            correct: false,
            explanation:
              'Harrington concealed his inappropriate correspondence with Beatrice, but this does not connect him to Edmund’s murder.',
          },
          {
            id: 'robert-hale',
            text: 'Robert Hale, formerly Henry Cooper',
            correct: true,
            explanation:
              'Robert Hale was actually Henry Cooper, Edmund’s brother. He returned to Westbridge after nearly thirty years and confronted Edmund about Alfred Bellamy’s death.',
          },
        ],
      },

      {
        id: 'murder-method',
        question:
          'How was Edmund Cooper killed?',
        options: [
          {
            id: 'pistol',
            text: 'He was shot with a pistol.',
            correct: false,
          },
          {
            id: 'knife',
            text: 'He was stabbed with a knife.',
            correct: false,
          },
          {
            id: 'fire-poker',
            text: 'He was struck once with a heavy iron fire poker.',
            correct: true,
          },
          {
            id: 'poison',
            text: 'He was poisoned earlier that evening.',
            correct: false,
          },
        ],
      },

      {
        id: 'entry-method',
        question:
          'How did the murderer enter the Cooper residence?',
        options: [
          {
            id: 'forced-window',
            text: 'Through a forced window.',
            correct: false,
          },
          {
            id: 'spare-key',
            text: 'Using the missing spare key.',
            correct: true,
          },
          {
            id: 'beatrice',
            text: 'Beatrice Cooper let him inside.',
            correct: false,
          },
          {
            id: 'servant',
            text: 'A household servant opened the door.',
            correct: false,
          },
        ],
      },

      {
        id: 'why-followed',
        question:
          'Why had Edmund believed that someone was following him?',
        options: [
          {
            id: 'police',
            text: 'Thomas Reed had hired someone to watch him.',
            correct: false,
          },
          {
            id: 'blackmail',
            text: 'Someone intended to blackmail him.',
            correct: false,
          },
          {
            id: 'henry',
            text: 'Henry Cooper had returned to Westbridge and was observing him.',
            correct: true,
          },
          {
            id: 'business',
            text: 'A competitor wanted information about Cooper Textiles.',
            correct: false,
          },
        ],
      },

      {
        id: 'why-photograph',
        question:
          'Why was the old family photograph moved?',
        options: [
          {
            id: 'theft',
            text: 'Someone intended to steal it.',
            correct: false,
          },
          {
            id: 'family',
            text:
              'Henry Cooper recognized his former family and handled it after returning to Westbridge.',
            correct: true,
          },
          {
            id: 'thomas',
            text:
              'Thomas Reed moved it to create a false clue.',
            correct: false,
          },
          {
            id: 'beatrice',
            text:
              'Beatrice moved it while searching for documents.',
            correct: false,
          },
        ],
      },

      {
        id: '1902-crime',
        question:
          'What did Henry Cooper discover about Edmund’s past?',
        options: [
          {
            id: 'tax-fraud',
            text: 'Edmund had committed tax fraud.',
            correct: false,
          },
          {
            id: 'bellamy',
            text:
              'Edmund had arranged Alfred Bellamy’s killing to improve his chance of winning the Grand Continental contract.',
            correct: true,
          },
          {
            id: 'mercers',
            text:
              'Edmund had been a member of The Mercer Gang.',
            correct: false,
          },
          {
            id: 'theft',
            text:
              'Edmund had stolen Bellamy’s company.',
            correct: false,
          },
        ],
      },

      {
        id: 'mercer-payment',
        question:
          'What significance did the £250 payment to J. Mercer have?',
        options: [
          {
            id: 'ordinary',
            text:
              'It was an ordinary payment for textile supplies.',
            correct: false,
          },
          {
            id: 'charity',
            text:
              'It was a charitable contribution.',
            correct: false,
          },
          {
            id: 'criminal',
            text:
              'It provided a link between Edmund’s private business records and James Mercer of The Mercer Gang.',
            correct: true,
          },
          {
            id: 'thomas',
            text:
              'It was connected to Thomas Reed’s 1929 expansion plan.',
            correct: false,
          },
        ],
      },

      {
        id: 'thomas-secret',
        question:
          'What was Thomas Reed actually hiding?',
        options: [
          {
            id: 'murder',
            text:
              'That he had arranged Edmund’s murder.',
            correct: false,
          },
          {
            id: 'money',
            text:
              'That he had used company money on an unauthorized expansion plan.',
            correct: true,
          },
          {
            id: 'affair',
            text:
              'That he was having an affair with Beatrice Cooper.',
            correct: false,
          },
          {
            id: 'blackmail',
            text:
              'That he had been blackmailing Edmund.',
            correct: false,
          },
        ],
      },

      {
        id: 'beatrice-secret',
        question:
          'Why did Beatrice secretly meet George Harrington?',
        options: [
          {
            id: 'affair',
            text:
              'She intended to leave Edmund for Harrington.',
            correct: false,
          },
          {
            id: 'murder',
            text:
              'She wanted legal advice about old papers suggesting Edmund may have been involved in something serious in 1902.',
            correct: true,
          },
          {
            id: 'money',
            text:
              'She wanted Harrington to hide money from the police.',
            correct: false,
          },
          {
            id: 'blackmail',
            text:
              'She wanted to arrange blackmail against Edmund.',
            correct: false,
          },
        ],
      },

      {
        id: 'police-mistake',
        question:
          'Why did the police arrest Thomas Reed?',
        options: [
          {
            id: 'evidence',
            text:
              'They had definitive physical evidence proving that Thomas killed Edmund.',
            correct: false,
          },
          {
            id: 'circumstances',
            text:
              'The combination of his serious dispute with Edmund, unauthorized spending, access and concealment made him appear to have motive and opportunity.',
            correct: true,
          },
          {
            id: 'confession',
            text:
              'Thomas confessed to the murder.',
            correct: false,
          },
          {
            id: 'witness',
            text:
              'A witness saw Thomas leave the Cooper residence after the murder.',
            correct: false,
          },
        ],
      },

      {
        id: 'final-understanding',
        question:
          'What best explains the events leading to Edmund Cooper’s death?',
        options: [
          {
            id: 'thomas-version',
            text:
              'Thomas killed Edmund after their argument about the expansion plan.',
            correct: false,
          },
          {
            id: 'random',
            text:
              'Edmund was killed by an unknown burglar who entered by chance.',
            correct: false,
          },
          {
            id: 'henry-version',
            text:
              'Henry Cooper returned under the name Robert Hale, discovered the truth about Edmund’s role in Alfred Bellamy’s death, confronted him, and killed him when the confrontation escalated.',
            correct: true,
          },
          {
            id: 'beatrice-version',
            text:
              'Beatrice and Harrington arranged Edmund’s death to conceal the old business records.',
            correct: false,
          },
        ],
      },
    ],

    finalStatement: {
      prompt:
        'In your own words, explain what happened to Edmund Cooper and why.',
      required: false,
    },

    resolution: {
      sections: [
        {
          title: 'The Murder',
          text:
  'Edmund Cooper was killed by his brother, Henry Cooper, who had returned to Westbridge City under the name Robert Hale. Henry had survived the disappearance that had led to his presumed drowning in 1902. After recognizing Edmund, he began observing him and eventually entered the Cooper residence while Edmund was away. During this earlier visit, Henry searched the working room, took the spare key and examined the old family records. He also moved the family photograph after recognizing himself and his former family in it. Henry later returned to the residence using the stolen key. He confronted Edmund about Alfred Bellamy’s death and the evidence connecting Edmund to the events of 1902. The confrontation escalated, and Henry struck Edmund once with the heavy iron fire poker. The blow was fatal.',
        },

        {
          title: 'Beatrice & Harrington',
          text:
            'Beatrice Cooper and George Harrington were concealing a genuine secret, but it was not Edmund’s murder. Beatrice had discovered old papers among Edmund’s private records and was concerned about what they might reveal. She therefore met Harrington privately to obtain legal advice. Harrington also concealed the meeting and had written private letters to Beatrice, giving the relationship an additional appearance of secrecy. Their conduct could reasonably make them appear suspicious, particularly because the meeting occurred on the evening of Edmund’s death. The evidence, however, shows that Beatrice returned home while Edmund was still alive and that the purpose of the meeting was to understand the old papers. Their secrecy was real, but it was unrelated to the murder.',
        },

        {
          title: 'Thomas Reed',
          text:
            'Thomas Reed was also hiding something real. He had pursued a major expansion of Cooper Textiles without Edmund’s approval and had already committed more company money to the proposal than he initially admitted. Edmund was angry enough to threaten Reed’s position, and Reed had legitimate access to the company and knowledge of Edmund’s affairs. These circumstances gave the police a plausible motive and opportunity. They did not, however, establish that Reed killed Edmund. His deception concerned the unauthorized expansion, not the murder.',
        },

        {
          title: 'Margaret Whitmore',
          text:
            'Margaret Whitmore had a genuine conflict with Edmund. He had withdrawn promised financial support from the children’s home she cared deeply about, and their conversation became emotional. Her personal history gave the dispute additional weight, and her anger could therefore appear significant during an investigation. There is nevertheless no evidence that Margaret planned to harm Edmund or that she was involved in his death. Her conflict with Edmund was real, but it was not a murder motive carried through to action.',
        },

        {
          title: 'The 1902 Connection',
          text:
            'The old papers discovered among Edmund’s records were not a meaningless coincidence. In 1902, Alfred Bellamy, a competing textile businessman, was killed shortly before Cooper Textiles received an important contract from The Grand Continental Hotel Company. An old Cooper Textiles accounting entry records a payment of £250 to J. Mercer. Police records identify James Mercer as a known associate of The Mercer Gang and as a person of interest in the Bellamy investigation. The records do not contain a direct confession from Edmund, but taken together they provide a strong connection between Edmund’s commercial interests, the Bellamy killing and the Mercer Gang. Henry Cooper discovered enough to understand that Edmund had been involved in Bellamy’s death, and this knowledge became the reason for their final confrontation.',
        },

        {
          title: 'The Identity of Robert Hale',
          text:
            'Robert Hale was not simply a travelling sales representative who happened to arrive in Westbridge in 1929. The evidence connects him to Henry Cooper, Edmund’s brother, who disappeared after Alfred Bellamy’s death in 1902 and was presumed drowned. Their ages correspond, Hale possessed knowledge of the Cooper family and the old Westbridge waterfront, and the family photograph provided a direct connection to Henry’s identity. The combined evidence establishes that Robert Hale was Henry Cooper, who had survived his disappearance and returned to Westbridge under another name.',
        },

        {
          title: 'The Final Reconstruction',
          text:
            'The events can therefore be reconstructed in sequence. Henry Cooper survived the disappearance that had been recorded as his presumed drowning and eventually returned to Westbridge as Robert Hale. After recognizing his brother Edmund, he began following him and later entered the Cooper residence using the missing spare key. His interest in the family photograph and the old family records was connected to his attempt to understand what had happened to his family and what Edmund had done in 1902. Meanwhile, Beatrice was secretly seeking legal advice about the same old records, Harrington was concealing his personal relationship with her, Thomas Reed was concealing his unauthorized business expansion, and Margaret was involved in a genuine dispute with Edmund. All of these facts were true, but none of them made those people responsible for the murder. Henry was the person whose hidden identity connected the past to Edmund’s death. After confronting Edmund about Alfred Bellamy’s killing, Henry struck him once with the fire poker. Edmund died from the blow, and the circumstances initially caused the police to arrest Thomas Reed. The investigation ultimately revealed that the most obvious suspects had been hiding real secrets for entirely different reasons.',
        },
      ],
    },
  },
}
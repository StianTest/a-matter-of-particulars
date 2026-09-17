import type { CaseData } from '../../../types/case'

export const case02: CaseData = {
  id: 'case-02',
  caseNumber: 2,
  title: 'The Disappearance of Eleanor Hartley',
  year: 1929,
  date: 'October 24, 1929',
  location: 'Westbridge City',
  status: 'open',

  difficulty: {
    easy: {
      investigationOpportunities: 14,
    },
    normal: {
      investigationOpportunities: 12,
    },
    hard: {
      investigationOpportunities: 10,
    },
  },

  opening: {
    label: 'A New Investigation',
    title: 'The Disappearance of Eleanor Hartley',
    location: 'Westbridge City · 1929',

    text: [
      'Walter Hartley and his wife, Marion, came to the Lennox Bureau regarding Walter’s daughter, Eleanor Victoria Hartley.',
      'Eleanor has been missing for approximately a week.',
      'Her father believes she may have left home voluntarily, although she has not contacted the family or returned to work.',
      'The circumstances are not as straightforward as they first appear.',
    ],

    instruction:
      'Louise Bennett has assigned the matter to you. Find Eleanor Hartley and determine what happened to her.',
  },

  report: {
    paragraphs: [
      'Eleanor Victoria Hartley, a young woman living with her father Walter Hartley and her stepmother Marion Hartley, has been absent from the family residence for approximately one week.',
      'Walter and Marion state that Eleanor had spoken for some time about becoming independent and moving away. They describe Eleanor’s relationship with her father as difficult and believe she may have decided to leave voluntarily.',
      'They further state that Eleanor has not contacted them since leaving and has not appeared at her place of employment or formally resigned from her position.',
      'Walter’s sister, Cecilia Hartley, died recently. Cecilia had been particularly close to Eleanor and had remained an important figure in her life after Eleanor’s mother died.',
      'Cecilia’s estate includes the house occupied by the Hartley family and a substantial sum of money. An older will is understood to leave the estate to Walter Hartley.',
      'Walter and Marion have asked the Lennox Bureau to locate Eleanor. Their account contains several genuine circumstances, but it remains unclear whether Eleanor left the residence voluntarily or whether something happened before her disappearance.',
    ],
  },

  documents: [
    {
      id: 'case-brief',
      title: 'Lennox Bureau Case Brief',
      type: 'Bureau Correspondence',
      format: 'document',
      date: 'October 1929',
      author: 'Louise Bennett',

      content: [
        {
          type: 'heading',
          text: 'CASE SUMMARY',
        },
        {
          type: 'subheading',
          text: 'SUBJECT: ELEANOR VICTORIA HARTLEY',
        },
        {
          type: 'paragraph',
          text:
            'Walter Hartley and his wife, Marion Hartley, visited the Lennox Bureau concerning Walter’s daughter, Eleanor Victoria Hartley.',
        },
        {
          type: 'paragraph',
          text:
            'Eleanor has been absent from the family residence for approximately one week.',
        },
        {
          type: 'paragraph',
          text:
            'Walter states that Eleanor had discussed moving away and becoming independent. He describes their relationship as difficult and believes she may have left voluntarily.',
        },
        {
          type: 'paragraph',
          text:
            'Eleanor has not contacted the family. She has also not returned to work or formally resigned from her position.',
        },
        {
          type: 'paragraph',
          text:
            'Walter’s sister, Cecilia Hartley, died recently. Cecilia was particularly close to Eleanor and had been an important figure in her life.',
        },
        {
          type: 'paragraph',
          text:
            'The family has asked us to determine Eleanor’s whereabouts and establish whether she left voluntarily.',
        },
        {
          type: 'paragraph',
          text:
            'The explanation offered by the family is plausible in several respects. It should nevertheless be examined rather than accepted at face value.',
        },
        {
          type: 'signature',
          text:
            '— Louise Bennett\nManaging Partner\nThe Lennox Bureau',
        },
      ],
    },

    {
      id: 'walter-marion-statement',
      title: 'Interview — Walter and Marion Hartley',
      type: 'Client Statement',
      format: 'transcript',
      date: 'October 1929',
      author: 'The Lennox Bureau',
      requiresInvestigation: 'investigate-walter-marion',
      participants: [
        'Walter Hartley',
        'Marion Hartley',
      ],

      content: [
        {
          speaker: 'Walter Hartley',
          text:
            'Eleanor had spoken for some time about wanting to leave home. She wanted to live independently.',
        },
        {
          speaker: 'Investigator',
          text:
            'How was your relationship with her?',
        },
        {
          speaker: 'Walter Hartley',
          text:
            'Difficult. We disagreed often. She believed I was too controlling.',
        },
        {
          speaker: 'Investigator',
          text:
            'When did you last see Eleanor?',
        },
        {
          speaker: 'Walter Hartley',
          text:
            'About a week ago.',
        },
        {
          speaker: 'Investigator',
          text:
            'And you believe she left voluntarily?',
        },
        {
          speaker: 'Walter Hartley',
          text:
            'I believe she wanted to leave. I do not know where she went.',
        },
        {
          speaker: 'Investigator',
          text:
            'Has she contacted either of you since then?',
        },
        {
          speaker: 'Marion Hartley',
          text:
            'No.',
        },
        {
          speaker: 'Investigator',
          text:
            'Has she resigned from her employment?',
        },
        {
          speaker: 'Walter Hartley',
          text:
            'Not to our knowledge.',
        },
        {
          speaker: 'Investigator',
          text:
            'Why did you wait approximately a week before asking the bureau to find her?',
        },
        {
          speaker: 'Walter Hartley',
          text:
            'Because we believed she had simply gone somewhere and would contact us when she was ready.',
        },
        {
          speaker: 'Investigator',
          text:
            'Did Eleanor have any reason to leave the house immediately?',
        },
        {
          speaker: 'Walter Hartley',
          text:
            'Nothing unusual. She simply wanted independence.',
        },
        {
          speaker: 'Investigator',
          text:
            'What about Cecilia Hartley’s recent death?',
        },
        {
          speaker: 'Walter Hartley',
          text:
            'It was difficult for Eleanor. Cecilia was very close to her.',
        },
        {
          speaker: 'Investigator',
          text:
            'Did Cecilia leave a will?',
        },
        {
          speaker: 'Walter Hartley',
          text:
            'There is an older will. I understand that it leaves the estate to me.',
        },
        {
          speaker: 'Investigator',
          text:
            'Is there any newer will?',
        },
        {
          speaker: 'Walter Hartley',
          text:
            'Not that I know of.',
        },
        {
          speaker: 'Marion Hartley',
          text:
            'Cecilia never discussed such a thing with us.',
        },
        {
          speaker: 'Investigator',
          text:
            'Did Eleanor say anything about inheriting from Cecilia?',
        },
        {
          speaker: 'Walter Hartley',
          text:
            'She said Cecilia had told her she would inherit. I did not believe there was a new will to support it.',
        },
        {
          speaker: 'Investigator',
          text:
            'Did you tell anyone else about that conversation?',
        },
        {
          speaker: 'Walter Hartley',
          text:
            'No.',
        },
      ],
    },

    {
      id: 'eleanor-room',
      title: 'Examination of Eleanor Hartley’s Room',
      type: 'Investigation Record',
      format: 'document',
      date: 'October 1929',
      author: 'The Lennox Bureau',
      requiresInvestigation: 'investigate-eleanor-room',

      content: [
        {
          type: 'heading',
          text: 'ELEANOR HARTLEY — BEDROOM',
        },
        {
          type: 'paragraph',
          text:
            'The room appears at first to support the Hartleys’ account that Eleanor intended to leave.',
        },
        {
          type: 'paragraph',
          text:
            'A suitcase is missing, and several items of clothing are no longer present.',
        },
        {
          type: 'paragraph',
          text:
            'There is no obvious sign of a struggle or disturbance.',
        },
        {
          type: 'paragraph',
          text:
            'A photograph of Eleanor as a child with her deceased mother lies loose inside a drawer. It is a personal item Eleanor might reasonably have taken with her if she had left voluntarily.',
        },
        {
          type: 'paragraph',
          text:
            'The fact that the photograph remains behind is difficult to reconcile with the idea of a carefully planned departure.',
        },
        {
          type: 'paragraph',
          text:
            'Among Eleanor’s remaining personal papers is a railway booking receipt in her name for travel to Bellford.',
        },
      ],
    },

    {
      
        id: 'eleanor-photograph',
        title: 'Photograph of Eleanor and Her Mother',
        type: 'Personal Photograph',
        format: 'image',
        date: 'Approximately 1910s',
        author: 'Private Family Collection',
        requiresInvestigation: 'investigate-photograph',
        image: '/cases/case-02/eleanor-photograph.jpg',
        content: [
          {
            type: 'heading',
            text: 'FAMILY PHOTOGRAPH',
          },
          {
            type: 'paragraph',
            text: 'The photograph shows Eleanor Hartley as a young child beside her mother.',
          },
          {
            type: 'paragraph',
            text: 'The image is a plainly personal family photograph and appears to have been kept among Eleanor’s belongings for many years.',
          },
          {
            type: 'paragraph',
            text: 'There is no indication that the photograph was deliberately left behind as a message or clue.',
          },
          {
            type: 'paragraph',
            text: 'Its significance lies in the fact that Eleanor appears to have left behind something she would have had a natural reason to take if she had voluntarily departed.',
          },
        ],
      },
    

      {
        id: 'bellford-booking-receipt',
        title: 'Railway Booking Receipt — Bellford',
        type: 'Railway Record',
        format: 'image',
        date: 'October 1929',
        author: 'The Crown Railway Company',
        requiresInvestigation: 'investigate-booking-receipt',
        image: '/cases/case-02/bellford-booking-receipt.jpg',
        content: [
          {
            type: 'heading',
            text: 'THE CROWN RAILWAY COMPANY',
          },
          {
            type: 'subheading',
            text: 'BOOKING RECEIPT',
          },
          {
            type: 'paragraph',
            text: 'Passenger: Eleanor Victoria Hartley',
          },
          {
            type: 'paragraph',
            text: 'Journey: Westbridge City to Bellford',
          },
          {
            type: 'paragraph',
            text: 'Reservation: Carriage B, Seat 12',
          },
          {
            type: 'paragraph',
            text: 'The receipt confirms that a reservation was made in Eleanor Hartley’s name. It does not establish that the journey was actually made.',
          },
          {
            type: 'paragraph',
            text: 'The corresponding travel ticket is not among Eleanor’s remaining papers.',
          },
        ],
      },

    {
      id: 'crown-railway-record',
      title: 'Crown Railway Company — Booking Record',
      type: 'Railway Record',
      format: 'document',
      date: 'October 1929',
      author: 'The Crown Railway Company',
      requiresInvestigation: 'investigate-railway-company',

      content: [
        {
          type: 'heading',
          text: 'BOOKING RECORD — WESTBRIDGE CITY TO BELLFORD',
        },
        {
          type: 'paragraph',
          text:
            'The reservation for Carriage B, Seat 12 was entered in the name of Eleanor Victoria Hartley.',
        },
        {
          type: 'paragraph',
          text:
            'The seat was never recorded as occupied and the reservation was not converted into a completed journey.',
        },
        {
          type: 'paragraph',
          text:
            'The railway record therefore establishes that the reservation existed but not that Eleanor travelled to Bellford.',
        },
      ],
    },

    {
      id: 'bellford-station-statement',
      title: 'Statement — Bellford Station Attendant',
      type: 'Witness Statement',
      format: 'transcript',
      date: 'October 1929',
      author: 'The Lennox Bureau',
      requiresInvestigation: 'investigate-station-attendant',
      participants: [
        'Station Attendant',
        'Investigator',
      ],

      content: [
        {
          speaker: 'Investigator',
          text:
            'Do you remember the woman who made the reservation for Carriage B, Seat 12?',
        },
        {
          speaker: 'Station Attendant',
          text:
            'I remember someone making the booking, yes. I cannot swear to her identity.',
        },
        {
          speaker: 'Investigator',
          text:
            'Was she Eleanor Hartley?',
        },
        {
          speaker: 'Station Attendant',
          text:
            'I could not say. She was a woman of about fifty, not a young woman.',
        },
        {
          speaker: 'Investigator',
          text:
            'Anything else you remember?',
        },
        {
          speaker: 'Station Attendant',
          text:
            'She wore dark glasses and kept a scarf or shawl pulled around her face even inside the station. She seemed anxious about being noticed.',
        },
        {
          speaker: 'Investigator',
          text:
            'Could you identify her if you saw her again?',
        },
        {
          speaker: 'Station Attendant',
          text:
            'Not with certainty. I remember the general appearance, but not enough to swear to the woman’s identity.',
        },
        {
          speaker: 'Investigator',
          text:
            'Does the description resemble Marion Hartley?',
        },
        {
          speaker: 'Station Attendant',
          text:
            'It could. But I would not identify her from this alone.',
        },
      ],
    },

    {
      id: 'employer-statement',
      title: 'Interview — Eleanor’s Employer',
      type: 'Witness Statement',
      format: 'transcript',
      date: 'October 1929',
      author: 'The Lennox Bureau',
      requiresInvestigation: 'investigate-employer',
      participants: [
        'Eleanor’s Employer',
        'Investigator',
      ],

      content: [
        {
          speaker: 'Investigator',
          text:
            'How was Eleanor Hartley behaving at work shortly before she disappeared?',
        },
        {
          speaker: 'Eleanor’s Employer',
          text:
            'Normally. She performed her work as usual.',
        },
        {
          speaker: 'Investigator',
          text:
            'Did she say she intended to resign?',
        },
        {
          speaker: 'Eleanor’s Employer',
          text:
            'No.',
        },
        {
          speaker: 'Investigator',
          text:
            'Did she mention leaving Westbridge?',
        },
        {
          speaker: 'Eleanor’s Employer',
          text:
            'Not to me. I knew nothing about her private plans.',
        },
        {
          speaker: 'Investigator',
          text:
            'Was there anything unusual about her final days at work?',
        },
        {
          speaker: 'Eleanor’s Employer',
          text:
            'Nothing that I noticed.',
        },
      ],
    },

    {
      id: 'maggie-interview',
      title: 'Interview — Margaret “Maggie” Turner',
      type: 'Witness Statement',
      format: 'transcript',
      date: 'October 1929',
      author: 'The Lennox Bureau',
      requiresInvestigation: 'investigate-maggie',
      participants: [
        'Investigator',
        'Margaret “Maggie” Turner',
      ],

      content: [
        {
          speaker: 'Investigator',
          text:
            'How well did you know Eleanor Hartley?',
        },
        {
          speaker: 'Maggie Turner',
          text:
            'We were good friends. She was quite open with me about how difficult things were with her father.',
        },
        {
          speaker: 'Investigator',
          text:
            'Did she ever talk about leaving home?',
        },
        {
          speaker: 'Maggie Turner',
          text:
            'Yes. She had talked about moving away and becoming independent.',
        },
        {
          speaker: 'Investigator',
          text:
            'Did she mention anywhere in particular?',
        },
        {
          speaker: 'Maggie Turner',
          text:
            'Bellford. She once said it seemed like a nice city. She never told me she intended to go there.',
        },
        {
          speaker: 'Investigator',
          text:
            'When did you last speak with her?',
        },
        {
          speaker: 'Maggie Turner',
          text:
            'Our last conversation was completely ordinary. She did not say goodbye or suggest that she was leaving immediately.',
        },
        {
          speaker: 'Investigator',
          text:
            'Did Eleanor have anyone else in her life whom her family might not know about?',
        },
        {
          speaker: 'Maggie Turner',
          text:
            'There was George Ellis.',
        },
        {
          speaker: 'Investigator',
          text:
            'Who is George Ellis?',
        },
        {
          speaker: 'Maggie Turner',
          text:
            'A man Eleanor had been seeing privately. Her family did not know about him.',
        },
      ],
    },

    {
      id: 'george-interview',
      title: 'Interview — George Ellis',
      type: 'Witness Statement',
      format: 'transcript',
      date: 'October 1929',
      author: 'The Lennox Bureau',
      requiresInvestigation: 'investigate-george',
      participants: [
        'Investigator',
        'George Ellis',
      ],

      content: [
        {
          speaker: 'Investigator',
          text:
            'When did you last see Eleanor Hartley?',
        },
        {
          speaker: 'George Ellis',
          text:
            'It has been a long time.',
        },
        {
          speaker: 'Investigator',
          text:
            'How long?',
        },
        {
          speaker: 'George Ellis',
          text:
            'I cannot remember exactly.',
        },
        {
          speaker: 'Investigator',
          text:
            'Were you in a relationship with Eleanor?',
        },
        {
          speaker: 'George Ellis',
          text:
            'No. Not in the way you mean.',
        },
        {
          speaker: 'Investigator',
          text:
            'Did you know that her family was looking for her?',
        },
        {
          speaker: 'George Ellis',
          text:
            'I heard that she was missing.',
        },
        {
          speaker: 'Investigator',
          text:
            'And you have not seen her recently?',
        },
        {
          speaker: 'George Ellis',
          text:
            'No.',
        },
      ],
    },

    {
      id: 'george-neighbor-statement',
      title: 'Statement — Neighbor of George Ellis',
      type: 'Witness Statement',
      format: 'transcript',
      date: 'October 1929',
      author: 'The Lennox Bureau',
      requiresInvestigation: 'investigate-george-neighbor',
      participants: [
        'Investigator',
        'Neighbor',
      ],

      content: [
        {
          speaker: 'Investigator',
          text:
            'Do you know George Ellis?',
        },
        {
          speaker: 'Neighbor',
          text:
            'I know him by sight. We live nearby.',
        },
        {
          speaker: 'Investigator',
          text:
            'Have you seen a young woman visiting him recently?',
        },
        {
          speaker: 'Neighbor',
          text:
            'Yes. A young woman visited him shortly before the disappearance.',
        },
        {
          speaker: 'Investigator',
          text:
            'Are you certain it was Eleanor Hartley?',
        },
        {
          speaker: 'Neighbor',
          text:
            'I had seen her there before. I am confident it was the same woman.',
        },
        {
          speaker: 'Investigator',
          text:
            'Did she appear frightened or distressed?',
        },
        {
          speaker: 'Neighbor',
          text:
            'No. Nothing about the visit struck me as unusual.',
        },
      ],
    },

    {
      id: 'george-confrontation',
      title: 'Second Interview — George Ellis',
      type: 'Interview Record',
      format: 'transcript',
      date: 'October 1929',
      author: 'The Lennox Bureau',
      requiresInvestigation: 'investigate-confront-george',
      participants: [
        'Investigator',
        'George Ellis',
      ],

      content: [
        {
          speaker: 'Investigator',
          text:
            'A neighbor remembers Eleanor visiting you shortly before she disappeared.',
        },
        {
          speaker: 'George Ellis',
          text:
            'Then I suppose there is little point in denying it.',
        },
        {
          speaker: 'Investigator',
          text:
            'Why did you lie?',
        },
        {
          speaker: 'George Ellis',
          text:
            'Because Eleanor’s family did not know about us, and I did not want them to know.',
        },
        {
          speaker: 'Investigator',
          text:
            'You and Eleanor were in a relationship?',
        },
        {
          speaker: 'George Ellis',
          text:
            'Yes.',
        },
        {
          speaker: 'Investigator',
          text:
            'Were you planning to leave together?',
        },
        {
          speaker: 'George Ellis',
          text:
            'We planned to live together. Eleanor first needed to get away from her family.',
        },
        {
          speaker: 'Investigator',
          text:
            'When did you last see her?',
        },
        {
          speaker: 'George Ellis',
          text:
            'Before she disappeared. I have not seen her since.',
        },
        {
          speaker: 'Investigator',
          text:
            'Where is she now?',
        },
        {
          speaker: 'George Ellis',
          text:
            'I do not know.',
        },
        {
          speaker: 'Investigator',
          text:
            'Did you help her disappear?',
        },
        {
          speaker: 'George Ellis',
          text:
            'No. I did not. I have been afraid of what her family might do if they discovered our relationship.',
        },
      ],
    },

    {
      id: 'previous-will',
      title: 'Cecilia Hartley’s Previous Will',
      type: 'Legal Document',
      format: 'document',
      date: 'Earlier Will',
      author: 'Reginald Clarke',
      requiresInvestigation: 'investigate-old-will',

      content: [
        {
          type: 'heading',
          text: 'LAST WILL AND TESTAMENT OF CECILIA HARTLEY',
        },
        {
          type: 'paragraph',
          text:
            'The will names Walter Hartley as the principal beneficiary of Cecilia Hartley’s estate.',
        },
        {
          type: 'paragraph',
          text:
            'The estate includes Cecilia’s property and financial assets.',
        },
        {
          type: 'paragraph',
          text:
            'This document is the most recent will presently known to the family.',
        },
      ],
    },

    {
      id: 'clarke-interview',
      title: 'Interview — Reginald Clarke',
      type: 'Legal Interview',
      format: 'transcript',
      date: 'October 1929',
      author: 'The Lennox Bureau',
      requiresInvestigation: 'investigate-clarke',
      participants: [
        'Investigator',
        'Reginald Clarke',
      ],

      content: [
        {
          speaker: 'Investigator',
          text:
            'You handled Cecilia Hartley’s previous will?',
        },
        {
          speaker: 'Reginald Clarke',
          text:
            'Yes.',
        },
        {
          speaker: 'Investigator',
          text:
            'Did Cecilia ever tell you that she intended to change it?',
        },
        {
          speaker: 'Reginald Clarke',
          text:
            'Yes. She contacted me because she wanted to make a new will.',
        },
        {
          speaker: 'Investigator',
          text:
            'Did you prepare the new will?',
        },
        {
          speaker: 'Reginald Clarke',
          text:
            'No. I was told that she wished to change her arrangements, but I did not receive or witness the new will.',
        },
        {
          speaker: 'Investigator',
          text:
            'Did Cecilia tell you who she intended to benefit?',
        },
        {
          speaker: 'Reginald Clarke',
          text:
            'No. I cannot tell you what the new will contained.',
        },
        {
          speaker: 'Investigator',
          text:
            'Do you know where she kept it?',
        },
        {
          speaker: 'Reginald Clarke',
          text:
            'No.',
        },
      ],
    },

    {
      id: 'estate-papers',
      title: 'Cecilia Hartley — Estate Papers',
      type: 'Estate Records',
      format: 'document',
      date: '1929',
      author: 'Various',
      requiresInvestigation: 'investigate-estate-papers',

      content: [
        {
          type: 'heading',
          text: 'CECILIA HARTLEY — ESTATE PAPERS',
        },
        {
          type: 'paragraph',
          text:
            'The ordinary estate papers confirm that Cecilia Hartley owned the property occupied by Walter and Marion Hartley, together with other financial assets. Cecilia herself lived at a different house.',
        },
        {
          type: 'paragraph',
          text:
            'The papers contain the previous will but no newer will.',
        },
        {
          type: 'paragraph',
          text:
            'There is no indication in the ordinary estate papers of where Cecilia may have kept a later testamentary document.',
        },
      ],
    },

    {
      id: 'personal-belongings',
      title: 'Cecilia Hartley — Personal Belongings',
      type: 'Personal Records',
      format: 'document',
      date: '1929',
      author: 'The Lennox Bureau',
      requiresInvestigation: 'investigate-personal-belongings',

      content: [
        {
          type: 'heading',
          text: 'CECILIA HARTLEY — PERSONAL BELONGINGS',
        },
        {
          type: 'paragraph',
          text:
            'A review of Cecilia Hartley’s personal belongings reveals ordinary correspondence, household papers and several financial receipts.',
        },
        {
          type: 'paragraph',
          text:
            'Among the receipts is a bank record showing that Cecilia maintained a safe-deposit box.',
        },
        {
          type: 'paragraph',
          text:
            'The record establishes the existence of the box but does not state what it contains.',
        },
      ],
    },

    {
      id: 'safe-deposit-box',
      title: 'Bank Safe-Deposit Box Record',
      type: 'Bank Record',
      format: 'document',
      date: '1929',
      author: 'Private Bank',
      requiresInvestigation: 'investigate-safe-deposit-box',

      content: [
        {
          type: 'heading',
          text: 'SAFE-DEPOSIT BOX — CECILIA HARTLEY',
        },
        {
          type: 'paragraph',
          text:
            'The bank confirms that Cecilia Hartley maintained a private safe-deposit box and that the box remained registered to her at the time of her death.',
        },
        {
          type: 'paragraph',
          text:
            'The contents include a sealed legal document identified as a will executed after the previous will known to the family.',
        },
        {
          type: 'paragraph',
          text:
            'The document is released for examination as part of the estate inquiry.',
        },
      ],
    },

    {
      id: 'new-will',
      title: 'Cecilia Hartley’s New Will',
      type: 'Legal Document',
      format: 'document',
      date: '1929',
      author: 'Cecilia Hartley',
      requiresInvestigation: 'investigate-new-will',

      content: [
        {
          type: 'heading',
          text: 'LAST WILL AND TESTAMENT OF CECILIA HARTLEY',
        },
        {
          type: 'paragraph',
          text:
            'This will replaces Cecilia Hartley’s earlier testamentary arrangements.',
        },
        {
          type: 'paragraph',
          text:
            'Cecilia leaves the property occupied by Walter and Marion Hartley, together with her remaining financial estate, to Eleanor Victoria Hartley.',
        },
        {
          type: 'paragraph',
          text:
            'The document therefore makes Eleanor the principal beneficiary of the estate rather than Walter Hartley.',
        },
      ],
    },

    {
      id: 'walter-finances',
      title: 'Walter Hartley — Financial Position',
      type: 'Financial Record',
      format: 'document',
      date: '1929',
      author: 'The Lennox Bureau',
      requiresInvestigation: 'investigate-walter-finances',

      content: [
        {
          type: 'heading',
          text: 'WALTER HARTLEY — FINANCIAL POSITION',
        },
        {
          type: 'paragraph',
          text:
            'An examination of Walter Hartley’s financial affairs shows significant personal debts and outstanding obligations.',
        },
        {
          type: 'paragraph',
          text:
            'The inheritance from Cecilia Hartley would have provided Walter with substantial funds and control of the property in which he and Marion lived.',
        },
        {
          type: 'paragraph',
          text:
            'The previous will therefore represented a significant financial benefit to Walter. The later will, by leaving the estate to Eleanor, removes that expected benefit.',
        },
      ],
    },

    {
      id: 'hartley-house-search',
      title: 'Final Examination of the Hartley Residence',
      type: 'Investigation Record',
      format: 'document',
      date: 'October 1929',
      author: 'The Lennox Bureau',
      requiresInvestigation: 'investigate-house',

      content: [
        {
          type: 'heading',
          text: 'HARTLEY RESIDENCE — THOROUGH SEARCH',
        },
        {
          type: 'paragraph',
          text:
            'A thorough examination of the Hartley residence reveals that Eleanor has not left the house at all.',
        },
        {
          type: 'paragraph',
          text:
            'An old, rarely used room in the house has been kept locked. The room is not part of the ordinary daily household routine.',
        },
        {
          type: 'paragraph',
          text:
            'Eleanor Hartley is found alive inside the room.',
        },
        {
          type: 'paragraph',
          text:
            'She has been confined there for approximately a week, since shortly before Walter and Marion came to the Lennox Bureau.',
        },
        {
          type: 'paragraph',
          text:
            'Eleanor explains that she told Walter that Cecilia had said she would inherit. Walter then became concerned because the new will could not be found. He asked Eleanor not to tell anyone while they tried to locate it.',
        },
        {
          type: 'paragraph',
          text:
            'Walter searched Cecilia’s former house but did not find the will. When Eleanor later attempted to leave and establish an independent life, Walter and Marion stopped her and kept her confined while they continued looking for the document.',
        },
        {
          type: 'paragraph',
          text:
            'Eleanor has remained in the same room throughout her confinement.',
        },
      ],
    },
  ],

  investigations: [
    {
      id: 'investigate-walter-marion',
      title: 'Interview Walter and Marion Hartley',
      description:
        'Examine the account given by Eleanor’s father and stepmother and determine what they know about her disappearance.',
      result:
        'Walter and Marion say Eleanor had wanted independence and may have left voluntarily. They confirm that Eleanor had a difficult relationship with Walter and that she has not contacted the family or returned to work. Walter also acknowledges that Eleanor told him Cecilia had said she would inherit. He says the family knows only of an older will leaving the estate to him.',
      unlocks: [
        'investigate-old-will',
        'investigate-eleanor-room',
        'investigate-employer',
      ],
      cost: 1,
      unlocked: true,
      completed: false,
    },

    {
      id: 'investigate-eleanor-room',
      title: 'Examine Eleanor’s Room',
      description:
        'Search Eleanor Hartley’s room for signs of a voluntary departure or evidence that something was wrong.',
      result:
        'A suitcase and some clothing are missing, which makes a voluntary departure appear plausible. A personal photograph of Eleanor with her deceased mother remains behind. A railway booking receipt in Eleanor’s name for Bellford is also found among her remaining papers.',
      unlocks: [
        'investigate-photograph',
        'investigate-booking-receipt',
      ],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-walter-marion',
      ],
    },

    {
      id: 'investigate-photograph',
      title: 'Examine the Photograph of Eleanor and Her Mother',
      description:
        'Examine the personal photograph Eleanor left behind in her room.',
      result:
        'The photograph shows Eleanor as a child with her deceased mother. It is an ordinary but clearly personal possession. Its presence is difficult to reconcile with a voluntary departure in which Eleanor deliberately packed a suitcase and removed clothing.',
      unlocks: [],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-eleanor-room',
      ],
    },

    {
      id: 'investigate-booking-receipt',
      title: 'Examine the Bellford Booking Receipt',
      description:
        'Determine what the railway receipt in Eleanor’s name actually establishes.',
      result:
        'The receipt confirms a reservation from Westbridge City to Bellford in Eleanor Hartley’s name, with Carriage B, Seat 12 reserved. The actual travel ticket is missing, so the receipt alone does not establish that Eleanor travelled.',
      unlocks: [
        'investigate-railway-company',
      ],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-eleanor-room',
      ],
    },

    {
      id: 'investigate-railway-company',
      title: 'Contact The Crown Railway Company',
      description:
        'Check whether Eleanor actually used the Bellford reservation.',
      result:
        'The Crown Railway Company confirms that Carriage B, Seat 12 was reserved in Eleanor’s name but was never recorded as occupied. The reservation therefore does not prove that Eleanor travelled to Bellford.',
      unlocks: [
        'investigate-station-attendant',
      ],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-booking-receipt',
      ],
    },

    {
      id: 'investigate-station-attendant',
      title: 'Interview the Station Attendant',
      description:
        'Find out who actually made the Bellford reservation.',
      result:
        'The attendant remembers a woman of approximately fifty wearing dark glasses and keeping a scarf or shawl around her face. She appeared to avoid attention. The attendant cannot identify her with certainty, but the description could be consistent with Marion Hartley. The woman was not Eleanor.',
      unlocks: [],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-railway-company',
      ],
    },

    {
      id: 'investigate-employer',
      title: 'Investigate Eleanor’s Employer',
      description:
        'Determine whether Eleanor’s behavior at work suggested that she intended to disappear or resign.',
      result:
        'Eleanor had worked normally shortly before she disappeared. Her employer knew nothing about a planned resignation and had not been told that she intended to leave Westbridge. The employer can provide little information about her private life.',
      unlocks: [],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-walter-marion',
      ],
    },

    {
      id: 'investigate-maggie',
      title: 'Interview Margaret “Maggie” Turner',
      description:
        'Speak with Eleanor’s friend about her plans, family life and recent conversations.',
      result:
        'Maggie confirms that Eleanor had talked about moving away because of the difficult relationship with her father. Eleanor once mentioned that Bellford seemed like a nice city, but never said she planned to go there. Maggie also reveals that Eleanor had been secretly seeing George Ellis. Their last conversation was ordinary and did not sound like a farewell.',
      unlocks: [
        'investigate-george',
      ],
      cost: 1,
      unlocked: true,
      completed: false,
    },

    {
      id: 'investigate-george',
      title: 'Interview George Ellis',
      description:
        'Question the man Eleanor had been seeing without her family’s knowledge.',
      result:
        'George initially says he has not seen Eleanor for a long time and denies that they were in a relationship. His account can be checked independently because he lives in a place where other residents have seen Eleanor visiting him.',
      unlocks: [
        'investigate-george-neighbor',
      ],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-maggie',
      ],
    },

    {
      id: 'investigate-george-neighbor',
      title: 'Question George Ellis’s Neighbor',
      description:
        'Check whether anyone remembers Eleanor visiting George shortly before she disappeared.',
      result:
        'A neighbor remembers Eleanor visiting George shortly before her disappearance. The visit appeared ordinary and there was no sign that Eleanor was being held or forced to remain there. The evidence disproves George’s initial statement.',
      unlocks: [
        'investigate-confront-george',
      ],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-george',
      ],
    },

    {
      id: 'investigate-confront-george',
      title: 'Confront George with the Witness Account',
      description:
        'Return to George after the neighbor contradicts his original statement.',
      result:
        'George admits that he lied because he wanted to protect his relationship with Eleanor from her family. He and Eleanor were in a secret relationship and planned to live together once she could get away from home. George did not help Eleanor disappear and does not know where she is now.',
      unlocks: [],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-george-neighbor',
      ],
    },

    {
      id: 'investigate-old-will',
      title: 'Examine Cecilia Hartley’s Previous Will',
      description:
        'Verify who was originally named to inherit Cecilia Hartley’s estate.',
      result:
        'The previous will names Walter Hartley as the principal beneficiary of Cecilia’s estate, including the property occupied by Walter and Marion and Cecilia’s financial assets.',
      unlocks: [
        'investigate-clarke',
      ],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-walter-marion',
      ],
    },

    {
      id: 'investigate-clarke',
      title: 'Interview Reginald Clarke',
      description:
        'Ask the lawyer who handled Cecilia Hartley’s earlier will whether she intended to change her arrangements.',
      result:
        'Reginald Clarke confirms that Cecilia contacted him because she wanted to make a new will. He did not receive or witness the new document, does not know who Cecilia intended to benefit and does not know where she kept the new will.',
      unlocks: [
        'investigate-estate-papers',
        'investigate-personal-belongings',
      ],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-old-will',
      ],
    },

    {
      id: 'investigate-estate-papers',
      title: 'Examine Cecilia’s Estate Papers',
      description:
        'Review the ordinary estate records for evidence of the missing will.',
      result:
        'The estate papers confirm Cecilia owned the property occupied by Walter and Marion as well as other financial assets. Cecilia herself lived at a different house. The papers contain the previous will but no newer will and provide no indication of where the later document was kept.',
      unlocks: [],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-clarke',
      ],
    },

    {
      id: 'investigate-personal-belongings',
      title: 'Examine Cecilia’s Personal Belongings',
      description:
        'Search Cecilia Hartley’s personal belongings separately from the formal estate papers.',
      result:
        'Among Cecilia’s personal receipts is a bank record showing that she maintained a safe-deposit box. The receipt does not reveal the contents of the box, but it provides a concrete place to look for the missing will.',
      unlocks: [
        'investigate-safe-deposit-box',
      ],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-clarke',
      ],
    },

    {
      id: 'investigate-safe-deposit-box',
      title: 'Investigate Cecilia’s Safe-Deposit Box',
      description:
        'Follow the bank receipt and determine whether Cecilia kept the new will in the box.',
      result:
        'The bank confirms that Cecilia maintained a safe-deposit box. Inside is a sealed legal document identified as a will executed after the previous will known to the family.',
      unlocks: [
        'investigate-new-will',
      ],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-personal-belongings',
      ],
    },

    {
      id: 'investigate-new-will',
      title: 'Examine Cecilia’s New Will',
      description:
        'Read the later will found in Cecilia Hartley’s safe-deposit box.',
      result:
        'The later will replaces Cecilia’s earlier arrangements and leaves the property and financial estate to Eleanor Victoria Hartley. Walter is no longer the principal beneficiary.',
      unlocks: [
        'investigate-walter-finances',
      ],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-safe-deposit-box',
      ],
    },

    {
      id: 'investigate-walter-finances',
      title: 'Investigate Walter Hartley’s Finances',
      description:
        'Determine whether Walter Hartley had a significant financial reason to depend upon Cecilia’s inheritance.',
      result:
        'Walter is carrying substantial personal debts and outstanding obligations. Cecilia’s estate would have provided him with the money and property he expected to inherit under the old will. The new will removes that expected financial benefit and gives it to Eleanor instead.',
      unlocks: [
        'investigate-house',
      ],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-new-will',
      ],
    },

    {
      id: 'investigate-house',
      title: 'Search the Hartley Residence Thoroughly',
      description:
        'With the new will and Walter’s financial motive established, conduct a full examination of the family residence.',
      result:
        'Eleanor is found alive in an old, rarely used room in the Hartley residence. She has been kept locked inside for approximately a week. Walter and Marion had confined her after Eleanor told Walter that Cecilia had said she would inherit and Walter became concerned about the missing will.',
      unlocks: [],
      cost: 1,
      unlocked: false,
      completed: false,
      requires: [
        'investigate-new-will',
        'investigate-walter-finances',
      ],
    },
  ],

  conclusion: {
    questions: [
      {
        id: 'where-is-eleanor',
        question:
          'Where was Eleanor Hartley throughout the period in which her family reported her missing?',
        options: [
          {
            id: 'bellford',
            text: 'She travelled to Bellford by train.',
            correct: false,
            explanation:
              'The Bellford reservation was never used, and the station attendant remembers a different woman making the booking.',
          },
          {
            id: 'george',
            text: 'She was living secretly with George Ellis.',
            correct: false,
            explanation:
              'George and Eleanor planned to live together, but George did not help her disappear and did not know where she was after she was confined by her family.',
          },
          {
            id: 'family-house',
            text: 'She was being kept inside the Hartley family residence.',
            correct: true,
            explanation:
              'Eleanor was locked in an old, rarely used room in the family house for approximately a week.',
          },
          {
            id: 'friend',
            text: 'She stayed with Maggie Turner.',
            correct: false,
            explanation:
              'Maggie knew Eleanor wanted independence but had no role in concealing her.',
          },
        ],
      },

      {
        id: 'who-benefits-old-will',
        question:
          'Who was named as the principal beneficiary in Cecilia Hartley’s previous will?',
        options: [
          {
            id: 'eleanor',
            text: 'Eleanor Victoria Hartley.',
            correct: false,
          },
          {
            id: 'walter',
            text: 'Walter Hartley.',
            correct: true,
          },
          {
            id: 'marion',
            text: 'Marion Hartley.',
            correct: false,
          },
          {
            id: 'george',
            text: 'George Ellis.',
            correct: false,
          },
        ],
      },

      {
        id: 'new-will-beneficiary',
        question:
          'Who was named as the principal beneficiary in Cecilia Hartley’s new will?',
        options: [
          {
            id: 'walter',
            text: 'Walter Hartley.',
            correct: false,
          },
          {
            id: 'marion',
            text: 'Marion Hartley.',
            correct: false,
          },
          {
            id: 'eleanor',
            text: 'Eleanor Victoria Hartley.',
            correct: true,
          },
          {
            id: 'george',
            text: 'George Ellis.',
            correct: false,
          },
        ],
      },

      {
        id: 'where-new-will-found',
        question:
          'Where was Cecilia Hartley’s new will found?',
        options: [
          {
            id: 'walter-house',
            text: 'In Walter Hartley’s private desk.',
            correct: false,
          },
          {
            id: 'lawyer-office',
            text: 'In Reginald Clarke’s office.',
            correct: false,
          },
          {
            id: 'safe-deposit',
            text: 'In Cecilia Hartley’s bank safe-deposit box.',
            correct: true,
          },
          {
            id: 'eleanor-room',
            text: 'In Eleanor’s bedroom.',
            correct: false,
          },
        ],
      },

      {
        id: 'railway-truth',
        question:
          'What did the Bellford railway investigation establish?',
        options: [
          {
            id: 'eleanor-travelled',
            text: 'Eleanor travelled to Bellford on the reserved train.',
            correct: false,
          },
          {
            id: 'unused-booking',
            text: 'The reservation existed, but Carriage B, Seat 12 was never used.',
            correct: true,
          },
          {
            id: 'george-travelled',
            text: 'George Ellis travelled to Bellford with Eleanor.',
            correct: false,
          },
          {
            id: 'no-reservation',
            text: 'No reservation had ever been made in Eleanor’s name.',
            correct: false,
          },
        ],
      },

      {
        id: 'who-booked-bellford',
        question:
          'Who appears to have made the Bellford reservation?',
        options: [
          {
            id: 'eleanor',
            text: 'Eleanor Hartley.',
            correct: false,
          },
          {
            id: 'george',
            text: 'George Ellis.',
            correct: false,
          },
          {
            id: 'marion',
            text: 'A woman whose description could be consistent with Marion Hartley.',
            correct: true,
          },
          {
            id: 'maggie',
            text: 'Maggie Turner.',
            correct: false,
          },
        ],
      },

      {
        id: 'george-lie',
        question:
          'Why did George Ellis initially lie about Eleanor?',
        options: [
          {
            id: 'helped-disappear',
            text: 'He had helped Eleanor disappear and wanted to conceal his involvement.',
            correct: false,
          },
          {
            id: 'protect-relationship',
            text: 'He wanted to conceal their relationship from Eleanor’s family.',
            correct: true,
          },
          {
            id: 'bellford',
            text: 'He wanted to conceal that he had arranged the Bellford reservation.',
            correct: false,
          },
          {
            id: 'money',
            text: 'He wanted to obtain Cecilia’s inheritance.',
            correct: false,
          },
        ],
      },

      {
        id: 'george-plans',
        question:
          'What had Eleanor and George Ellis planned to do?',
        options: [
          {
            id: 'leave-together',
            text: 'Live together after Eleanor got away from her family.',
            correct: true,
          },
          {
            id: 'bellford-business',
            text: 'Open a business together in Bellford.',
            correct: false,
          },
          {
            id: 'inheritance',
            text: 'Take control of Cecilia’s estate together.',
            correct: false,
          },
          {
            id: 'leave-country',
            text: 'Leave the country immediately after Cecilia’s death.',
            correct: false,
          },
        ],
      },

      {
        id: 'walter-motive',
        question:
          'Why was Cecilia’s new will important to Walter Hartley?',
        options: [
          {
            id: 'no-change',
            text: 'It changed nothing because Walter remained the beneficiary.',
            correct: false,
          },
          {
            id: 'debt',
            text: 'Walter had significant debts and had been relying on the inheritance he expected under the old will.',
            correct: true,
          },
          {
            id: 'george',
            text: 'It gave George Ellis control over the family property.',
            correct: false,
          },
          {
            id: 'marion',
            text: 'It transferred the estate directly to Marion.',
            correct: false,
          },
        ],
      },

      {
        id: 'family-action',
        question:
          'What did Walter and Marion actually do to Eleanor?',
        options: [
          {
            id: 'send-bellford',
            text: 'They secretly sent her to Bellford.',
            correct: false,
          },
          {
            id: 'help-george',
            text: 'They arranged for George Ellis to take her away.',
            correct: false,
          },
          {
            id: 'lock-room',
            text: 'They kept her locked in an old, rarely used room in the family house.',
            correct: true,
          },
          {
            id: 'police',
            text: 'They handed her over to the police as a runaway.',
            correct: false,
          },
        ],
      },

      {
        id: 'marion-role',
        question:
          'What was Marion Hartley’s role in Eleanor’s confinement?',
        options: [
          {
            id: 'planned-alone',
            text: 'She planned the entire scheme without Walter’s knowledge.',
            correct: false,
          },
          {
            id: 'agreed',
            text: 'She believed it was wrong but agreed to help Walter protect the family while they searched for the will.',
            correct: true,
          },
          {
            id: 'rescued',
            text: 'She secretly released Eleanor after one night.',
            correct: false,
          },
          {
            id: 'unaware',
            text: 'She did not know Eleanor was being kept in the house.',
            correct: false,
          },
        ],
      },

      {
        id: 'overall-reconstruction',
        question:
          'What best explains Eleanor Hartley’s disappearance?',
        options: [
          {
            id: 'voluntary-bellford',
            text:
              'Eleanor left voluntarily for Bellford and never intended to contact her family again.',
            correct: false,
          },
          {
            id: 'george-elopement',
            text:
              'Eleanor secretly left with George Ellis and was living with him.',
            correct: false,
          },
          {
            id: 'family-confinement',
            text:
              'Eleanor wanted independence, but Walter and Marion confined her after learning that Cecilia had intended Eleanor to inherit, while they searched for the missing new will.',
            correct: true,
          },
          {
            id: 'unknown-abduction',
            text:
              'An unknown person abducted Eleanor shortly before she could leave the family home.',
            correct: false,
          },
        ],
      },
    ],

    finalStatement: {
      prompt:
        'In your own words, explain what happened to Eleanor Hartley and why.',
      required: false,
    },

    resolution: {
      sections: [
        {
          title: 'The Disappearance',
          text:
            'Eleanor Hartley did intend to become independent. Her relationship with Walter was genuinely difficult, she had discussed moving away with her friend Maggie Turner, and she had secretly planned to live with George Ellis. These facts made the Hartleys’ explanation appear plausible. Eleanor nevertheless did not leave the family residence. After she told Walter that Cecilia had said Eleanor would inherit, Walter became concerned because the new will could not be found. He asked Eleanor not to tell anyone while they tried to locate it. When Eleanor later attempted to leave the house, Walter and Marion stopped her and kept her confined in the same old, rarely used room for approximately a week.',
        },

        {
          title: 'The Bellford Trail',
          text:
            'The Bellford evidence was genuine but misleading. A booking receipt in Eleanor’s name showed a reservation from Westbridge City to Bellford in Carriage B, Seat 12. Because Eleanor had discussed moving away and had mentioned Bellford to Maggie, the reservation appeared to support the theory that she had left voluntarily. The Crown Railway Company, however, confirmed that the seat was never used. A station attendant further remembered that the person who made the booking was a woman of approximately fifty wearing dark glasses and a scarf or shawl around her face. The attendant could not identify the woman with certainty, but the description could be consistent with Marion Hartley. The reservation therefore did not prove that Eleanor travelled. Instead, it became evidence that someone had used Eleanor’s name to create the appearance of a journey.',
        },

        {
          title: 'George Ellis',
          text:
            'George Ellis was another genuine secret. Eleanor had been seeing him without her family’s knowledge, and the two had planned to live together once Eleanor could get away from home. George initially lied and claimed that he had not seen Eleanor recently. A neighbor contradicted him by remembering Eleanor visiting shortly before the disappearance. When confronted, George admitted the relationship and explained that he had lied to protect it from Eleanor’s family. He did not help Eleanor disappear and did not know where she was being kept. His secret therefore created a plausible alternative explanation without making him responsible for Eleanor’s disappearance.',
        },

        {
          title: 'The Inheritance',
          text:
            'The most important motive was concealed within Cecilia Hartley’s estate. Cecilia’s previous will named Walter as the principal beneficiary of her property and financial assets. Her lawyer, Reginald Clarke, confirmed that Cecilia later contacted him because she intended to change her will, but he had never received or seen the new document and could not say who the new beneficiary was. The ordinary estate papers contained no later will. A separate examination of Cecilia’s personal belongings revealed a bank receipt proving that she maintained a safe-deposit box. The new will was found there. It named Eleanor as the beneficiary of the property and money that Walter had expected to inherit. Walter was carrying significant personal debts, making the change in inheritance materially important to him.',
        },

        {
          title: 'Walter and Marion',
          text:
            'Walter did not initially know that the new will existed or where it was. His actions began after Eleanor told him what Cecilia had said. He searched Cecilia’s former house for the document but failed to find it. Rather than allow Eleanor to leave while the inheritance remained uncertain, he and Marion kept her confined. Their original intention was limited: they wanted to keep Eleanor in the house for a few days while they found the will. The confinement continued for approximately a week. Marion believed the arrangement was wrong but agreed to help protect the family while Walter searched. The family then went to the Lennox Bureau together and presented Eleanor’s disappearance as a voluntary departure, omitting the fact that she was still inside the house.',
        },

        {
          title: 'The Final Discovery',
          text:
            'Once the new will had been found and Walter’s financial position established, the explanation offered by the family could no longer be accepted at face value. A thorough examination of the Hartley residence revealed an old, rarely used room that had been kept locked. Eleanor was found alive inside. She had remained there throughout the period in which Walter and Marion claimed not to know where she was. The evidence therefore resolves the central mystery: Eleanor’s plans to leave were real, the Bellford booking was real, George Ellis’s secret relationship was real, and Walter’s financial difficulties were real. The misleading disappearance story was constructed around those genuine facts to conceal the one fact the family did not want the bureau to discover — Eleanor had never left the house.',
        },
      ],
    },
  },
}

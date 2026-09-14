/* =========================================================
   CASE FILE
   ========================================================= */

   import type { CaseData, Investigation } from '../types/case'

   import InvestigationPanel from './InvestigationPanel'
   
   type CaseFileProps = {
     caseData: CaseData
     caseCompleted: boolean
     investigationOpportunities: number
     completedInvestigations: string[]
     investigationResult: Investigation | null
     accessedDocuments: string[]
     onInvestigate: (investigation: Investigation) => void
     onOpenDocuments: (documentId: string) => void
     onOpenConclusion: () => void
     onBack: () => void
   }
   
   function CaseFile({
     caseData,
     caseCompleted,
     investigationOpportunities,
     completedInvestigations,
     accessedDocuments,
     investigationResult,
     onInvestigate,
     onOpenDocuments,
     onOpenConclusion,
     onBack,
   }: CaseFileProps) {
     const caseNumber = String(caseData.caseNumber).padStart(2, '0')
   
     return (
       <main className="case-file">
         {/* =====================================================
             FILE HEADER
             ===================================================== */}
         <header className="case-file__header">
           <div className="case-file__header-top">
             <div>
               <p className="case-file__bureau">
                 The Lennox Bureau
               </p>
   
               <p className="case-file__bureau-subtitle">
                 Private Investigations
               </p>
             </div>
   
             <div className="case-file__case-number">
               <span>CASE NO.</span>
               <strong>{caseNumber}</strong>
             </div>
           </div>
   
           <div className="case-file__title">
             <p className="case-file__classification">
               Active Investigation
             </p>
   
             <h1>{caseData.title}</h1>
   
             <p className="case-file__location">
               {caseData.location}
               <span>·</span>
               {caseData.year}
             </p>
           </div>
   
           <div className="case-file__header-rule" />
         </header>
   
         {/* =====================================================
             PARTICULARS
             ===================================================== */}
         <section className="case-file__particulars">
           <div className="case-file__section-heading">
             <span className="case-file__section-number">
               01
             </span>
   
             <span className="case-file__section-title">
               Case Particulars
             </span>
           </div>
   
           <div className="case-file__particulars-table">
             <div className="case-file__field">
               <span>SUBJECT</span>
               <strong>{caseData.title}</strong>
             </div>
   
             <div className="case-file__field">
               <span>LOCATION</span>
               <strong>{caseData.location}</strong>
             </div>
   
             <div className="case-file__field">
               <span>DATE</span>
               <strong>{caseData.date}</strong>
             </div>
   
             <div className="case-file__field">
               <span>STATUS</span>
               <strong>
                 {caseCompleted
                   ? 'CASE COMPLETED'
                   : caseData.status === 'open'
                     ? 'ACTIVE INVESTIGATION'
                     : 'CLOSED'}
               </strong>
             </div>
           </div>
         </section>
   
         {/* =====================================================
             BUREAU REPORT
             ===================================================== */}
         <section className="case-file__report">
           <div className="case-file__section-heading">
             <span className="case-file__section-number">
               02
             </span>
   
             <span className="case-file__section-title">
               Bureau Report
             </span>
           </div>
   
           <div className="case-file__report-body">
             {caseData.report.paragraphs.map((paragraph) => (
               <p key={paragraph}>
                 {paragraph}
               </p>
             ))}
           </div>
         </section>
   
         {/* =====================================================
             INVESTIGATION
             ===================================================== */}
         <section className="case-file__investigation">
           <div className="case-file__section-heading">
             <span className="case-file__section-number">
               03
             </span>
   
             <div>
               <span className="case-file__section-title">
                 Investigation
               </span>
   
               <p className="case-file__section-note">
                 Matters requiring attention
               </p>
             </div>
   
             <div className="case-file__opportunities">
               <span>OPPORTUNITIES</span>
               <strong>{investigationOpportunities}</strong>
             </div>
           </div>
   
           <div className="case-file__investigation-body">
             <InvestigationPanel
               investigations={caseData.investigations}
               investigationOpportunities={
                 investigationOpportunities
               }
               completedInvestigations={
                 completedInvestigations
               }
               onInvestigate={onInvestigate}
             />
           </div>
         </section>
   
         {/* =====================================================
             FINDING
             ===================================================== */}
         {investigationResult && (
           <section className="case-file__finding">
             <div className="case-file__section-heading">
               <span className="case-file__section-number">
                 04
               </span>
   
               <span className="case-file__section-title">
                 Investigation Record
               </span>
             </div>
   
             <div className="case-file__finding-body">
               <div className="case-file__finding-stamp">
                 FINDING RECORDED
               </div>
   
               <h2>
                 {investigationResult.title}
               </h2>
   
               <p>
                 {investigationResult.result}
               </p>
             </div>
           </section>
         )}
   
         {/* =====================================================
             CASE MATERIALS
             ===================================================== */}
         <section className="case-file__materials">
           <div className="case-file__section-heading">
             <span className="case-file__section-number">
               {investigationResult ? '05' : '04'}
             </span>
   
             <div>
               <span className="case-file__section-title">
                 Case Materials
               </span>
   
               <p className="case-file__section-note">
                 Documents and evidence
               </p>
             </div>
   
             <span className="case-file__materials-count">
  {String(
    caseData.documents.filter((document) => {
      if (!document.requiresInvestigation) {
        return true
      }

      return completedInvestigations.includes(
        document.requiresInvestigation,
      )
    }).length,
  ).padStart(2, '0')}
</span>
           </div>
   
           <div className="case-file__materials-index">
  {caseData.documents
    .filter((document) => {
      if (!document.requiresInvestigation) {
        return true
      }

      return completedInvestigations.includes(
        document.requiresInvestigation,
      )
    })
    .map((document, index) => (
      <button
        key={document.id}
        className="case-file__material-row"
        onClick={() =>
          onOpenDocuments(document.id)
        }
      >
        <span className="case-file__material-number">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="case-file__material-information">
  <strong>
    {document.title}
  </strong>

  <span>
    {document.type}
  </span>
</div>

{!accessedDocuments.includes(document.id) && (
  <span
    className="case-file__new-indicator"
    aria-label="New document"
  />
)}
      </button>
    ))}
</div>
         </section>
   
         {/* =====================================================
             CONCLUSION
             ===================================================== */}
         <section className="case-file__conclusion">
           <div className="case-file__section-heading">
             <span className="case-file__section-number">
               06
             </span>
   
             <div>
               <span className="case-file__section-title">
                 Conclusion
               </span>
   
               <p className="case-file__section-note">
                 Submit your findings
               </p>
             </div>
           </div>
   
           <div className="case-file__conclusion-body">
             <p>
               When you believe you have established what
               happened, you may submit your conclusion.
             </p>
   
             <button
               className="case-file__conclusion-button"
               onClick={onOpenConclusion}
             >
               Submit Conclusion
             </button>
           </div>
         </section>
   
         {/* =====================================================
             FILE FOOTER
             ===================================================== */}
         <footer className="case-file__footer">
           <button
             className="case-file__back"
             onClick={onBack}
           >
             ← Return to Bureau
           </button>
   
           <div className="case-file__footer-mark">
             <span>THE LENNOX BUREAU</span>
             <span>WESTBRIDGE CITY · 1929</span>
           </div>
         </footer>
       </main>
     )
   }
   
   export default CaseFile
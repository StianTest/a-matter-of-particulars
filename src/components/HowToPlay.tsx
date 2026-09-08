type HowToPlayProps = {
    onBack: () => void
  }
  
  function HowToPlay({ onBack }: HowToPlayProps) {
    return (
      <main className="how-to-play">
        <button
          className="how-to-play__back"
          onClick={onBack}
        >
          ← Back to Main Menu
        </button>
  
        <header className="how-to-play__header">
          <p className="how-to-play__bureau">
            The Lennox Bureau
          </p>
  
          <p className="how-to-play__label">
            Investigator's Guide
          </p>
  
          <h1>How to Play</h1>
        </header>
  
        <section className="how-to-play__section">
          <h2>The Case</h2>
  
          <p>
            Every case begins with a collection of documents,
            reports, and other materials.
          </p>
  
          <p>
            Read them carefully. Details that seem insignificant
            may become important later.
          </p>
        </section>
  
        <section className="how-to-play__section">
          <h2>Investigate</h2>
  
          <p>
            Choose where to direct your investigation.
          </p>
  
          <p>
            Each investigation uses an Investigation Opportunity.
            Opportunities are limited, so choose carefully.
          </p>
  
          <p>
            Some investigations may reveal important information.
            Others may lead nowhere.
          </p>
        </section>
  
        <section className="how-to-play__section">
          <h2>The Notebook</h2>
  
          <p>
            Use the Notebook to record anything you believe may
            matter.
          </p>
  
          <p>
            Names. Places. Times. Questions. Theories.
          </p>
  
          <p>
            The Notebook belongs to you. The Bureau will not tell
            you what to write down.
          </p>
        </section>
  
        <section className="how-to-play__section">
          <h2>The Evidence</h2>
  
          <p>
            Not everything in a case is what it appears to be.
          </p>
  
          <p>
            Some people may have reasons to lie. Some information
            may be incomplete. A suspicious circumstance does not
            necessarily make someone guilty.
          </p>
  
          <p>
            Pay attention to contradictions and connections.
          </p>
        </section>
  
        <section className="how-to-play__section">
          <h2>The Conclusion</h2>
  
          <p>
            When you believe you have solved the case, you may
            submit your conclusion.
          </p>
  
          <p>
            You will need to explain who you believe is
            responsible, what happened, and why.
          </p>
        </section>
  
        <section className="how-to-play__final">
          <h2>A Final Word</h2>
  
          <p>
            There is no guarantee that every question will have an
            obvious answer.
          </p>
  
          <p>
            Read carefully. Investigate deliberately. Trust your
            reasoning.
          </p>
  
          <p className="how-to-play__final-line">
            The particulars matter.
          </p>
        </section>
      </main>
    )
  }
  
  export default HowToPlay
type ResultProps = {
    score: number
    maxScore: number
    percentage: number
    onBack: () => void
  }
  
  function Result({
    score,
    maxScore,
    percentage,
    onBack,
  }: ResultProps) {
    return (
      <main className="result">
        <header className="result__header">
          <p className="result__bureau">
            The Lennox Bureau
          </p>
  
          <p className="result__label">
            Investigation Complete
          </p>
  
          <h1>Case Result</h1>
  
          <p className="result__intro">
            Your investigation has been concluded.
            The particulars of your findings are recorded
            below.
          </p>
        </header>
  
        <section className="result__score">
          <p className="result__score-label">
            Investigation Score
          </p>
  
          <strong className="result__score-value">
            {score} / {maxScore}
          </strong>
  
          <span className="result__percentage">
            {percentage}%
          </span>
        </section>
  
        <footer className="result__footer">
          <button
            className="result__back"
            onClick={onBack}
          >
            ← Return to Case File
          </button>
        </footer>
      </main>
    )
  }
  
  export default Result
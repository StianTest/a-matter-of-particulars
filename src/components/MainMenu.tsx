type MainMenuProps = {
    onNewCase: () => void
  }
  
  function MainMenu({ onNewCase }: MainMenuProps) {
    return (
      <main className="main-menu">
        <div className="main-menu__content">
          <p className="main-menu__established">EST. 1903</p>
  
          <h1>The Lennox Bureau</h1>
  
          <p className="main-menu__subtitle">
            Private Investigations
          </p>
  
          <div className="main-menu__divider" />
  
          <nav className="main-menu__navigation">
          <button onClick={onNewCase}>New Case</button>
            <button>Case Files</button>
            <button>The Bureau</button>
            <button>Settings</button>
          </nav>
  
          <div className="main-menu__location">
            <span>Westbridge City</span>
            <span>1929</span>
          </div>
        </div>
      </main>
    )
  }
  
  export default MainMenu
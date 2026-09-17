type SettingsProps = {
    onBack: () => void
    musicEnabled: boolean
    onToggleMusic: () => void
    musicVolume: number
    onVolumeChange: (volume: number) => void
  }
  
  function Settings({
    onBack,
    musicEnabled,
    onToggleMusic,
    musicVolume,
    onVolumeChange,
  }: SettingsProps) {
    return (
      <main className="settings">
        <div className="settings__content">
          <h1>Settings</h1>
  
          <div className="settings__divider" />
  
          <section className="settings__section">
  <h2>Music</h2>

  <button onClick={onToggleMusic}>
    Background Music: {musicEnabled ? 'On' : 'Off'}
  </button>

  <label className="settings__volume">
  Volume: {Math.round(musicVolume * 100)}%
  <input
    className="settings__volume-slider"
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={musicVolume}
      onChange={(event) =>
        onVolumeChange(Number(event.target.value))
      }
    />
  </label>
</section>
  
          <button onClick={onBack}>Back</button>
        </div>
      </main>
    )
  }
  
  export default Settings
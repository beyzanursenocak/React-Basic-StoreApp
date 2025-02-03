export default function Header() {
    const style = {
      color: 'purple',
      fontSize: '30px',
      textTransform: 'uppercase'
    }
  
    // return (<h1 style={ { color: 'purple' } }>Header</h1>)
    // return (<h1 style={ style }>Header</h1>)
    return (
      <header>
        <nav className='navbar navbar-expend bg-dark border-bottom border-body' data-bs-theme="dark">
        <div className='container'>
          <a href="#" className='navbar-brand'>Store App</a>
        </div>
        </nav>
      </header>
    )
  }
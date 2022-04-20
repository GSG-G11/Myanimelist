import './Navbar.css';
export const Navbar = ({searchTerm,setSearchTerm}) => {
    
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  


    return(
      <div>
          <nav className="navbar">
          <a href="/" className="navbar-brand">
          <img  className="logo" src="https://media.discordapp.net/attachments/940611625122156605/965937273432592394/MyAnimeList.png" alt="NOT FOUND IMAGEZ" />
          </ a>
            <input value={searchTerm} onChange={handleChange} name="searchWords"  className="search" type="search" placeholder="Search.."/>
            
            <button className="login">Login</button>
        </nav>
        <div className='fix'></div>
      </div>
        
      
    )
}
import './Navbar.css';
export const Navbar = ({searchTerm,setSearchTerm}) => {
    
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  


    return(
        <nav className="navbar">
            <img className="logo" src="https://media.discordapp.net/attachments/940611625122156605/965937273432592394/MyAnimeList.png" alt="NOT FOUND IMAGEZ" />
            <input value={searchTerm} onChange={handleChange} name="searchWords"  className="search" type="search" placeholder="Search.."/>
            
            <button className="login">login</button>
        </nav>
        
      
    )
}
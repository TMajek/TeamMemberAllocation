const Header = ({selectedTeam, teamMemberCount}) => {

  return (
    <header className= 'containter'>
      <div className='row justify-content-center mt-3 mb-4'>
        <div className = 'col-8'>
          <h1>Team Member Allocation : {teamMemberCount}</h1>
          <h2>Current Team: {selectedTeam}</h2>
        </div>
      </div>
    </header>
  )

}
export default Header;
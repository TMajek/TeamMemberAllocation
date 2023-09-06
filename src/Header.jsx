const Header = ({selectedTeam, teamMemberCount}) => {

  return (
    <header>
      <h1 className=''>Team Member Allocation : {teamMemberCount}</h1>
      <h2>Current Team: {selectedTeam}</h2>
    </header>
  )

}
export default Header;
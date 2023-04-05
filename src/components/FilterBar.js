import { Button, Search } from 'semantic-ui-react';

const FilterBar = (props) => {
    return (
      <div className='filterBar'>
        <Button primary size='large'>All</Button>
        <Button size='large'>Category1</Button>
        <Button size='large'>Category2</Button>
        <Button size='large'>Category3</Button>
        <Search placeholder='Search...'></Search>
      </div>
    )
  }
  
  export default FilterBar
import { Button, Search, Dropdown, Menu } from 'semantic-ui-react';

const PortFilterBar = (props) => {

  const tagOptions = [
    {
      key: '1',
      text: '3',
      value: '1',
    },
    {
      key: '2',
      text: '6',
      value: '1',
    },
    {
      key: '3',
      text: '9',
      value: '1',
    },
    {
      key: '4',
      text: '12',
      value: '1',
    },
  ]


  return (
    <div className='portfolioBar'>
      <span className='hideMobile'>
        <Button primary size='large'>All</Button>
        <Button size='large'>Category1</Button>
        <Button size='large'>Category2</Button>
        <Button size='large'>Category3</Button>
      </span>
      
      <Menu compact>
        <Dropdown style={{ backgroundColor: '#e6e6e6' }} text='9' options={tagOptions} simple item />
      </Menu>
      <Search placeholder='Search...'></Search>
    </div>
  )
}

export default PortFilterBar
import { Button, Search, Dropdown, Menu, Header } from 'semantic-ui-react';

const FilterBar = (props) => {

  const tagOptions = [
    {
      key: '1',
      text: 'Category 1',
      value: '1',
    },
    {
      key: '2',
      text: 'Category 2',
      value: '1',
    },
    {
      key: '3',
      text: 'Category 3',
      value: '1',
    },
  ]


  return (
    <div className='filterBar'>
      <span className='hideMobile'>
        <span className='hideTablet'><Header style={{display: 'inline-flex', paddingRight: '30px', alignItems: 'center', marginTop: 'auto', marginBottom: 'auto'}}  as={'h2'}>My Blog</Header></span>
        <Button primary size='large'>All</Button>
        <Button size='large'>Category1</Button>
        <Button size='large'>Category2</Button>
        <Button size='large'>Category3</Button>
      </span>
      <span className='hideDesktop filterButtonMobile'>
        <Menu compact>
          <Dropdown text='Filter' options={tagOptions} simple item />
        </Menu>
      </span>
      <Search className='displayMobile searchHome' placeholder='Search...'></Search>
    </div>
  )
}

export default FilterBar
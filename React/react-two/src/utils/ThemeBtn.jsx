import './index.css'

const ThemeBtn = ({value}) => {
  
  return (
    <button className='btn'>{value || 'click'}</button>
  )
}

export default ThemeBtn
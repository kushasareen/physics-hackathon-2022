import './portfolioDisplay.scss'


export default function PortfolioDisplay({title,active,setSelected,id}) {
  return (
    <div className="container">
    <li key={id} onClick={ () => {setSelected(id)}} className={active ? 'portfolioList active': 'portfolioList'}>
    {title} </li>
    
    </div>
  )
}

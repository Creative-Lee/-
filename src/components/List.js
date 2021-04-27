function List(props){
    return (
      <div className="list">
        <a onClick={ props.eyes } target="_blank" href={ props.href }> 
          <div className="topicSide">
            <h3> {  props.topic } <span>{ props.icon }</span>
            </h3>
          </div>
          <div className="dateViewSide">
            <p className="date">21.04.22</p>
            <div className="pageView">
              👀{ props.pageView }
            </div>
          </div>
        </a>
        <hr/>
      </div>
    )
  }

export default List;
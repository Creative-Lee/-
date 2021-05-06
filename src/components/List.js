function List(props){
    return (
      <div className="list"  onClick={ props.onClick } >
        <div className="topicSide">
          <h3> { props.topic }
          </h3>
        </div>
        <div className="dateViewSide">
          <p className="date">21.04.22</p>
          <div className="pageView">
            👀{ props.pageView }
          </div>
        </div>
        <hr/>
      </div>
    )
  }

export default List;
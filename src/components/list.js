import React from 'react'

function List(props) {
    function handletoggle(){
        props.toggle(props.list.id)
    }
  return (
    <div>
        <label>
            <input type="checkbox" checked={props.list.checked} onChange={handletoggle}/>
            {props.list.name}
        </label>
    </div>
  )
}
export default List;

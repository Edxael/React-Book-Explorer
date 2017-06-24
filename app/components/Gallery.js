import React, { Component } from 'react';


class Gallery extends Component {
  render(){
    return(
      <div>
      {
        this.props.items.map((item, index) => {
          let {title, imageLinsks, infoLink} = item.volumeInfo;
          return (
            <div key={index}>
              <img
                 src={imageLinsks !== undefined ? imageLinsks.thumnail alt="book image" : ''} />
              {title}
            </div>
          )
        })
      }
     </div> // the information we will use
    )
  }
}

export default Gallery;

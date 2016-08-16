import React from 'react';


export default class DratutiItem extends React.Component {
	
 constructor() {
    super();
    this.state = {
     changed : false
    };
    this.handleClick = this.handleClick.bind(this);
    this.runAway = this.runAway.bind();
  }
		
  handleClick() {  	
    this.setState({changed:!this.state.changed}); 
    }


    runAway() {
      let elem=document.getElementById('imgdra');
      elem.style.left=Math.round((window.screen.width - 600) * Math.random())+"px";
      elem.style.top=Math.round((window.screen.width / 2 - 200) * Math.random())+"px";
   
    }
   

 
  render() {   
  let img=this.state.changed ? "http://cs4.pikabu.ru/post_img/2016/08/08/5/1470638197124567414.jpg" : "http://cs4.pikabu.ru/post_img/2016/08/08/5/1470638193140215000.jpg"; 
    
    return (

      <div   >
       <img id='imgdra' className='imgDra' src={img} onClick={this.handleClick} onMouseEnter={this.runAway}/>.
      </div>
    );
  }


	
}


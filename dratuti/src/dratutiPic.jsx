import React from 'react';


export default class DratutiItem extends React.Component {
	
 constructor() {
    super();
    this.state = {
     changed : false,
     click:0  
    };
    this.handleClick = this.handleClick.bind(this);
    this.runAway = this.runAway.bind();
  }
		
  handleClick() {  	
    this.setState({changed:!this.state.changed, click:this.state.click+1}); 
    console.log(this.state.click);
    this.runAway();


    }


    runAway() {
      let elem=document.getElementById('imgdra');
      let divIm=document.getElementById('divIm');
      var coords = divIm.getBoundingClientRect();
      //console.log(coords.right);
      //elem.style.left=Math.round((window.screen.width-500) * Math.random())+"px";
      //elem.style.top=Math.round((window.screen.height/2 -500) * Math.random())+"px";
     // console.log(divIm.style.top)
   elem.style.top=Math.round((coords.top/2) * Math.random())+"px";
   elem.style.left=Math.round((coords.left*4) * (Math.random())*2)+"px";
console.log(elem.style.left)
    }
   

 
  render() {   
  let img=this.state.changed ? "http://cs4.pikabu.ru/post_img/2016/08/08/5/1470638197124567414.jpg" : "http://cs4.pikabu.ru/post_img/2016/08/08/5/1470638193140215000.jpg"; 
    
    if (this.state.click==10)
    {
      return (
        <div>
         <p>ТЫ ПОБЕДИТЕЛЬ ПО ЖИЗНИ </p>
         <img className="molodec" src="http://risovach.ru/upload/2012/10/comics_CHetko_orig_1349480424.jpg" />
      </div>
    );
    }

    return (
        <div>
         <div className="panel panel-default">
  <div className="panel-body">
   <p>Кликнуто раз</p>
   <b>{this.state.click}</b>
  </div>
</div>
      <div  id="divIm"  className="divIm">
       <img id='imgdra' className='imgDra' src={img} onClick={this.handleClick} onMouseOver={this.runAway} onMouseEnter={this.runAway}/>.
      </div>
      </div>
    );
  }


	
}


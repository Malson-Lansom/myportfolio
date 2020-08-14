
let posts = document.getElementsByClassName('post-card');

let qh = document.getElementsByClassName('quote-holder');


window.onscroll = () => {
   
   
   /******* Scroll Functionalities *******/
 
   
   let elem = document.getElementsByClassName('header') [0];
   let scrollLength = parseInt(getComputedStyle(elem).height);
   let ws = window.pageYOffset;
   
   if (ws > scrollLength){
	   op_header.style.position = 'fixed';
	   op_header.style.top = '0';
	   
   }
   else
   {
	   
	   op_header.style.top = '-70px';
	   
   }
   
   
   /************ For Posts ************/
   
   
	
   for (let i = 0; i < posts.length; i++){
	   if (ws > posts[i].offsetTop - posts[i].offsetHeight){
		   posts[i].style.opacity = '1';
		   posts[i].style.left = '0';
		   
	   }
	   else
	   {
		   posts[i].style.opacity = '0';
		   
		   if (i % 2 == 0){
			posts[i].style.left = '-100vw';
		}
		else
		{
			posts[i].style.left = '100vw';
		}
		   
	   }
   }
   
   
   
   
   
   for (let i = 0; i < qh.length; i++){
	   if (ws > qh[i].offsetTop - qh[i].offsetHeight){
		   qh[i].style.opacity = '1';
		   qh[i].style.transform = 'rotate(360deg)';
		  
		   
	   }
	   else
	   {
		   qh[i].style.opacity = '0';
		   qh[i].style.transform = 'rotate(-360deg)';
		   
	   }
   }
   
   
   /************* Categories ***********/
   
   let elemcat = document.getElementsByClassName('category-holder')[0];
   
   if (ws > elemcat.offsetTop - elemcat.offsetHeight){
	   elemcat.style.opacity = '1';
   }
   else
   {
	   elemcat.style.opacity = '0';
   }
   
   
   let sides = document.getElementsByClassName('sides');
   
   for (let i = 0; i < sides.length; i++){
	   if (ws > sides[i].offsetTop - sides[i].offsetHeight){
		   
		   sides[i].style.left = '0';
		   to_top.style.right = '10px';
		   
	   }
	   else
	   {
		   if (i == 0){
			   sides[i].style.left = '-50vw';
			   
		   }
		   else
		   {
			   sides[i].style.left = '50vw';
		   }
		   
		   to_top.style.right = '-50px';
		   
	   }
   }
   
   

}



window.onload = () => {



	loader_div.style.display = 'none';
	document.body.style.overflow = 'scroll';

	/******** Menu Functionalities ********/
	
	/*************** Open *****************/

	let menu_icons = document.getElementsByClassName('menu');
	for (let i = 0; i < menu_icons.length; i++){
		menu_icons[i].addEventListener('click', e => {
			cat_holder.style.visibility = 'visible';
			cat_holder.style.height = '100vh';
			cat_holder.style.width = '100vw';
			cat_holder.style.borderRadius = '0';
			document.documentElement.style.overflow = 'hidden'; 
			document.body.scroll = "no";
			
			setTimeout(() => {
				
				
				let m_i = document.getElementsByClassName('m-i');
				let trns = ['0.1s', '0.2s', '0.3s', '0.4s', '0.5s'];
				
				
				
				for (let i = 0; i < m_i.length; i++){
					m_i[i].style.visibility = 'visible';
					m_i[i].style.transition = trns[i];
					m_i[i].style.left = '0';
				}
				
				cross.style.left = 'calc(100vw - 50px - 10px)';
				
			}, 1000);
			
			
			
		});
	}
	
	
	
	/*************** Close ***************/
	
	cross.addEventListener('click', () => {
		
		
		let m_i = document.getElementsByClassName('m-i');
		let trns = ['0.5s', '0.4s', '0.3s', '0.2s', '0.1s'];
		
		
		for (let i = 0; i < m_i.length; i++){
					//m_i[i].style.visibility = 'hidden';
					m_i[i].style.transition = trns[i];
					m_i[i].style.left = '-100vw';
			 
			 }
		
		cross.style.left = '100vw';
		
		setTimeout(() => {
			cat_holder.style.visibility = 'hidden';
			cat_holder.style.height = '0';
			cat_holder.style.width = '10';
			//cat_holder.style.borderRadius = '50%';
			document.documentElement.style.overflow = 'scroll'; 
			document.body.scroll = "yes";
		}, 500)
		
		
	});
	

	/******** Post card Position ********/
	
	
	
	for (let i = 0; i < posts.length; i++){
		if (i % 2 == 0){
			posts[i].style.left = '-100vw';
		}
		else
		{
			posts[i].style.left = '100vw';
		}
	}
	
	
	/************ Texf Anim ************/
	
	
	
	setInterval(flip_flop, 500); flip_flop();
	
	
	
	function flip_flop(){
		if (getComputedStyle(text_cursor).display == 'inline'){
			text_cursor.style.display = 'none';
		}
		else
		{
			text_cursor.style.display = 'inline';
		}
	}
	
	
}



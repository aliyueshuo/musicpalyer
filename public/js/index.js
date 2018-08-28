///音乐播放界面
			$(function(){
			
			  const player = document.getElementById('player');
			  let footerWidth = parseFloat($('#content').css('height')) - parseFloat($('#header').css('height')) - parseFloat($('#main').css('height')) + 'px';
			
			   $('#footer').css('height',footerWidth);
			 
		
		/////进度条事件
//              let playerLeft = (parseFloat(document.body.offsetWidth) - 620)/2;
//        
//               $('#audio-player').click(function(e){
//                 
//                   
//			    player.currentTime = 8;
//
//			  	   e = e||window.event;
//			  	   let xPos = e.pageX;
//			         
//			  	$('#play-point').removeClass('addTrans').css('left',xPos - playerLeft + 'px');
//			  	$('#play-white').removeClass('addTrans').css('width',xPos - playerLeft + 'px');
//			 
//			   setTimeout(function(){
//			   	$('#play-point').addClass('addTrans').css('left','600px');
//			   	$('#play-white').addClass('addTrans').css('width','600px')
//			   },20)
//			  })
			  /////制作音乐启动开关
			  let musicBtn = false;
			  $('.audio-control').click(()=>{
			  	musicPlay();
			  });
			 
			  ///音乐启动引擎
			   function musicPlay(ad){
              	  	//开
			  	if(!musicBtn){
			  		
			  	
			  	if(ad){
			  		///跟换曲子的开
			
			  		  $('#player').attr('src',ad);
			  			musicBtn = !musicBtn;
			  			 player.play();
			  			  stop();
			  	 ///播放效果
		 	    $('#bgr-packge').css('animation',' rotate 15000ms linear infinite');
			  	$('#play-point').addClass('addTrans').css('left','600px');
			  	$('#play-white').addClass('addTrans').css('width','600px');
			  			
			  	}else if($('#player').attr('src')){
			  		  ///同一曲子的开
			  		 
			  		  	stop();
			  		   musicBtn = !musicBtn;
			  		    player.play();
			  	
			  	///播放效果
			  	$('#bgr-packge').css('animation',' rotate 15000ms linear infinite');
			  	$('#play-point').addClass('addTrans').css('left','600px');
			  	$('#play-white').addClass('addTrans').css('width','600px')
			  	}
			  	else{
			  		alert('请先选择曲目');
			  	}
			    }
			  	//关
			  	else{
			  		if($('#player').attr('src')){
			  			start();
			  			musicBtn = !musicBtn;
			  			 player.pause();
			  			 
			  	///播放效果
			  	let bgrPackgeTransform = $('#bgr-packge').css('transform');
			  	let playPointLeft = $('#play-point').css('left');
			  	let playWhiteWidth = $('#play-white').css('width');
			  	
			  	$('#bgr-packge').css('animation','').css('transform',bgrPackgeTransform);
			  	$('#play-point').removeClass('addTrans').css('left', playPointLeft);
			  	$('#play-white').removeClass('addTrans').css('width',playWhiteWidth);
			  
			   }
			 }
	      }
          
            



			})
               	// src="http://m10.music.126.net/20180824103745/bb12a30b17740f8ddb4759b908a540b2/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3"
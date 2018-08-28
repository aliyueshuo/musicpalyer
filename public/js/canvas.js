var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		var gradient= 'red';
//		gradient.addColorStop("0","magenta");
//      gradient.addColorStop("0.5","blue");
//      gradient.addColorStop("1.0","red");
//	
		function start(){
		ctx.clearRect(0,0,100,100);
		
		ctx.beginPath();
		ctx.lineWidth=6;
		ctx.arc(50,50,45,0,2*Math.PI);
		ctx.fillStyle=gradient;
		ctx.fill();
	    ctx.beginPath();
		ctx.moveTo(20,50);
		ctx.lineTo(60,20);
		ctx.lineTo(60,80);
		
		ctx.closePath();
		ctx.fillStyle ='white';
        ctx.fill();
  
		}
		
		function stop(){
		ctx.clearRect(0,0,100,100);
	    ctx.beginPath();
		ctx.arc(50,50,45,0,2*Math.PI);
	
        ctx.lineWidth = 6;
        ctx.fillStyle=gradient;
		ctx.fill();
		
	    ctx.beginPath();
		ctx.moveTo(35,20);
		ctx.lineTo(35,80);
		ctx.moveTo(65,20);
		ctx.lineTo(65,80);
	    ctx.lineWidth = 10;
        ctx.strokeStyle='white';
		ctx.stroke();		
		}
	 start();
	 ////////////////nextM
	  var nextM = document.getElementById('nextM');
	  var ctxn = nextM.getContext('2d');
	  ctxn.clearRect(0,0,100,100);
	    ctxn.beginPath();
		ctxn.arc(50,50,40,0,2*Math.PI);
        ctxn.lineWidth = 6;
        ctxn.fillStyle=gradient;
		ctxn.fill();
	   
	    ctxn.beginPath();
		ctxn.moveTo(65,30);
		ctxn.lineTo(65,70);
	    ctxn.lineWidth = 8;
        ctxn.strokeStyle='white';
		ctxn.stroke();
			
	    ctxn.beginPath();
	    ctxn.moveTo(35,28);
		ctxn.lineTo(63,50);
		ctxn.lineTo(35,72);
		ctxn.closePath();
		ctxn.fillStyle = 'white';
		ctxn.fill();
		
     ///////////////lastM
        var lastM = document.getElementById('lastM');
	    var ctxl = lastM.getContext('2d');
	    ctxl.clearRect(0,0,100,100);
	    ctxl.beginPath();
		ctxl.arc(50,50,40,0,2*Math.PI);
	  
        ctxl.lineWidth = 6;
        ctxl.fillStyle=gradient;
		ctxl.fill();
		ctxl.beginPath();
		
		ctxl.moveTo(65,72);
		ctxl.lineTo(37,50);
		ctxl.lineTo(65,28);
		ctxl.closePath();
		ctxl.fillStyle = 'white';
		ctxl.fill();
      
        ctxl.beginPath();
		ctxl.moveTo(35,30);
		ctxl.lineTo(35,70);
	    ctxl.lineWidth = 8;
        ctxl.strokeStyle='white';
		ctxl.stroke();
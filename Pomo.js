$(document).ready(function(){
	// alert("hi");	
	var start=false,min=25,sec=00,timerVal=null,breakTime=5,sessionTime=25;
	var count=0,sessionStatus=true;

	// $("#clock")
	// bool hi;
	

	//We can easily add to change seconds only when sessionTime changes 


	$("#sessionPl").on('click',function(){

		$("#sessionTime").text(++sessionTime);
		min=sessionTime;
		sec=0;

		$("#clock").text(min + ":00");
	});


	$("#sessionMn").on('click',function(){
		if(min>1){
			$("#sessionTime").text(--sessionTime);
			min=sessionTime;
			sec=0;

			$("#clock").text(min + ":00");
		}
	});

	$("#breakPl").on('click',function(){
		$("#breakTime").text(++breakTime);
		
		if(!sessionStatus){
			min=breakTime;
			sec=0;
			$("#clock").text(min + ":00");
		}
	});

	$("#breakMn").on('click',function(){
		if(breakTime>1){
			$("#breakTime").text(--breakTime);
			
			if(!sessionStatus){
				min=breakTime;
				sec=0;
				$("#clock").text(min + ":00");
			}
		}
	});

	$("#session").on('click',function(){

		start= !start;
		// console.log(start);

		if(start){
				
			$("button").prop("disabled",true);

			if(timerVal !== null) return;
			console.time();
			timerVal=setInterval(timer,1000);

					
		}

		else{
			clearInterval(timerVal);
			timerVal=null;

			$("button").prop("disabled",false);
		}



	});


	function timer(){
		
		console.log("count",++count);
		console.timeEnd();
		if(sec == 0 && min == 0 ){

			sessionStatus = !sessionStatus;
			
			if(!sessionStatus){
				$("#clockHeading").text("Break!");
				breakTime=$("#breakTime").text();
				min=breakTime;	
			}

			else{
				$("#clockHeading").text("Session");
				min=sessionTime;
			}
			// alert("Session over!");
		}
		else if(sec == 0){
			min--;
			sec=59;
		}
		else
			sec--;


		$("#clock").text(min + ":" + ("0" + sec).slice(-2));

	}

});
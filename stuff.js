function sq(t1,len){
	 t1.fd(len);t1.rt(90);t1.fd(len);t1.rt(90);
	 t1.fd(len);t1.rt(90);t1.fd(len);t1.rt(90);
 }
 
 function cir(t1,len){
	 for(let j=0;j<360;j++){
	 t1.fd(len);t1.rt(1);
	 }
	 }
 
 function clear_Can(){
	 let canA=document.getElementById("can1");
	 let w=canA.width;
	 canA.width=w;//clears the screen.
 }
 
 function poly(t,len,n){
	 for(let j=0;j<n;j++){
	t.fd(len);t.rt(360/n); 
	 }
	  }
	  
 function func3(){
		  for(let j=1;j<npoly;j++){
			  poly(tp,10*j,5);
		  }
		  npoly++;
	  }
function funcLD(){
tLD.set1(300,300,-90);
funcLDbasic();tLD.rt(90);
funcLDbasic();tLD.rt(90);funcLDbasic();tLD.rt(90);
funcLDbasic();tLD.rt(90);
}	

function funcLDbasic(){
	tLD.c.strokeStyle="green";
	let x=[];let y=[];
	for(let j=1;j<21;j++){
	tLD.fd(20);x[j]=tLD.xpos();y[j]=tLD.ypos();	
	}
	tLD.bk(400);tLD.rt(90);
	for(let j=21;j<41;j++){
	tLD.fd(20);x[j]=tLD.xpos();y[j]=tLD.ypos();	
	}
	for(let j=1;j<21;j++){
	tLD.line(x[21-j],y[21-j],x[20+j],y[20+j]);	
	}
    tLD.bk(400);tLD.lt(90);
	tLD.c.strokeStyle="red";
	}	

function turtleTest(t){
	t.set1(300,300,0);
     t.poly(200,7);
}

function func2(){
	st=document.getElementById("inp1").value;
	 document.getElementById("par1").innerHTML="now side is "+st;
 cir(t,st/10);
 }

function func2A(){
	st=document.getElementById("slider1").value;
	 document.getElementById("par1").innerHTML="now side is "+st;
 cir(t,st/10);
 }

 
 function v(t,len,lev){
	 if(lev==0){}
	 else{
		 t.rt(40);
		 t.fd(len);v(t,len/2,lev-1);t.bk(len);
		 t.lt(80);
		 t.fd(len);v(t,len/2,lev-1);t.bk(len);
	     t.rt(40);
	 }
 }

	  
	  
	  

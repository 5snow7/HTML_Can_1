let len=60;let t,t2;//=new logo(200,200,0,"can1");
let st=60;let npoly=2;let tp;let tLD;let tv;

function func1(){
 t=new logo(300,100,0,"can1");
 t2=new logo(250,250,0,"can1");
 tp=new logo(50,250,-90,"can1");
 tLD=new logo(50,500,-90,"can1");
 tv=new logo(300,200,-90,"can1");
 sq(t,len);
 t.c.lineWidth=1;
t.c.strokeStyle="blue";
cir(t,2);
npoly=2;
t.line(20,20,200,200);
v(tv,100,3);
}
 

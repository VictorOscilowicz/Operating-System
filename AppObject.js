function App(n,m,s){

    //Declare your instance variables here.
    this.name=n;
    this.memory=m;
    this.state=s;

    //Declare the instance function open here.
    this.open = function(){
      this.state=active

    }
    //Declare the instance function sleep here.
    this.sleep = function(){
      if(this.state=active){
        this.state=sleep;
        this.memory=(this.memory)*(.5);
      }

    }
    //Declare the instance function active here.
    this.active = function (){
      if(this.state=sleep){
        this.state=active;
        this.memory=(this.memory*2);
      }

    }
    //Declare the instance function close here.
    this.close = function (){
      if(this.state!=null){
        this.state=null;
        this.memory=0;

      }

    }

}

//Use the constructor to create 4 App objects below.
var myApp = new App ("Gitbox",32,active);
var hisApp = new App ("iMovie",64,active);
var herApp = new App ("Github",18,sleep);


//Declare an array named appList, and place all 4 of your apps in that array.
//The order does not matter.
g

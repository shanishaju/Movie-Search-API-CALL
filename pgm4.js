class Restaurant{
     
    //property
    menu={
        chickenbiriyani:{name:'checkn biriyani',cuisine:'south asia',type:'non veg', available:'true'},
        Meals:{name:'nadan rise',cuisine:'south asia',type:' veg', available:'true'},
        Brosted:{name:'checkn ',cuisine:'south asia',type:'non veg', available:'true'},
        fishbiriyani:{name:'fish biriyani',cuisine:'south asia',type:'non veg', available:'true'}

    }

    //constructor
    // method

    add(){
        this.menu['checknfry']='fry','south','non-veg','true'
    }
    update(){
        this.menu['chickenbiriyani']+='nonveg'
    }
    delete(){
    delete menu['checken']
    }
}
const obj= new Restaurant()


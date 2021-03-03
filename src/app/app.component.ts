import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  array = [{
    name: 'parent1',
    id:1,
    status:true,
    childParent: [{
      parentId: 1,
      name1: 'parent1child1',
      id:1,
      status:true
    },{
      parentId: 1,
       name1: 'parent1child2',
      id:2,
      status:false
    }]
  } , {
     name: 'parent2',
    id:2,
    status:true,
    childParent: [{
      parentId:2,
      name1: 'parent2child3',
      id:1,
      status:true
    },{
      parentId:2,
       name1: 'parent2child4',
      id:2,
      status:false
  }]
  }]

  onCheckParent(checked) {
    if(checked.target.checked) {
      if(this.array && this.array.length > 0) {
        this.array.forEach((rec) => {
          rec.status = true;
        console.log('commimg')
          rec.childParent.forEach((child) => {
            child.status = true;
          })
        })
      }
    } else {
        if(this.array && this.array.length > 0) {
        this.array.forEach((rec) => {
          rec.status = false;
          rec.childParent.forEach((child) => {
            child.status = false;
          })
        })
      }
    }
  }

  parentChecked(event ,id: number) {
    if(event.target.checked) {
      if(this.array && this.array.length > 0) {
        this.array.forEach((parent) => {
          if(id == parent.id) {
            parent.childParent.forEach((child) => {
              child.status = true;
            })
          }
        })
      }
    } else {
        if(this.array && this.array.length > 0) {
        this.array.forEach((parent) => {
          if(id == parent.id) {
            parent.childParent.forEach((child) => {
              child.status = false;
            })
          }
        })
      }
    }
  }


  childChecked(event ,parentId , childId) {
    if(!event.target.checked) {
         if(this.array && this.array.length > 0) {
        this.array.forEach((parent) => {
          if(parentId == parent.id) {
            parent.status = false;
          }
        })
      }
    } else {
      this.checkAtleastOneChildChecked(parentId);
    }
  }


  checkAtleastOneChildChecked(parentId){
  if(this.array && this.array.length > 0) {
        this.array.forEach((parent) => {
          if(parentId == parent.id) {
          const isCh =  parent.childParent.every((rec) => rec.status === true)
          if(isCh) {
            parent.status = true;
          }
          }
        })
      }
  }
}
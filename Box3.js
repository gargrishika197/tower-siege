class Box3 {
    constructor(x, y, width, height) {
      var options = {
        'isStatic': false,
        'restitution':0.8,
        'friction':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display() {
      push();
      rectMode(CENTER);
      fill(241, 244, 144)
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
  }
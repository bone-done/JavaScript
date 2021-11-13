//Functional type---------------------------

const Robot = function() {
    this.work = function() {
        console.log("Я Robot – я просто працюю");
    }
}

const CoffeRobot = function() {
    Robot.call(this);
    this.work = function() {
        console.log("Я CoffeRobot – я варю каву");
    }
}

const RobotDancer = function() {
    Robot.call(this);
    this.work = function() {
        console.log("Я RobotDancer – я просто танцюю");
    }
}

const RobotCoocker = function() {
    Robot.call(this);
    this.work = function() {
        console.log("Я RobotCoocker – я просто готую");
    }
}

let robot = new Robot();
let coffeRobot = new CoffeRobot();
let robotDancer = new RobotDancer();
let robotCoocker = new RobotCoocker();

robot.work();
coffeRobot.work();
robotDancer.work();
robotCoocker.work();

let arr = [robot, coffeRobot, robotDancer, robotCoocker]
arr.forEach (e => e.work());
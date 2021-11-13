//Prototype type--------------------------------------

function Robot () {};
Robot.prototype.work = function () {
        console.log("Я Robot – я просто працюю");
}

function CoffeRobot () {};
CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.work = function () {
    console.log("Я CoffeRobot – я варю каву");
}

function RobotDancer () {};
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.work = function () {
    console.log("Я RobotDancer – я просто танцюю");
}

function RobotCoocker () {};
RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.work = function () {
    console.log("Я RobotCoocker – я просто готую");
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
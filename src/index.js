import EventBus from "./event-bus";

const event = new EventBus();

event.once("test", () => {
  console.log("Hello World");
});

event.emit("test");
event.emit("test");
event.emit("test");

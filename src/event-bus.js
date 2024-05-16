// ╔===========================================================╗
// ║                                                           ║
// ║   Event Bus                                               ║
// ║                                                           ║
// ║   on:     Creates and push events to the indexed map.     ║
// ║           Each event is a function to execute.            ║
// ║                                                           ║
// ║   once:   Creates and push events to the indext map       ║
// ║           with a function that will be executed only      ║
// ║           once.                                           ║
// ║                                                           ║
// ║   emit:   Executes the event by its name.                 ║
// ║                                                           ║
// ║   remove: Removes the event from the indexed map          ║
// ║           by its name.                                    ║
// ║                                                           ║
// ╚===========================================================╝

export default class EventBus {
  #events = {};

  on(name, callback = () => {}) {
    if (!name) {
      throw new Error("Event name is required");
    }

    this.#events[name] = callback;
  }

  once(name, callback = () => {}) {
    if (!name) {
      throw new Error("Event name is required");
    }
    this.#events[name] = () => {
      callback();
      this.remove(name);
    };
  }

  emit(name) {
    if (!name) {
      throw new Error("Event name is required");
    }
    if (!this.#events[name]) {
      throw new Error(`Event ${name} is not registered`);
    }
    this.#events[name]();
  }

  remove(name) {
    if (!name) {
      throw new Error("Event name is required");
    }

    delete this.#events[name];
  }
}

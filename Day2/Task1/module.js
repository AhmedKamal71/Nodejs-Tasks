// eventModule.js

class EventEmitter {
    constructor() {
      this.events = {};
    }
  
    on(eventName, listener) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(listener);
    }
  
    emit(eventName, ...args) {
      const eventListeners = this.events[eventName];
      if (eventListeners) {
        eventListeners.forEach(listener => {
          listener(...args);
        });
      }
    }
  }
  
  module.exports = EventEmitter;
  
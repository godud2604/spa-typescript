var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import AbstractView from './AbstractView.js';
export default class Todo extends AbstractView {
    constructor() {
        super();
        this.setTitle('Todo');
    }
    getHtml() {
        return __awaiter(this, void 0, void 0, function* () {
            return `
      <h1>Todo</h1>
      <p>
        Todo
      </p>
    `;
        });
    }
}
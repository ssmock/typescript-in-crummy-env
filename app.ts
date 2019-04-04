import {Thing} from './Thing'

export const app = {
    init() {
	const t = new Thing(123);
	t.doIt();
    }
}

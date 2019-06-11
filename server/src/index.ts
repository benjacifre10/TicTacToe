import { App } from './app';

const main = async () => {
    const app = new App(3000);//el parametro al ser opcional no es obligacion pasarlo
    await app.listen();
}

main();
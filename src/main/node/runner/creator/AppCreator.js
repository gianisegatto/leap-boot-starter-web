const AppBuilder = require("leap-web-express").AppBuilder;

const ROUTER = "routerbuilder";

class AppCreator {

    static create(express, components) {

        const routers = components.filter(component => component.name.toLowerCase().includes(ROUTER));

        const appBuilder = new AppBuilder(express());
        routers.forEach(router => appBuilder.addRouter(router.getInstance().build()));

        return appBuilder.build();
    }
}

module.exports = AppCreator;
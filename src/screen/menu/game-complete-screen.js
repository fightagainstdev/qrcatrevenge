class GameCompleteScreen extends MenuScreen {

    title = nomangle('恭喜');

    constructor(worldScreen) {
        super();

        this.worldScreen = worldScreen;

        this.addCommand(nomangle('难度: ') + G.difficulty.label);
        this.addCommand(nomangle('死亡次数: ') + G.runDeaths);
        this.addCommand(nomangle('时间: ') + formatTime(G.runTime));
        this.addCommand(nomangle('最佳时间: ') + formatTime(G.bestRunTime));
        this.addCommand('');
        this.addCommand('(9 LIVES MODE) UNLOCKED!');
        this.addCommand('');
        this.addCommand(
            (inputMode == INPUT_MODE_TOUCH ? nomangle('[点击]') : nomangle('按[空格键]')) + nomangle('关闭'),
            () => downKeys[32] || TOUCH_DOWN,
            () => this.resolve(),
        );

        const { world } = worldScreen;

        const camera = firstItem(worldScreen.world.category('camera'));
        camera.target = new Entity();
        camera.x = camera.target.x = 999;
        camera.y = camera.target.y = 999;

        for (const hud of world.category('hud')) {
            world.removeEntity(hud);
        }

        (async () => {
            while (true) {
                fireworks(
                    world,
                    {
                        x: camera.x + rnd(-CANVAS_WIDTH / 3, CANVAS_WIDTH / 3),
                        y: camera.y + rnd(-CANVAS_HEIGHT / 4, 0),
                    },
                    50,
                );

                await camera.interp('', 0, 0, rnd(0.25, 0.5));
            }
        })();
    }

    render() {
        ctx.globalAlpha = interpolate(0, 1, min(this.age - 1) / 0.3);
        super.render();
    }
}

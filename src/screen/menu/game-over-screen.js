class GameOverScreen extends MenuScreen {
    title = G.difficulty.maxDeaths < Infinity
        ? (G.difficulty.maxDeaths - G.runDeaths) + nomangle(' 条命剩余')
        : nomangle('猫灾难!');

    constructor() {
        super();
        this.addCommand(
            (inputMode == INPUT_MODE_TOUCH ? nomangle('[点击]') : nomangle('按[R]')) + nomangle('重试'),
            () => downKeys[82] || TOUCH_DOWN,
            () => this.resolve(),
        );
        if (inputMode == INPUT_MODE_KEYBOARD) {
            if (G.difficulty.maxDeaths == Infinity) {
                this.addDifficultyChangeCommand();
            }
            this.addMainMenuCommand();
        }
    }
}

class FullGameOverScreen extends MenuScreen {

    title = nomangle('9条命，0剩余');

    constructor() {
        super();
        this.addCommand(
            (inputMode == INPUT_MODE_TOUCH ? nomangle('[点击]') : nomangle('按[空格键]')) + nomangle('返回主菜单'),
            () => downKeys[32] || TOUCH_DOWN,
            () => this.resolve(),
        );
    }
}

class PauseScreen extends MenuScreen {

    title = nomangle('暂停');
    songVolume = 0.2;
    absorb = true;

    constructor() {
        super();
        this.addCommand(
            nomangle('按[ESC]继续'),
            () => downKeys[27],
            () => this.resolve(),
        );
        this.addDifficultyChangeCommand();
        this.addMainMenuCommand();
    }
}

(function() {
    if (!PIXI.utils.isWebGLSupported()) return;

    const fireworks = new FIREWORKS({
        full_screen: true,
        target_node: null,
        amount: 10
    });

    const is_mobile = 'ontouchend' in document;
    if (!is_mobile) {
        fireworks.start_burst();
        return;
    }
    fireworks.start_burst();
}());
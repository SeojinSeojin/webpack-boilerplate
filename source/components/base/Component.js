export default class Component extends HTMLElement {
    $target;
    $props;
    $state;
    constructor ($target, $props) {
        super()
        this.$props = $props
        this.$target = $target
        this._shadowRoot = null
        this.render();
        this.setEvent();
        this.setStyle();
    }
    template () { return ''; }
    render () {
        this._shadowRoot = this.attachShadow({mode:'open'})
        this._shadowRoot.innerHTML = this.template();
        const style = document.createElement("style")
        style.innerText = this.setStyle()
        this._shadowRoot.appendChild(style)
        console.log(this)
        this.$target.appendChild(this)
        this.initState();
    }
    setStyle () {}
    setEvent () {}
    initState () {}
    setState (newState) {
        this.$state = { ...this.$state, ...newState };
    }
}
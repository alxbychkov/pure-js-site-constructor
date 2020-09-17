import { TextBlock, TitleBlock } from "./block"

export class Sidebar {
    constructor(selector, update) {
        this.$el = document.querySelector(selector)
        this.update = update
        this.init()
    }
    init() {
        this.$el.addEventListener('submit', this.addBlock.bind(this))
        this.$el.innerHTML = this.template
    }
    get template() {
        return [
            block('text', 'Добавить текстовый блок'),
            block('title', 'Добавить заголовок')
        ].join('')
    }
    addBlock(event) {
        event.preventDefault()
        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value
        if (value !== '') {
            const Constructor = type === 'text' ? TextBlock : TitleBlock
            const newBlock = new Constructor(value, {styles})
            this.update(newBlock)
            event.target.value.value = ''
            event.target.styles.value = ''
        }
    }
}

function block(type, title) {
    return `
    <form name="${type}" class="mb-3">
        <h5 class="text-center">${title}</h5>
        <div class="mb-3">
            <input type="text" class="form-control" id="value" placeholder="Value">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="styles" placeholder="Styles">
        </div>
        <button type="submit" class="btn btn-info">Добавить</button>
    </form>
    `
}
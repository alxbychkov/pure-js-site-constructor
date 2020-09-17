import { Sidebar } from './classes/sidebar'
import { Site } from './classes/site'
import { model } from './model'
import './styles/style.scss'

const site = new Site('#site')
const updateCallback = newBlock => {
    model.push(newBlock)
    site.render(model)
}
new Sidebar('#panel', updateCallback)

site.render(model)

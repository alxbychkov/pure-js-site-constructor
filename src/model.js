import {ImageBlock, TextBlock, TextColumnBlock, TitleBlock} from './classes/block'
import { css } from './utils'
import image from './assets/img_1.jpg'

const text = `Вулкан Толбачик высотой 3682 метров образован двумя влуканами - Плоский Толбачик и Острый Толбачик. Извержение Плоского началось в ноябре 2012 и закончилось в сентябре 2013 года.`

export const model = [
    new TitleBlock('Камчатка: летнее путешествие на край земли', {
        tag: 'h1',
        styles: css({
            padding: '1rem',
            'text-align': 'center',
            'background': 'linear-gradient(to top left, powderblue, pink)'
        })
    }),
    new ImageBlock(image, {
        styles: css({
            display: 'flex',
            'justify-content': 'center'
        }),
        alt: 'background image',
        imageStyles: css({
            height: '400px',
            'object-fit': 'cover',
            'object-position': 'top'
        })
    }),
    new TextBlock(text, {
        styles: css({
            padding: '1rem',
            background: 'linear-gradient(to top left, #5a3f37, #2c7744)',
            color: '#fff'
        })
    }),
    new TextColumnBlock([
        `
        Июль<br>
        Это самый теплый месяц на Камчатке, особенно его вторая половина, температура может быть до +25, а в центральной части и до +35 градусов. В это время в горах и предгорьях обильно цветут субальпийские цветы, одни раньше, другие позже, сменяя друг друга как в калейдоскопе.`,
        `Август<br>
        В августе тоже достаточно тепло, хотя с середины месяца в горах уже возможны заморозки. Камчатская жимолость заканчивается уже в начале августа, зато поспевает множество других ягод. В этом месяце на Камчатке больше всего ягод и грибов, что особенно хорошо для пеших походов.`,
        `Сентябрь<br>
        Горная растительность окрашивается яркими оттенками от оранжевого до бордового. В это время еще много ягод, кроме того поспевает камчатская кустарниковая рябина – вкуснейшая ягода! А еще это еще лучший месяц для рыбалки на камчатских реках.`
    ],{
        styles: css({
            padding: '1rem',
            background: 'linear-gradient(#4da0b0, #d39d38)',
            color: '#fff'
        })
    })
]
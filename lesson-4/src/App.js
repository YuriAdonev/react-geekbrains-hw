import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import './app/styles/style.css';

import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';

class App extends Component {

    render() {
        const posts = [
            {
                title: "19 источников мотивации для программиста",
                text: "Книги — По специальности или мотивирующие. Из того, что читал недавно —  «The Pragmatic Programmer: From Journeyman to Master». Идеи из этой книги актуальны до сих пор. Перечитываю на английском, кстати. Также «Совершенный код» Стива Макконнелла. Это энциклопедия, в которой есть ответы почти на все вопросы. Помогают мотивирующие книги Карнеги.",
                date: "29 марта 2019"
            },
            {
                title: "Что есть, чтобы хорошо соображать",
                text: "Для эффективной работы или учебы стоит включить в рацион медленные углеводы — продукты с низким гликемическим индексом. Этот показатель отвечает за то, насколько быстро продукт поднимет уровень сахара (глюкозы) в крови. Чем больше времени на это уходит, тем длительнее чувство насыщения и тем «бесперебойнее» мозг снабжается энергией.",
                date: "27 марта 2019"
            },
            {
                title: "Где учить английский для гика: учебники, словари, порталы",
                text: "Технарям нужен английский — без него стать профи очень сложно. На английском пишется техническая документация, мануалы и профессиональная литература. На англоязычных технических форумах можно найти ответ практически на любой профессиональный вопрос. Это касается программистов и обычных юзеров, любителей технологий и полноправных изобретателей.",
                date: "25 марта 2019"
            }
        ];
        
        return (
            <Fragment>
                <Blog posts={posts} />
                <WelcomeModal />
            </Fragment>
        )
    }
}

ReactDOM.render( <App /> , document.getElementById('root'));
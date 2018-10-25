import './homework_11.scss';
import { tabsWidgetHandler } from './scripts/tabsWidgetHandler.js';

const firstTabText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.\
                      Enim consectetur ab, velit beatae neque fugit, vitae commodi\
                      sint quas dolorem amet voluptas delectus laudantium illum\
                      architecto voluptate. Praesentium, enim eius!';
const secondTabText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                       Voluptates, voluptas quo! Saepe, culpa atque officiis\
                       possimus ex impedit nostrum sint incidunt obcaecati.\
                       Obcaecati dolorem accusantium nostrum alias, sunt maiores velit.';
const thirdTabText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\
                      Accusamus ipsam molestias ea eos nulla explicabo blanditiis\
                      cumque nihil laborum nobis facere porro odio et mollitia totam,\
                      deleniti non doloribus officia.';
const tabsWidgetLorem = document.querySelector('#loremTabs');


tabsWidgetHandler(tabsWidgetLorem, [firstTabText, secondTabText, thirdTabText]);

import minimist from 'minimist';
import { task } from 'gulp';
import { createElement } from '../util/createElement'
import { createFragment } from '../util/createFragment'
import { createLame } from '../util/createLame'
import { createPage } from '../util/createPage'
import { createLayout } from '../util/createLayout'

export const generate = task('generate', async function() {

    let options = minimist(process.argv.slice(2));

    switch ( true ) {
        case options.element && typeof options.element === "string" :
            createElement(options);
            break;
        case options.fragment && typeof options.fragment === "string" :
            createFragment(options);
            break;
        case options.lame && typeof options.lame === "string" :
            createLame(options);
            break;
        case options.page && typeof options.page === "string" :
            createPage(options);
            break;
        case options.layout && typeof options.layout === "string" :
            createLayout(options);
            break;
        case options.javascript && typeof options.javascript === "string" :
            console.log('sorry javascript command not supported yet !');
            break;
        default:
            console.log("Please input a valid :~$ generate option")
    }
});
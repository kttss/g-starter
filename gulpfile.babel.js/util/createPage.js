import fs from "fs";
import file from "gulp-file";
import {dest} from "gulp";
import { configPath } from './configFiles'

export function createPage(options) {

    const { scss } = configPath;

    fs.readFile(scss, 'utf8', function (err, data) {

        if (err) {
            throw new Error('File error')
        }
        else {

            let config = JSON.parse(data);
            let elementName = options.page;

            if (config['pages'][elementName] === true) {

                console.log('File already exists !')

            } else {

                let content = '{% extends "../layouts/skeleton.twig" %}\n' +
                    '{% block title %}\n' +
                    options.page + '\n' +
                    '{% endblock %}\n' +
                    '{% block main %}\n' +
                    'page : ' + options.page +
                    '{% endblock %}';

                file(options.page + '.twig', content)
                    .pipe(dest('./src/views/pages'));


                config['pages'][elementName] = true;

                fs.writeFile(scss, JSON.stringify(config, null, 2), function (err) {
                    if (err) {
                        throw new Error('Cant write file');
                    } else {
                        console.log("Config written successfully");
                    }
                });

                console.log('Page ' + options.page + ' Successfully created')
            }
        }

    });
}
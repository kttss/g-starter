import fs from "fs";
import file from "gulp-file";
import {dest} from "gulp";
import { configPath } from './configFiles'

export function createLayout(options) {

    const { scss } = configPath;

    fs.readFile(scss, 'utf8', function (err, data) {

        if (err) {
            throw new Error('File error')
        }
        else {

            let config = JSON.parse(data);
            let elementName = options.layout;

            if (config['layouts'][elementName] === true) {

                console.log('File already exists !')

            } else {

                file('_' + options.layout + '.scss', '.' + options.layout + '\t{\n\n}')
                    .pipe(dest('./src/scss/layouts'));

                file(options.layout + '.twig', '<section class="layout ' + options.layout + '">\n' + options.layout + '\n' + '</section>')
                    .pipe(dest('./src/views/layouts'));


                config['layouts'][elementName] = true;

                fs.writeFile(scss, JSON.stringify(config, null, 2), function (err) {
                    if (err) {
                        throw new Error('Cant write file');
                    } else {
                        console.log("Config written successfully");
                    }
                });

                console.log('Layout ' + options.layout + ' Successfully created')
            }
        }

    });
}
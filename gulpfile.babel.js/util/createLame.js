import fs from "fs";
import file from "gulp-file";
import {dest} from "gulp";
import { configPath } from './configFiles'

export function createLame(options) {

    const { scss } = configPath;

    fs.readFile(scss, 'utf8', function (err, data) {

        if (err) {
            throw new Error('File error')
        }
        else {

            let config = JSON.parse(data);
            let elementName = options.lame;

            if (config['lames'][elementName] === true) {

                console.log('File already exists !')

            } else {

                file('_' + options.lame + '.scss', '.' + options.lame + '\t{\n\n}')
                    .pipe(dest('./src/scss/lames'));

                file(options.lame + '.twig', '<section class="lame ' + options.lame + '">\n' + options.lame + '\n' + '</section>')
                    .pipe(dest('./src/views/lames'));


                config['lames'][elementName] = true;

                fs.writeFile(scss, JSON.stringify(config, null, 2), function (err) {
                    if (err) {
                        throw new Error('Cant write file');
                    } else {
                        console.log("Config written successfully");
                    }
                });

                console.log('Lame ' + options.lame + ' Successfully created')
            }
        }

    });
}
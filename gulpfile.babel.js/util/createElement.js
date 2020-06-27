import fs from "fs";
import file from "gulp-file";
import {dest} from "gulp";
import { configPath } from './configFiles'

export function createElement(options) {

    const { scss } = configPath;

    fs.readFile(scss, 'utf8', function (err, data) {

        if (err) {
            throw new Error('File error')
        }
        else {

            let config = JSON.parse(data);
            let elementName = options.element;

            if (config['elements'][elementName] === true) {

                console.log('File already exists !')

            } else {

                file('_' + options.element + '.scss', '.' + options.element + '\t{\n\n}')
                    .pipe(dest('./src/scss/elements'));

                file(options.element + '.twig', options.element)
                    .pipe(dest('./src/views/elements'));

                config['elements'][elementName] = true;

                fs.writeFile(scss, JSON.stringify(config, null, 2), function (err) {
                    if (err) {
                        throw new Error('Cant write file');
                    } else {
                        console.log("Config written successfully");
                    }
                });

                console.log('Element ' + options.element + ' Successfully created')
            }
        }

    });
}
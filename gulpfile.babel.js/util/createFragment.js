import fs from "fs";
import file from "gulp-file";
import {dest} from "gulp";
import { configPath } from './configFiles'

export function createFragment(options) {

    const { scss } = configPath;

    fs.readFile(scss, 'utf8', function (err, data) {

        if (err) {
            throw new Error('File error')
        }
        else {

            let config = JSON.parse(data);
            let elementName = options.fragment;

            if (config['fragments'][elementName] === true) {

                console.log('File already exists !')

            } else {

                file('_' + options.fragment + '.scss', '.' + options.fragment + '\t{\n\n}')
                    .pipe(dest('./src/scss/fragments'));

                file(options.fragment + '.twig', '<div class="block ' + options.fragment + '">\n' + options.fragment + '\n' + '</div>')
                    .pipe(dest('./src/views/fragments'));

                config['fragments'][elementName] = true;

                fs.writeFile(scss, JSON.stringify(config, null, 2), function (err) {
                    if (err) {
                        throw new Error('Cant write file');
                    } else {
                        console.log("Config written successfully");
                    }
                });

                console.log('Fragment ' + options.fragment + ' Successfully created')
            }
        }

    });
}
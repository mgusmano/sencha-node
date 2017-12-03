var chalk = require('chalk');
exports.infoText = `Run Sencha Cmd's from a Node tool

Examples:
${chalk.green('*')} sencha-node generate app --sdk '/Users/marcgusmano/aaExt/ext-6.5.2' --template 'universalmodern' MyApp ./MyApp
${chalk.green('*')} sencha-node gen app -s '/Users/marcgusmano/aaExt/ext-6.5.2' -t 'universalmodern' MyApp ./MyApp
${chalk.green('*')} sencha-node g a -s '/Users/marcgusmano/aaExt/ext-6.5.2' -t 'universalmodern' MyApp ./MyApp
${chalk.green('*')} sencha-node generate viewpackage settings

Commands Available
${chalk.green('*')} sencha-node generate app (name) (path)
${chalk.green('*')} sencha-node generate viewpackage (view)

Commands Options
${chalk.green('*')} generate, gen, g
${chalk.green('*')} application, app, a
${chalk.green('*')} viewpackage, vp

Options Available
${chalk.green('*')} --builds -b (--builds "desktop:modern,theme-material;phone:modern,theme-material;" is default)
${chalk.green('*')} --debug -d (shows debug messages)
${chalk.green('*')} --force (deletes application, if present, before generate app (BE CAREFUL WITH THIS!))
${chalk.green('*')} --sdk -s (path to Ext JS sdk - currently required for gen app, no running from sdk folder...)
${chalk.green('*')} --template -t (name of app template to use - only one currently - universalmodern)
`
exports.finishText = function finishText(ApplicationDir, viewpackage, watch) { 
	return`
${chalk.green('********************************************')}

To add a View Package to the desktop build:

${viewpackage}

To test the application, type the following: 
(note: you can change port number and 'desktop' to 'phone')

${watch}

${chalk.green('********************************************')}
`
}

exports.menuText = function menuText(menuPath, item) { 
	return`
${chalk.green('********************************************')}

Add the following line to ${menuPath}menu.json:

${item}

${chalk.green('********************************************')}
`
}
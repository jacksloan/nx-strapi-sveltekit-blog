import {
  formatFiles,
  generateFiles,
  installPackagesTask,
  joinPathFragments,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import runCommands from '@nrwl/workspace/src/generators/run-commands/run-commands';

export default async function (tree: Tree, schema: any) {
  console.log('Creating strapi api library');
  await libraryGenerator(tree, { name: schema.name });
  const libraryRoot = readProjectConfiguration(tree, schema.name).root;
  const inputFile = joinPathFragments(schema.openapi);
  const output = joinPathFragments(libraryRoot, 'src', 'lib', 'codegen');

  console.log({
    libraryRoot,
    inputFile,
    output,
  });

  generateFiles(
    tree, // the virtual file system
    joinPathFragments(__dirname, './files'), // path to the file templates
    libraryRoot, // destination path of the files
    schema // config object to replace variable in file templates
  );

  runCommands(tree, {
    command: `npx openapi-typescript-codegen -i ${inputFile} -o ${output}`,
    name: 'x',
    project: schema.name,
  });

  await formatFiles(tree);

  return () => {
    installPackagesTask(tree);
  };
}

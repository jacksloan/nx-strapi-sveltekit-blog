import {
  formatFiles,
  generateFiles,
  getWorkspacePath,
  installPackagesTask,
  joinPathFragments,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { execSync } from 'child_process';

export default async function (tree: Tree, schema: any) {
  console.log('Creating strapi api library');
  const root = getWorkspacePath(tree);
  const libraryRoot = readProjectConfiguration(tree, schema.name).root;
  const inputFile = joinPathFragments(root, schema.openapi);
  const output = joinPathFragments(root, libraryRoot, 'src', 'lib', 'codegen');

  console.log({
    root,
    libraryRoot,
    inputFile,
    output,
  });

  await libraryGenerator(tree, { name: schema.name });
  generateFiles(
    tree, // the virtual file system
    joinPathFragments(__dirname, './files'), // path to the file templates
    libraryRoot, // destination path of the files
    schema // config object to replace variable in file templates
  );

  execSync(`npx openapi-typescript-codegen -i ${inputFile} -o ${output}`);

  await formatFiles(tree);

  return () => {
    installPackagesTask(tree);
  };
}

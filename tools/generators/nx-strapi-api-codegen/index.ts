import {
  Tree,
  formatFiles,
  installPackagesTask,
  addDependenciesToPackageJson,
  generateFiles,
  getProjects,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (tree: Tree, schema: any) {
  console.log('Creating strapi api library');
  console.log(schema);

  await libraryGenerator(tree, { name: schema.name });

  addDependenciesToPackageJson(
    tree,
    {},
    { 'openapi-typescript-codegen': '^0.12.3' }
  );
  const projects = getProjects(tree);
  const libraryRoot = projects.get(schema.name).sourceRoot;
  generateFiles(tree, libraryRoot, '', { tmpl: '', name: 'myscript' });

  await formatFiles(tree);

  return () => {
    installPackagesTask(tree);
  };
}
